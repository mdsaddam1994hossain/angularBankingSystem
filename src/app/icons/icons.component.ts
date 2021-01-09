import { Component, OnInit } from '@angular/core';
import { Account } from 'app/account/account.model';
import { AccountRepository } from 'app/account/account.repository';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  depositAmount : number;
  anumber : string="";
  aName: string="";
  atype: string ="";
  abalance:number;
  aid : number;
  account = new Account();
  accounts : Account[];
  constructor(private accountRepositry : AccountRepository) {

    this.accountRepositry.getAccounts().subscribe(data => {
      this.accounts = data;
    });

   }


  
  find(){
    
   
    const ac: Account = this.accounts.find(a =>{ 
      return  a.accountNumber == this.anumber 
      
    });
      this.aName = ac.accountantName;
      this.abalance = ac.balance;
      this.atype = ac.accountType;
      this.aid = ac.id;

 
    
  }
  

  depositAccount(){
    const totalAmount = this.abalance + this.depositAmount;
    let a = new Account(this.aid,this.aName,this.anumber,this.atype,totalAmount);
    console.log(a);
    this.accountRepositry.updateAccount(a).subscribe(response => {
      alert('Successfully deposited')
      console.log(response)
      
    });
  }

  

  ngOnInit() {
  }

}
