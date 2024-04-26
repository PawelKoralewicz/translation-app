import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateWindowComponent } from './translate-window.component';

describe('TranslateWindowComponent', () => {
  let component: TranslateWindowComponent;
  let fixture: ComponentFixture<TranslateWindowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TranslateWindowComponent]
    });
    fixture = TestBed.createComponent(TranslateWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
