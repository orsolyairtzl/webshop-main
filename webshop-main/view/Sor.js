export default class Sor {
    #adat = {};
    constructor(adat, szuloElem){
        console.log(adat)
        this.#adat = adat;
        this.szuloElem = szuloElem;
        this.sorMegjelenit();
        this.kukaElem = $(".bin:last");
        this.kattintasEsemeny();
    }

    kattintasEsemeny(){
        this.kukaElem.on("click", () => {
            console.log(this.#adat)
            const e = new CustomEvent("torles", {detail:this.#adat});
            window.dispatchEvent(e);
        })
    }

    sorMegjelenit(){
        this.szuloElem.append(`
            <tr>
                <td>${this.#adat.name}</td>
                <td>${this.#adat.price}</td>
                <td>${this.#adat.text}</td>
                <td><img class="bin" src="images/bin.png"></td>
            </tr>
        `)
    };
}