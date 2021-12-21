import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { recipeListComponent } from './recipeList.component';
import { ShoppingCartComponent } from './shoppingCart.component';
import { RecipeComponent } from './recipe.component';
import { CartProductComponent } from './cartProduct.component';
import { RecipeDescriptionComponent } from './recipeDescription.component';
import { IngredientComponent } from './ingredient.component';
import { CartDialogComponent } from './cartDialog.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    recipeListComponent,
    ShoppingCartComponent,
    RecipeComponent,
    CartProductComponent,
    RecipeDescriptionComponent,
    IngredientComponent,
    CartDialogComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
