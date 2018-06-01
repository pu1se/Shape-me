import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "./pages/home/home-page.component";
import {ProductPageComponent} from "./pages/product/product-page.component";
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import {AboutUsPageComponent} from "./pages/about-us/about-us-page.component";
import {AdminPageComponent} from "./pages/admin/admin-page.component";

const appRoutes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'catalog/:type', component: ProductPageComponent },
    { path: 'contacts', component: AboutUsPageComponent },
    { path: 'admin', component: AdminPageComponent },
    {path: '404', component: PageNotFoundComponent},
    { path: '**', redirectTo: '/404' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}
