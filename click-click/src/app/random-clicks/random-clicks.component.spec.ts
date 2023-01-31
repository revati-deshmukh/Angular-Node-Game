import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomClicksComponent } from './random-clicks.component';

describe('RandomClicksComponent', () => {
  let component: RandomClicksComponent;
  let fixture: ComponentFixture<RandomClicksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomClicksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomClicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
