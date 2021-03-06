import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Asset } from './asset';

@Injectable()
export class AssetService {
  constructor(private http: HttpClient) {}

  getAssets(queryParams?): Observable<Asset[]> {
    return this.http.get<Asset[]>(environment.backendUrl + '/assets', {
      params: queryParams,
    });
  }

  addAsset(asset: Asset): Observable<object> {
    return this.http.post(environment.backendUrl + '/assets', asset);
  }

  editAsset(asset: Asset): Observable<object> {
    return this.http.put(environment.backendUrl + '/assets/' + asset.id, asset);
  }

  deleteAsset(asset: Asset): Observable<object> {
    return this.http.delete(environment.backendUrl + '/assets/' + asset.id);
  }
}
