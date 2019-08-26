import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { LoginStudentComponent } from './login-student/login-student.component';
import{ HttpClientModule } from  '@angular/common/http';
import { EditComponent } from './edit/edit.component';
import { ChildComponent } from './child/child.component';
import { FilterPipe } from './filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HeaderComponent } from './header/header.component';
import { OnlyNumericDirective } from './only-numeric.directive';
import { StructuralDirective } from './structural.directive';

@NgModule({
  declarations: [
    AppComponent,
    CreateStudentComponent,
    ListStudentComponent,
    LoginStudentComponent,
    EditComponent,
    ChildComponent,
    FilterPipe,
    HeaderComponent,
    OnlyNumericDirective,
    StructuralDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
