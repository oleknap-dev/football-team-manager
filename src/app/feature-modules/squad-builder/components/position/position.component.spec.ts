import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionComponent } from './position.component';

describe('PositionComponent', () => {
  let component: PositionComponent;
  let fixture: ComponentFixture<PositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PositionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
