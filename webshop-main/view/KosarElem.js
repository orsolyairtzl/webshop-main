export default class KosarElem {
    constructor(termek) {
      this.termek = termek;
    }
  
    //Létrehozzuk a kosár elemeit --> név, ár, kosárba gomb, mad visszaadjuk az elemet
    letrehozKosarElem() {
      const $elem = $(`
        <div class="kosarElem">
          <span>${this.termek.name}</span>
          <span>${this.termek.price} Ft</span>
          <img class="bin" src=images/bin.png alt="recycle bin">
        </div>
      `);
      return $elem;
    }
  }