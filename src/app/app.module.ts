import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { villanosComponent } from './components/villanos/villanos.component';
import { AboutComponent } from './components/about/about.component';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { VillanoDetailsComponent } from './components/villano-details/villano-details.component';

// RUTAS

import { APP_ROUTING } from './app.routes';


// SERVICIOS

import { HeroService } from './service/hero.service';
import { HeroCardComponent } from './components/hero-card/hero-card.component';

import { VillanoService } from './service/villano.service';
import { VillanoCardComponent } from './components/villano-card/villano-card.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent,
    HeroDetailsComponent,
    HeroSearchComponent,
    HeroCardComponent,    
    villanosComponent,
    VillanoDetailsComponent,
    VillanoCardComponent   
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroService,
    VillanoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
