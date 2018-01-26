import {
    Component,
    OnInit
} from '@angular/core';
import {
    Http,
    Response,
    Headers,
    URLSearchParams,
    RequestOptions
} from '@angular/http';

import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

    public customers:any[]; 
    constructor(private http: Http, private customerService: CustomerService) { }
    getCustomers(){
        this.customerService.getCustomers()
        .subscribe( data => {
            this.customers=data.json();
            console.log(data.json());
        });
    }
    ngOnInit() {
        this.getCustomers();
    }

    registerCustomer(f) {
        
        let customer = {
            title: f.value.title,
            firstName: f.value.firstName,
            lastName: f.value.lastName,
            companyName: f.value.companyName,
            buildingNumber: f.value.buildingNumber,
            streetAddress: f.value.street,
            city: f.value.city,
            region: f.value.region,
            postalCode: f.value.postalCode,
            landLine: f.value.landLine,
            mobile: f.value.mobile,
            email: f.value.email,
            secondaryEmail: f.value.secondaryEmail,
            notes: f.value.notes
        };

        this.customerService.saveCustomer(customer)
            .subscribe(response => {
                this.getCustomers();
            });
        f.reset();
    }

}
