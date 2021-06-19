import {Component, Inject, OnInit} from '@angular/core';
import{IEmployee} from './employee';
import{IMonthlyRate} from './employee';
import{EmployeeRateCardComponent} from './employee-rate-card.component'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'ems-employees',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
  pageTitle: String = 'Employee List!';
  imageUrl: String = 'assets/img/avatar.png';
  imageWidth: Number =50;
  imageMargin: Number=2;
  showImage: boolean =false;
  listFilter: String= 'kumar';
  panelOpenState = false;
  displayedColumns: String[] = ['Index','Month','NumOfHrs','Invoice','Salary'];
  employees: IEmployee[]=[ {
    "id": "1",
    "firstName": "Sowmya",
    "lastName": "Kaukuntla",
    "email": null,
    "primaryContactNumber": null,
    "alternativeContactNumber": null,
    "totalNumOfHours":0,
    "candidateRate": 75,
    "totalCandidateRate":0,
    "clientRate": 94,
    "totalClientRate":0,
    "salaryRate": 71.92,
    "totalSalary":0,
    "empMonthlyRateMap": [
      {   "monYear":"012017",
      "numOfHours": 168,
      "salary": 12083.33,
      "inv": 15792
      },
      { "monYear":"022017",
      "numOfHours": 160,
      "salary": 11507.2,
      "inv": 15040
    },
    { "monYear":"032017",
    "numOfHours": 160,
    "salary": 11507.2,
    "inv": 15040
    },
    { "monYear":"042017",
    "numOfHours": 160,
    "salary": 11507.2,
    "inv": 15040
    },
    { "monYear":"052017",
    "numOfHours": 160,
    "salary": 11507.2,
    "inv": 15040
    },
    { "monYear":"062017",
    "numOfHours": 160,
    "salary": 11507.2,
    "inv": 15040
    },
    { "monYear":"072017",
    "numOfHours": 160,
    "salary": 11507.2,
    "inv": 15040
    },
    { "monYear":"082017",
    "numOfHours": 160,
    "salary": 11507.2,
    "inv": 15040
    },
    { "monYear":"092017",
    "numOfHours": 160,
    "salary": 11507.2,
    "inv": 15040
    },
    { "monYear":"102017",
    "numOfHours": 160,
    "salary": 11507.2,
    "inv": 15040
    },
    { "monYear":"112017",
    "numOfHours": 160,
    "salary": 11507.2,
    "inv": 15040
    },
    { "monYear":"122017",
    "numOfHours": 160,
    "salary": 11507.2,
    "inv": 15040
    }]

},
{
  "id": "2",
  "firstName": "Kranthi Kumar",
  "lastName": "Manasa",
  "email": null,
  "primaryContactNumber": null,
  "alternativeContactNumber": null,
  "totalNumOfHours":0,
  "candidateRate": 70,
  "clientRate": 90,
  "salaryRate": 61.92,
  "empMonthlyRateMap": [
    {   "monYear":"012018",
    "numOfHours": 168,
    "salary": 12083.33,
    "inv": 15792
  },{ "monYear":"022018",
  "numOfHours": 160,
  "salary": 11507.2,
  "inv": 15040
}]

}];

  // Gets the total # of numOfHours for each Employee.
 getTotalnumOfHours(emp: any) : number{
  // console.log(emp.empMonthlyRateMap.reduce((summ, v) => summ += parseInt(v.numOfHours), 0) );
   return emp.empMonthlyRateMap.reduce((summ, v) => summ += parseInt(v.numOfHours), 0) ;
   //emp.map(t => t.empMonthlyRateMap).reduce((acc, value) => acc, 0);
 }

 getTotalClientRate(emp: any) : number{
   //totalHrs= emp.empMonthlyRateMap.reduce((summ, v) => summ += parseInt(v.numOfHours), 0);

   return emp.clientRate * (this.getTotalnumOfHours(emp));
   //emp.map(t => t.empMonthlyRateMap).reduce((acc, value) => acc, 0);
 }
 getTotalCandidateRate(emp: any) : number{
   //totalHrs= emp.empMonthlyRateMap.reduce((summ, v) => summ += parseInt(v.numOfHours), 0);

   return emp.candidateRate * (this.getTotalnumOfHours(emp));
   //emp.map(t => t.empMonthlyRateMap).reduce((acc, value) => acc, 0);
 }
 getGrossProfit(emp: any) : number{
   return this.getTotalClientRate(emp) - this.getTotalCandidateRate(emp);
   //emp.map(t => t.empMonthlyRateMap).reduce((acc, value) => acc, 0);
 }

 getTotalSalary(emp: any) : number{
   //totalHrs= ;

   return emp.salaryRate * (this.getTotalnumOfHours(emp));
   //emp.map(t => t.empMonthlyRateMap).reduce((acc, value) => acc, 0);
 }

 colClick(row){
   console.log('Col:',row);
 }

 title = 'ng-bootstrap-modal-demo';
  closeResult: string;
  modalOptions:NgbModalOptions;

  constructor(
    private modalService: NgbModal
  ){
    this.modalOptions = {
      backdrop:'static',
      backdropClass:'customBackdrop'
    }
  }

  opens(content) {
    this.modalService.open(content, this.modalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

 //constructor() {}
/*public dialog: MatDialog;
 openDialog(emp: any): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass='ems-no-padding-dialog';
    dialogConfig.height='auto';
    dialogConfig.width='600px';
    dialogConfig.data=emp;
    //dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.position = {
    'top': '100',
    left: '100'
    };

    const dialogRef = this.dialog.open(EmployeeRateCardComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }*/
  open(emp: any) {
    console.log(emp);
    const modalRef = this.modalService.open(EmployeeRateCardComponent);
    modalRef.componentInstance.my_modal_title = 'I your title';
    modalRef.componentInstance.my_modal_content = 'I am your content';
    modalRef.componentInstance.employee = emp;
  }
  ngOnInit() {}

}
