import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuItemsComponent } from './menu-items/menu-items.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { WasteManagementComponent } from './waste-management/waste-management.component';
import { TransportAndLogisticsComponent } from './transport-and-logistics/transport-and-logistics.component';
import { ConstructionComponent } from './construction/construction.component';
import { ConstructionBrochureComponent } from './construction-brochure/construction-brochure.component';
import { ConstructionBrochureAluminumComponent } from './construction-brochure-Aluminum/construction-brochure-aluminum.component';
import { ConstructionBrochureGypsumComponent } from './construction-brochure-gypsum/construction-brochure-gypsum.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuItemsComponent,
    CarouselComponent,
    ServicesComponent,
    FooterComponent,
    HomeComponent,
    ContactUsComponent,
    AboutUsComponent,
    WasteManagementComponent,
    TransportAndLogisticsComponent,
    ConstructionComponent,
    ConstructionBrochureComponent,
    ConstructionBrochureAluminumComponent,
    ConstructionBrochureGypsumComponent
    
  ],
  imports: [
  
  BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot([
    //   {path:'contact', Component: ServicesComponent},
    //   {path:'services', Component: ServicesComponent}
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
