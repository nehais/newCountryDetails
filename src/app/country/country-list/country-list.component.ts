import { Component, OnDestroy, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Country } from 'src/app/models/country';
import { Subject, switchMap, takeUntil } from 'rxjs';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit, OnDestroy {
  countryList$ : Country[] = [];
  countryDetails$ : Country[] = [];
  selectedCountry : string = '';
  selectError : boolean = false;
  unSubscriber$ = new Subject<void> ();

  constructor (private countryService: CountryService){}
  
  ngOnInit(): void {
    this.countryService.getAllCountries()
    .pipe(
      switchMap(data => {
        this.countryList$ = data;
        this.selectedCountry = data[0].cca2;
        return this.countryService.getCountryDetails(this.selectedCountry);
      })
    )
    .pipe(takeUntil(this.unSubscriber$))
    .subscribe(data=>{
      this.countryDetails$ = data;
    });

  }

  ngOnDestroy(): void {
    this.unSubscriber$.next();
    this.unSubscriber$.complete();
  }

  getAllCountryDetails(){
    if (!this.selectedCountry){
      this.selectError = true;
      return;
    }

    this.countryService.getCountryDetails(this.selectedCountry)
    .pipe(takeUntil(this.unSubscriber$))
    .subscribe(data=>{
      this.countryDetails$ = data;
    });
  }
}
