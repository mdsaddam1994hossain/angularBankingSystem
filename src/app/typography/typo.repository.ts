import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Customer } from "./cutomer";


@Injectable()
export class TypoRepository {

    BASE_URL="http://localhost:3500/";
    customers_url = `${this.BASE_URL}customers`

    constructor(private http : HttpClient){

    }

    getCustomer(): Observable<Customer[]> {
        return this.http.get<Customer[]>(this.customers_url);
    }
    saveCustomer(c : Customer) : Observable<Customer> {
        return this.http.post<Customer>(this.customers_url, c);
    }

}