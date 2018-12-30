import { Tache } from '../models/Tache';

export class TachesService {

tachesList: Tache[] = [
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
  ];
}