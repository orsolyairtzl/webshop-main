import Sor from "./Sor.js";

export default class TablazatMegjelenit {
    #lista=[];
    constructor(lista, szuloElem){
        console.log(lista);
        this.#lista = lista;
        this.szuloElem = szuloElem
        this.szuloElem.empty();
        this.tablazatKiir();
        this.tbodyElem = $(".sorok");
        this.sorokLetrehozasa();
    }

    sorokLetrehozasa(){
        this.#lista.forEach ((elem, index)=> {
            elem.id = index;
            new Sor(elem, this.tbodyElem)
        }) 
    }

    tablazatKiir(){
        this.szuloElem.append(`
            <table class= "table table-stripped">
                <thead>
                    <tr>
                        <th>Termékek</th>
                        <th>Ár</th>
                        <th>Leírás</th>
                        <th>Törlés</th>
                    </tr>
                </thead>
                <tbody class="sorok">
                        
                </tbody>
            </table>
         `)
         console.log(this)
    }
}