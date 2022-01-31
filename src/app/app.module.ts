import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuItemsComponent } from './menu-items/menu-items.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MenuItemsComponent,
    CarouselComponent,
    ServicesComponent,
    FooterComponent,
    HomeComponent
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
