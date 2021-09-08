import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekInspectorComponent } from './week-inspector.component';

describe('WeekInspectorComponent', () => {
  let component: WeekInspectorComponent;
  let fixture: ComponentFixture<WeekInspectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekInspectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekInspectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
