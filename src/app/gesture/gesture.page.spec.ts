import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GesturePage } from './gesture.page';

describe('GesturePage', () => {
  let component: GesturePage;
  let fixture: ComponentFixture<GesturePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GesturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
