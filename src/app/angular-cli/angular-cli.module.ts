import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NgShadowModule } from "nativescript-ng-shadow";
import { AngularCliRoutingModule } from "./angular-cli-routing.module";
import { AngularCliComponent } from "./angular-cli.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        AngularCliRoutingModule,
        NgShadowModule
    ],
    declarations: [
        AngularCliComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AngularCliModule { }
