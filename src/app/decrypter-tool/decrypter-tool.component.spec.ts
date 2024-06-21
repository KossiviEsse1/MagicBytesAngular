import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecrypterToolComponent } from './decrypter-tool.component';

describe('DecrypterToolComponent', () => {
  let component: DecrypterToolComponent;
  let fixture: ComponentFixture<DecrypterToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecrypterToolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecrypterToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
