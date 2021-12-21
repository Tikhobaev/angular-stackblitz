import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'recipe-description',
  template: `
  <h1>Description</h1>
  <ingredient *ngFor="let ingredient of recipe.ingredients" [ingredient]="ingredient" (ingredientAdded)="addIngredientToCart($event)">
  </ingredient>
  <span>{{ recipe.description }}</span>
  `,
  styles: [`:host{border: 1px solid #000;}`],
})
export class RecipeDescriptionComponent {
  @Input() recipe: any;
  @Output() ingredientAdded = new EventEmitter();
  addIngredientToCart(ingredient) {
    this.ingredientAdded.emit(ingredient);
  }
}
