import { NgModule } from '@angular/core';
import { BrowserModule , Title } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MoviesComponent } from './components/movies/movies.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { MovieComponent } from './components/movie/movie.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzCardModule } from 'ng-zorro-antd/card';
import {NzInputModule} from "ng-zorro-antd/input";
import { ColorPickerComponent } from './components/color-picker/color-picker.component';






registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    HeaderComponent,
    ButtonComponent,
    MovieComponent,
    AddMovieComponent,
    ColorPickerComponent,
  ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        NzButtonModule,
        NzIconModule,
        NzCheckboxModule,
        NzFormModule,
        NzDropDownModule,
        NzCardModule,
        NzInputModule
    ],
  providers: [{ provide: NZ_I18N, useValue: en_US  },Title,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
