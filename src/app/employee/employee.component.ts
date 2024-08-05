import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employee: string="maxwell"

  empImg: string="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"

  getDesg(event:any){
    console.log(event.target.value)
  }

  getSalary(sal:any){
    console.log(sal.value);
    
  }
}
