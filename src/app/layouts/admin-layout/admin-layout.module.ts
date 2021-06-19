import { NgModule } from "@angular/core";
import { HttpClientModule , HTTP_INTERCEPTORS} from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule,FormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { EmployeeListComponent} from "../../pages/employees/employee-list.component";
import { EmployeeRateCardComponent} from "../../pages/employees/employee-rate-card.component";
import { WelcomeComponent} from "../../pages/welcome/welcome.component";
import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
// import { RtlComponent } from "../../pages/rtl/rtl.component";

import { InterceptorService } from '../../services/interceptor.service';
import { UserService } from '../../services/user.service';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TablesComponent,
    IconsComponent,
    TypographyComponent,
    NotificationsComponent,
    MapComponent
    ,WelcomeComponent,
    EmployeeListComponent,
    EmployeeRateCardComponent,
    LoginComponent,
RegisterComponent
    // RtlComponent
  ],
  providers: [UserService,{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }],
  entryComponents:[
    EmployeeRateCardComponent
  ],

})
export class AdminLayoutModule {}
