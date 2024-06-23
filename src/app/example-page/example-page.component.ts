import { Component } from '@angular/core';

@Component({
  selector: 'app-example-page',
  standalone: true,
  imports: [],
  template: `
    <section>
      <h1>Example</h1>
      <p class="paragraph">
      If you are interested in trying the tool, first download <a href="/my_magic_bytes.jpg.enc" download>the example file</a> used in the original 247 problem (site's not super secure, you'll have to go in your browser downloads and allow the download).
    Next, go to the Decrypter Tool, and follow the above guidelines using this jpeg signature "FF D8 FF E0 00 10 4A 46 49 46 00 01"
    (You will need to click through the table to find it). Upload your file, decrypt and you should have an image downloaded.
      </p><br>
      <h1>Read More!</h1>
      <p class="paragraph">
        To get an more indepth description of this problem and insights into other cryptography problems, please visit Zach's blog at <a href="https://zacheller.dev/my-magic-bytes">zachheller.dev</a>.
      </p>
    </section>
  `,
  styleUrl: './example-page.component.css'
})
export class ExamplePageComponent {

}
