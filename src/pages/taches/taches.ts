import { Component } from '@angular/core';
import { Tache } from '../../models/Tache';
import { TachesService } from '../../services/taches.service';

import * as prettyMs from "pretty-ms";

@Component({
  selector: 'page-taches',
  templateUrl: 'taches.html'
})
export class TachesPage {
  tachesList: Tache[];
  tachePrincipale: Tache;
  chronoPrincipal : string;
  timer : any;
  constructor(private tachesService: TachesService) {

  }

  //Couleur correspondante à l'inverse du statut en cours
  getStatutChgColor (tache:Tache) {
    if (tache.getStatut() == Tache.STATUT_PLAY) return "danger";
    else return "secondary";
  }
  
  //Icone correspondant à l'inverse du statut en cours
  getStatutChgIcon (tache:Tache) {
    if (tache.getStatut() == Tache.STATUT_PLAY) return "square";
    else return "play";
  }

  onClickTachePrincipale() {
    this.tachesService.chgStatut(this.tachePrincipale);
    this.refreshChronoPrincipal();
  }

  onClickListTache(itemTache) {
    this.tachePrincipale = itemTache;
    this.refreshChronoPrincipal();
  }

  ionViewWillEnter() {
    this.tachesList = this.tachesService.getTachesList().slice();
    this.tachePrincipale = this.tachesList[0];

    //Declenchement timer refresh
    this.timer = setInterval(x => 
      {
        this.refreshChronoPrincipal();
        
      }, 1000);
 
  }

  refreshChronoPrincipal () {
    var tmpChrono : number = 0;
    this.chronoPrincipal = "";
    if (this.tachePrincipale) {
      tmpChrono = this.tachesService.getTacheDuree(this.tachePrincipale);
      if( tmpChrono > 0) this.chronoPrincipal = prettyMs(tmpChrono, {secDecimalDigits : 0});
    }
  }

  ionViewWillLeave() {
    //arret timer refresh
    clearInterval (this.timer);
  }


}