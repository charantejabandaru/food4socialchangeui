import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Donation} from './donation.model';
import { catchError } from 'rxjs/operators';
import {Observable , throwError} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DonationsService {
    private baseUrl: string = "https://fakestoreapi.com/products";

    constructor(private http: HttpClient){}

    getDonations() : Observable<Donation[]>{
        return this.http.get<Donation[]>(this.baseUrl).pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse): Observable<never> {
        console.error('An error occurred:', error);
        return throwError('Something went wrong. Please try again later.');
    }
}