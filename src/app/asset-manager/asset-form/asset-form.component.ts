import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Asset } from '../asset';
import { AssetType } from '../asset-type.enum';

@Component({
  selector: 'app-asset-form',
  templateUrl: './asset-form.component.html',
  styleUrls: ['./asset-form.component.css']
})
export class AssetFormComponent implements OnInit {

  @Input() asset = new Asset();
  @Output() submitted = new EventEmitter<Asset>();

  assetTypes = Object.keys(AssetType);

  constructor() { }

  ngOnInit() {
  }

  onSubmit(asset: Asset) {
    this.submitted.emit(asset);
    this.asset = new Asset();
  }

}
