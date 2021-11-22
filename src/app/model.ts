import { TodoItem } from "./todoitem";

export class Model{
    name: string;
    items: TodoItem[];

    constructor(){
        this.name = "suleymanakcaofficiall";
        this.items = [
            {description: "kahvaltı", action: true},
            {description: "spor", action: false},
            {description: "alışveriş", action: false}
        ]
    }

}