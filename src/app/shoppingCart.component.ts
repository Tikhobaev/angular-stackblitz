import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'shopping-cart',
  template: `
  <h1>Shopping Cart ({{calcTotal()}})</h1>
  <cart-product *ngFor="let recipe of recipes" [recipe]="recipe" (recipeRemoved)="removeRecipe($event)"><cart-product>
  `,
  styles: [`:host{border: 1px solid #000;}`],
})
export class ShoppingCartComponent {
  @Input() recipes: any[];
  @Output() recipeRemoved = new EventEmitter();
  calcTotal() {
    return this.recipes.reduce((acc, recipe) => (acc += recipe.num), 0);
  }
  removeRecipe(recipe) {
    this.recipeRemoved.emit(recipe);
  }
}
