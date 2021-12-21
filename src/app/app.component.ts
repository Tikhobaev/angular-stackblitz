import { Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CartDialogComponent } from './cartDialog.component';
import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  recipeList = [
    {
      name: 'ramen',
      description: 'Japan vegetarian ramen',
      ingredients: ['noodles', 'water', 'eggs'],
    },
    {
      name: 'pizza',
      description: 'Classic napoli pizza',
      ingredients: ['tomato', 'cheese'],
    },
  ];
  cartRecipeList = [];
  currentRecipe = this.recipeList[0];

  private readonly dialog = this.dialogService.open<boolean>(
    new PolymorpheusComponent(DialogExampleComponent, this.injector),
    { dismissible: true, label: 'Yes?' }
  );

  constructor(
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector
  ) {}

  showDialog() {
    this.dialog.subscribe({
      next: (data) => {
        console.log('Dialog emitted data = ' + data);
      },
      complete: () => {
        console.log('Dialog closed');
      },
    });
  }

  openRecipe(recipe) {
    this.currentRecipe = recipe;
  }

  openDialog() {
    console.log('Open cart');
    let dialogRef = this.dialog.open(CartDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  addRecipeToCart(recipe) {
    const recipeExistInCart = this.cartRecipeList.find(
      ({ name }) => name === recipe.name
    ); // find recipe by name
    if (!recipeExistInCart) {
      this.cartRecipeList.push({ ...recipe, num: 1 });
      return;
    }
    recipeExistInCart.num += 1;
  }

  addIngredientToCart(ingredient) {
    console.log('Added ingredient');
  }

  removeRecipe(recipe) {
    this.cartRecipeList = this.cartRecipeList.filter(
      ({ name }) => name !== recipe.name
    );
  }
}
