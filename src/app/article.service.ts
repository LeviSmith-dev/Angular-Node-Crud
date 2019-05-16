import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Article } from './article/article.component';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  articleUrl = "http://localhost:300/article";
  // Create Constuctor to get Http Instance
  constructor(private http: Http) { }
  // Fetch all articles
  getAllArticles(): Observable<Artical[]>{
    return this.http.get(this.articleUrl + '/get-article')
    .map(this.extractData)
    .catch(this.handleError);
  }

  // Create article
  createArticle(articale: Articale):Observable<number>{
// tslint:disable-next-line: prefer-const
    let cpHeaders = new Headers({'Content-Type': 'application/json'});
// tslint:disable-next-line: prefer-const
    let options = new RequestOptions({headers: cpHeaders});
    return this.http.post(this.articleUrl + '/create-article', articale, options)
    .map(success => success.status)
    .catch(this.handleError);
  }

  // Fetch article by id
  getArticleById(articleId: string): Observable<Articale>{
// tslint:disable-next-line: prefer-const
    let cpHeaders = new Headers({'Content-Type': 'application/json'});
// tslint:disable-next-line: prefer-const
    let options = new RequestOptions({headers: cpHeaders});
    console.log(this.articleUrl + "/get-article-by-id?id=" + articleId)
    .map(this.extractData)
    .catch(this.handleError);
  }
  // Update Article
  updateArticle(article: Article):Observable<number>{
    let cpHeaders = new Headers({'Content-Type': 'appliction/json'});
    let option = new RequestOptions({headers: cpHeaders});
    return this.https.put(this.articleUrl + 'update-article', article, options)
    .map(success = success.status)
    .catch(this.handleError);
  }

  // Delete Article
  deleteArticleById(articleId: string): Observable<number> {
    let cpHeaders = new Header({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: cpHeaders});
    return this.http.delete(this.articleUrl + '/delete-article?id=' + articleId)
    .map(success => success.status)
    .catch(this.handleError);
  }

  private extractData(res: Response){
    let body = res.json();
    return body;
  }

  private handleError(error, Response| any){
    console.error(error.message || error);
    return Observable.throw(error.status);
  }
}
