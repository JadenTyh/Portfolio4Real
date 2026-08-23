import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsetsComponent } from './skillsets.component';

describe('SkillsetsComponent', () => {
  let component: SkillsetsComponent;
  let fixture: ComponentFixture<SkillsetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
