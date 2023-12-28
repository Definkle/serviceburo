import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StyledTextsComponent } from './components/styled-texts/styled-texts.component';
import { TableComponent } from './components/table/table.component';

export const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', title: 'Landing Page', component: LandingComponent },
  {
    path: 'table',
    title: 'Table Page',
    component: TableComponent,
  },
  {
    path: 'styled-texts',
    title: 'Styled Texts Page',
    component: StyledTextsComponent,
  },
  { path: '**', title: 'Page not found', component: PageNotFoundComponent },
];
