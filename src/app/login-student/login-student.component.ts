import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../services/authentication.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-login-student',
  templateUrl: './login-student.component.html',
  styleUrls: ['./login-student.component.css']
})
export class LoginStudentComponent implements OnInit {
  private studentUrl: string = 'http://10.10.30.75:3000/users/login';

  constructor(private fb: FormBuilder,
    private http: HttpClient,
    private authService: AuthenticationService,
    private router: Router,
  ) { }
  studentForm: FormGroup;
  // orderForm: FormGroup;
  // items: FormArray;



  ngOnInit() {
    this.studentForm = this.fb.group({
      // fullName: ['', [Validators.required,Validators.minLength(6)]],
      email: ['', Validators.email],
      password: [''],
      // gender: [''],
      // hobbies: [''],
      // father_name: [''],
      // mother_name: [''],
      // address: this.fb.group({
      // city: [''],
      // state: ['']

    });


    //   gender: new FormGroup({
    //     male: new FormControl(),
    //     female: new FormControl()

    // })


    // this.orderForm = this.fb.group({
    //   items: this.fb.array([ this.createItem() ])
    // // });
    // this.studentForm.get('fullName').valueChanges.subscribe(value => {
    //   console.log(value);
    // });



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
  // onSubmit(): void {
  // console.log(this.studentForm.valid)
  // if (!this.studentForm.valid) {
  //   return;
  // }
  // console.log(this.studentForm.value);
  // localStorage.setItem("username",JSON.stringify(this.studentForm.value));


  onSubmit(value: any) {
    console.log(this.studentForm.value)
    let { email, password } = this.studentForm.value;
    this.authService.login(email, password).subscribe(() => { });
    // this.http.post<any>(this.studentUrl, this.studentForm.value).subscribe((res)=>{
    //   console.log(res)
    // });
    this.router.navigate(['/List']);
  }
  // createItem(): FormGroup {
  //   return this.fb.group({
  //     name: '',
  //     description: '',
  //     price: ''
  //   });
  // }
  // addItem(): void {
  //   this.items = this.orderForm.get('items') as FormArray;
  //   this.items.push(this.createItem());
  // }

  // newSubmit(){ 
  //   // this.addItem();
  //   console.log(this.orderForm.value);
  // }

  
}

