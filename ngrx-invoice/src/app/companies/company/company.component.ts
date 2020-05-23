import { Component, OnInit } from '@angular/core';

import { Company } from '../company.model';

import * as companyActions from '../state/company.reducer';
import * as fromCompany from '../state/company.reducer';

@Component({
    selector: 'company',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

    constructor() { }

    ngOnInit(): void { }
}
