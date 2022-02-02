import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {path: 'service', component: ServicesComponent },
  {path: 'contact-us', component: ContactUsComponent },
  {path: 'about-us', component: AboutUsComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
