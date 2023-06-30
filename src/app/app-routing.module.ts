import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultsComponent } from './shared/search-results/search-results.component';
import { ProductsListComponent } from './shared/products-list/products-list.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';


const routes: Routes = [
  {path:'',component: ProductsListComponent},
  {path:'search-results',component: SearchResultsComponent},
  {path:'**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
