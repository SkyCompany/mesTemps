import { Component } from '@angular/core';

@Component({
  selector: 'page-taches',
  templateUrl: 'taches.html'
})
export class TachesPage {
  tachesList = [
    {
      libelle: "Developpement",
      statut: "play"
    },
    {
      libelle: "Analyse",
      statut: "stop"

    },
    {
      libelle: "Maquettage",
      statut: "stop"
    },
    {
      libelle: "Test",
      statut: "stop"
    }
  ]

  getActionIcon (itemTaches) {
    if (itemTaches.statut == "stop") return "play";
    else return "square";
  }

  onClickTimer (itemTaches) {
    if (itemTaches.statut == "stop") itemTaches.statut = "play";
    else itemTaches.statut = "stop";
  }

}