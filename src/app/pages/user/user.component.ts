import { Component, OnInit , Input} from "@angular/core";
import{IEmployee} from '../employees/employee'
import{IMonthlyRate} from '../employees/employee'

@Component({
  selector: "app-user",
  templateUrl: "user.component.html"
})
export class UserComponent implements OnInit {
  @Input() employee: IEmployee;
  constructor() {}

  ngOnInit() {}
count: number=0;
  public addRow(): void  {
    this.count+=1;
    document.getElementById("rcbt").innerHTML+="<tr id=\"rcbtr"+this.count+"\">"+
      "<td contenteditable=\"true\"></td>"+
      "<td contenteditable=\"true\"></td>"+
      "<td contenteditable=\"true\"></td>"+
      "<td contenteditable=\"true\"></td>"+
      "<td > <a href=\"javascript:void(0)\" (click)=\"removeRow()\">"+
      "<i class=\" tim-icons icon-simple-delete\"> </i></a> </td>"+
    "</tr>";
    console.log("Row Added");
  }

  public save(): IEmployee{
    console.log(document)

    return
  }

  public removeRow(): void  {
    console.log("Row Removed");
    document.getElementById("rcbtr").remove();

  }
}
