import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NgShadowModule } from "nativescript-ng-shadow";
import { NgrxAngularRoutingModule } from "./ngrx-angular.routing";
import { NgrxAngularComponent } from "./ngrx-angular.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NgrxAngularRoutingModule,
        NgShadowModule
    ],
    declarations: [
        NgrxAngularComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class NgrxAngularModule { }
