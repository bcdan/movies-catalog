import { Component, OnInit } from '@angular/core';
import {ColorStoreService} from "../../services/store/color-store.service";

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  private color:string = "" ;

  constructor(private colorStore:ColorStoreService) {
    colorStore.get().subscribe(obs=>this.color=obs);
  }

  ngOnInit(): void {
  }

  setColor(color:string){
    this.colorStore.set(color);
  }

}
