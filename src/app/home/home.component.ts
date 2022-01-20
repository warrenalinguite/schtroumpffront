import { Component, OnInit } from '@angular/core';
import { SchtroumpfsService } from '../services/schtroumpfs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Schtroumpfs:any = [];

  constructor(private apiService: SchtroumpfsService) { 
    this.readEmployee();
  }

  ngOnInit() {}

  readEmployee(){
    this.apiService.getAllSchtroumpfs().subscribe((data) => {
     this.Schtroumpfs = data;
    })    
  }

}
