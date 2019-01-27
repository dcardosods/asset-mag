import { AssetType } from './asset-type.enum';

interface OptionalField {
  key: string;
  label: string;
  value: string;
}

export class Asset {
  id?: number;
  name: string;
  type: AssetType;
  quantity: number;
  optionalFields: OptionalField[] = [];

  setType(type: AssetType) {
    if (type === AssetType.Vehicle && !this.optionalFields.length) {
      this.optionalFields.push({
        key: 'licensePlate',
        label: 'License plate',
        value: '',
      });
    } else {
      this.optionalFields = [];
    }

    this.type = type;
  }
}
