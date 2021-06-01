import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlayCardsComponent } from './play-cards/play-cards.component'
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component:  LoginComponent},
  { path: 'playCards/:gameRef', component:  PlayCardsComponent},
  { path:'register' , component: RegisterComponent},
  { path: 'homePage' , component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
