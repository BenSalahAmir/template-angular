import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverysmenComponent } from './deliverysmen.component';

describe('DeliverysmenComponent', () => {
  let component: DeliverysmenComponent;
  let fixture: ComponentFixture<DeliverysmenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliverysmenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliverysmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
