import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  private baseUrl = 'https://swapi.dev/api';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<any> {
    const url = this.baseUrl + '/films'
    return this.http.get<any>(url);
  }

  getCharacters(nextPage?:string): Observable<any> {
    let url = this.baseUrl + '/people'
    if(nextPage) {
      url = nextPage
    }
    return this.http.get<any>(url);
  }
  
  getMovieDetails(movieId: number): Observable<any>  {
    let url = this.baseUrl + '/films/' + movieId
    return this.http.get<any>(url);
  }

  getCharacterData(characterUrl: string): Observable<any> {
    return this.http.get(characterUrl);
  }
  
}
