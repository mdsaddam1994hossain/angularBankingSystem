import { Component, OnInit } from '@angular/core';
import { Account } from 'app/account/account.model';
import { AccountRepository } from 'app/account/account.repository';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

    accounts : Account[];
  selectedAccount : number ;
  constructor(private accountRepo : AccountRepository) {

    this.accountRepo.getAccounts().subscribe(data => {
      this.accounts = data;  
    })

   }

  // getAccounts(): Account[] {
  //   return this.accountRepo.getAccount();
  //   }

    updateSelectedAccount(value: number){
      this.selectedAccount = value;
  }

  ngOnInit() {
  }

}
