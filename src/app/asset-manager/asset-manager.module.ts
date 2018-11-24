import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AssetManagerRoutingModule } from './asset-manager-routing.module';
import { AssetManagerComponent } from './asset-manager/asset-manager.component';
import { AssetService } from './asset.service';

@NgModule({
  declarations: [AssetManagerComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AssetManagerRoutingModule
  ],
  providers: [
    AssetService
  ]
})
export class AssetManagerModule { }
