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

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

    public customers:any[]; 
    constructor(private http: Http) {
     this.http.get('http://localhost:8080/api/v1/customer/all')
      .subscribe( data => {
          this.customers=data.json();
          console.log(data.json());
   });
    }

    ngOnInit() {}
    registerCustomer(f) {
        let cpHeaders = new Headers({
            'Content-Type': 'application/json'
        });
        let options = new RequestOptions({
            headers: cpHeaders
        });
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
        this.http.post('http://localhost:8080/api/v1/customer/register', JSON.stringify(customer), options)
            .subscribe(response => {

                console.log(response.json());
            });
            f.reset();
    }

}
