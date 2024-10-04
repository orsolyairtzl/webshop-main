export default class Kartya {
    constructor(termek, kosarbaGombCallback) {
      this.termek = termek;
      this.kosarbaGombCallback = kosarbaGombCallback;
    }
  
    // Létrehozom a kártyákat a hozzá tartozó elemekkel
    letrehozKartya() {
      const $kartya = $(`
        <div class="termekkartya">
          <img src="${this.termek.url}" alt="${this.termek.name}">
          <h2>${this.termek.name}</h2>
          <p>${this.termek.text}</p>
          <p>${this.termek.price} Ft</p>
          <button class="orderButton">Kosárba</button>
        </div>
      `);
  
      // Kosárba gombra kattintás eseménykezelő 
      $kartya.find('button').on('click', () => {
        this.kosarbaGombCallback(this.termek);
      });
  
      return $kartya;
    }
  }