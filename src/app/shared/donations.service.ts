import {HttpClient, HttpErrorResponse,HttpHeaders,HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Donation} from './donation.model';
import { catchError } from 'rxjs/operators';
import {Observable , throwError} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DonationsService {
    private baseUrl: string = "http://localhost:3000/donations";

    constructor(private http: HttpClient){}

    getDonations() : Observable<Donation[]>{
        return this.http.get<Donation[]>(this.baseUrl+"/Hyderabad/Kukatpally").pipe(catchError(this.handleError));
    }

    raiseDonation(donation : Donation) : Observable<any>{
        return this.http.post(this.baseUrl,donation);
    }

    acceptDonation(donation : Donation): Observable<any>{
        return this.http.put(this.baseUrl+'/accept',donation);
    }   

    pickUpDonation(donation : Donation):Observable<any>{
        return this.http.put(this.baseUrl+'/pickup',donation);
    }   

    deliverDonation(donation : Donation){
        return this.http.put(this.baseUrl+'/deliver',donation);
    }

    private handleError(error: HttpErrorResponse): Observable<never> {
        console.error('An error occurred:', error);
        return throwError('Something went wrong. Please try again later.');
    }
}