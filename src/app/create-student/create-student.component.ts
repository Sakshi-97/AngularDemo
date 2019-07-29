import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  constructor() { }
  onSubmit(value: any){
    console.log(value);
  }

  ngOnInit() {
  }

}
