import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  cheminProfile:String = "assets/profile_.png"
  @Input()
  name!: string;
  @Input()
  role!: string;
  @Input()
  log!: boolean;
  constructor(private token: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.token.signOut();
    window.location.reload();
    
  }
}
