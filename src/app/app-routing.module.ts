import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListStudentComponent } from './list-student/list-student.component'
import { CreateStudentComponent } from './create-student/create-student.component';
import { LoginStudentComponent } from './login-student/login-student.component'
import { EditComponent } from './edit/edit.component'
import { AuthGuard } from './auth.guard'
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { HeaderComponent} from './header/header.component';
const routes: Routes = [

  { path: 'List', component: ListStudentComponent},
  { path: 'Create', component: CreateStudentComponent },
  { path: 'Login', component: LoginStudentComponent },
  { path: 'edit', component: EditComponent },
  { path: 'header', component: HeaderComponent },

  { path: '', redirectTo: '/Login', pathMatch: 'full' }
  // { path: '**', redirectTo: '/Login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
