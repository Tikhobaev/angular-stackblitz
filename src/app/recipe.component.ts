import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'recipe',
  template: `
  <div>{{recipe.name}}</div><button (click)="openRecipe(recipe)">+</button>
  `,
  styles: [
    `
  :host {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-column-gap: 10px;
    border: 1px solid blue;
    padding: 10px;
  }
  div:nth-child(1) {font-weight: bold;}
  `,
  ],
})
export class RecipeComponent {
  @Input() recipe: any;
  @Output() recipeOpened = new EventEmitter();
  openRecipe(recipe) {
    this.recipeOpened.emit(recipe);
  }
}
