import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ColorStoreService {
  private _color: BehaviorSubject<string> = new BehaviorSubject<string>("regular");
  public color$ : Observable<string> = this._color.asObservable();

  get():Observable<string>{
    return this.color$;
  }
  set(color:string){
    this._color.next(color);
  }
}
