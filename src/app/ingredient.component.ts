import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ingredient',
  template: `
  <div>{{ingredient}}</div><button (click)="addIngredientToCart(ingredient)">+</button>
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
export class IngredientComponent {
  @Input() ingredient: any;
  @Output() ingredientAdded = new EventEmitter();
  addIngredientToCart(ingredient) {
    this.ingredientAdded.emit(ingredient);
  }
}
