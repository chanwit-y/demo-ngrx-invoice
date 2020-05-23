import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Company } from './company.model';
import { Observable} from 'rxjs';

@Injectable({
    providedIn: "root"
})
export class CompanyService {
    private companiesUrl = "http://localhost:3000/companies";

    constructor(private http: HttpClient) {}

    getCompanies(): Observable<Company[]> {
        return this.http.get<Company[]>(this.companiesUrl);
    }

    getCompany(payload: number): Observable<Company> {
        return this.http.get<Company>(`${this.companiesUrl}/${payload}`);
    }

    createCustomer(payload: Company): Observable<Company> {
        return this.http.post<Company>(this.companiesUrl, payload);
    }
}