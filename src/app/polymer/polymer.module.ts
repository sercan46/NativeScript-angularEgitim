import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NgShadowModule } from "nativescript-ng-shadow";
import { PolymerComponent } from "./polymer.component";
import { PolymerRoutingModule } from "./polymer.routing.module";



@NgModule({
    imports: [
        NativeScriptCommonModule,
        PolymerRoutingModule,
        NgShadowModule

    ],
    declarations: [
        PolymerComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class PolymerModule { }
