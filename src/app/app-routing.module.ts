import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { SchtroumpfsComponent } from './schtroumpfs/schtroumpfs.component';

const routes: Routes = [
  { path: 'Home',  component: HomeComponent },
  { path: 'schtroumpf', component: SchtroumpfsComponent },
  { path: 'myprofile', component: MyProfileComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'login',  component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: 'Home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
