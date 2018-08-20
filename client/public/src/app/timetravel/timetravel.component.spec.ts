import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetravelComponent } from './timetravel.component';

describe('TimetravelComponent', () => {
  let component: TimetravelComponent;
  let fixture: ComponentFixture<TimetravelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetravelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
