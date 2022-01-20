import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchtroumpfsService } from 'src/app/services/schtroumpfs.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input()
  schtroumpfName!: string;
  @Input()
  schtroumpfRole!: string;
  @Input()
  index!: string;

  constructor(private apiService: SchtroumpfsService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    

    this.apiService.addFriend(this.index).subscribe({
      next: data => {
        this.router.navigate(['schtroumpf']);;
       
      },
      error: err => {
        
       console.log(err);
      }
    });
  }
}
