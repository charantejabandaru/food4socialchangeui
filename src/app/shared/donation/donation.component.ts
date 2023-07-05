import { Component, OnInit,Input } from '@angular/core';
import {DonationStatus} from './donation-status';
import { DonationsService } from '../donations.service';
import { Donation } from '../donation';
import { NotifyDonationDelivery } from '../notify-donation-delivery.service';

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
  deliveryLocation : string = '';

  buttonText : string = '';

  constructor(private service : DonationsService,private notifyDeliveryService : NotifyDonationDelivery) { }

  ngOnInit(): void {
    this.assignButtonStatus();
  }

  assignButtonStatus(){
    if(this.status == DonationStatus.raised){
      this.buttonText = 'accept';
    }
    else if(this.status == DonationStatus.accepted){
      this.buttonText = 'pickup';
    }
    else if(this.status == DonationStatus.pickedup){
      this.buttonText = 'deliver';
    }
  }

  handleClick(){

    let donation = new Donation(this.donorName,this.donorMobileNumber,this.pickupAddress,this.status,this.city,this.area,this.foodType,this.foodQuantity,this.recipientMobileNumber);
    
    if(this.buttonText == 'accept'){
      this.service.acceptDonation(donation).subscribe(response => {
        this.notifyDeliveryService.triggerDonationDelivered();
        console.log(response);
        this.buttonText = 'pickup';
      });
    }
    else if(this.buttonText == 'pickup'){
      this.service.pickUpDonation(donation).subscribe(response => {
        console.log(response);
        this.recipientMobileNumber = response.donation.recipientMobileNumber;
        this.deliveryLocation = response.recipient.deliveryLocation;
        this.buttonText = 'deliver';
        this.notifyDeliveryService.triggerDonationDelivered();
      });
    }
    else if(this.buttonText == 'deliver'){
      this.service.deliverDonation(donation).subscribe(response => {
        this.notifyDeliveryService.triggerDonationDelivered();
        console.log(response);
      });
    }
  }
}
