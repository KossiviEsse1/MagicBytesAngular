import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncrypterToolComponent } from './encrypter-tool.component';

describe('EncrypterToolComponent', () => {
  let component: EncrypterToolComponent;
  let fixture: ComponentFixture<EncrypterToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncrypterToolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncrypterToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
