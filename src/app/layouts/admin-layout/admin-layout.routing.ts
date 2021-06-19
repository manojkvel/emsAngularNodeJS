import { Routes } from "@angular/router";
import { AuthGuard } from '../../helpers/auth.guard';

//import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { EmployeeListComponent } from "../../pages/employees/employee-list.component";
//import { IconsComponent } from "../../pages/icons/icons.component";
//import { MapComponent } from "../../pages/map/map.component";
//import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { WelcomeComponent } from "../../pages/welcome/welcome.component";
import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
//import { TypographyComponent } from "../../pages/typography/typography.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
//  { path: "dashboard", component: DashboardComponent },
//  { path: "icons", component: IconsComponent },
  //{ path: "maps", component: MapComponent },
//  { path: "notifications", component: NotificationsComponent },


  { path: "welcome", component: WelcomeComponent , canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: "user", component: UserComponent , canActivate: [AuthGuard]},
  { path: "tables", component: TablesComponent },
//  { path: "typography", component: TypographyComponent },
  { path: "ems", component: EmployeeListComponent , canActivate: [AuthGuard]}
  // { path: "rtl", component: RtlComponent }
];
