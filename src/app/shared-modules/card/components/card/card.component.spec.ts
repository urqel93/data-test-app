import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CardComponent} from './card.component';
import {By} from '@angular/platform-browser';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have header text 'HEADER TEST'`, () => {
    const headerText = 'HEADER TEST';
    component.headerText = headerText;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('p').innerText).toEqual(headerText);
  });

  it(`should hide header text when isHeader is false`, () => {
    const headerText = 'HEADER TEST';
    component.isHeader = false;
    component.headerText = headerText;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.card__header'))).toBeNull();
  });

  it('should show pointer on card when isPointer equal true', () => {
    component.isPointer = true;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.card--pointer'))).toBeTruthy();

  });


});
