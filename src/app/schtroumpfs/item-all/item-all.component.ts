import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchtroumpfsService } from 'src/app/services/schtroumpfs.service';

@Component({
  selector: 'app-item-all',
  templateUrl: './item-all.component.html',
  styleUrls: ['./item-all.component.css']
})
export class ItemAllComponent implements OnInit {

  @Input()
  schtroumpfName!: string;
  @Input()
  schtroumpfRole!: string;
  @Input()
  index!: string;

  constructor(private apiService: SchtroumpfsService , private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    

    this.apiService.deleteFriend(this.index).subscribe({
      next: data => {
       
        window.location.reload();
      },
      error: err => {
        
       console.log(err);
      }
    });
  }
 
}
