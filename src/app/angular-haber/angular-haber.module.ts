import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NgShadowModule } from "nativescript-ng-shadow";
import { AngularHaberRoutingModule } from "./angular-haber.routing.module";
import { AngularHaberComponent } from "./angular-haber.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        AngularHaberRoutingModule,
        NgShadowModule

    ],
    declarations: [
        AngularHaberComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AngularModule { }
