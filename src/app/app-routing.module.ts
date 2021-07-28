import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatFormComponent } from './plat-form/plat-form.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'root',
  pathMatch: 'full',
},
{
  path: 'root',
  component: PlatFormComponent
}   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
