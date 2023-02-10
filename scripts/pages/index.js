import { getPhotographers } from '../utils/model.js';
import { loader } from '../utils/loader.js';
import { MediaFactory } from '../factories/media.js';

// Loader
window.onload = () => { loader(); };

/*
* Création de la carte du photographe
*/
function getUserCardDOM(photographerObject) {
  const tagA = document.createElement('a');
  const linkNewPage = `./photographer.html?id=${photographerObject.id}`;
  tagA.setAttribute('href', linkNewPage);

  const article = document.createElement('article');

  
  // A DEBUGGER 
  // const media = new MediaFactory();
  // const photographerImage = document.createElement('div');
  // article.appendChild(photographerImage);
  // photographerImage.classList.add('photographerImage');
  // photographerImage.appendChild(media.renderMedia(photographerObject, 'portrait'));


  // A REMPLACER PAR LE CODE CI-DESSUS
  tagA.appendChild(article);
  const img = document.createElement('img');
  img.setAttribute('src', 'assets/portraits/' + photographerObject.portrait);
  img.setAttribute('alt', 'Portrait de ' + photographerObject.name)


  const h2 = document.createElement('h2');
  const h3 = document.createElement('h3');
  const h4 = document.createElement('h4');
  const p = document.createElement('p');
  h2.textContent = photographerObject.name;
  h3.textContent = photographerObject.city + ', ' + photographerObject.country;
  h4.textContent = photographerObject.tagline;
  p.textContent = photographerObject.price + '€/jour';
  
  // Ajout des éléments dans l'article avec appendChild ( ajouter img dans article par exemple)
  article.appendChild(img);
  article.appendChild(h2);
  article.appendChild(h3);
  article.appendChild(h4);
  article.appendChild(p);
  return (tagA);
}

function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");
  photographers.forEach((photographer) => {
      const userCardDOM = getUserCardDOM(photographer);
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