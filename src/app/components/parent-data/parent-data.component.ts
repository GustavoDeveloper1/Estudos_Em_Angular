import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {

  @Input() userData!: {
    userName:string,
    email:string,
    roler:string
  };
  constructor() { }

  ngOnInit(): void {
  }

}
