import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
table:any;
  constructor(private AuthService: AuthService) { }

  ngOnInit(): void { this.get('1');
  }
get(page: string){
  this.AuthService.getdata1(page).subscribe(res=>{
   console.log(res);
   this.table = res.data;
    })

}
}
