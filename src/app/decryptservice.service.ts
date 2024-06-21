import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MagicBytesData } from './MagicBytesData';
import { saveAs } from 'file-saver'

const httpOptions = {
  headers: new HttpHeaders({
  })
};

@Injectable({
  providedIn: 'root'
})
export class DecryptserviceService {

  magicBytesData = new MagicBytesData();
  fileExtensionMimeTypeMap = this.magicBytesData.getFileExtensionMimeTypeMap();

  public baseURL:string = 'https://o7dim135id.execute-api.us-east-2.amazonaws.com/test/decrypt';

  constructor(private http: HttpClient) { }

  convertFileToHexString(fileBuffer: ArrayBuffer): string {
    const hexString =  Array.from(new Uint8Array(fileBuffer as ArrayBuffer))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
    return hexString
  }

  convertHexStringToBinaryString(hexString: string): string {
    // Create a dictionary to map hexadecimal digits to their binary representations
    const hexToBin: any = {
      '0': '0000', '1': '0001', '2': '0010', '3': '0011',
      '4': '0100', '5': '0101', '6': '0110', '7': '0111',
      '8': '1000', '9': '1001', 'a': '1010', 'b': '1011',
      'c': '1100', 'd': '1101', 'e': '1110', 'f': '1111'
    };

    // Convert each hexadecimal digit to its binary representation
    const binaryData = Array.from(hexString).map(digit => hexToBin[digit]).join('');

    return binaryData;
  }

  convertHexStringToBlob(hexString: string, mimeType: string): Blob {
    // Convert the hexadecimal string to binary data
    const binaryData = this.convertHexStringToBinaryString(hexString);

    // Convert the binary data to an ArrayBuffer
    const arrayBuffer = new Uint8Array(binaryData.length / 8);
    for (let i = 0; i < binaryData.length; i += 8) {
      arrayBuffer[i / 8] = parseInt(binaryData.substr(i, 8), 2);
    }

    // Create a Blob object from the ArrayBuffer
    return new Blob([arrayBuffer], { type: mimeType });
  }

  decryptFile(data_: any){
    let params = {
      key: "fileDecrypter",
      fileHex: data_.fileHex,
      magicBytes: data_.magicBytes
    };
    return this.http.post(this.baseURL, params, httpOptions);
  }

  downloadDecryptedFile(result: any, fileExtension: string): void {
    let fileMimeType: string = this.fileExtensionMimeTypeMap[fileExtension];
    var hexString = result["body"]["event-fileHex"];
    let blob = this.convertHexStringToBlob(hexString, fileMimeType);
    saveAs(blob, "YourFile"+fileExtension);
  }
}
