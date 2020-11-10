import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-nativescript',
  templateUrl: './nativescript.component.html',
  styleUrls: ['./nativescript.component.css']
})
export class NativescriptComponent implements OnInit {

  constructor(private routerExtensions:RouterExtensions) { }

  ngOnInit() {
  }
  goBack() {
    this.routerExtensions.backToPreviousPage();
}
}
