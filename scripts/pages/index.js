import photographerFactory from '../factories/photographer.js';
import { getPhotographers } from '../utils/model.js';

// Loader
window.onload = () => {
  const loader = document.querySelector('.loader_container');
  loader.classList.add('hidden');
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