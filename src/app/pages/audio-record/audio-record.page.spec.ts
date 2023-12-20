import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AudioRecordPage } from './audio-record.page';

describe('AudioRecordPage', () => {
  let component: AudioRecordPage;
  let fixture: ComponentFixture<AudioRecordPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AudioRecordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
