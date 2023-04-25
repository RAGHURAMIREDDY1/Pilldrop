import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './Carousel/carousel/carousel.component';
import { HomeComponent } from './components/pages/home/home.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent, CarouselComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
