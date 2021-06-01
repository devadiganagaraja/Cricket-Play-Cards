import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayCardsComponent } from './play-cards/play-cards.component';
import { AppInitService } from './services/app-init.service';
import { SharedService } from './shared/shared';
import { HttpService } from './services/http-services.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomePageComponent } from './home-page/home-page.component';

export function initializeApp(appInitService: AppInitService ){
return(): Promise<any> =>{
  return appInitService.Init();
}
}

@NgModule({
  declarations: [
    AppComponent,
    PlayCardsComponent,
    LoginComponent,
    RegisterComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HttpService,
    SharedService,
    AppInitService, {provide: APP_INITIALIZER, useFactory:initializeApp, deps:[AppInitService],multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
