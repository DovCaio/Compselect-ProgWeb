import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessRequestComponent } from './sucess-request.component';

describe('SucessRequestComponent', () => {
  let component: SucessRequestComponent;
  let fixture: ComponentFixture<SucessRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SucessRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucessRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
