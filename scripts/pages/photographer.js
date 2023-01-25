import json from '../../data/photographers.json';
import photographerFactory from '../factories/photographer.js';

// Fetch du Json pour retourner les données du photographe sélectionné
// TODO 
function getPhotographer() {
  const photographer = photographers.find(photographers => photographers.id == ID);
  console.log("photographer");
  return json.photographer;
};

// Afficher les données du photographe sélectionné
function displayPhotographer(data) {
  const main = document.getElementById('main');
  const photographerModel = photographerFactory();
  const userCardDOM = photographerModel.makeHeader();
  main.appendChild(userCardDOM);
}

function init() {
  //Extraction de l'ID du photographe à traiter.
  let params = (new URL(document.location)).searchParams;
  const photographerID = params.get('id');

  // Récupère les datas du photographe sélectionné
  const photographer = getPhotographer(photographerID);
  console.log(photographerID);
  // Génère le header de la page du Photographe
  displayPhotographer(photographer);
  // Ajoute le nom du photographe dans le header de la modale de contact
  const contactPhotographer = document.querySelector('.modal header h2');
  contactPhotographer.innerHTML = 'Contactez-moi : ' + '</br>' + photographer.name;
}

init();