import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DecrypterToolComponent } from './decrypter-tool/decrypter-tool.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'decrypter',
    component: DecrypterToolComponent,
    title: 'Decrypter',
  }
];
