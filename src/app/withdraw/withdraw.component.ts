      import { Component, OnInit } from "@angular/core";
      import { Account } from "app/account/account.model";
      import { AccountRepository } from "app/account/account.repository";


      @Component({
        selector: 'app-transfer',
        templateUrl: './withdraw.component.html'
      })
      export class WithdrawComponent implements OnInit {


        withdrawAmount: number;
        anumber: string = "";
        aName: string = "";
        atype: string = "";
        abalance: number;
        aid: number;
        account = new Account();
        accounts: Account[];
        constructor(private accountRepository: AccountRepository) {
          this.accountRepository.getAccounts().subscribe(data => {
            this.accounts = data;
          });
        }

        find() {
          const ac: Account = this.accounts.find(a => {
            return a.accountNumber == this.anumber

          });
          this.aName = ac.accountantName;
          this.abalance = ac.balance;
          this.atype = ac.accountType;
          this.aid = ac.id;
        }


        withdrawAccount() {
          let newBalance = this.abalance - this.withdrawAmount;
          
          let a = new Account(this.aid, this.aName, this.anumber, this.atype, newBalance);
          console.log(a);
          if( this.abalance < this.withdrawAmount){
            alert("fund not suficient")
            return;
          }
          this.accountRepository.updateAccount(a).subscribe(response => {
            alert('Successfully withdraw')
            console.log(response)

          });
        }

        ngOnInit() { }
      }