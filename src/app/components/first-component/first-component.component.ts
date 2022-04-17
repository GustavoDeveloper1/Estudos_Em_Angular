import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  Pessoa  =  {
    nome:'gustavo',
    idade: 20,
    cpf: '069.675.841-54'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
