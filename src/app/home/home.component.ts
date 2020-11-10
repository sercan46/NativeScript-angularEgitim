import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { Router } from "@angular/router";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"],

})
export class HomeComponent implements OnInit {

    constructor(public router:Router,) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
    angularShow(){
        this.router.navigate(["angular"]);

    }
    angularHaber(){
        this.router.navigate(["angular-haber"])
    }
    polymerAc(){
        this.router.navigate(["polymer"])

    }
    ngrxAc(){
        this.router.navigate(["angular-ngrx"])

    }
    nativeAc(){
        this.router.navigate(["nativescript"])
    }
}
