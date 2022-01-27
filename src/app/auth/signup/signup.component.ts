import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SchtroumpfsService } from 'src/app/services/schtroumpfs.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form: any = {
    username: null,
    email: null,
    password: null,
    role: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router , private apiSctroumpf: SchtroumpfsService) { }

  ngOnInit():  void {
  }

  onSubmit(forms: NgForm): void {
    const { username, email, password } = forms.value;

   this.authService.register(forms.value).subscribe({
      next: data => {
       console.log(data);

       this.apiSctroumpf.getOne(forms.value).subscribe({
         next: friend => {
          this.apiSctroumpf.addFriend(friend.friend).subscribe({
            next: friend => {
             console.log(friend);
            },
            error: err => {
              console.log(err);
            }
  
          })

         },
         error: err =>{
           console.log(err);
         }
       });
       this.isSuccessful = true;
       this.isSignUpFailed = false;
       this.router.navigate(['login']);

        
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
   
  }

}
