import { Component, Input } from '@angular/core';
import { forkJoin } from 'rxjs';
import { MovieApiService } from '../movie-api.service';

@Component({
  selector: 'app-movie-characters',
  templateUrl: './movie-character.component.html',
  styleUrls: ['./movie-character.component.css']
})
export class MovieCharacterComponent {
  @Input() charactersUrls;
  characters = []
  characterData = []
  initialIndex = 0
  nextPage: string | undefined;
  previousPage: string | undefined;
  loading = true;

  constructor(private movieApiService: MovieApiService) { }

  ngOnInit() {
    const characterUrls = this.charactersUrls;
    const characterObservables = characterUrls.map((url) =>
      this.movieApiService.getCharacterData(url)    
  );

  forkJoin(characterObservables).subscribe((chars:any) => {
    this.parseCharacterData(chars);
    this.loading = false
  });

  }

  parseCharacterData(data: any) {
    this.initialIndex = 0;
      this.characters = data.map(c => {
        return {
          name: c.name,
          height: c.height,
          birth: c.birth_year
        }
      });
      this.characterData = this.characters.slice(this.initialIndex, 3);
  }

  public next() {
    this.initialIndex += 3;
    const nextThreeElements = this.getNextThreeElements(this.characters, this.initialIndex);
    this.characterData = nextThreeElements;
  }


  getNextThreeElements(arr: any[], startIndex: number): any[] {
    return arr.slice(startIndex, startIndex + 3);
  }

  public prev() {
    this.initialIndex -= 3;
    const prevThreeElements = this.getPrevThreeElements(this.characters, this.initialIndex);
    this.characterData = prevThreeElements;
  }

  getPrevThreeElements(arr: any[], startIndex: number) {
    return arr.slice(startIndex - 3, startIndex);
  }
}
