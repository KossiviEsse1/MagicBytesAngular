import { Component } from '@angular/core';
import { ThumbnailComponent } from '../thumbnail/thumbnail.component';
import { ThumbnailDetails } from '../thumbnail-details';
import { CommonModule } from '@angular/common';
import { MagicByteTableComponent } from '../magic-byte-table/magic-byte-table.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ThumbnailComponent, MagicByteTableComponent],
  template: `
  <section>
    <article>
      <h2>Welcome!</h2>
      <p>
      This app is a generalized solution to the My Magic Bytes Cryptography problem from 247CTF.com. I (Kossivi Esse) built this app with my friend,
  Zachary Heller, who had already solved the problem (please refer to his solution <a href="https://zacheller.dev/my-magic-bytes">here</a>). Here we offer (what can be considered) a check against your solution, if you have an xor
  encrypted file, you can use our Decrypter Tool to try to decrypt your file with your chosen file type.
      </p>
    </article>
    <section class = "grid-container">
      <app-thumbnail *ngFor="let thumbnailDetails of thumbnailDetailsList"
      [thumbnailDetails]="thumbnailDetails"></app-thumbnail>
    </section>
  </section>

  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  thumbnailDetailsList:ThumbnailDetails[] = [
    {
      step: 1,
      photo: '/screenshot1.jpg',
      details: 'First, go to the Decrypter Tool',
    },
    {
      step: 2,
      photo: '/screenshot2.jpg',
      details: 'Next, choose a file type/signature',
    },
    {
      step: 3,
      photo: '/screenshot3.jpg',
      details: 'Upload your file & wait for download',
    }
  ]
}
