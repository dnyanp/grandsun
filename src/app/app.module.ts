import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { LightboxModule } from 'ngx-lightbox';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { InstallationComponent } from './installation/installation.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { SolarBenefitsComponent } from './solar-benefits/solar-benefits.component';
import { RooftopComponent } from './rooftop/rooftop.component';
import { WaterpumpComponent } from './waterpump/waterpump.component';
import { WaterheaterComponent } from './waterheater/waterheater.component';
import { CctvComponent } from './cctv/cctv.component';
import { OthersolnComponent } from './othersoln/othersoln.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    InstallationComponent,
    GalleryComponent,
    MaintenanceComponent,
    SolarBenefitsComponent,
    RooftopComponent,
    WaterpumpComponent,
    WaterheaterComponent,
    CctvComponent,
    OthersolnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LightboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
