import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { NgShadowModule } from "nativescript-ng-shadow";
import { NedenAngularRoutingModule } from "./neden-angular-routing.module";
import { NedenAngularComponent } from "./neden-angular.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NedenAngularRoutingModule,
        NgShadowModule
    ],
    declarations: [
        NedenAngularComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
