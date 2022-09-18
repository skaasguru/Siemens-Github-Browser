import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileDetailResolver } from './profile-detail.resolver';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path: '', component: DashboardLayoutComponent, canActivateChild: [AuthenticationGuard], children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full'},
      { path: 'profile', component: ProfileListComponent},
      { path: 'profile/:login', component: ProfileDetailComponent, resolve: { profileDetail: ProfileDetailResolver }},
      { path: 'settings', component: SettingsComponent},
    ]
  },
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
