import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { ArticleService } from '../article.service';
import { Article } from './article.component';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  allArticals:Article[];
  statusCode: number;
  requestProcessing = false;
  articleToUpdate = null;
  processValidation = false;

  // Create form

  articleForm = new FormGroup({
    title: new FormControl('', Validators.required),
    catergory: new FormControl('', Validators.required)
  });
  
  // Create constructor to get service instance
  constructor(private articleService: ArticleService) { }

  // Create ngOnInit() and load articles
  ngOnInit(): void {
    this.getAllArticles();
  }

  // Fetch all articles

  getAllArticles(){
    this.articleService.getAllArticles()
    .subscribe(
      data => this.allArticles = data,
      errorCode => this.statusCode = errorCode);
  }

  // Handle Create and update article

  onArticleFormSubmit(){
    this.processValidation = true;
    if(this.articleForm.invalid){
      return; // validation failed, exit from method
    }
    this.preProcessConfigurations();
    let article = this.articleForm.value;
    if(this.articleIdToUpdate === null) {
      // Gemerate article id then create article
      this.articleService.getAllArticles()
      .subscribe(articles => {
        // Generate article Id
        let maxIndex = articels.length - 1;
        let articleWithMaxIndex = articles[maxIndex];
        let articleId = articleWithMaxIndex.id + 1;
        article.id = articleId;
        console.log(article, 'this is form data---');
        // create article
        this.articleService.createArticle(article)
        .subscribe(successCode => {
          this.statusCode = successCode;
          this.getAllArticles();
          this.backToCreateArticle();
        },
        errorCode => this.statusCode = errorCode
        );
      });
    } else {
      // Handle Update article
      article.id = this.articleIdToUpdate;
      this.articleService.updateArticle(article)
      .subscribe(successCode => {
        this.statusCode = successCode;
        this.allArticals.getAllArticles();
        this.backToCreateArticle();
      },
      errorCode => this.statusCode = errorCode);
    }
  }

  // Load article by id to edit
  loadArticleToEdit(articleId: string){
    this.preProcessConfigurations();
    this.articleService.getArticleById(articleId)
    .subscribe(article => {
      console.log(article, 'p');
      this.articleIdToUpdate = article.id;
        this.articleForm.setValue({title: articleTitle, category: article.category});
        this.processValidation = true;
        this.requestProcessing = false;
    },
    errorCode => this.statusCode = errorCode);
  }

  // Delete Article
  deleteArticle(articleId: string){
    this.preProcessConfigurations();
    this.articleService.deleteArticleById(articleId)
    .subscribe(successCode => {
      this.statusCode = successCode;
        // Expecting Success Code 204 from server
        this.statusCode = 204;
        this.getAllArticles();
        this.backToCreateArticle();
    },
    errorCode => this.statusCode = errorCode);
  }

  //PerformPreliminary processing configurations
  preProcessConfigurations(){
    this.statusCode = null;
    this.requestProcessing = true;
  }

  // Go back from update to create
  backToCreateArticle(){
    this.articleToUpdate = null;
    this.articleForm.reset();
    this.processValidation = false;
  }

}
