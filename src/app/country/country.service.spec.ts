import { TestBed } from '@angular/core/testing';

import { environment } from 'src/environments/environment';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CountryService } from './country.service';
import { COUNTRIES } from './mock-data/country';

describe('CountryService', () => {
  let service: CountryService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CountryService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get Countries', ()=> {
    service.getAllCountries().subscribe(res => {
      expect(res).toBeTruthy();
      expect(res.length).toBe(2);
    });

    let apiUrl = environment.apiUrl + 'all';

    const req = httpController.expectOne({
      method: 'GET',
      url: apiUrl,
    });

    //4
    req.flush(Object.values(COUNTRIES));
  })

  it('should get Country Details', ()=>{

    service.getCountryDetails('CCA2').subscribe(res =>{
      expect(res).toBeTruthy();
      expect(res.length).toBe(1);
    });

    let apiURL = environment.apiUrl + 'alpha/CCA2'  
    const req = httpController.expectOne({
        method: 'GET',
        url: apiURL
      }
    );

    req.flush([Object.values(COUNTRIES[1])])
  });

  afterEach(() => {
    httpController.verify();
  });
});
