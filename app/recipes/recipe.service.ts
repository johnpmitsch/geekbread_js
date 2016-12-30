import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { Observable }     from 'rxjs/Observable';
import { TokenService } from '../users/token.service';
import { Angular2TokenService } from 'angular2-token';
import { Recipe } from './shared/recipe.model';

@Injectable()
export class RecipeService {
  private baseUrl = 'http://localhost:3000/v1/';
  private recipesUrl = this.baseUrl + 'recipes';
  private ingredientsUrl = this.baseUrl + 'ingredients';

  constructor(
    private http: Http,
    private tokenService: TokenService
  ) {}

  getRecipes(): Observable<Recipe[]> {
    return this.http.get(this.recipesUrl)
                .map(this.extractData)
                .catch(this.handleError)
  }

  getRecipe(id: number): Observable<Recipe> {
    return this.http.get(this.recipesUrl + "/" + id)
                    .map(this.extractData)
                    .catch(this.handleError)
  }

  addRecipe(name: string): Observable<Recipe> {
    let hi = this.tokenService._tokenService
    console.log(hi);
    let body = JSON.stringify({recipe: { name }});
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.recipesUrl, body, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }


  addIngredientToRecipe(recipeId: number, name: string, percentage: number, type: string) {
    let body = JSON.stringify({ ingredient: { name: name, percentage: percentage, recipe_id: recipeId, type: type }});
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.ingredientsUrl, body, options)
                         .map(this.extractData)
                         .catch(this.handleError);
  }

  deleteRecipe(id: number): Observable<Recipe> {
    return this.http.delete(this.recipesUrl + "/" + id)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();  
    return body || { };
  }

  private handleError (error: any) {
    if (error) {
      let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
      return Observable.throw(errMsg);
    }
  }
}
