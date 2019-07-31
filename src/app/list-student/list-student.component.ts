import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  tableData = [];
  constructor() { }

  ngOnInit() {
    this.tableData.push(JSON.parse(localStorage.getItem("username")));
    console.log(this.tableData)
  }

}
