export default class KosarModell {
    constructor() {
        this.kosar = [];
    }
    //paraméterként kapott terméket hozzáadom a kosárhoz
    hozzaadKosarhoz(termek) {
        this.kosar.push(termek);
        console.log("A kosár tartalma: ", this.kosar)
    }

    // lekérem a kosár tartalmát
    getKosarTartalma(){
        return this.kosar;
    }

    //törli az elemet a kosárból
    torolKosarbol(){
        this.KosarModell.torolKosarbol(this.termek);
        this.$elem.remove();
    }

    // figyeli hogy kattintunk a kukára
    toresFigyelo($elem){
        $elem.find('.bin').on('click', () => {
            this.torolKosarbol();
        });
    }

    //törlés még nem működik.
}