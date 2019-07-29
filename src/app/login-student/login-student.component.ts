import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login-student',
  templateUrl: './login-student.component.html',
  styleUrls: ['./login-student.component.css']
})
export class LoginStudentComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  studentForm: FormGroup;

  ngOnInit() {
    this.studentForm = this.fb.group({
      fullName: ['', Validators.required],
      email: [''],
      gender: [''],
      hobbies: [''],
      Phone_No: [''],
      father_name: [''],
      mother_name: [''],
      address: this.fb.group({
        city: [''],
        state: ['']
       
      }),
    //   gender: new FormGroup({
    //     male: new FormControl(),
    //     female: new FormControl()

    // })
  });
  }

  /**
   * formgroup: 
   */
  onSubmit(): void {
    console.log(this.studentForm.valid)
    if(!this.studentForm.valid){
      return;
    }
    console.log(this.studentForm.value);


  }
}
