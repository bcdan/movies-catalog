import { Injectable } from '@angular/core';
import {Movie} from '../Movie';
import { Observable} from 'rxjs';
import {HttpClient , HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiURL = 'http://localhost:5000/movies';
  constructor(private http:HttpClient) { }

  getMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.apiURL);
  }
  deleteMovie(movie:Movie) : Observable<Movie> {
    const url = `${this.apiURL}/${movie.id}`;
    return this.http.delete<Movie>(url);
  }
  updateMovieSeen(movie:Movie) : Observable<Movie>{
    const url = `${this.apiURL}/${movie.id}`;
    return this.http.put<Movie>(url,movie,httpOptions);
  }
  addMovie(movie:Movie) : Observable<Movie>{
    return this.http.post<Movie>(this.apiURL,movie,httpOptions);
  }

}
