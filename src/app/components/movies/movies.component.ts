import {Component, OnInit} from '@angular/core';
import {Movie} from '../../Movie';
import {MovieService} from '../../services/movie.service'
import {ColorStoreService} from "../../services/store/color-store.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  colorStyle:string = "";
  constructor(private movieService: MovieService , private colorStoreService:ColorStoreService) {
  }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((movies) => this.movies = movies);
    this.colorStoreService.get().subscribe(obs=>this.colorStyle = obs);
  }

  deleteMovie(movie: Movie) {
    this.movieService.deleteMovie(movie)
      .subscribe(
        () => this.movies = this.movies.filter(m => m.id !== movie.id));
  }

  toggleCheck(movie: Movie) {
    this.movieService.updateMovieSeen(movie).subscribe();
  }

  addMovie(movie: Movie) {
    this.movieService.addMovie(movie).subscribe((movie) => this.movies.push(movie));
  }





}
