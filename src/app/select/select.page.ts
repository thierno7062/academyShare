import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.page.html',
  styleUrls: ['./select.page.scss'],
})
export class SelectPage implements OnInit {
  users = [];

  constructor(private http: HttpClient) {
    this.loadUsers();
  }

  ngOnInit() {
  }

  loadUsers(){
    this.http
    .get('https://randomuser.me/api/?results=20&seed=simonics')
    .subscribe((res: any) =>{
      this.users = res.results;
      console.log(this.users);

    });
  }

  selectChanged(event: any){
    console.log('CHANGED: ', event);

  }
}
