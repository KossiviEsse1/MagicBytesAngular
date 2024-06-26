import { Component, ViewChild } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, MatMenuModule, MatButtonModule],
  template: `
  <main>
    <header class="brand-name">
      <span>
        <h1 class="left"><a [routerLink]="['/']"> XOR Decrypter </a></h1>
        <section class="navbarMenu">
          <button class="primary right" [matMenuTriggerFor]="menu" mat-button>Menu</button>
          <mat-menu #menu="matMenu">
            <button mat-menu-item [routerLink]="['/']">Home</button>
            <button mat-menu-item [routerLink]="['/decrypter']">Decrypter</button>
            <button mat-menu-item [routerLink]="['/encrypter']">Encrypter</button>
            <button mat-menu-item [routerLink]="['/example']">Example</button>
          </mat-menu>
        </section>
        <section class="navbar">
          <button class="primary right" [routerLink]="['/example']">Example</button>
          <button class="primary right" [routerLink]="['/encrypter']">Encrypter</button>
          <button class="primary right" [routerLink]="['/decrypter']">Decrypter</button>
        </section>
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
