import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsSelectorComponent } from './skills-selector.component';

describe('SkillsSelectorComponent', () => {
  let component: SkillsSelectorComponent;
  let fixture: ComponentFixture<SkillsSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
