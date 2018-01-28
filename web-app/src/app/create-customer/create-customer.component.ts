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

    public customers: any[];
    public property: any[];
    constructor(private http: Http, private customerService: CustomerService) { }
    getCustomers(){
        this.customerService.getCustomers()
        .subscribe( data => {
            this.customers=data.json();
            console.log(this.customers);
        });
    }
    ngOnInit() {
        this.getCustomers();
    }

    registerCustomer(customerForm) {
        
        let customer = {
            title: customerForm.value.title,
            firstName: customerForm.value.firstName,
            lastName: customerForm.value.lastName,
            companyName: customerForm.value.companyName,
            buildingNumber: customerForm.value.buildingNumber,
            streetAddress: customerForm.value.street,
            city: customerForm.value.city,
            region: customerForm.value.region,
            postalCode: customerForm.value.postalCode,
            landLine: customerForm.value.landLine,
            mobile: customerForm.value.mobile,
            email: customerForm.value.email,
            secondaryEmail: customerForm.value.secondaryEmail,
            notes: customerForm.value.notes
        };

        this.customerService.saveCustomer(customer)
            .subscribe(response => {
                this.getCustomers();
            });
            customerForm.reset();
    }

    registerProperty(propertyForm) {
        let property = {
            buildingNumber: propertyForm.value.buildingNumber,
            city: propertyForm.value.city,
            countryCode: propertyForm.value.countryCode,
            customerId: propertyForm.value.customerId,
            notes: propertyForm.value.notes,
            occupantsEmail: propertyForm.value.occupantsEmail,
            occupantsName: propertyForm.value.occupantsName,
            occupantsPhone: propertyForm.value.occupantsPhone,
            postalCode: propertyForm.value.postalCode,
            propertyId: propertyForm.value.propertyId,
            region: propertyForm.value.region,
            streetAddress: propertyForm.value.streetAddress
        };

        this.customerService.saveProperty(property)
            .subscribe(response => {
                console.log("Inserted property")
            });
    }
   
}
