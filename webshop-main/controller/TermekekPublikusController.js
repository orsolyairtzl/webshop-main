import TermekekModell from '../modell/TermekekModell.js';
import KosarModell from '../modell/KosarModell.js';
import PublikusTermekek from '../view/PublikusTermekek.js';
import KosarTermekek from '../view/KosarTermekek.js';

export default class TermekekPublikusController {
  constructor() {
    // Modellek példányosítása
    this.termekekModell = new TermekekModell();
    this.kosarModell = new KosarModell();

    // View-k példányosítása
    this.termekView = new PublikusTermekek('#termekek-container', this.hozzaadKosarhoz.bind(this));
    this.kosarView = new KosarTermekek('#kosar-container');

    // Termékek megjelenítése
    this.termekView.megjelenitTermekek(this.termekekModell.getTermekek());

    // Kosár frissítése kezdetben (üres)
    this.kosarView.frissitKosar(this.kosarModell.getKosarTartalma());
  }

  // Callback függvény a kosárba gombhoz
  hozzaadKosarhoz(termek) {
    this.kosarModell.hozzaadKosarhoz(termek);
    this.kosarView.frissitKosar(this.kosarModell.getKosarTartalma());
  }
}