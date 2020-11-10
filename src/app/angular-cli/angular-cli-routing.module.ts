import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { AngularCliComponent } from "./angular-cli.component";

const routes: Routes = [
    { path: "", component: AngularCliComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class AngularCliRoutingModule { }
