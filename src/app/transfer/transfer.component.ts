
import { Component, OnInit } from "@angular/core";
import { Account } from "app/account/account.model";
import { AccountRepository } from "app/account/account.repository";


@Component({
    selector : '/app-transfer',
    templateUrl : './transfer.component.html'
})
export class TransferComponent implements OnInit{


    transferAmount : number;
    anumber: string = "";
     aName: string = "";
     aType : string="";
     abalance: number;
    aid: number;
    toAccountNumber :string ="";
 

    accounts : Account[];
    constructor(private accountRepository : AccountRepository){
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
        this.aid = ac.id;
        this.aType = ac.accountType;
        console.log(this.aType+"FIND ACOUNT TYPE")
      }

      transferAccount(){
        const taccount: Account = this.accounts.find(ta => {
          return ta.accountNumber == this.toAccountNumber

        });
        
        let newBalance = this.abalance - this.transferAmount;
        let toAccountnewBalance = taccount.balance + this.transferAmount;
        console.log(toAccountnewBalance+"to account new balance")
        let f = new Account(this.aid,this.aName,this.anumber,this.aType,newBalance);
        let t = new Account(taccount.id,taccount.accountantName,taccount.accountNumber,taccount.accountType,toAccountnewBalance);

        if( this.abalance < this.transferAmount){
          alert("fund not suficient")
          return;
        }
        this.accountRepository.updateAccount(f).subscribe(response => {
          alert('Successfully Transfer')
          console.log(response) 

        });

        this.accountRepository.updateAccount(t).subscribe(response => {
          console.log(response)

        });
          
      }


    ngOnInit(){}

}