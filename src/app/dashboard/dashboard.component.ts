import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  dbemial:string=""
  dbpass:string=""
  constructor(private ds:DataService) {
    this.dbemial=ds.dsemail
    this.dbpass=ds.dspass
  }

}
