import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeSummaryComponent } from './components/recipe-summary/recipe-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeSummaryComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'recipes',
        component: RecipeListComponent
      },
      {
        path: '',
        redirectTo: '/recipes',
        pathMatch: 'full'
      }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
