//import { TestBed, async } from '@angular/core/testing';
/*import {item_ingredient} from "./item_ingredient.class";
import {recipe} from "./recipe.class";
import {fridge} from "./fridge.class";

describe("item_ingredient test", function(){
    beforeEach(function() {
    });
    it("should have correct name", function(){
        let vegetable1 = new item_ingredient("Carrot");
        expect(vegetable1.name).toBe("Carrot");
    });
    it("should have correct default quantity", function(){
        let vegetable1 = new item_ingredient("Carrot");
        expect(vegetable1.quantity).toBe(0);
    });
    it("should add and subtract correctly", function(){
        let vegetable2 = new item_ingredient("Cucumber");
        vegetable2.add();
        vegetable2.add();
        vegetable2.subtract();
        expect(vegetable2.quantity).toBe(2);
    });
})

describe('recipe test', () => {
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
  
describe('fridge test', () => {
    let carrot = new item_ingredient("carrot");
    let potato = new item_ingredient("potato");
    let celery1 = new item_ingredient("celery");
    let celery2 = new item_ingredient("celery");
    
    let fridge1 = new fridge();
    let fridge2 = new fridge();

    beforeEach(function() {
    });
    it('should add 2 ingredients to the fridge',function(){
        fridge1.add(carrot, 5);
        fridge1.add(potato, 10);
        expect(fridge1.contents[0]).toBe(carrot);
        expect(fridge1.contents[1]).toBe(potato);
        expect(fridge1.contents.length).toBe(2);
    });
    it('should remove quantity of item in fridge',function(){
        fridge1.add(carrot, 5);
        fridge1.remove(carrot, 3);
        expect(fridge1.contents[0].quantity).toBe(2);
    });
    it('should remove item in fridge if quantity falls under 0',function(){

        fridge2.add(celery2, 1);
        fridge2.remove(celery2, 2);
        expect(fridge2.contents[0]).toBe(null);
    });
    it('should get correct return from checkRecipe',function(){
        let recipe2 = new recipe("recipe 1");

        let brocolli = new item_ingredient("brocolli");
        let tomato = new item_ingredient("tomato");
        let onion = new item_ingredient("onion");

        fridge1.add(celery1, 0);
        recipe2.addItem(celery1);
        recipe2.addItem(potato);
        recipe2.addItem(brocolli);
        recipe2.addItem(tomato);
        recipe2.addItem(onion);


        console.log(fridge1.checkRecipe(recipe2));

        expect(fridge1.checkRecipe(recipe2)[0][0]).toBe(brocolli);
        expect(fridge1.checkRecipe(recipe2)[0][1]).toBe(tomato);
        expect(fridge1.checkRecipe(recipe2)[0][2]).toBe(onion);

        expect(fridge1.checkRecipe(recipe2)[1][0]).toBe(celery1);
        expect(fridge1.checkRecipe(recipe2)[1][1]).toBe(potato);
    });
    
});
  */