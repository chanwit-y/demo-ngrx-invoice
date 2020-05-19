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
        private copanyService: CompanyService
    ) {}

    @Effect()
    loadCompanies$: Observable<Action> = this.action$.pipe(
        ofType<companyActions.LoadCompanes>(
            companyActions.CompanyActionType.LOAD_CUMPANIES
        ),
        mergeMap((actions: companyActions.LoadCompanes) =>
           this.copanyService.getCompanies().pipe(
                map((companies: Company[]) =>
                    new companyActions.LoadCompaniesSuccess(companies)
                ),
                catchError(err => of(new companyActions.LoadCompaniesFail(err)))
           ))
    );
}