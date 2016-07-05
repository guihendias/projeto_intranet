import { provideRouter, RouterConfig }  from '@angular/router';
import { FormComponent } from './app.form'
import { HomeComponent } from './app.home'
import { CardsComponent } from './app.cards'

export const routes: RouterConfig = [
    { path: '', component: HomeComponent },
    {
      path: 'form',
      component: FormComponent
    },
  {
     path: 'cards',
     component: CardsComponent
   }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
