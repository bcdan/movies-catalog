import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddMovieComponent } from './add-movie.component';
import {Movie} from '../../Movie'

describe('AddMovieComponent', () => {
  let component: AddMovieComponent;
  let fixture: ComponentFixture<AddMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Test the add movie submit with values',()=>{
    component.showAddMovie = true;
    const mockMovie:Movie = {name:'Test Movie',imdbLink:'IMDB test link',seen:false};
    component.name=mockMovie.name;
    component.imdbLink=mockMovie.imdbLink;
    fixture.whenStable().then(()=>{
      spyOn(component.onAddMovie,'emit')
      component.onSubmit();
      fixture.detectChanges()
      expect(component.onAddMovie.emit).toHaveBeenCalledWith(mockMovie);
    })
  })

  it('Test add movie form with empty fields',()=>{
    spyOn(window,'alert');
    component.onSubmit();
    expect(window.alert).toHaveBeenCalledWith("Please add a name");
  })


});


