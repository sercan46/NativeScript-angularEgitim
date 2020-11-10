import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { AngularHaberComponent } from "./angular-haber.component";


const routes: Routes = [
    { path: "", component: AngularHaberComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class AngularHaberRoutingModule { }
