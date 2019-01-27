import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssetManagerModule } from './asset-manager/asset-manager.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AssetManagerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
