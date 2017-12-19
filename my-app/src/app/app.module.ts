import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FilmesComponent } from './filmes.component';
import {FilmesService} from './filmes.service';
@NgModule({
  declarations: [AppComponent, FilmesComponent],
  imports: [BrowserModule],
  providers: [FilmesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
