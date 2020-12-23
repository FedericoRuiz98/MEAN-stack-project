import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FetchComponent } from './components/fetch/fetch.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: FetchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
