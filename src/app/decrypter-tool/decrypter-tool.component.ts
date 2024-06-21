import { Component } from '@angular/core';
import { MagicByteTableComponent } from "../magic-byte-table/magic-byte-table.component";

@Component({
    selector: 'app-decrypter-tool',
    standalone: true,
    template: `
    <form>
      <section>
        <h1>Select a File Extension & Hex Number
          From the Table
        </h1>
        <app-magic-byte-table>
        </app-magic-byte-table>
      </section>
      <section>
        <h1 class="heading">Upload Your File</h1>
        <div class="upload">
          <input type="file" (change)="uploadFile($event)"/>
          <button>Upload</button>
        </div>
      </section>
    </form>
  `,
    styleUrl: './decrypter-tool.component.css',
    imports: [MagicByteTableComponent]
})
export class DecrypterToolComponent {

  uploadFile(event: any) {
    console.log(event);
  }
}
