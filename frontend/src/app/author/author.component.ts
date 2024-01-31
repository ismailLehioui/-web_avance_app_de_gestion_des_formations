import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit{

  id: any;
  author: any;
  articles: any;
  constructor(private act: ActivatedRoute, private _auth: AuthService, private data:DataService,private router: Router){}

  ngOnInit(): void {

    
    this.id = this.act.snapshot.paramMap.get('id');
    this._auth.getById(this.id)
      .subscribe(
        res=>{
          this.author = res;
          console.log(this.author);
        }
      );
      this.data.getArticleByIdAuthor(this.id)
        .subscribe(
          res=>{
            this.articles=res;
          },
          err=>{
            console.log(err);
          }
        );
        
  }

  confirmDelete(itemId: string): void {
    const userConfirmed = window.confirm("Are you sure you want to delete this item?");
    if (userConfirmed) {
      // Appel à la fonction de suppression si l'utilisateur confirme
      this.deleteArticle(itemId);
    } else {
      // Actions à prendre si l'utilisateur annule
      console.log("Delete canceled by user.");
    }
  }
  
  

  deleteArticle(id: any){
    //this.id = this.act.snapshot.paramMap.get('idAu');
    this.data.deleteArtById(id)
      .subscribe(
        res=>{
          console.log(res);
        },
        err=>{
          console.log(err);
        }
      );
      this.router.navigate(['/author/idAu']);
      location.reload();

  }


  prepare(){
      this.id = this.act.snapshot.paramMap.get('idAu'); // Obtenez vos données ici
      this._auth.setData(this.id);
    
  }


}
