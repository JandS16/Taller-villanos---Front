import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { villanosComponent } from './components/villanos/villanos.component';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';
import { VillanoDetailsComponent } from './components/villano-details/villano-details.component';




const APP_ROUTE: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'villanos', component: villanosComponent },
    { path: 'detalles/:id', component:  HeroDetailsComponent },
    { path: 'detalles2/:id', component:  VillanoDetailsComponent },
    { path: '**', pathMatch: 'full', redirectTo:'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTE);
