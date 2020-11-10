import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-angular-cli',
  templateUrl: './angular-cli.component.html',
  styleUrls: ['./angular-cli.component.css']
})
export class AngularCliComponent implements OnInit {

  constructor(private routerExtensions:RouterExtensions) { }

  ngOnInit() {
  }
  goBack() {
    this.routerExtensions.backToPreviousPage();
}
}
