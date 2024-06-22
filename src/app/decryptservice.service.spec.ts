import { TestBed } from '@angular/core/testing';
import { DecryptserviceService } from './decryptservice.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import * as helper from 'file-saver';

describe('DecryptserviceService', () => {
  let service: DecryptserviceService;
  const httpClientSpy = jasmine.createSpyObj('HttpClient', ['post', 'get']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [{ provide: HttpClient, useValue: httpClientSpy }]
    });
    service = TestBed.inject(DecryptserviceService);
    httpClientSpy.post.and.returnValue(({ status: 200, data: {} }));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('convertFileToHexString() should return a HexString from a FileBuffer', () => {
    let arrayBuff = new Uint8Array([1, 35, 69, 103, 137, 171, 205, 239]);
    let hexString = service.convertFileToHexString(arrayBuff);
    expect(hexString).toEqual("0123456789abcdef");
  });

  it('convertHexStringToBinaryString() should return a Binary array from a HexString', () => {
    let hexString = "0123456789abcdef";
    let binaryString = service.convertHexStringToBinaryString(hexString);
    expect(binaryString).toEqual("0000000100100011010001010110011110001001101010111100110111101111");
  });

  it('convertHexStringToBlob() should return an object', () => {
    let hexString = "0123456789abcdef";
    let mimeType = "jpg"
    let object = service.convertHexStringToBlob(hexString, mimeType);
    expect(typeof object).toEqual('object');
  });

  it('decryptFile() should make a post request', () => {
    let object = new FormGroup({
      fileHexString: new FormControl('0123456789abcdef'),
      fileMagicBytes: new FormControl('f8ddf8')
    });
    service.decryptFile(object);
    expect(httpClientSpy.post).toHaveBeenCalled();
  });

  it('downloadDecryptedFile() should alert with null file extension', () => {
    spyOn(window, 'alert').and.callThrough();
    service.downloadDecryptedFile('', null);
    expect(window.alert).toHaveBeenCalledWith("No File Extension Selected");
  });

  it('downloadDecryptedFile() should alert with errorMessage in result', () => {
    spyOn(window, 'alert').and.callThrough();
    let result = {
      errorMessage: "error"
    }
    service.downloadDecryptedFile(result, "Extension");
    expect(window.alert).toHaveBeenCalledWith("Looks Like There Was An Error, Please Try Again! :D");
  });

  it('downloadDecryptedFile() should save file', () => {
    spyOn(window, 'alert').and.callThrough();
    spyOn(helper, 'saveAs').and.callThrough();
    let result = {
      "body": {
        "event-fileHex": "f8ddf8"
      }
    };
    service.downloadDecryptedFile(result, ".jpg");
    expect(helper.saveAs).toHaveBeenCalled();
  });
});
