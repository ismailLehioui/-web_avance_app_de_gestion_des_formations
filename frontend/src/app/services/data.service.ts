import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) {}

  url = 'http://127.0.0.1:3000/article/';

  create(article: any){
    return this.http.post(this.url + 'ajout' , article);
  }

  update(article: any,id: any){
    return this.http.put(this.url + '/update/'+id , article);
  }

  getAll(){
    return this.http.get(this.url+'all');
  }

  getArticleByIdAuthor(id:any){
    return this.http.get(this.url + 'getbyidauthor/' + id);
  }
  getArticleById(id:any){
    return this.http.get(this.url + 'getbyid/' + id);
  }
  
  deleteArtById(id: any) {
    return this.http.delete(this.url + 'supprimer/' + id);
  }

   
}
