import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgShadowModule } from 'nativescript-ng-shadow';
import { AngularComponent } from './angular/angular.component';
import { AngularHaberComponent } from './angular-haber/angular-haber.component';
import { NedenAngularComponent } from './neden-angular/neden-angular.component';
import { AngularCliComponent } from './angular-cli/angular-cli.component';
import { AngularComponentComponent } from './angular-component/angular-component.component';
import { AngularModuleComponent } from './angular-module/angular-module.component';
import { AngularServisComponent } from './angular-servis/angular-servis.component';
import { AngularRoutingComponent } from './angular-routing/angular-routing.component';
import { PolymerComponent } from './polymer/polymer.component';
import { NgrxAngularComponent } from './ngrx-angular/ngrx-angular.component';
import { NativescriptComponent } from './nativescript/nativescript.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptUISideDrawerModule,
        NgShadowModule

    ],
    declarations: [
        AppComponent,
        AngularComponent,
        AngularHaberComponent,
        NedenAngularComponent,
        AngularCliComponent,
        AngularComponentComponent,
        AngularModuleComponent,
        AngularServisComponent,
        AngularRoutingComponent,
        PolymerComponent,
        NgrxAngularComponent,
        NativescriptComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
