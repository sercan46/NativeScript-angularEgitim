import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { AngularComponent } from "./angular/angular.component";
import { AngularHaberComponent } from "./angular-haber/angular-haber.component";
import { NedenAngularComponent } from "./neden-angular/neden-angular.component";
import { AngularCliComponent } from "./angular-cli/angular-cli.component";
import { AngularComponentComponent } from "./angular-component/angular-component.component";
import { AngularModuleComponent } from "./angular-module/angular-module.component";
import { AngularServisComponent } from "./angular-servis/angular-servis.component";
import { AngularRoutingComponent } from "./angular-routing/angular-routing.component";
import { PolymerComponent } from "./polymer/polymer.component";
import { NgrxAngularComponent } from "./ngrx-angular/ngrx-angular.component";
import { NativescriptComponent } from "./nativescript/nativescript.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: () => import("~/app/home/home.module").then((m) => m.HomeModule) },
    { path: "browse", loadChildren: () => import("~/app/browse/browse.module").then((m) => m.BrowseModule) },
    { path: "search", loadChildren: () => import("~/app/search/search.module").then((m) => m.SearchModule) },
    { path: "angular",component:AngularComponent },
    { path: "angular-haber",component:AngularHaberComponent },
    { path:"neden-angular",component:NedenAngularComponent },
    { path:"angular-cli",component:AngularCliComponent },
    { path:"angular-component",component:AngularComponentComponent },
    { path:"angular-module",component:AngularModuleComponent },
    { path:"angular-servis",component:AngularServisComponent },
    { path:"angular-routing",component:AngularRoutingComponent },
    { path:"polymer",component:PolymerComponent },
    { path:"angular-ngrx",component:NgrxAngularComponent },
    { path:"nativescript",component:NativescriptComponent },




];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
