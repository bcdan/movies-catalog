import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import {Movie} from '../../Movie';
import { ToggleShowService } from 'src/app/services/toggle-show.service';
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  @Output() onAddMovie: EventEmitter<Movie> = new EventEmitter();
  name : string = "";
  imdbLink : string = "";
  showAddMovie?:boolean;
  subscription:Subscription;

  constructor(private toggleShowService:ToggleShowService) {
    this.subscription = this.toggleShowService.onToggle().subscribe(value=>this.showAddMovie = value);
   }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.name || this.name.length == 0){
      alert("Please add a name");
      return;
    }
    const newMovie = {
      name: this.name,
      imdbLink : this.imdbLink ,
      seen:false
    }
    this.onAddMovie.emit(newMovie);
    this.name = "";
    this.imdbLink = "";

  }

}
