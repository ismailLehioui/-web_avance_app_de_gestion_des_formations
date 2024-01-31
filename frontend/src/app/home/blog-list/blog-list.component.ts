import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit{

  articles: any;
  authors:any;
  id:any;

  constructor(private data: DataService, private _auth:AuthService){}

  ngOnInit(): void {
    this.data.getAll()
      .subscribe(
        res=>{
          this.articles=res;
          
        },
        err=>{
          console.log(err);
        }
      )

      // this._auth.getById(this.articles.idAuthor)
      // .subscribe(
      //   res=>{
      //     this.authors=res;
      //   },
      //   err=>{
      //     console.log(err);
      //   }
      // )
    
  }
}
