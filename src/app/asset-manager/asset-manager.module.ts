import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AssetManagerRoutingModule } from './asset-manager-routing.module';
import { AssetManagerComponent } from './asset-manager/asset-manager.component';
import { AssetService } from './asset.service';
import { AssetFormComponent } from './asset-form/asset-form.component';
import { AssetFilterComponent } from './asset-filter/asset-filter.component';
import { AssetSorterComponent } from './asset-sorter/asset-sorter.component';

@NgModule({
  declarations: [
    AssetManagerComponent,
    AssetFormComponent,
    AssetFilterComponent,
    AssetSorterComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    AssetManagerRoutingModule,
  ],
  providers: [AssetService],
})
export class AssetManagerModule {}
