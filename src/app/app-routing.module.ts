import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { WasteManagementComponent } from './waste-management/waste-management.component';
import { PropertyAndDevelopmentComponent } from './propert-and-development/propert-and-development.component';
import { ConstructionComponent } from './construction/construction.component';
import { ConstructionBrochureComponent } from './construction-brochure/construction-brochure.component';
import { ConstructionBrochureAluminumComponent } from './construction-brochure-Aluminum/construction-brochure-aluminum.component';
import { ConstructionBrochureGypsumComponent } from './construction-brochure-gypsum/construction-brochure-gypsum.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'service', component: ServicesComponent },
  {path: 'contact-us', component: ContactUsComponent },
  {path: 'about-us', component: AboutUsComponent },
  {path: 'waste', component: WasteManagementComponent },
  {path: 'transport', component: PropertyAndDevelopmentComponent},
  {path: 'construction', component: ConstructionComponent},
  {path: 'con-brochure', component: ConstructionBrochureComponent},
  {path: 'aluminum', component: ConstructionBrochureAluminumComponent},
  {path: 'gypsum', component: ConstructionBrochureGypsumComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
