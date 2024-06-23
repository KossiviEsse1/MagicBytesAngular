import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  template: `
  <main>
    <header class="brand-name">
      <span>
        <h1 class="left"><a [routerLink]="['/']"> XOR Decrypter </a></h1>
        <button class="primary right">Example</button>
        <button class="primary right" [routerLink]="['/encrypter']">Encrypter</button>
        <button class="primary right" [routerLink]="['/decrypter']">Decrypter</button>
      </span>
    </header>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'magic-bytes';
}
