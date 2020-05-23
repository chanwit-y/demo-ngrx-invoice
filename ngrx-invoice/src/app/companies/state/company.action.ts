import { Action } from '@ngrx/store';
import { Company } from '../company.model';

export enum CompanyActionType {
    LOAD_CUMPANIES = "[COMPANY] Load Companies",
    LOAD_CUMPANIES_SUCCESS = "[COMPANY] Load Companies Success",
    LOAD_CUMPANIES_FAIL = "[COMPANY] Load Companies Fail",
    LOAD_CUMPANY = "[COMPANY] Load Company",
    LOAD_CUMPANY_SUCCESS = "[COMPANY] Load Company Success",
    LOAD_CUMPANY_FAIL = "[COMPANY] Load Company Fail",
    CREATE_CUMPANY = "[COMPANY] Create Company",
    CREATE_CUMPANY_SUCCESS = "[COMPANY] Create Company Success",
    CREATE_CUMPANY_FAIL = "[COMPANY] Create Company Fail",
}

export class LoadCompanies implements Action {
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

export class LoadCompany implements Action {
    readonly type = CompanyActionType.LOAD_CUMPANY;
    constructor(public payload: number) {}
}

export class LoadCompanySuccess implements Action {
    readonly type = CompanyActionType.LOAD_CUMPANY_SUCCESS;
    constructor(public payload: Company) {}
}

export class LoadCompanyFail implements Action {
    readonly type = CompanyActionType.LOAD_CUMPANY_FAIL;
    constructor(public payload: string) {}
}


export class CreateCompany implements Action {
    readonly type = CompanyActionType.CREATE_CUMPANY;
    constructor(public payload: Company) {}
}

export class CreateCompanySuccess implements Action {
    readonly type = CompanyActionType.CREATE_CUMPANY_SUCCESS;
    constructor(public payload: Company) {}
}

export class CreateCompanyFail implements Action {
    readonly type = CompanyActionType.CREATE_CUMPANY_FAIL;
    constructor(public payload: string) {}
}

export type ActionCompany = LoadCompanies | LoadCompaniesSuccess | LoadCompaniesFail |
                            LoadCompany | LoadCompanySuccess | LoadCompanyFail |
                            CreateCompany | CreateCompanySuccess | CreateCompanyFail ; 