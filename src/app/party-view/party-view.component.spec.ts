import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyViewComponent } from './party-view.component';

describe('PartyViewComponent', () => {
  let component: PartyViewComponent;
  let fixture: ComponentFixture<PartyViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartyViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
