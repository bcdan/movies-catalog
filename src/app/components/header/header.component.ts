import { Component, OnInit } from '@angular/core';
import { ToggleShowService } from 'src/app/services/toggle-show.service';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Movies Catalog App';
  showAddMovie? : boolean;
  addMovieSubscription? : Subscription;

  constructor(private toggleShowService: ToggleShowService, private titleService:Title) {
    this.addMovieSubscription = this.toggleShowService.onToggle().subscribe(value=>this.showAddMovie = value);
    this.titleService.setTitle("movies-catalog");
  }

  ngOnInit(): void {
  }
  toggleAddMovie(){
    this.toggleShowService.toggleAddMovie();
  }


}
