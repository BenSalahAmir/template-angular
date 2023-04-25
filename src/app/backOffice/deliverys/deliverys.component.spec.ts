import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverysComponent } from './deliverys.component';

describe('DeliverysComponent', () => {
  let component: DeliverysComponent;
  let fixture: ComponentFixture<DeliverysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliverysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliverysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
