import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NgShadowModule } from "nativescript-ng-shadow";
import { AngularRoutingModule } from "./angular-routing.module";
import { AngularComponent } from "./angular.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        AngularRoutingModule,
        NgShadowModule

    ],
    declarations: [
        AngularComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AngularModule { }
