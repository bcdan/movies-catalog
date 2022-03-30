import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = "movies-catalog";
  public constructor(private titleService: Title) {}

  public setTitle(newTitle: string) {
      this.titleService.setTitle(newTitle);
    }
}
