import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AssetType } from '../asset-type.enum';
import { Asset } from '../asset';
import { AssetService } from '../asset.service';

@Component({
  selector: 'app-asset-manager',
  templateUrl: './asset-manager.component.html',
  styleUrls: ['./asset-manager.component.css']
})
export class AssetManagerComponent implements OnInit {

  assets: Observable<Asset[]>;
  showAddForm = false;
  showEditForm = 0;
  assetTypes = Object.values(AssetType);

  constructor(private assetService: AssetService) { }

  ngOnInit() {
    this.reloadAssets();
  }

  reloadAssets(filter?: object) {
    this.assets = this.assetService.getAssets(filter);
  }

  addAsset(asset: Asset) {
    this.assetService.addAsset(asset)
      .subscribe(() => {
        this.reloadAssets();
        this.showAddForm = false;
      });
  }

  editAsset(asset: Asset) {
    this.assetService.editAsset(asset)
      .subscribe(() => {
        this.reloadAssets();
        this.showEditForm = 0;
      });
  }

  deleteAsset(asset: Asset) {
    this.assetService.deleteAsset(asset)
      .subscribe(() => this.reloadAssets());
  }

  toggleAddForm() {
    this.showAddForm = !this.showAddForm;
    this.showEditForm = 0;
  }

  toggleEditForm(assetId: number) {
    this.showEditForm = assetId;
    this.showAddForm = false;
  }
}
