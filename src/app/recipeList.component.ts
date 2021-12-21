import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'recipe-list',
  template: `
  <h1>Recipes</h1>
  <recipe *ngFor="let recipe of recipes" [recipe]="recipe" (recipeOpened)="openRecipe($event)"></recipe>
  `,
  styles: [`:host{border: 1px solid #000;}`],
})
export class recipeListComponent {
  @Input() recipes: any[];
  @Output() recipeOpened = new EventEmitter();
  openRecipe(recipe) {
    this.recipeOpened.emit(recipe);
  }
}
