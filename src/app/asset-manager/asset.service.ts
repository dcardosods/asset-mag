import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Asset } from './asset';

@Injectable()
export class AssetService {

  constructor(private http: HttpClient) { }

  getAssets(): Observable<Asset[]> {
    return this.http.get<Asset[]>(environment.backendUrl + '/assets');
  }

  addAsset(asset: Asset): Observable<Object> {
    return this.http.post(environment.backendUrl + '/assets', asset);
  }

  deleteAsset(asset: Asset): Observable<Object> {
    return this.http.delete(environment.backendUrl + '/assets/' + asset.id);
  }
}
