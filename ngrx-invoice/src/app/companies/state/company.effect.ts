import { Injectable } from "@angular/core";

import { Company } from '../company.model';

import * as companyActions from '../state/company.action';
import { CompanyService } from './../company.service';

import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';


@Injectable()
export class CompanyEffect {
    constructor(
        private action$: Actions,
        private companyService: CompanyService
    ) {}

    @Effect()
    loadCompanies$: Observable<Action> = this.action$.pipe(
        ofType<companyActions.LoadCompanies>(
            companyActions.CompanyActionType.LOAD_CUMPANIES
        ),
        mergeMap((actions: companyActions.LoadCompanies) =>
           this.companyService.getCompanies().pipe(
                map((companies: Company[]) =>
                    new companyActions.LoadCompaniesSuccess(companies)
                ),
                catchError(err => of(new companyActions.LoadCompaniesFail(err)))
           )
        )
    );

    @Effect()
    loadCompany$: Observable<Action> = this.action$.pipe(
        ofType<companyActions.LoadCompany>(
            companyActions.CompanyActionType.LOAD_CUMPANY
        ),
        mergeMap((action: companyActions.LoadCompany) => 
            this.companyService.getCompany(action.payload).pipe(
                map((company: Company) =>
                    new companyActions.LoadCompanySuccess(company)
                ),
                catchError(err => of(new companyActions.LoadCompanyFail(err)))
            )
        )
    );

    @Effect()
    createCompany$: Observable<Action> = this.action$.pipe(
        ofType<companyActions.CreateCompany>(
            companyActions.CompanyActionType.CREATE_CUMPANY
        ),
        mergeMap((action: companyActions.CreateCompany) =>
            this.companyService.createCustomer(action.payload).pipe(
                map((newCompany: Company) =>
                    new companyActions.CreateCompanySuccess(newCompany)
                ),
                catchError(err => of(new companyActions.CreateCompanyFail(err)))
            )
        )
    );
}