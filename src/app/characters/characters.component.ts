import { Component } from '@angular/core';
import { MovieApiService } from '../movie-api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {
  characters = []
  characterData = []
  initialIndex = 0
  nextPage: string | undefined;
  previousPage: string | undefined;
  loading = true

  constructor(private movieApiService: MovieApiService) { }

  ngOnInit() {
    this.movieApiService.getCharacters()
      .subscribe(data => {
        this.parseCharacterData(data)
        this.loading = false
      });
  }

  parseCharacterData(data: any) {
    this.initialIndex = 0;
    if (data?.results) {
      this.nextPage = data.next
      this.previousPage = data.previous

      this.characters = data.results.map(c => {
        return {
          name: c.name,
          height: c.height,
          birth: c.birth_year
        }
      });
      this.characterData = this.characters.slice(this.initialIndex, 3);
    }
  }

  public next() {
    this.initialIndex += 3;
    const nextThreeElements = this.getNextThreeElements(this.characters, this.initialIndex);
    if (nextThreeElements.length < 3) {
      console.log(nextThreeElements)
      this.callNextCharacters(this.nextPage);
    } else {
      this.characterData = nextThreeElements;
    }
  }

  callNextCharacters(url:string) {
    this.movieApiService.getCharacters(url).subscribe(data => {
      this.parseCharacterData(data)
    });

  }

  getNextThreeElements(arr: any[], startIndex: number): any[] {
    return arr.slice(startIndex, startIndex + 3);
  }

  public prev() {
    this.initialIndex -= 3;
    const prevThreeElements = this.getPrevThreeElements(this.characters, this.initialIndex);
    if (prevThreeElements.length < 3) {
      this.callNextCharacters(this.previousPage);
    } else {
      this.characterData = prevThreeElements;
    }
    this.characterData = prevThreeElements;
  }

  getPrevThreeElements(arr: any[], startIndex: number) {
    return arr.slice(startIndex - 3, startIndex);
  }
}
