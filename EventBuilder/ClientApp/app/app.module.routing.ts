import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TemplatesComponent } from './components/templates/templates.component';

const routes: Routes = [
    { path: '', redirectTo: '/templates', pathMatch: 'full' },
    { path: 'templates', component: TemplatesComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppModuleRouting { }