import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
/** eventos component*/
export class EventosComponent implements OnInit {
  /** eventos ctor */
  public eventos: any;
  constructor(private http: HttpClient) {
    
  }
  ngOnInit(): void {
    this.getEventos();
  }
  public getEventos(): void {
    this.http.get('https://localhost:44339/api/eventos').subscribe(
      response => this.eventos = response,
      error => console.log(error));
  }
    //this.eventos = [
    //  {
    //    Tema: "Angular 11",
    //    Local: "Belo Horizonte"
    //  },
    //  {
    //    Tema: ".NET 5",
    //    Local: "São Paulo"
    //  },
    //  {
    //    Tema: "Angular e suas novidades",
    //    Local: "Bahia"
    //  }
    //];
  }

