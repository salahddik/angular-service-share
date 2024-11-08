import { Component } from '@angular/core';
import { MainSharesService } from '../shareservice/main-shares.service';

@Component({
  selector: 'app-main-about',
  standalone: true,
  imports: [],
  templateUrl: './main-about.component.html',
  styleUrls: ['./main-about.component.css']
})
export class MainAboutComponent {
  constructor(private mainSharesService: MainSharesService) { }

  sendData() {
    const data = { message: 'Hello from about Component' };
    this.mainSharesService.changeData(data.message);
  }
}
