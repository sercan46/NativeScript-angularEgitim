import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import {
    DrawerTransitionBase,
    RadSideDrawer,
    SlideInOnTopTransition,
} from "nativescript-ui-sidedrawer";
import { filter } from "rxjs/operators";
import * as app from "tns-core-modules/application";
import * as utils from "tns-core-modules/utils/utils";
import * as SocialShare from "nativescript-social-share";
import Theme from "@nativescript/theme";


@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})
export class AppComponent implements OnInit {
    private _activatedUrl: string;
    private _sideDrawerTransition: DrawerTransitionBase;

    constructor(
        private router: Router,
        private routerExtensions: RouterExtensions
    ) {
        // Use the component constructor to inject services.
    }

    ngOnInit(): void {
        this._activatedUrl = "/home";
        this._sideDrawerTransition = new SlideInOnTopTransition();

        this.router.events
            .pipe(filter((event: any) => event instanceof NavigationEnd))
            .subscribe(
                (event: NavigationEnd) =>
                    (this._activatedUrl = event.urlAfterRedirects)
            );
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    isComponentSelected(url: string): boolean {
        return this._activatedUrl === url;
    }

    onNavItemTap(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade",
            },
        });

        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();
    }
    mailGonder() {
        var openApp = require("nativescript-open-app").openApp;
        var utils = require("utils/utils");

        var installed = openApp("com.google.android.gm", false);

        if (!installed) {
            utils.openUrl("com.google.android.gm");
        }
    }
    takipEt(){
        utils.openUrl("https://www.instagram.com/sercanozbek/")

    }
    paylas(){
        SocialShare.shareUrl("https://www.sercanozbek.com/", "Sercan Özbek");

    }
    changeMode() {
        console.log("console.girdi")
        console.log("thieme",Theme.getMode())
        Theme.setMode(
            Theme.getMode() === Theme.Light ? Theme.Dark : Theme.Light
        );
    }
}
