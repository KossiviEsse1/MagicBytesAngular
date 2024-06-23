import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DecrypterToolComponent } from './decrypter-tool/decrypter-tool.component';
import { EncrypterToolComponent } from './encrypter-tool/encrypter-tool.component';

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
  },
  {
    path: 'encrypter',
    component: EncrypterToolComponent,
    title: 'Encrypter',
  }
];
