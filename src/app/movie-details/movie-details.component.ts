import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiService } from '../movie-api.service';
import { FilmData } from './movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  id: number | null = null;
  movieData : FilmData;
  characters;
  loading = true

  constructor(private route: ActivatedRoute, private service: MovieApiService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.queryParams['id'];
    if(this.id){
      this.service.getMovieDetails(this.id).subscribe(data =>{
        this.movieData = data
        this.characters = data.characters
        this.loading = false
      })
    }
  }
}
