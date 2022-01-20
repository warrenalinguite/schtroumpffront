import { Component } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  cheminFondEcran:String = "assets/schtroumpf_m.png"
  
  isLoggedIn = false;
  
  username!: string;
  role!: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.username = user.username;
      this.role = user.role
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
