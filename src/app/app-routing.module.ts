import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ResultsComponent } from './results/results.component';

export const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'results', component: ResultsComponent },
  { path: '', redirectTo: '/form', pathMatch: 'full' },  // Default route
];
