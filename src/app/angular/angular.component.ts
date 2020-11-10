import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "ns-angular",
    templateUrl: "./angular.component.html",
    styleUrls: ["./angular.component.css"],
})
export class AngularComponent implements OnInit {
    constructor(
        private router: Router,
        public routerExtensions: RouterExtensions
    ) {}

    ngOnInit() {}
    nedenAngular() {
        this.router.navigate(["neden-angular"]);
    }
    angularCli(){
        this.router.navigate(["angular-cli"]);
    }
    angularOzellikler(){
        this.router.navigate(["angular-ozellikler"]);
    }
    componentCalistir(){
        this.router.navigate(["angular-component"]);

    }
    moduleCalistir(){
        this.router.navigate(["angular-module"]);

    }
    servisCalistir(){
        this.router.navigate(["angular-servis"]);

    }
    routingCalistir(){
        this.router.navigate(["angular-routing"]);

    }
    goBack() {
        this.routerExtensions.backToPreviousPage();
    }
}
