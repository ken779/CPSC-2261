import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RecipeAppComponent } from './recipe-app/recipe-app.component';
import { item_ingredient } from "./recipe-app/item_ingredient.class";
import { recipe } from "./recipe-app/recipe.class";
import { fridge } from "./recipe-app/fridge.class";

describe('recipe test 1 - empty recipe', () => {
  let recipe1 = new recipe("recipe 1");

  beforeEach(function() {
  });
  it('recipe time should be 0',function(){
      expect(recipe1.estimatedTime).toBe(0);
  });
  it('ingredient list should not contain any recipes',function(){
      expect(recipe1.ingredientList.length).toBe(0);
  });
  it('instruction list should not contain any instructions',function(){
      expect(recipe1.instructionList.length).toBe(0);
  });
});

describe('recipe test 2 - multiple values', () => {
  let carrot = new item_ingredient("carrot");
  let potato = new item_ingredient("potato");
  let recipe1 = new recipe("recipe 1");

  beforeEach(function() {
  });
  it('should change recipe estimated time',function(){
      recipe1.estimatedTime = 55;
      expect(recipe1.estimatedTime).toBe(55);
  });
  it('should add 2 items to the ingredient list array',function(){
      recipe1.addItem(carrot);
      recipe1.addItem(potato);
      expect(recipe1.ingredientList[0]).toBe(carrot);
      expect(recipe1.ingredientList[1]).toBe(potato);
      expect(recipe1.ingredientList.length).toBe(2);
  });
  it('should add 2 instructions to the instruction list array',function(){
      recipe1.addInstruction("Step 1. make food");
      recipe1.addInstruction("Step 2. make more food");
      expect(recipe1.instructionList[0]).toBe("Step 1. make food");
      expect(recipe1.instructionList[1]).toBe("Step 2. make more food");
      expect(recipe1.instructionList.length).toBe(2);
  });
});

describe('recipe test 1', () => {
  let component: RecipeAppComponent;
  let fixture : ComponentFixture<RecipeAppComponent>;

  let recListItem : DebugElement;
  let recNameInput : DebugElement;
  let recTimeInput : DebugElement;
  let recCreateButton : DebugElement;
  let recDeleteButton : DebugElement;

  let carrot = new item_ingredient("carrot");
  let potato = new item_ingredient("potato");
  let recipe1 = new recipe("recipe 1");

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeAppComponent]
    });
  
    fixture = TestBed.createComponent(RecipeAppComponent);
    component = fixture.componentInstance;

    recListItem = fixture.debugElement.query(By.css('.recipeListItem'));
    recNameInput = fixture.debugElement.query(By.css('#recipeNameInput'));
    recTimeInput = fixture.debugElement.query(By.css('#recipeTimeInput'));
    recCreateButton = fixture.debugElement.query(By.css('#recipeCreateButton'));
    recDeleteButton = fixture.debugElement.query(By.css('#recipeDeleteButton'));
    
  }));

  it('should select recipe',function(){
    let recListItem1 = fixture.debugElement.query(By.css('#simple salad'));
    
    setTimeout(() => {
      console.log(recListItem1.nativeElement.innerText);
      expect(4).toBeGreaterThan(4);
    }, 300);
    //expect(recListItem1.nativeElement.innerText).toBe('simple salad');
    
    //expect(recListItem1.nativeElement.class).toBe('se');
  });

  it('should create recipe, add to list',function(){
    recNameInput.nativeElement.value = "testRecipe1";
    recTimeInput.nativeElement.value = 5;
    recCreateButton.triggerEventHandler('click', null);
    console.log('recipe create triggered');
    setTimeout(() => {
      let recListItem4 = fixture.debugElement.query(By.css('#testRecipe1'));
      expect(recListItem4.nativeElement.innerText).toBe('testRecipe1');
    }, 300);
  });
});