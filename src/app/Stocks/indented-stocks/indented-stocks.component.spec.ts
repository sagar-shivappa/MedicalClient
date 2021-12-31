import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentedStocksComponent } from './indented-stocks.component';

describe('IndentedStocksComponent', () => {
  let component: IndentedStocksComponent;
  let fixture: ComponentFixture<IndentedStocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndentedStocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentedStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
