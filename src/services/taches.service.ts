import { Tache } from '../models/Tache';
import * as prettyMs from "pretty-ms";
import { TacheLigne } from '../models/TacheLigne';

export class TachesService {
  tachesList: Tache[] = [];
  getTachesList() {
    if (this.tachesList.length == 0) this.initTachesList();
    return this.tachesList;
  }

  chgStatut(tache: Tache) {

    if (tache.getStatut() == Tache.STATUT_STOP) {
      //Arret de toutes les autres taches en cours
      this.tachesList
        .filter(tache => tache.getStatut() == Tache.STATUT_PLAY)
        .forEach(tache => tache.stop());
      tache.play();
    }
    else tache.stop();
  }

  /*Renvoie la durée totale de la tache en ms*/
  getTacheDuree(tache: Tache): number {
    var retourDuree: number = tache.duree;
    //Si dernière tache en cours on ajoute le temps écoulé depuis le débutdu dernier creneau
    if (tache.tabTacheLigne) {
      var nbLignes: number = tache.tabTacheLigne.length;
      if (nbLignes > 0) {
        var dernTacheLigne: TacheLigne = tache.tabTacheLigne[nbLignes - 1];
        if (dernTacheLigne.fin == null) {
          var tmpDate: Date = new Date();
          retourDuree = retourDuree + (tmpDate.getTime() - dernTacheLigne.debut.getTime())
        }
      }
    }
    return retourDuree;
  }

  initTachesList() {
    this.tachesList.push(new Tache("Developpement"));
    this.tachesList.push(new Tache("Developpement A"));
    this.tachesList.push(new Tache("Developpement B"));
    this.tachesList.push(new Tache("Developpement C"));
    this.tachesList.push(new Tache("Developpement D"));
    this.tachesList.push(new Tache("Developpement E"));
    this.tachesList.push(new Tache("Developpement F"));
    this.tachesList.push(new Tache("Developpement G"));
    this.tachesList.push(new Tache("Developpement H"));
    this.tachesList.push(new Tache("Developpement I"));
    this.tachesList.push(new Tache("Developpement J"));
    this.tachesList[0].play();

    this.tachesList.push(new Tache("Analyse"));
    this.tachesList.push(new Tache("Maquettage"));
    this.tachesList.push(new Tache("Test"));
  }


}