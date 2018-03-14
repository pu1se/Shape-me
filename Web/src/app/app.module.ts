import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { SlidingAccordionComponent } from './shared/sliding-accordion/sliding-accordion.component';
import { AboutUsPageComponent } from './pages/about-us/about-us-page/about-us-page.component';
import {AppRoutingModule} from "./modules/routing.module";
import { PageNotFoundComponent } from './pages/common/page-not-found/page-not-found.component';
import { CollapsePanelComponent } from './pages/home/collapse-panel/collapse-panel.component';
import {BootstrapModule} from "./modules/bootstrap.module";
import {ProductGroupService} from "./services/product-group.service";
import { ProductPageComponent } from './pages/product/product-page/product-page.component';
import { CarouselComponent } from './pages/home/carousel/carousel.component';
import {NgxCarouselModule} from "ngx-carousel";
import { AdvantagesPanelComponent } from './pages/home/advantages-panel/advantages-panel.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SlidingAccordionComponent,
    AboutUsPageComponent,
    PageNotFoundComponent,
    CollapsePanelComponent,
    ProductPageComponent,
    CarouselComponent,
    AdvantagesPanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BootstrapModule,
    NgxCarouselModule,
    CarouselModule.forRoot()
  ],
  providers: [
    ProductGroupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
