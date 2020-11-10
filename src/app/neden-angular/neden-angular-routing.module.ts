import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NedenAngularComponent } from "./neden-angular.component";

const routes: Routes = [
    { path: "", component: NedenAngularComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class NedenAngularRoutingModule { }
