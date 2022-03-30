import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ToggleShowService {
  private showAddMovie:boolean = false;
  private subject = new Subject<any>();
  constructor() { }

  toggleAddMovie():void{
    this.showAddMovie = !this.showAddMovie;
    this.subject.next(this.showAddMovie);
  }

  onToggle():Observable<any>{
    return this.subject.asObservable();
  }
}
