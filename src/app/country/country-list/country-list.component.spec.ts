import { ComponentFixture, TestBed } from '@angular/core/testing';

import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CountryListComponent } from './country-list.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('CountryListComponent', () => {
  let component: CountryListComponent;
  let fixture: ComponentFixture<CountryListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryListComponent],
      imports : [HttpClientModule, MatButtonModule, MatSelectModule, FormsModule, BrowserAnimationsModule]
    });
    fixture = TestBed.createComponent(CountryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
