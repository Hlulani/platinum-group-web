import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { WasteManagementComponent } from './waste-management/waste-management.component';
import { TransportAndLogisticsComponent } from './transport-and-logistics/transport-and-logistics.component';
import { ConstructionComponent } from './construction/construction.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'service', component: ServicesComponent },
  {path: 'contact-us', component: ContactUsComponent },
  {path: 'about-us', component: AboutUsComponent },
  {path: 'waste', component: WasteManagementComponent },
  {path: 'transport', component: TransportAndLogisticsComponent},
  {path: 'construction', component: ConstructionComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
