import agumon from './image/agumon.png'
import gabumon from './image/gabumon.png';
import patamon from './image/patamon.png';
import gatomon from './image/gatomon.png';
import vmon from './image/vmon.png';
import guilmon from './image/guilmon.png';

const digimonList = [
  {
    id: 1,
    image : agumon,
    name: "Agumon",
    level: "Disciple",
    type: "Reptile",
    attribute: "Vaccin",
    description: "Un Digimon dinosaure courageux qui évolue souvent en Greymon."
  },
  {
    id: 2,
    image : gabumon,
     name: "Gabumon",
    level: "Disciple",
    type: "Reptile",
    attribute: "Data",
    description: "Un Digimon recouvert d'une fourrure de Garurumon, loyal et protecteur."
  },
  {
    id: 3,
    image : patamon,
    name: "Patamon",
    level: "Disciple",
    type: "Mammal",
    attribute: "Data",
    description: "Un petit Digimon volant avec une attaque puissante, Angemon."
  },
  {
    id: 4,
    image : gatomon,
    name: "Gatomon",
    level: "Champion",
    type: "Beast",
    attribute: "Vaccin",
    description: "Un Digimon chat avec une apparence mignonne mais une force redoutable."
  },
  {
    id: 5,
    image : vmon,
    name: "Veemon",
    level: "Disciple",
    type: "Dragon",
    attribute: "Vaccin",
    description: "Un Digimon énergique qui peut évoluer en formes puissantes comme ExVeemon."
  },
  {
    id: 6,
    image : guilmon,
    name: "Guilmon",
    level: "Disciple",
    type: "Reptile",
    attribute: "Virus",
    description: "Un Digimon créé par un enfant, avec un instinct sauvage mais un cœur pur."
  }
];

export default digimonList