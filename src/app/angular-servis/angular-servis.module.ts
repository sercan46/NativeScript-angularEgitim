import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NgShadowModule } from "nativescript-ng-shadow";
import { AngularServisRoutingModule } from "./angular-servis.routing.module";
import { AngularServisComponent } from "./angular-servis.component";


@NgModule({
    imports: [
        NativeScriptCommonModule,
        AngularServisRoutingModule,
        NgShadowModule

    ],
    declarations: [
        AngularServisComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AngularModule { }
