import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { Recipe } from '../model/recipe';

const RECIPE_SERVER = 'http://localhost:8080';

@Injectable()
export class RecipeService {

  constructor(private http: HttpClient) {
  }

  getAllRecipes(): Promise<Recipe[]> {
    return this.http
        .get(RECIPE_SERVER + '/v1/recipes.json')
        .toPromise()
        .then(response => response.data as Recipe [])
        .catch(this.handleError);
  }

  getRecipeById(recipe_id: number): Promise<Recipe> {
    return this.http
        .get(RECIPE_SERVER + `/v1/recipes/${recipe_id}.json`)
        .toPromise()
        .then(response => response.data as Recipe)
        .catch(this.handleError);
  }

  addNewRecipe(recipe: Recipe): Promise<Recipe> {
    return this.http
        .put(RECIPE_SERVER + '/v1/recipes.json', recipe)
        .toPromise()
        .then(response => response.data as Recipe)
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('ERROR OCCURRED TALKING TO SERVER' + error);
    return Promise.reject(error.message || error);
  }
}
