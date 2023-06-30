import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultsComponent } from './shared/search-results/search-results.component';
import { ProductsListComponent } from './shared/products-list/products-list.component';


const routes: Routes = [
  {path:'',component: ProductsListComponent},
  {path:'search-results',component: SearchResultsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
