import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NgrxAngularComponent } from "./ngrx-angular.component";

const routes: Routes = [
    { path: "", component: NgrxAngularComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class NgrxAngularRoutingModule { }
