import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './components/navbar/navbar.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {CoursesPageComponent} from './courses-page/courses-page.component';
import {CoursPageComponent} from './cours-page/cours-page.component';
import {ProfileLayoutComponent} from './components/profile-layout/profile-layout.component';
import {RouterModule, Routes} from '@angular/router';
import {DashboardPageComponent} from './dashboard-page/dashboard-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { TeamsPageComponent } from './teams-page/teams-page.component';
import { FriendsPageComponent } from './friends-page/friends-page.component';
import { FooterPageComponent } from './components/footer-page/footer-page.component';


const route: Routes = [
  {
    path: '', component: ProfileLayoutComponent, children: [
      {path: '', redirectTo: '/profile', pathMatch: 'full'},
      {path: 'dashboard', component: DashboardPageComponent},
      {path: 'courses', component: CoursesPageComponent},
      {path: 'courses/:id', component: CoursPageComponent},
      {path: 'profile', component: ProfilePageComponent},
      {path: 'friends', component: FriendsPageComponent},
      {path: 'teams', component: TeamsPageComponent}
    ]
  }
];

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    CoursesPageComponent,
    CoursPageComponent,
    ProfileLayoutComponent,
    DashboardPageComponent,
    ProfilePageComponent,
    TeamsPageComponent,
    FriendsPageComponent,
    FooterPageComponent
    ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class ProfileModule {
}