import photographerFactory from '../factories/photographer.js';
import { getPhotographers } from '../utils/model.js';
import { loader } from '../utils/loader.js';

// Loader
window.onload = () => { loader(); };

// Récupère les données du photographe sélectionné
const photographers = getPhotographers();
function getPhotographer(photographerID) {
  const photographer = photographers.find(photographers => photographers.id == photographerID);
  return photographer;
};

// Afficher les données du photographe sélectionné
function displayPhotographer(data) {
  const main = document.getElementById('main');
  const photographerModel = photographerFactory(data);
  const userCardDOM = photographerModel.makeHeader();
  main.appendChild(userCardDOM);
}

function init() {
  //Extraction de l'ID du photographe à traiter.
  let params = (new URL(document.location)).searchParams;
  const photographerID = params.get('id');

  // Récupère les datas du photographe sélectionné
  const photographer = getPhotographer(photographerID);
  // Génère le header de la page du Photographe
  displayPhotographer(photographer);
  // Ajoute le nom du photographe dans le header de la modale de contact
  const contactPhotographer = document.querySelector('.modal header h2');
  contactPhotographer.innerHTML = 'Contactez-moi : ' + '</br>' + photographer.name;
}

init();