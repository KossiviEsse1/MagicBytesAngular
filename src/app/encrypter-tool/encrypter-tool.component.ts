import { Component } from '@angular/core';
import { MagicByteTableComponent } from "../magic-byte-table/magic-byte-table.component";
import { MagicByte } from '../magic-byte';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DecryptserviceService } from '../decryptservice.service';

@Component({
    selector: 'app-encrypter-tool',
    standalone: true,
    template: `
    <form [formGroup]="encryptForm" (ngSubmit)="createEncryptedFile()">
      <section>
        <h1 class="heading">Upload Your File</h1>
        <div class="upload">
          <input type="file" (change)="uploadFile($event)"/>
        </div>
      </section>
      <section>
        <h1>Select a File Extension & Hex Number
          From the Table
        </h1>
        <app-magic-byte-table (dataEvent)="handleDataFromChild($event)">
        </app-magic-byte-table>
      </section>
      <section class="upload">
        <button [disabled]="disabled">Upload</button>
      </section>
    </form>
  `,
    styleUrl: './encrypter-tool.component.css',
    imports: [MagicByteTableComponent, ReactiveFormsModule]
})
export class EncrypterToolComponent {
  encryptForm = new FormGroup({
    fileMagicBytes: new FormControl(''),
    fileHexString: new FormControl(''),
    fileExtension: new FormControl('')
  });
  disabled = true;

  constructor(private decrypterService: DecryptserviceService) {}

  handleDataFromChild(event: MagicByte) {
    if(Object.keys(event).length !== 0) {
      this.encryptForm.patchValue({
        fileMagicBytes: event.hex?.replace(/\s+/g, "").toLocaleLowerCase(),
        fileExtension: event.file_extension?.replace(/\s+/g, "")
      });
      this.disabled = false;
    } else {
      this.encryptForm.patchValue({
        fileMagicBytes: "",
        fileExtension: ""
      });
      this.disabled = true;
    }
  }

  createEncryptedFile() {
    this.decrypterService.encryptFile(this.encryptForm).subscribe(
      res => {
        this.decrypterService
        .downloadEncryptedFile(res, "."+this.encryptForm.controls.fileExtension.value)
      }
    )
  }

  uploadFile(event: any) {
    const file:File = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      //Converts the file into a Hex String
      const hexString = this.decrypterService.convertFileToHexString(reader.result);
      this.encryptForm.patchValue({
        fileHexString: hexString
      });
    };

    reader.readAsArrayBuffer(file);
  }
}
