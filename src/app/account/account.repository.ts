import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Account } from "./account.model";



@Injectable()
export class AccountRepository{

    BASE_URL="http://localhost:3500/";
    accounts_url = `${this.BASE_URL}accounts`
    baseUrl_ForUpdate = "http://localhost:3500/accounts/";

    constructor(private http : HttpClient){

       
    }

    getAccounts(): Observable<Account[]> {
        return this.http.get<Account[]>(this.accounts_url);
    }
    createAccount(a : Account) : Observable<Account> {
        return this.http.post<Account>(this.accounts_url, a);
    }

    updateAccount(a : Account) : Observable<Account> {
        const updateurl = `${this.baseUrl_ForUpdate}${a.id}`;
        return this.http.put<Account>(updateurl, a);
    }



   
   }