import { Component } from '@angular/core';
import { FilmesService } from './filmes.service';

@Component({
    selector: 'filmes',
    templateUrl : './filmes.component.html'
})
export class FilmesComponent{
    titulo:string;
    filmes:string[];
    
    constructor(filmesService:FilmesService){
        this.titulo = 'Lista de filmes';
        this.filmes = filmesService.getFilmes();
    }
}