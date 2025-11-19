import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastEditor } from './podcast-editor';

describe('PodcastEditor', () => {
  let component: PodcastEditor;
  let fixture: ComponentFixture<PodcastEditor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PodcastEditor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PodcastEditor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
