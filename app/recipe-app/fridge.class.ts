import {item_ingredient} from "./item_ingredient.class";
import {recipe} from "./recipe.class";

export class fridge{
    public contents : item_ingredient [];

    constructor(){
        this.contents = [];
    }

    add(item : item_ingredient, amount : number){
        let itExists : boolean = false;
        let existsAt : number;
        //find if item exists
        for(let i = 0; i < this.contents.length; i++){
            if(this.contents[i].name == item.name){
                itExists = true;
                existsAt = i;
            }
        }
        //if item exists
        if(itExists){
            this.contents[existsAt].quantity += amount;
        }
        else{
            this.contents.push(item);
        }
    }
    remove(item : item_ingredient, amount : number){
        let itExists : boolean = false;
        let existsAt : number;
        //find if item exists
        for(let i = 0; i < this.contents.length; i++){
            if(this.contents[i].name == item.name){
                itExists = true;
                existsAt = i;
            }
        }
        //if item exists
        if(itExists){
            this.contents[existsAt].quantity -= amount;
            if(this.contents[existsAt].quantity < 0){
                this.contents[existsAt] = null;
            }
                
        }
        else{
        }
    }
    checkRecipe(r : recipe){
        let toBuy : item_ingredient [] = [];
        let alreadyBought : item_ingredient [] = [];
        //compares recipe list to fridge list. add similiarities to alreadyBought
        for(let i = 0; i < r.ingredientList.length; i++){
            for(let x = 0; x < this.contents.length; x++){
                console.log(r.ingredientList[i].name + " comparing to: " + this.contents[x].name);
                if(r.ingredientList[i].name == this.contents[x].name){
                    console.log("added to alreadyBought: " + this.contents[x].name);
                    alreadyBought.push(this.contents[x]);
                }
            }
        }
        //compare the recipe list to already bought list. add differences to toBuy
        let isInAlreadyBought : boolean;
        for(let i = 0; i < r.ingredientList.length; i++){
            isInAlreadyBought = false;
            for(let x = 0; x < alreadyBought.length; x++){
                if(r.ingredientList[i].name == alreadyBought[x].name){
                    isInAlreadyBought = true;
                }
            }
            if(isInAlreadyBought == false){
                console.log("added to toBuy: " + r.ingredientList[i]);
                toBuy.push(r.ingredientList[i]);
            }
        }
        return [toBuy,alreadyBought];
    }
}