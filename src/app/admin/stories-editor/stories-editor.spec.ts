import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesEditor } from './stories-editor';

describe('StoriesEditor', () => {
  let component: StoriesEditor;
  let fixture: ComponentFixture<StoriesEditor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoriesEditor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoriesEditor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
