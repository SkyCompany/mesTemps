import { TacheLigne } from './TacheLigne';

var cptIdTache : number = 0;

export class Tache {
    idTache : number;
    libelle: String;
    private statut : String;
    duree : number; //duree totale des ligne terminée en ms
    tabTacheLigne : TacheLigne[];
    

    public static  STATUT_STOP = "stop";
    public static  STATUT_PLAY = "play";

    constructor(pLibelle: string) {
        this.idTache = cptIdTache++;
        this.libelle = pLibelle;
        this.statut = Tache.STATUT_STOP;
        this.tabTacheLigne = [];
        this.duree = 0;
        return this;
    }

    play () {
        this.statut = Tache.STATUT_PLAY;
        this.tabTacheLigne.push(new TacheLigne());
    }

    stop () {
        var iDernLigne : number  = this.tabTacheLigne.length - 1;
        this.statut = Tache.STATUT_STOP;
        this.tabTacheLigne[iDernLigne].fin = new Date();
        this.duree = this.duree + this.tabTacheLigne[iDernLigne].fin.getTime() - this.tabTacheLigne[iDernLigne].debut.getTime()
    }

    getStatut () {
        return this.statut;
    }
}