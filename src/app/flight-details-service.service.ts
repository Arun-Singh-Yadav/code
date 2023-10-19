import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { AirportsModel } from './model/airports-model';
@Injectable({
  providedIn: 'root'
})
export class FlightDetailsServiceService {

  constructor(private http:HttpClient) { }

  public getFlightDetails(){
    let url = 'https://api-uat-ezycommerce.ezyflight.se/api/v1/Airport/OriginsWithConnections/en-us';
    
    const httpOptions = {
      headers: new HttpHeaders({
      'Tenant-Identifier': '9d7d6eeb25cd6083e0df323a0fff258e59398a702fac09131275b6b1911e202d'
     })};
    return this.http.get<AirportsModel>(url,httpOptions);
  }
}
