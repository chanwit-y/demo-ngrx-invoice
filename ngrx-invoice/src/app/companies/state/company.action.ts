import { Action } from '@ngrx/store';
import { Company } from '../company.model';

export enum CompanyActionType {
    LOAD_CUMPANIES = "[COMPANY] Load Companies",
    LOAD_CUMPANIES_SUCCESS = "[COMPANY] Load Companies Success",
    LOAD_CUMPANIES_FAIL = "[COMPANY] Load Companies Fail",
}

export class LoadCompanes implements Action {
    readonly type = CompanyActionType.LOAD_CUMPANIES;
}

export class LoadCompaniesSuccess implements Action {
    readonly type = CompanyActionType.LOAD_CUMPANIES_SUCCESS;
    constructor(public payload: Company[]) {}
}

export class LoadCompaniesFail implements Action {
    readonly type = CompanyActionType.LOAD_CUMPANIES_FAIL;
    constructor(public payload: string) {}
}

export type ActionCompany = LoadCompanes | LoadCompaniesSuccess | LoadCompaniesFail; 