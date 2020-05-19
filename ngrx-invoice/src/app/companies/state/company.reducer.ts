import * as fromRoot from './../../state/app-state';
import { Company } from './../company.model';

import * as comapnyActions from './company.action';
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface CompanyState extends EntityState<Company> {
    selectedCompanyId: number | null;
    loading: boolean;
    loaded: boolean;
    error: string;
}

export interface AppState extends fromRoot.AppState {
    company: CompanyState;
}

export const companyAdapter: EntityAdapter<Company> = createEntityAdapter<Company>();
export const defaultCompany: CompanyState = {
    ids: [],
    entities: {},
    selectedCompanyId: null,
    loading: false,
    loaded: false,
    error: ""
}
export const inintialState = companyAdapter.getInitialState(defaultCompany);
export function companyReducer(state = inintialState,
                               action: comapnyActions.ActionCompany): CompanyState {
    switch(action.type) {
        case comapnyActions.CompanyActionType.LOAD_CUMPANIES: {
            return {
                ...state,
                loading: true
            }
        }
        case comapnyActions.CompanyActionType.LOAD_CUMPANIES_SUCCESS: {
            return companyAdapter.addAll(action.payload, {
                ...state,
                loading: false,
                loaded: true
            })
        }
        case comapnyActions.CompanyActionType.LOAD_CUMPANIES_FAIL: {
            return {
                ...state,
                entities: {},
                loading: false,
                loaded: false,
                error: action.payload
            }
        }
        default: {
            return state;
        }
    }
}

const getCompaniesFeatureState = createFeatureSelector<CompanyState>(
    "companies"
)

export const getCompanies = createSelector(
    getCompaniesFeatureState,
    companyAdapter.getSelectors().selectAll
)