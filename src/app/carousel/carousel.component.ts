import { Component } from '@angular/core';
import { MovieApiService } from '../movie-api.service';
import { Movie, MovieData } from './movie';
import { Router } from '@angular/router';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  movies: any = [
  ]
  carouselData: MovieData[] = []
  initialIndex: number = 0;
  finalIndex: number = 3
  loading = true;

  constructor(private movieApiService: MovieApiService, private router: Router) { }

  ngOnInit() {
    this.movieApiService.getMovies()
      .subscribe(data => {
        this.parseMoviesData(data)
        this.loading = false
      });
  }

  private parseMoviesData(data: any) {
    if (data?.results) {
      this.movies = data.results.map((m: Movie) => {
        return {
          url: `../assets/episode_${m.episode_id}.jpg`,
          movieUrl: m.url,
          name: m.title,
          resealeData: m.release_date,
          director: m.director
        }
      });
      this.carouselData = this.movies.slice(this.initialIndex, this.finalIndex);
    }
  }

  public next() {
    const nextThreeElements = this.getNextThreeElements(this.movies, this.finalIndex);
    this.carouselData = nextThreeElements;

  }
  getNextThreeElements(arr: any[], startIndex: number): any[] {
    return arr.slice(startIndex, startIndex + 3);
  }

  public prev() {
    const nextThreeElements = this.getPrevThreeElements(this.movies, this.finalIndex);
    this.carouselData = nextThreeElements;
  }

  getPrevThreeElements(arr: any[], startIndex: number) {
    return arr.slice(startIndex - 3, startIndex);
  }

  handleCardClick(movie: MovieData) {
    const pattern = /\/(\d+)\//;
    const match = movie.movieUrl.match(pattern);
    const id = match ? parseInt(match[1], 10) : null;
    if (id !== null) {
      this.router.navigate(['/movie'], { queryParams: { id } });
    }
  }
}
