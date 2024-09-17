import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { CountryDetailsComponent } from './country-details.component';

describe('CountryDetailsComponent', () => {
  let component: CountryDetailsComponent;
  let fixture: ComponentFixture<CountryDetailsComponent>;
  let de: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryDetailsComponent],
      imports: [MatTableModule]
    });
    fixture = TestBed.createComponent(CountryDetailsComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*it('should has correct rows', () => {
    // query debug elements doesn't work
    //const rowDebugElements = queryDebugElements(de, 'tbody tr');
    //expect(rowDebugElements.length).toBe(0);

    // has to fallback to query DOM elements
    const rowHtmlElements = de.nativeElement.querySelectorAll('tbody tr');
    expect(rowHtmlElements.length).toBe(1);
  });*/
});
