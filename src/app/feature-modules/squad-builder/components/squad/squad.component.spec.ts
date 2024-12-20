import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadComponent } from './squad.component';

describe('SquadComponent', () => {
  let component: SquadComponent;
  let fixture: ComponentFixture<SquadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SquadComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SquadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
