import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsLayoutComponent } from './trips-layout.component';

describe('TripsLayoutComponent', () => {
  let component: TripsLayoutComponent;
  let fixture: ComponentFixture<TripsLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripsLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
