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

  constructor(private assetService: AssetService) { }

  ngOnInit() {
    this.assets = this.assetService.getAssets();
  }

}
