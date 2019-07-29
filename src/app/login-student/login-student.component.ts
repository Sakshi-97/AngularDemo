import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-login-student',
  templateUrl: './login-student.component.html',
  styleUrls: ['./login-student.component.css']
})
export class LoginStudentComponent implements OnInit {

  constructor() { }
  studentForm: FormGroup;

  ngOnInit() {
    this.studentForm= new FormGroup({
      fullName : new FormControl(),
      email : new FormControl()

    });
  }

  /**
   * formgroup: 
   */
onSubmit(): void{
  console.log(this.studentForm.value);
}
}
