import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemComponent } from './item.component';
import {By} from '@angular/platform-browser';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have username 'JOE DOE'`, () => {
    const userName = 'JOE DOE';
    component.username = userName;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('p').innerText).toEqual(userName);
  });

  it('should show selected user on app-item when isSelected equal true', () => {
    component.isSelected = true;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.item--active'))).toBeTruthy();

  });
});
