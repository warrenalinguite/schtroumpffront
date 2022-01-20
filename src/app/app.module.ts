import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { SchtroumpfsComponent } from './schtroumpfs/schtroumpfs.component';
import { ItemAllComponent } from './schtroumpfs/item-all/item-all.component';
import { FriendsComponent } from './friends/friends.component';
import { ItemFriendsComponent } from './friends/item-friends/item-friends.component';
import { FormsModule } from '@angular/forms';
import { authInterceptorProviders } from './helper/auth.interceptor';
import { AuthService } from './services/auth.service';
import { SchtroumpfsService } from './services/schtroumpfs.service';
import { TokenStorageService } from './services/token-storage.service';
import { ItemComponent } from './home/item/item.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    SignupComponent,
    LoginComponent,
    SchtroumpfsComponent,
    ItemAllComponent,
    FriendsComponent,
    ItemFriendsComponent,
    ItemComponent,
    MyProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService,SchtroumpfsService,TokenStorageService, authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
