import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Asset } from '../asset';
import { AssetService } from '../asset.service';

@Component({
  selector: 'app-asset-manager',
  templateUrl: './asset-manager.component.html',
  styleUrls: ['./asset-manager.component.css']
})
export class AssetManagerComponent implements OnInit {

  assets: Observable<Asset[]>;
  showEditForm = false;

  constructor(private assetService: AssetService) { }

  ngOnInit() {
    this.reloadAssets();
  }

  reloadAssets() {
    this.assets = this.assetService.getAssets();
  }

  addAsset(asset: Asset) {
    this.assetService.addAsset(asset)
      .subscribe(() => this.reloadAssets());
  }

  editAsset(asset: Asset) {
    this.assetService.editAsset(asset)
      .subscribe(() => {
        this.reloadAssets();
        this.showEditForm = false;
      });
  }

  deleteAsset(asset: Asset) {
    this.assetService.deleteAsset(asset)
      .subscribe(() => this.reloadAssets());
  }

}
