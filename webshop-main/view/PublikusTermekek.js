import Kartya from './Kartya.js';

export default class PublikusTermekek {
  constructor(container, kosarbaGombCallback) {
    this.$container = $(container);
    this.kosarbaGombCallback = kosarbaGombCallback;
  }

  // megeleníti az összes terméket --> konténer ürítés, kártyák példányosítása a letrehozKartya metódus segítségével, majd konténer feltöltése a kártya elemeivel
  megjelenitTermekek(termekek) {
    this.$container.empty();
    termekek.forEach(termek => {
      const kartya = new Kartya(termek, this.kosarbaGombCallback);
      const $kartyaElem = kartya.letrehozKartya();
      this.$container.append($kartyaElem);
    });
  }
};