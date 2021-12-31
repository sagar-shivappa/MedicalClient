import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableStocksComponent } from './available-stocks.component';

describe('AvailableStocksComponent', () => {
  let component: AvailableStocksComponent;
  let fixture: ComponentFixture<AvailableStocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableStocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
