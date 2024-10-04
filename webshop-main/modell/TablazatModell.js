import {LIST} from "./productList.js";

export default class TablazatModell {
    #lista = [];
    constructor(){
        this.#lista = LIST;
    }

    getLista(){
        return this.#lista
    }

    torles(index){
        console.log(index)
        this.#lista.splice(index,1)
    }
}