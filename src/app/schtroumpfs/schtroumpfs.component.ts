import { Component, OnInit } from '@angular/core';
import { SchtroumpfsService } from '../services/schtroumpfs.service';

@Component({
  selector: 'app-schtroumpfs',
  templateUrl: './schtroumpfs.component.html',
  styleUrls: ['./schtroumpfs.component.css']
})
export class SchtroumpfsComponent implements OnInit {

  Schtroumpfs:any = {} ;
  friends:any = []

  constructor(private apiService: SchtroumpfsService) { 
    this.readEmployee();
  }

  ngOnInit() {}

  readEmployee(){
    this.apiService.getOneSchtroumpfs().subscribe((data) => {
     this.Schtroumpfs = data;
     this.friends = this.Schtroumpfs.friends;
    })    
  }


}
