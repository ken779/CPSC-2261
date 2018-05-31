import { Component, OnInit } from '@angular/core';
import { recipe } from './recipe.class';
import { item_ingredient } from './item_ingredient.class';

@Component({
  selector: 'app-recipe-app',
  templateUrl: './recipe-app.component.html',
  styleUrls: ['./recipe-app.component.css']
})
export class RecipeAppComponent implements OnInit {
  recipeList : recipe [];
  ingredientList : item_ingredient [];
  selectedRecipe : recipe = null;
  selectedIngredientList : item_ingredient [];

  constructor() { 
    this.recipeList = [];
    this.ingredientList = [];
    this.selectedIngredientList = [];
  }

  ngOnInit() {
    this.populateRecipe();
  }

  selectRecipe(selectR : recipe){
    this.selectedRecipe = selectR;
  }

  selectIng(selectI : item_ingredient){
    let duplicateIng : boolean = false;
    for (let ing of this.selectedIngredientList){
      if(selectI.name == ing.name)
        duplicateIng = true;
    }
    if(!duplicateIng){
      this.selectedIngredientList.push(selectI);
      console.log(this.selectedIngredientList);
    }
  }

  createRecipe(recipeName : string, time : number){
    console.log(recipeName + time);
    let newRecipe = new recipe(recipeName);
    newRecipe.estimatedTime = time;

    this.recipeList.push(newRecipe);
  }

  deleteRecipe(deleteThis : recipe){
    console.log(deleteThis);
    let i = 0;
    for (let currentRecipe of this.recipeList){
      if(currentRecipe.recipeName == deleteThis.recipeName){
        this.selectedRecipe = null;
        this.recipeList.splice(i, 1);
      }
      i++;
    }
  }

  updateIngredients(){
    let ingAlreadyExists : boolean = false;
    for (let ing1 of this.selectedIngredientList){
      for(let ing2 of this.selectedRecipe.ingredientList){
        if(ing1.name == ing2.name){
          ingAlreadyExists = true;
        }
      }
      if(!ingAlreadyExists){
        this.selectedRecipe.addItem(ing1);
      }
      ingAlreadyExists = false;
    }
  }

  addInstruction(instruction : string){
    this.selectedRecipe.instructionList.push(instruction);
  }

  deleteIngredient(){
    this.selectedRecipe.ingredientList.pop();
  }
  deleteInstruction(){
    this.selectedRecipe.instructionList.pop();
  }

  populateRecipe(){
    let celery = new item_ingredient("celery");
    let carrot = new item_ingredient("carrot");
    let potato = new item_ingredient("potato");
    let tomato = new item_ingredient("tomato");
    let lettuce = new item_ingredient("lettuce");
    this.ingredientList.push(celery);
    this.ingredientList.push(carrot);
    this.ingredientList.push(potato);
    this.ingredientList.push(tomato);
    this.ingredientList.push(lettuce);

    let recipe_salad1 = new recipe("simple salad");
    let recipe_salad2 = new recipe("complex salad");
    let recipe_salad3 = new recipe("potato salad");
  
    recipe_salad1.estimatedTime = 2;
    recipe_salad1.addItem(tomato);
    recipe_salad1.addItem(lettuce);
    recipe_salad1.addInstruction("mix tomato and lettuce");

    recipe_salad2.estimatedTime = 4;
    recipe_salad2.addItem(tomato);
    recipe_salad2.addItem(lettuce);
    recipe_salad2.addItem(carrot);
    recipe_salad2.addItem(celery);
    recipe_salad2.addInstruction("mix tomato and lettuce");
    recipe_salad2.addInstruction("mix carrot and celery with tomato and lettuce");

    recipe_salad3.estimatedTime = 5;
    recipe_salad3.addItem(tomato);
    recipe_salad3.addItem(lettuce);
    recipe_salad3.addItem(carrot);
    recipe_salad3.addItem(celery);
    recipe_salad3.addItem(potato);
    recipe_salad3.addInstruction("mix tomato, lettuce, and potatoes");
    recipe_salad3.addInstruction("mix carrot and celery with tomato, lettuce, and potatoes");

    this.recipeList.push(recipe_salad1);
    this.recipeList.push(recipe_salad2);
    this.recipeList.push(recipe_salad3);
  }

}
