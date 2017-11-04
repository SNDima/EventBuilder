import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppModuleRouting } from './app.module.routing';

import { AppComponent } from './components/app/app.component';
import { TemplatesComponent } from './components/templates/templates.component';

@NgModule({
    declarations: [
        AppComponent,
        TemplatesComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        AppModuleRouting
    ]
})
export class AppModuleShared {
}
