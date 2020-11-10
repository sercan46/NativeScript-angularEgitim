import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { AngularServisComponent } from "./angular-servis.component";


const routes: Routes = [
    { path: "", component: AngularServisComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class AngularServisRoutingModule { }
