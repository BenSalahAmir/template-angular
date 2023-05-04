import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginhazemComponent } from './loginhazem.component';

describe('LoginhazemComponent', () => {
  let component: LoginhazemComponent;
  let fixture: ComponentFixture<LoginhazemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginhazemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginhazemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
