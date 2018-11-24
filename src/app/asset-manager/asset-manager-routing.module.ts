import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssetManagerComponent } from './asset-manager/asset-manager.component';

const routes: Routes = [
  {path: 'asset-manager', component: AssetManagerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetManagerRoutingModule { }
