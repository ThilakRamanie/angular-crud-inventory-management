import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialsListComponent } from './components/items-list/items-list.component';
import { AddTutorialComponent } from './components/add-item/add-item.component';

const routes: Routes = [
  { path: '', redirectTo: 'inventories', pathMatch: 'full' },
  { path: 'inventories', component: TutorialsListComponent },
  { path: 'add', component: AddTutorialComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
