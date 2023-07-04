import {  Component, OnInit } from '@angular/core';
import { Donation } from '../donation.model';
import { DonationsService } from '../donations.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'donations-list',
  templateUrl: './donations-list.component.html',
  styleUrls: ['./donations-list.component.css']
})
export class DonationsListComponent implements OnInit{

  public donations : Donation[] = [];
  public noMatchingResults : string = '';
  public isLoading : boolean  = false;
  public error : string = '';

  constructor(private donationsService : DonationsService) {
  }

   ngOnInit(): void {
    this.isLoading = true;
    this.donationsService.getDonations()
      .pipe(
        catchError((error) => {
          this.error = 'Failed to load donations. Please try again later.';
          return throwError(error);
        })
      )
      .subscribe(
        (donations) => {
          this.donations = donations;
          this.isLoading = false;
        }
      );
  }
}
