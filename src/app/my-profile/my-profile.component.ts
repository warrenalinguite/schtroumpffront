import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SchtroumpfsService } from '../services/schtroumpfs.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  

  constructor(private apiService: SchtroumpfsService, private router: Router) { }

  ngOnInit():  void {
  }

  onSubmit(forms: NgForm): void {
    

    this.apiService.modifyRole(forms.value).subscribe({
      next: data => {
        console.log(data);
        window.location.reload();
        
      },
      error: err => {
        console.log(err);
      }
    });
  }

}
