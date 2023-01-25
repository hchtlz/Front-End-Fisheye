import json from '../../data/photographers.json';
import photographerFactory from '../factories/photographer.js';

// Loader
window.onload = () => {
  const loader = document.querySelector('.loader_container');
  loader.classList.add('hidden');
}

// Fetch du Json
function getPhotographers() {
  return json.photographers;
};

function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");
  photographers.forEach((photographer) => {
      const photographerModel = photographerFactory(photographer);
      const userCardDOM = photographerModel.getUserCardDOM();
      photographersSection.appendChild(userCardDOM);
  });
};

function init() {
  // Récupère les datas des photographes
  const photographers = getPhotographers();
  // Affiche les Photographes
  displayData(photographers);
};

init();