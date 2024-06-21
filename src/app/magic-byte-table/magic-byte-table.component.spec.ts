import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicByteTableComponent } from './magic-byte-table.component';

describe('MagicByteTableComponent', () => {
  let component: MagicByteTableComponent;
  let fixture: ComponentFixture<MagicByteTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagicByteTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagicByteTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
