import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "../pages/home/home-page/home-page.component";
import {AboutUsPageComponent} from "../pages/about-us/about-us-page/about-us-page.component";
import {PageNotFoundComponent} from "../pages/common/page-not-found/page-not-found.component";
import {ProductPageComponent} from "../pages/product/product-page/product-page.component";

const appRoutes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'product/:type', component: ProductPageComponent },
    { path: 'about-us', component: AboutUsPageComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}
