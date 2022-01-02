import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiredStocksComponent } from './expired-stocks.component';

describe('ExpiredStocksComponent', () => {
  let component: ExpiredStocksComponent;
  let fixture: ComponentFixture<ExpiredStocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpiredStocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpiredStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
