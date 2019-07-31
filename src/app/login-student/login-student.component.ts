import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-student',
  templateUrl: './login-student.component.html',
  styleUrls: ['./login-student.component.css']
})
export class LoginStudentComponent implements OnInit {
  

  constructor(private fb: FormBuilder) { }
  studentForm: FormGroup;
  orderForm: FormGroup;
  items: FormArray;

  

  ngOnInit() {
    this.studentForm = this.fb.group({
      fullName: ['', [Validators.required,Validators.minLength(6)]],
      email: ['', Validators.email],
      gender: [''],
      hobbies: [''],
      Phone_No: ['',],
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
    this.orderForm = this.fb.group({
      items: this.fb.array([ this.createItem() ])
    });
    this.studentForm.get('fullName').valueChanges.subscribe(value => {
      console.log(value);
    });

   
    
  }

  /**
   * formgroup: 
   */
  // onLoadClick(): void{
  //   const form = new FormArray([
  //     new FormControl('john',Validators.required),
  //     new FormGroup({
  //       country: new FormControl("USA",Validators.required)
      
  //     })
      
  //   ]);
  //   console.log(FormArray.length);
  //   // console.log(FormArray.value);
  //   // FormArray.Push(new FormControl('Mark',Validators.required));
  // }
  onSubmit(): void {
    console.log(this.studentForm.valid)
    if (!this.studentForm.valid) {
      return;
    }
    console.log(this.studentForm.value);
    localStorage.setItem("username",JSON.stringify(this.studentForm.value));
    
       

  }
  createItem(): FormGroup {
    return this.fb.group({
      name: '',
      description: '',
      price: ''
    });
  }
  addItem(): void {
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }
  newSubmit(){ 
    // this.addItem();
    console.log(this.orderForm.value);
  }
  
  }

