import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "../pages/home/home-page.component";
import {ProductPageComponent} from "../pages/product/product-page.component";
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';

const appRoutes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'product/:type', component: ProductPageComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}
