import TablazatModell from "../modell/TablazatModell.js";
import TablazatMegjelenit from "../view/TablazatMegjelenit.js";

export default class TermekekAdminController {
    constructor(){
        this.tModell = new TablazatModell();
        const lista = this.tModell.getLista();
        console.log("adminController", lista)
        this.tMegjelenit = new TablazatMegjelenit(lista, $(".tarolo"));
        this.torlesEsemeny();
    }

    torlesEsemeny(){
        $(window).on("torles", (event) => {
            console.log(event.detail)
            let index = event.detail.id
            this.tModell.torles(index)
            const lista = this.tModell.getLista();
            this.tMegjelenit = new TablazatMegjelenit(lista, $("tarolo"))
        })
    }
}