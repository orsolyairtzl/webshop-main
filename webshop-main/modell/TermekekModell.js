import { LIST } from "./productList.js"

export default class TermekekModell {
    //kell egy üres lista
    #lista = [];
    constructor() {
        this.#lista = LIST;
    };

    //getterrel elérem a listát
    getTermekek(){
        return this.#lista
    };

};