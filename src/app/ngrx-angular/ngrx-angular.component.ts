import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-ngrx-angular',
  templateUrl: './ngrx-angular.component.html',
  styleUrls: ['./ngrx-angular.component.css']
})
export class NgrxAngularComponent implements OnInit {

  constructor(private routerExtensions:RouterExtensions) { }

  ngOnInit() {
  }
  goBack() {
    this.routerExtensions.backToPreviousPage();
}
}
