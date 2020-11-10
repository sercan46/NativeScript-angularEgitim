import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NgShadowModule } from "nativescript-ng-shadow";
import { AngularRoutingRoutingModule } from "./angular-routing-routing.module";
import { AngularRoutingComponent } from "./angular-routing.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        AngularRoutingRoutingModule,
        NgShadowModule

    ],
    declarations: [
        AngularRoutingComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AngularRoutingModule { }
