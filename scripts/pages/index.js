import photographerFactory from '../factories/photographer.js';
import { getPhotographers } from '../utils/model.js';
import { loader } from '../utils/loader.js';

// Loader
window.onload = () => { loader(); };

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