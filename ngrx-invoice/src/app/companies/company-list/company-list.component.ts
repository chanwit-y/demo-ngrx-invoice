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
        this.store.dispatch(new companyActions.LoadCompanies());
        this.companies$ = this.store.pipe(select(fromCompany.getCompanies));
    }

    editCompany(company: Company) {
        console.log(company);
        
       this.store.dispatch(new companyActions.LoadCompany(company.id)); 

        const company$ = this.store.select(fromCompany.getCurrentCompany);
        company$.subscribe(x => console.log(x));
        
    }
}
