import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { SlidingAccordionComponent } from './shared/sliding-accordion/sliding-accordion.component';
import {AppRoutingModule} from "./modules/routing.module";
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CollapsePanelComponent } from './pages/home/collapse-panel/collapse-panel.component';
import {BootstrapModule} from "./modules/bootstrap.module";
import {ProductGroupService} from "./services/product-group.service";
import { ProductPageComponent } from './pages/product/product-page.component';
import { CarouselComponent } from './pages/home/carousel/carousel.component';
import {NgxCarouselModule} from "ngx-carousel";
import { AdvantagesPanelComponent } from './pages/home/advantages-panel/advantages-panel.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {ProductItemComponent} from "./pages/product/product-item/product-item.component";
import { MainPanelComponent } from './pages/home/main-panel/main-panel.component';
import { AboutUsPageComponent } from './pages/about-us/about-us-page.component';
import { AdminPageComponent } from './pages/admin/admin-page.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { EditInfoComponent } from './pages/admin/edit-info/edit-info.component';
import {AuthService} from "./services/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SlidingAccordionComponent,
    PageNotFoundComponent,
    CollapsePanelComponent,
    ProductPageComponent,
    CarouselComponent,
    AdvantagesPanelComponent,
    ProductItemComponent,
    MainPanelComponent,
    AboutUsPageComponent,
    AdminPageComponent,
    LoginComponent,
    EditInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BootstrapModule,
    NgxCarouselModule,
    CarouselModule.forRoot()
  ],
  providers: [
    ProductGroupService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
