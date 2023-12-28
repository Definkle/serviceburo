import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';

export const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', title: 'Landing Page', component: LandingComponent },
  {
    path: 'table',
    title: 'Table Page',
    loadComponent: () =>
      import('./components/table/table.component').then(
        (m) => m.TableComponent
      ),
  },
  {
    path: 'styled-texts',
    title: 'Styled Texts Page',
    loadComponent: () =>
      import('./components/styled-texts/styled-texts.component').then(
        (m) => m.StyledTextsComponent
      ),
  },
  {
    path: '**',
    title: 'Page not found',
    loadComponent: () =>
      import('./components/page-not-found/page-not-found.component').then(
        (m) => m.PageNotFoundComponent
      ),
  },
];
