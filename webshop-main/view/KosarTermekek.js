import KosarElem from "./KosarElem.js";

export default class KosarTermekek {
    constructor(container) {
      this.$container = $(container);
    }
  
    // kosár tartalmát ürítem, majd példányosítom az elemeket és hozzáadom a kosárhoz
    frissitKosar(kosar) {
      this.$container.empty();
      kosar.forEach(termek => {
        const kosarElem = new KosarElem(termek);
        const $kosarElemHtml = kosarElem.letrehozKosarElem();
        this.$container.append($kosarElemHtml);
      });
    }
  }