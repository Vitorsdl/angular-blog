import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extra-content',
  templateUrl: './extra-content.component.html',
  styleUrls: ['./extra-content.component.css']
})
export class ExtraContentComponent implements OnInit {

  @Input()
  foto:string =""
  @Input()
  titulo:string=""
  @Input()
  descricao:string=""

  constructor() { }

  ngOnInit(): void {
  }

}
