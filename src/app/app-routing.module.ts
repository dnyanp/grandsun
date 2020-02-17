import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { InstallationComponent } from './installation/installation.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RooftopComponent } from './rooftop/rooftop.component';
import { WaterpumpComponent } from './waterpump/waterpump.component';
import { WaterheaterComponent } from './waterheater/waterheater.component';
import { CctvComponent } from './cctv/cctv.component';
import { OthersolnComponent } from './othersoln/othersoln.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aboutus', component: AboutComponent },
  { path: 'contactus', component: ContactComponent },
  { path: 'installation', component: InstallationComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: 'maintenance', component: MaintenanceComponent},
  { path: 'rooftop', component: RooftopComponent },
  { path: 'waterpump', component: WaterpumpComponent },
  { path: 'waterheater', component: WaterheaterComponent },
  { path: 'cctv', component: CctvComponent},
  { path: 'othersoln', component: OthersolnComponent},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
