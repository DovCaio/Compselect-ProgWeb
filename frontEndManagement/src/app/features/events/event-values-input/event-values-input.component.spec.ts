import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventValuesInputComponent } from './event-values-input.component';

describe('EventValuesInputComponent', () => {
  let component: EventValuesInputComponent;
  let fixture: ComponentFixture<EventValuesInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventValuesInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventValuesInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
