import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // dados da interpolação
  a:number = 1;
  b:number = 2;
  soma() {
    return this.a + this.b;
  }
  //dados da amarracao
  altura:string = '150px';
  largura:string = '150px';
  cor:string = 'crimson';
  desabilitado:boolean = true;
  deuErro:boolean = true;
  //dados do evento
  //1) click
  n:number = 0;
  estouro:boolean = false;
  click(nome:any):void{
    if(this.n >= 10)
      this.estouro = true;
    else
      this.n++;
      console.log(nome);
  }
  zerar():void{
    this.n=0;
    this.estouro = false;
  }
  //2)mouse over e mouse out
  ativado:boolean = false;
  ativa():void{
    this.ativado = true;
  }
  desativa():void{
    this.ativado = false;
  }
}
