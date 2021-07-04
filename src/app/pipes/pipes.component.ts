import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  placa : string = '';
  telBr : string = '';
  telUs : string = '';
  nomeABNT : string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
