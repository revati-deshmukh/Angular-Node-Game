import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextLevelComponent } from './next-level.component';

describe('NextLevelComponent', () => {
  let component: NextLevelComponent;
  let fixture: ComponentFixture<NextLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextLevelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
