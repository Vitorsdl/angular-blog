import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-content',
  templateUrl: './sub-content.component.html',
  styleUrls: ['./sub-content.component.css']
})
export class SubContentComponent implements OnInit {

  @Input()
  foto:string =""
  @Input()
  titulo:string=""

  constructor() { }

  ngOnInit(): void {
  }

}
