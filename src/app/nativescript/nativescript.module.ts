import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NgShadowModule } from "nativescript-ng-shadow";
import { NativescriptComponent } from "./nativescript.component";
import { NativescriptRoutingModule } from "./nativescript.routing";


@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativescriptRoutingModule,
        NgShadowModule

    ],
    declarations: [
        NativescriptComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class NativescriptModule { }
