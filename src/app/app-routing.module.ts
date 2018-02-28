import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudycatalogComponent} from './studycatalog/studycatalog.component';
import {StudycatalogAddComponent} from './studycatalog-add/studycatalog-add.component';


const routes: Routes = [
  {path: '', redirectTo: '/studycatalog', pathMatch: 'full'},
  {path: 'studycatalog', component: StudycatalogComponent},
  {path: 'studycatalog/add', component: StudycatalogAddComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
