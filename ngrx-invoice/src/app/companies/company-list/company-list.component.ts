import * as companyActions from '../state/company.action';
import * as fromCompany from '../state/company.reducer';

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../company.model';
import { Store, select } from '@ngrx/store';

@Component({
    selector: 'company-list',
    templateUrl: './company-list.component.html',
})
export class CompanyListComponent implements OnInit {
    companies$: Observable<Company[]>;

    constructor(private store: Store<fromCompany.AppState>) { }

    ngOnInit() {
        this.store.dispatch(new companyActions.LoadCompanes());
        this.companies$ = this.store.pipe(select(fromCompany.getCompanies));

        this.companies$.subscribe(rsp => {
            console.log(rsp);
            
        })
    }
}
