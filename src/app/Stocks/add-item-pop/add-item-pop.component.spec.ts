import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemPopComponent } from './add-item-pop.component';

describe('AddItemPopComponent', () => {
  let component: AddItemPopComponent;
  let fixture: ComponentFixture<AddItemPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddItemPopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
