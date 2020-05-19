import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { CompanyComponent } from './company/company.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyAddComponent } from './company-add/company-add.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';

import { companyReducer } from './state/company.reducer';
import { StoreModule } from '@ngrx/store';
import { CompanyEffect } from './state/company.effect';

const companyRoutes: Routes = [
    { path: "", component: CompanyComponent }
];

@NgModule({
    declarations: [
        CompanyComponent,
        CompanyListComponent,
        CompanyAddComponent,
        CompanyEditComponent,
    ],
    imports: [ 
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(companyRoutes), 

        StoreModule.forFeature('companies', companyReducer),
        EffectsModule.forFeature([CompanyEffect])
    ],
    exports: [],
    providers: [],
})
export class CompanyModule {}