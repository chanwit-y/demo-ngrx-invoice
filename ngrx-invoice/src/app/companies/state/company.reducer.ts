import * as fromRoot from './../../state/app-state';
import { Company } from './../company.model';

import * as companyActions from './company.action';
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
                               action: companyActions.ActionCompany): CompanyState {
    switch(action.type) {
        case companyActions.CompanyActionType.LOAD_CUMPANIES_SUCCESS: {
            return companyAdapter.addAll(action.payload, {
                ...state,
                loading: false,
                loaded: true
            });
        }
        case companyActions.CompanyActionType.LOAD_CUMPANIES_FAIL: {
            return {
                ...state,
                entities: {},
                loading: false,
                loaded: false,
                error: action.payload
            };
        }
        case companyActions.CompanyActionType.LOAD_CUMPANY_SUCCESS: {
            return companyAdapter.addOne(action.payload, {
                ...state,
                selectedCompanyId: action.payload.id
            });
        }
        case companyActions.CompanyActionType.LOAD_CUMPANY_FAIL: {
            return {
                ...state,
                error: action.payload
            };
        }
        case companyActions.CompanyActionType.CREATE_CUMPANY_SUCCESS: {
            return companyAdapter.addOne(action.payload, state);
        }
        case companyActions.CompanyActionType.CREATE_CUMPANY_FAIL: {
            return {
                ...state,
                error: action.payload
            };
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

export const getCurrenCompanyId = createSelector(
    getCompaniesFeatureState,
    (state: CompanyState) => state.selectedCompanyId
)

export const getCurrentCompany = createSelector(
    getCompaniesFeatureState,
    getCurrenCompanyId,
    state => state.entities[state.selectedCompanyId]
)