import { getPhotographers } from '../utils/model.js';
import { getMedia } from '../utils/model.js';
import { loader } from '../utils/loader.js';
import { displayModal } from '../utils/contactForm.js';
import { closeModal } from '../utils/contactForm.js';
import { validateForm } from '../utils/contactForm.js';
import { MediaFactory } from '../factories/media.js';


// ********* LOADER *********

window.onload = () => { loader(); };
  

// ********* HEADER *********

/*
* Création du header du photographe
*/
function makeHeader(photographerObject) {

  // Section 'header'
  const photographHeader = document.createElement('section')
  photographHeader.classList.add('photograph-header')

  // Bloc 'identité'
  const photographerIdentity = document.createElement('div');
  photographHeader.appendChild(photographerIdentity);
  photographerIdentity.classList.add('photographerIdentity');

  const photographerName = document.createElement('h2');
  photographerIdentity.appendChild(photographerName);
  photographerName.classList.add('photographerName');

  const photographerCity = document.createElement('h3');
  photographerIdentity.appendChild(photographerCity);
  photographerCity.classList.add('photographerCity');

  const photographerTagLine = document.createElement('h4');
  photographerIdentity.appendChild(photographerTagLine);
  photographerTagLine.classList.add('photographerTagLine');

  // Alimentation des zones HTML
  photographerName.innerHTML = photographerObject.name;
  photographerCity.innerHTML = photographerObject.city + ', ' + photographerObject.country;
  photographerTagLine.innerHTML = photographerObject.tagline;

  // Bouton "Contactez-moi"
  const contact_button = document.createElement('button');
  photographHeader.appendChild(contact_button);
  contact_button.classList.add('contact_button');
  contact_button.onclick = displayModal;
  contact_button.innerHTML = 'Contactez-moi';

  // Fermer la modale
  const close_button = document.getElementById('closeModal');
  close_button.onclick = closeModal;

  // Validarion du formulaire
  const submitForm = document.getElementById('submit_button');
  submitForm.onclick = validateForm;

  // Portrait du Photographe
  const media = new MediaFactory();
  const photographerPortrait = document.createElement('div');
  photographHeader.appendChild(photographerPortrait);
  photographerPortrait.classList.add('photographerPortrait');
  photographerPortrait.appendChild(media.renderMedia(photographerObject));
  photographerPortrait.querySelector('img').setAttribute('alt', 'Portrait de ' + photographerObject.name);

// ********* LIKES *********

  // Alimentation du cartouche : Tarif
  const tarif = document.querySelector('.price')
  tarif.innerHTML = photographerObject.price + '€/jour'

  // Recupération de la somme des likes
  const photographerMedia = getPhotographerMedia();
  let sum = 0;
  photographerMedia.forEach((media) => {
    sum += media.likes;
  });
  photographerObject.likes = sum;

  // Alimentation du cartouche : Quantité de likes
  const likes = document.querySelector('.likes')
  likes.innerHTML = photographerObject.likes + ' <i class="fas fa-heart"></i>'
  likes.onclick = () => {
    photographerObject.likes++;
    likes.innerHTML = photographerObject.likes + ' <i class="fas fa-heart"></i>'
  }
  
  return photographHeader;
}

// ********* AFFICHAGE PHOTOGRAPHE *********

// Récupère les données du photographe sélectionné
const photographers = getPhotographers();
function getPhotographer(photographerID) {
  const photographer = photographers.find(photographers => photographers.id == photographerID);
  return photographer;
};

/* 
* Afficher les données du photographe sélectionné
*/
function displayPhotographer(data) {
  const main = document.getElementById('main');
  const userCardDOM = makeHeader(data);
  main.appendChild(userCardDOM);
}

// ********* AFFICHAGE MEDIAS *********

/* 
* Récupérer l'id du photographe 
*/
function getPhotographerId() {
  const url = new URL(window.location.href);
  const photographerId = url.searchParams.get('id');
  return photographerId;
};

/* 
*Récuperer tous les médias du photographe
*/
function getPhotographerMedia() {
  const photographerMedia = getMedia().filter(media => media.photographerId == getPhotographerId());
  return photographerMedia;
};

/*
* Afficher les médias du photographe
*/ 
function displayPhotographerMedia() {
  const photographerMedia = getPhotographerMedia();
  const photographerMediaSection = document.querySelector('.media_section');
  photographerMedia.forEach((media) => {

    // Création de la div contenant les médias
    const mediaDiv = document.createElement('div');
    mediaDiv.classList.add('media_card');
    photographerMediaSection.appendChild(mediaDiv);

    // Rendu des médias
    const mediaFactory = new MediaFactory();
    mediaDiv.appendChild(mediaFactory.renderMedia(media));

    // Creation de la div contenant les likes et le titre 
    const mediaInfo = document.createElement('div');
    mediaInfo.classList.add('media_card-info');
    mediaDiv.appendChild(mediaInfo);

    // Ajout du titre
    const mediaTitle = document.createElement('h3');
    mediaTitle.classList.add('media_card-title');
    mediaInfo.appendChild(mediaTitle);
    mediaTitle.innerHTML = media.title;

    // Ajout des likes et du bouton like dans la div
    const mediaLikes = document.createElement('div');
    mediaLikes.classList.add('media_card-likes');
    mediaInfo.appendChild(mediaLikes);
    const mediaLikesNumber = document.createElement('p');
    mediaLikesNumber.classList.add('media_card-likes-number');
    mediaLikes.appendChild(mediaLikesNumber);
    mediaLikesNumber.innerHTML = media.likes;
    const mediaLikesButton = document.createElement('button');
    mediaLikesButton.classList.add('media_card-likes-button');
    mediaLikes.appendChild(mediaLikesButton);
    mediaLikesButton.innerHTML = '<i class="fas fa-heart"></i>';

    // Ajout des likes sous le média et incrémentation des likes dans la cartouche du photographe
    mediaLikesButton.onclick = () => {
      media.likes++;
      mediaLikesNumber.innerHTML = media.likes;
      const likes = document.querySelector('.likes')
      likes.innerHTML = parseInt(likes.innerHTML) + 1 + ' <i class="fas fa-heart"></i>'
    }

    // Pouvoir liker les médias une seule fois
    mediaLikesButton.addEventListener('click', () => {
      mediaLikesButton.disabled = true;
    });

    // Focus sur le coeur quand le media est liké et l'enlever quand on clique sur le bouton like
    mediaLikesButton.addEventListener('click', () => {
      mediaLikesButton.classList.add('liked');
    });
  });
};
displayPhotographerMedia();

// ********* FUNCTION INIT *********
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
};

init();