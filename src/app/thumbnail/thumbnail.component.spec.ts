import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailComponent } from './thumbnail.component';

describe('ThumbnailComponent', () => {
  let component: ThumbnailComponent;
  let fixture: ComponentFixture<ThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThumbnailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThumbnailComponent);
    component = fixture.componentInstance;
    component.thumbnailDetails = {
        step: 1,
        photo: '/screenshot1.jpg',
        details: 'First, go to the Decrypter Tool',
      };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
