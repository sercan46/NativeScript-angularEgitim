import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NgShadowModule } from "nativescript-ng-shadow";
import { AngularModuleRoutingModule } from "./angular-module-routing.module";
import { AngularModuleComponent } from "./angular-module.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        AngularModuleRoutingModule,
        NgShadowModule

    ],
    declarations: [
        AngularModuleComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AngularModule { }
