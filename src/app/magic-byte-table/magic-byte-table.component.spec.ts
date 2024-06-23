import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicByteTableComponent } from './magic-byte-table.component';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('MagicByteTableComponent', () => {
  let component: MagicByteTableComponent;
  let fixture: ComponentFixture<MagicByteTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagicByteTableComponent],
      providers: [provideAnimations()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagicByteTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('sendDataToDecrypterTool() updates clicked row to inputted magicByte', () => {
    let magicByte = {
      ascii: "....",
      description: "RedHat Package Manager (RPM) package",
      file_extension: "rpm",
      hex: "ed ab ee db",
      offset: "0"
    };
    const dataEventStub = jasmine.createSpyObj('dataEvent',['emit']);
    dataEventStub.emit.and.callFake(function(){});
    component.dataEvent = dataEventStub;
    component.sendDataToDecrypterTool(magicByte);
    expect(component.clickedRow).toEqual(magicByte);
    expect(component.dataEvent.emit).toHaveBeenCalled();
  });

  it('sendDataToDecrypterTool() updates double clicked row to {}', () => {
    let magicByte = {
      ascii: "....",
      description: "RedHat Package Manager (RPM) package",
      file_extension: "rpm",
      hex: "ed ab ee db",
      offset: "0"
    };
    component.clickedRow = magicByte;
    const dataEventStub = jasmine.createSpyObj('dataEvent',['emit']);
    dataEventStub.emit.and.callFake(function(){});
    component.dataEvent = dataEventStub;
    component.sendDataToDecrypterTool(magicByte);
    expect(component.clickedRow).toEqual({});
    expect(component.dataEvent.emit).toHaveBeenCalled();
  });
});
