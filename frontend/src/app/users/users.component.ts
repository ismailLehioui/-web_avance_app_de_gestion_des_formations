import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{


  authors:any;
  constructor(private _auth: AuthService){}

  ngOnInit(): void {
    this._auth.getAll()
      .subscribe(
        res=>{
          this.authors=res;
        },
        err=>{
          console.log(err);
        }
      )
    
  }

}