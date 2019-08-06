import { Component, OnInit, } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { Subscriber } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  private studentUrl: string = 'http://10.10.30.75:3000/users/registration';
  author = [];
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get("http://localhost:3000/author").subscribe((res: any) => {
      console.log(res);
      this.author = res;
    });
    // this.author.push(JSON.parse(localStorage.getItem("username")));
    //  console.log(this.author);
  
  }
  edit(userId) {
    this.router.navigate(['/edit', { userId: userId }]);
  }
  remove(userId) {
    console.log("delete", userId); 
    for(let index of this.author) {
      if(index.id==userId) {
        this.author.pop();
      }
    }
    console.log("author",this.author);
    // this.author.spli(usesrId,1);
    console.log("after delete", userId); 
    //  this.http.delete("http://localhost:3000/author/" + userId);
  }

}