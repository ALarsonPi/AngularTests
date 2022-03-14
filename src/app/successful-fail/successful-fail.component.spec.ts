import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulFailComponent } from './successful-fail.component';

describe('SuccessfulFailComponent', () => {
  let component: SuccessfulFailComponent;
  let fixture: ComponentFixture<SuccessfulFailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessfulFailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfulFailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
