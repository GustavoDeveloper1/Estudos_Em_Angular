import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditionals-ng',
  templateUrl: './conditionals-ng.component.html',
  styleUrls: ['./conditionals-ng.component.css']
})
export class ConditionalsNgComponent implements OnInit {

  canShow: boolean = false;
  name = 'Pedro'
  constructor() { }

  ngOnInit(): void {
  }

  showCanShow() {
    if (this.canShow === false) {
      this.canShow = true;
    }
    else if (this.canShow = true) {
      this.canShow = false;
    }
  }
}
