import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-neden-angular',
  templateUrl: './neden-angular.component.html',
  styleUrls: ['./neden-angular.component.css']
})
export class NedenAngularComponent implements OnInit {

  constructor( private routerExtensions:RouterExtensions) { }

  ngOnInit() {
  }
  goBack() {
    this.routerExtensions.backToPreviousPage();
}
}
