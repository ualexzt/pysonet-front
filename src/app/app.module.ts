import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './main/components/navbar/navbar.component';
import { FriendsComponent } from './main/components/friends/friends.component';
import { TeamsComponent } from './main/components/teams/teams.component';
import {ProfileModule} from './profile/profile.module';
import { MainLayoutComponent } from './main/components/main-layout/main-layout.component';
import {HomePageComponent} from './main/home-page/home-page.component';
import { AboutComponent } from './main/components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FriendsComponent,
    TeamsComponent,
    MainLayoutComponent,
    HomePageComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
