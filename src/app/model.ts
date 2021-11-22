import { TodoItem } from "./todoitem";

export class Model{
    name: string;
    items: TodoItem[];

    constructor(){
        this.name = "suleymanakcaofficial";
        this.items = [
            {description: "kahvaltı", action: true},
            {description: "spor", action: false},
            {description: "alışveriş", action: false}
        ]
    }

}