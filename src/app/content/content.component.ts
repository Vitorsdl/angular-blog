import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

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
