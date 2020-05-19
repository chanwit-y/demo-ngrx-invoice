import { Injectable } from "@angular/core";
import { Company } from './company.model';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: "root"
})
export class CompanyService {
    getCompanies(): Observable<Company[]> {
        return of([{
            id: 1,
            name: 'Test1',
            address: 'xxxx',
            tel: '12345678'
        }]);
    }
}