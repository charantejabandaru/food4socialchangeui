import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './shared/products-list/products-list.component';
import { ProductsService } from './shared/products.service';
import { HttpClientModule } from '@angular/common/http';
import { TopbarComponent } from './shared/topbar/topbar.component';
import { ProductComponent } from './shared/product/product.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { SearchResultsComponent } from './shared/search-results/search-results.component';
import { SearchService } from './shared/search.service';
import { ErrorPageComponent } from './shared/error-page/error-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    TopbarComponent,
    ProductComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    SearchResultsComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  providers: [ProductsService,SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
