import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './Route/home/home.component';
import { AboutComponent } from './Route/about/about.component';
import { ProductsComponent } from './Route/products/products.component';
import { ContactComponent } from './Route/contact/contact.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { LaptopComponent } from './Route/products/laptop/laptop.component';
import { MobileComponent } from './Route/products/mobile/mobile.component';
import { TelivisionComponent } from './Route/products/telivision/telivision.component';
import { WashingComponent } from './Route/products/washing/washing.component';
import { CardComponent } from './Route/contact/card/card.component';
import { ParentComponent } from './parent/parent.component';




const appRoutes : Routes=[
  {path:'' ,component:HomeComponent},
  {path:'about' ,component:AboutComponent},
  {path:'contact' ,component:ContactComponent},
  {path:'buy-product',component:ParentComponent},
  {path:'product',component:ProductsComponent  , children:[
    {path:'laptop' ,component:LaptopComponent},
    {path:'mobile' ,component:MobileComponent},
    {path:'telivision' ,component:TelivisionComponent},
    {path:'wasing' ,component:WashingComponent},
  ]}
]



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ContactComponent,
    LaptopComponent,
    MobileComponent,
    TelivisionComponent,
    WashingComponent,
    CardComponent,
    ParentComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
