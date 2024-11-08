import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPnfComponent } from './main-pnf.component';

describe('MainPnfComponent', () => {
  let component: MainPnfComponent;
  let fixture: ComponentFixture<MainPnfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPnfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainPnfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
