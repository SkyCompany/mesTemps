const STATUT_STOP = "stop";
const STATUT_PLAY = "play";

export class Tache {
    libelle: String;
    statut : String;

    constructor(pLibelle: string) {
        this.libelle = pLibelle;
        this.statut = "Stop";
      }
}