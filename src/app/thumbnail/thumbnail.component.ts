import { Component, Input } from '@angular/core';
import { ThumbnailDetails } from '../thumbnail-details';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-thumbnail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="card">
      <img class="listing-photo" [src]="thumbnailDetails.photo" alt="image1" style="width: 100%">
      <section class="container">
        <h2 class="listing-heading">Step {{thumbnailDetails.step}}</h2>
        <p class="listing-location">{{thumbnailDetails.details}}</p>
      </section>
    </section>
  `,
  styleUrl: './thumbnail.component.css'
})
export class ThumbnailComponent {
  @Input() thumbnailDetails!: ThumbnailDetails;
}
