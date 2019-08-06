import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  userId: any;
  private studentUrl: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private httpClient: HttpClient,
    private http: HttpClient,
    private router:Router
  ) { }
  editForm: FormGroup;
  onSubmit(value: any) {
    console.log(value);
    return this.http.put<any>('http://localhost:3000/author/' + this.userId, value).subscribe((res) => {
      console.log(res)
      this.router.navigate(['/List'])
    });
  }
  ngOnInit() {
    this.editForm = this.fb.group({
      email: [''],
      password: [''],
      userName: ['']
    });
    this.route.paramMap.subscribe((p) => {
      console.log(p.get('userId'))
      this.userId = p.get('userId');
    });
    this.getUserDeatil()
  }


  getUserDeatil() {
    // this.httpClient.get(`http://localhost:3000/author/${this.userId}`).subscribe((res) => {
    //   console.log(res)
    this.httpClient.get(`http://localhost:3000/author/${this.userId}`, this.userId).subscribe(data => {
      this.editForm.patchValue(data);
     
    })

  }

}
