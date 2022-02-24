import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSalesComponent } from './update-sales.component';

describe('UpdateSalesComponent', () => {
  let component: UpdateSalesComponent;
  let fixture: ComponentFixture<UpdateSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
