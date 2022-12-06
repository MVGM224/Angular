import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit { table: any[] = [];
  selectedPage!: string;
  searchtext:any;

  constructor(
    private AuthService: AuthService,
    private http: HttpClient,
    private Router: Router
  ) {}

  ngOnInit(): void {
    this.getmethod('1');
    
  }
  logout() {
    localStorage.clear();
    this.Router.navigate(['']);
  }

  getmethod(page: string) {
    this.selectedPage = page;
    this.AuthService.getdata1(page).subscribe((res) => {
      console.log(res);
      this.table = res.data;
    });
  }
  delete(item: any) {
    this.table.splice(item , 1);
  }

  search(){
    
    }
  }


