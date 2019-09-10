import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './shared/aboutus/aboutus.component';
import { SettingsComponent } from './settings/settings/settings.component';
import { AdmintabComponent } from './admin/admintab/admintab.component';
import { ProductComponent } from './user/product/product.component';


const routes: Routes = [
  {path: '', redirectTo: '/aboutus', pathMatch: 'full'},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'admin', component: AdmintabComponent},
  {path: 'product', component: ProductComponent},
  {path: 'settings', component: SettingsComponent},
  {path: '**', redirectTo: '/aboutus', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
