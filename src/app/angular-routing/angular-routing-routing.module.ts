import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { AngularRoutingComponent } from "./angular-routing.component";


const routes: Routes = [
    { path: "", component: AngularRoutingComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class AngularRoutingRoutingModule { }
