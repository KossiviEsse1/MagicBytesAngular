import { Component } from '@angular/core';
import { MagicByteTableComponent } from "../magic-byte-table/magic-byte-table.component";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MagicByte } from '../magic-byte';
import { DecryptserviceService } from '../decryptservice.service';

@Component({
    selector: 'app-decrypter-tool',
    standalone: true,
    template: `
    <form [formGroup]="decryptForm" (ngSubmit)="createDecryptedFile()">
      <section>
        <h1>Select a File Extension & Hex Number
          From the Table
        </h1>
        <app-magic-byte-table (dataEvent)="handleDataFromChild($event)">
        </app-magic-byte-table>
      </section>
      <section>
        <h1 class="heading">Upload Your File</h1>
        <div class="upload">
          <input type="file" (change)="uploadFile($event)"/>
          <button [disabled]="disabled">Upload</button>
        </div>
      </section>
    </form>
  `,
    styleUrl: './decrypter-tool.component.css',
    imports: [MagicByteTableComponent, ReactiveFormsModule]
})
export class DecrypterToolComponent {
  decryptForm = new FormGroup({
    fileMagicBytes: new FormControl(''),
    fileHexString: new FormControl(''),
    fileExtension: new FormControl('')
  });
  disabled = true;

  constructor(private decrypterService: DecryptserviceService) {}

  handleDataFromChild(event: MagicByte) {
    if(Object.keys(event).length !== 0) {
      this.decryptForm.patchValue({
        fileMagicBytes: event.hex?.replace(/\s+/g, "").toLocaleLowerCase(),
        fileExtension: event.file_extension?.replace(/\s+/g, "")
      })
    } else {
      this.decryptForm.patchValue({
        fileMagicBytes: "",
        fileExtension: ""
      })
    }
  }

  formIsFilled() {
    return this.decryptForm.controls.fileExtension.value &&
    this.decryptForm.controls.fileHexString.value &&
    this.decryptForm.controls.fileMagicBytes.value
  }

  uploadFile(event: any) {
    const file:File = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      //Converts the file into a Hex String
      const hexString = this.decrypterService.convertFileToHexString(reader.result);
      this.decryptForm.patchValue({
        fileHexString: hexString
      })
      if(this.formIsFilled()) {
        this.disabled = false;
      }
    };

    reader.readAsArrayBuffer(file);
  }

  createDecryptedFile() {
    console.log(this.decryptForm);
    this.decrypterService.decryptFile(this.decryptForm).subscribe(
      res => {
        this.decrypterService
        .downloadDecryptedFile(res, "."+this.decryptForm.controls.fileExtension.value)
      }
    )
  }

}
