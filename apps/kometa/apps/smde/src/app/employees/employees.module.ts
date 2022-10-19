import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { SmdeEmployeeFeatureModule } from '@kometa/smde/employee/feature';

@NgModule({
  imports: [CommonModule, EmployeesRoutingModule, SmdeEmployeeFeatureModule],
  declarations: [EmployeesComponent],
})
export class EmployeesModule {}
