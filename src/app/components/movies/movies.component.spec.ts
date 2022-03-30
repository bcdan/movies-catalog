import { ComponentFixture, TestBed} from '@angular/core/testing';
import {MoviesComponent} from './movies.component';
import {Movie} from "../../Movie";
import {MovieService} from "../../services/movie.service";
import { Observable, of} from "rxjs";
import {MOVIES} from "../../mock-movies";

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;
  let movieService : MovieService;

  beforeEach(()=>{
    let movieServiceStub = {
      getMovies(): Observable<Movie[]> {
        return of(MOVIES);
      },
      deleteMovie(movie:Movie):Observable<Movie>{
        return of(movie);
      },
      updateMovieSeen(movie:Movie):Observable<Movie>{
        movie.seen = !movie.seen;
        return of(movie);
      }


    }
    TestBed.configureTestingModule({
      declarations:[MoviesComponent],
      providers:[{provide:MovieService,useValue:movieServiceStub}],
    });

    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    movieService = TestBed.inject(MovieService);
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component.movies.length).toBeGreaterThan(0);
    expect(component).toBeTruthy();
  });

  it('should delete',()=>{
    let movieToDelete:Movie = MOVIES[0];
    expect(component.movies.includes(movieToDelete)).toBeTruthy();
    component.deleteMovie(movieToDelete)
    expect(component.movies.includes(movieToDelete)).toBeFalse();
  })

  it('should update movie seen',()=>{
    let movieToToggle:Movie = MOVIES[0];
    expect(component.movies[0].seen).toBeTruthy();
    component.toggleCheck(movieToToggle);
    expect(component.movies[0].seen).toBeFalse();
  })


});
