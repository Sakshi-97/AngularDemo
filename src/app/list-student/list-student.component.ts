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
  author1 = [];
  constructor(private http: HttpClient, private router: Router) { }
  userDetail: any;

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

  detail(user) {
    this.userDetail = user;
    console.log(this.userDetail)
  }

  remove(userId) {
    console.log("delete", userId);
    this.http.delete("http://localhost:3000/author/" + userId).subscribe((res: any) => {
      console.log(res);

    });

    let index = this.author.findIndex((e) => {
      console.log(e, e.id, userId, e.id === userId)
      return e.id === userId;
    });
    console.log(index)
    this.author.splice(index, 1);
    console.log(this.author)
  }


  goToSearch(searchText: any) {
    var author = this.author.filter((e) => e.email.toLowerCase().match(searchText.toLowerCase())  || e.userName.toLowerCase().match(searchText.toLowerCase()));
    // return search;
    // console.log(search);
    console.log(this.author)
    this.author = author;
  }
  getWelcomeMessage(event) {
    console.log(event)
  }

}

