import { Component, Input } from '@angular/core';
import { Country } from 'src/app/models/country';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent {
@Input()
  countryDetail:Country[] =[];
  displayedColumns = ['name', 'cca2', 'population', 'unMember', 'languages', 'flags'];

  getAllLanguages (languages : string[]){
    let allSpokenLanguages = '';

    for(let language in languages){
      if (allSpokenLanguages){
        allSpokenLanguages += ', ';
      }

      allSpokenLanguages += languages[language];
    }

    return allSpokenLanguages;
  }
}
