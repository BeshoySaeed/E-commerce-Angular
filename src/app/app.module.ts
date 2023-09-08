import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './lay-out/layout/layout.component';
import { NavBarComponent } from './lay-out/nav-bar/nav-bar.component';
import { FooterComponent } from './lay-out/footer/footer.component';
import { ProjectsComponent } from './products/projects/projects.component';
import { ProjectDataComponent } from './products/project-data/project-data.component';
import { ProjectCartComponent } from './products/project-cart/project-cart.component';
import { LogInComponent } from './login-out/log-in/log-in.component';
import { RegisterComponent } from './login-out/register/register.component';
import { PricePipe } from './pipes/price.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ProjectsCardComponent } from './products/projects-card/projects-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductsModule } from './products/products.module';
import { LoginOutModule } from './login-out/login-out.module';
import { LayOutModule } from './lay-out/lay-out.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavBarComponent,
    FooterComponent,
    ProjectsComponent,
    ProjectDataComponent,
    ProjectCartComponent,
    LogInComponent,
    RegisterComponent,
    PricePipe,
    ProjectsCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    ProductsModule,
    LoginOutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
