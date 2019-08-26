import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  private studentUrl: string = 'http://localhost:3000/author';
  constructor(
    private http: HttpClient,
  ) { }

  onSubmit(value: any) {
    console.log(value);
    this.http.post<any>(this.studentUrl, value).subscribe((res)=>{
      console.log(res)
    });
  }

  ngOnInit() {
  }

}
