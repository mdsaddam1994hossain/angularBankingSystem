import { Component, OnInit } from '@angular/core';
import { Account } from 'app/account/account.model';
import { AccountRepository } from 'app/account/account.repository';

declare const google: any;

interface Marker {
lat: number;
lng: number;
label?: string;
draggable?: boolean;
}
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  account = new Account();

  accounts : Account[];
  constructor(private accounReposi : AccountRepository) {
    this.accounReposi.getAccounts().subscribe(data => {
      this.accounts = data;
    });

   }

    saveAccount(){
      const a =new Account(this.account.id,this.account.accountantName,this.account.accountNumber,this.account.accountType,this.account.balance)

         
            this.accounReposi.createAccount(a).subscribe(response => {
              alert('Successfully Account Created')
                console.log(response)
            });

         
        
    }
  
  


  ngOnInit() {

    
  }

}
