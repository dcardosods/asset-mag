import { AssetType } from './asset-type.enum';

export class Asset {
  id: number;
  name: String;
  type: AssetType;
  quantity: number;
}
