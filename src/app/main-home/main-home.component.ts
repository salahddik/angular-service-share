import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSharesService } from '../shareservice/main-shares.service';

@Component({
  selector: 'app-main-home',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent {
  receivedData: string = ''; 

  constructor(private mainSharesService: MainSharesService) { }

  ngOnInit(): void {
   
    this.mainSharesService.currentData.subscribe(data => {
      this.receivedData = data; 
    });
  }

  // had function kadir resert data
  clearData(): void {
    this.receivedData = ''; 
  }
}
