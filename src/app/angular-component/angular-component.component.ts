import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-angular-component',
  templateUrl: './angular-component.component.html',
  styleUrls: ['./angular-component.component.css']
})
export class AngularComponentComponent implements OnInit {

  constructor(private routerExtensions:RouterExtensions) { }

  ngOnInit() {
  }
  goBack() {
    this.routerExtensions.backToPreviousPage();
}
}
