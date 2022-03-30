import { Component, OnInit , Input, Output ,EventEmitter} from '@angular/core';
import {Movie} from '../../Movie';
import {ColorStoreService} from "../../services/store/color-store.service";
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie = {id:0,name:"",imdbLink:"",seen:false};
  @Output() onDeleteMovie : EventEmitter<Movie> = new EventEmitter();
  @Output() onToggleCheck : EventEmitter<Movie> = new EventEmitter();
  colorStyle:string = "";
  constructor(private colorStoreService:ColorStoreService) {
    colorStoreService.get().subscribe(obs=>this.colorStyle=obs);
  }

  ngOnInit(): void {
  }
  onDelete(movie:Movie){
    this.onDeleteMovie.emit(movie);
  }
  onToggle(movie:Movie){
    this.onToggleCheck.emit(movie);
  }

}
