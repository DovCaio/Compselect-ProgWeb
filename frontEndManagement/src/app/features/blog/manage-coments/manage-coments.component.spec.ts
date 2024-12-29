import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageComentsComponent } from './manage-coments.component';

describe('ManageComentsComponent', () => {
  let component: ManageComentsComponent;
  let fixture: ComponentFixture<ManageComentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageComentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageComentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
