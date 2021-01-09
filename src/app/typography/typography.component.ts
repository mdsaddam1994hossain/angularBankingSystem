import { Component, OnInit } from '@angular/core';
import { Customer } from './cutomer';
import { TypoRepository } from './typo.repository';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {

  customers : Customer[];
  customer = new Customer();
  constructor(private tipoRepo : TypoRepository) { 

    this.tipoRepo.getCustomer().subscribe(data => {
      this.customers = data;  
    })
  }

  save(){
    const c =new Customer(6, this.customer.customerName, "0178542", "Barishal", 1025);
    this.tipoRepo.saveCustomer(c).subscribe(response => {
        console.log(response)
    });
  }
    



  ngOnInit() {
   
  }

  

}
