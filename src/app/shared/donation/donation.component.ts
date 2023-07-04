import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {

  @Input()  donorName : string = '';
  @Input()  donorMobileNumber : string = '';
  @Input()  pickupAddress : string = '';
  @Input()  status : string = '';
  @Input()  city : string = '';
  @Input()  area : string = '';
  @Input()  foodType : string = '';
  @Input()  foodQuantity : string = '';
  @Input()  recipientMobileNumber : string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
