import {Component, Inject, OnInit, Input} from '@angular/core';
import{IEmployee} from './employee'
import{IMonthlyRate} from './employee'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'employee-rate-card',
  templateUrl: 'employee-rate-card.component.html',
})
export class EmployeeRateCardComponent implements OnInit{
displayedColumns: String[] = ['Index','Month','NumOfHrs','Invoice','Salary'];
@Input() employee: IEmployee;

@Input() my_modal_title;
@Input() my_modal_content;
  /*constructor(
    public dialogRef: MatDialogRef<EmployeeRateCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IEmployee) {
      this.employee=data;
      console.log(this.employee);
    }*/


    getTotalnumOfHours(emp: any) : number{
     // console.log(emp.empMonthlyRateMap.reduce((summ, v) => summ += parseInt(v.numOfHours), 0) );
      return emp.empMonthlyRateMap.reduce((summ, v) => summ += parseInt(v.numOfHours), 0) ;
      //emp.map(t => t.empMonthlyRateMap).reduce((acc, value) => acc, 0);
    }

    getTotalnumOfHoursS(emp: any) : number{
     // console.log(emp.empMonthlyRateMap.reduce((summ, v) => summ += parseInt(v.numOfHours), 0) );
      return emp.empMonthlyRateMap.reduce((summ, v) => summ += parseInt(v.numOfHours), 0) ;
      //emp.map(t => t.empMonthlyRateMap).reduce((acc, value) => acc, 0);
    }

    getMonYear(emp: any) : number{
     // console.log(emp.empMonthlyRateMap.reduce((summ, v) => summ += parseInt(v.numOfHours), 0) );
      //month: Map = {'01':'Jan'};
      //"02":"Feb","03":"Mar","04":"Apr","05":"May","06":"Jun",
      //"07":"Jul","08":"Aug","09":"Sep","10":"Oct","11":"Nov","12":"Dec"};
      return emp.empMonthlyRateMap.reduce((summ, v) => summ += parseInt(v.numOfHours), 0) ;
      //emp.map(t => t.empMonthlyRateMap).reduce((acc, value) => acc, 0);
    }

    ngOnInit() {
      }
      constructor(public activeModal: NgbActiveModal) {}
  onNoClick(): void {
    //this.dialogRef.close();
  }

}
