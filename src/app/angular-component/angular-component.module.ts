import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NgShadowModule } from "nativescript-ng-shadow";
import { AngularComponentRoutingModule } from "./angular-component.routing.module";
import { AngularComponentComponent } from "./angular-component.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        AngularComponentRoutingModule,
        NgShadowModule
    ],
    declarations: [
        AngularComponentComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AngularComponentModule { }
