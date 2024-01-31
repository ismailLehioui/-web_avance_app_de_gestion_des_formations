import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  transferredData: any;

  @Input() dataFromAppComponent: String = "";
  id: any;

  constructor(private act: ActivatedRoute,public _auth: AuthService, private router: Router){
    this.transferredData = this._auth.getData();
  }

  ngOnInit(): void {


    
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  onButtonClick(){
    //this.id = this.act.snapshot.paramMap.get('id');
    console.log(this.id);
    this._auth.deleteAuth(this.transferredData)
      .subscribe(
        res=>{
          console.log(res);
          this.router.navigate(['/login']);
        },
        err=>{
          console.log(err);
        }
      )
  }
  updatearticles(){
    this.id = this.act.snapshot.paramMap.get('id');
    this.router.navigate(['/author/'+this.id]);
  }

}
