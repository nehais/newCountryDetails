import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})

export class CountryService {
  constructor(private http : HttpClient) { }

  getAllCountries() : Observable<Country[]> {
    let apiUrl = environment.apiUrl + 'all';

    return this.http.get <Country[]> (apiUrl);
  }

  getCountryDetails(countryCode : string) : Observable<Country[]> {
    let apiUrl = environment.apiUrl + 'alpha/' + countryCode;

    return this.http.get <Country[]> (apiUrl);
  }
}
