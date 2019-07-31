import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListStudentComponent } from './list-student/list-student.component'
import { CreateStudentComponent } from './create-student/create-student.component';
import { LoginStudentComponent } from './login-student/login-student.component'
const routes: Routes = [
  
    { path:'List',component:ListStudentComponent},
    { path:'Create',component:CreateStudentComponent},
    { path:'Login',component:LoginStudentComponent},
    { path: '', redirectTo:'/List', pathMatch: 'full'}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
