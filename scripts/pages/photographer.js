import { getPhotographers } from '../utils/model.js';
import { getMedia } from '../utils/model.js';
import { loader } from '../utils/loader.js';
import { displayModal } from '../utils/contactForm.js';
import { closeModal } from '../utils/contactForm.js';
import { validateForm } from '../utils/contactForm.js';
import { MediaFactory } from '../factories/media.js';

// Récuper l'id du photographe de la page
function getPhotographerId() {
  const url = new URL(window.location.href);
  const photographerId = url.searchParams.get('id');
  return photographerId;
};

// Récuperer tous les médias du photographe et les r
function getPhotographerMedia() {
  const photographerMedia = getMedia().filter(media => media.photographerId == getPhotographerId());
  return photographerMedia;
};
 
// Retourner le titre des médias du photographe
function getPhotographerMediaTitle() {
  const photographerMediaTitle = getPhotographerMedia().map(media => media.title);
  document.querySelector('.media_title').innerHTML = photographerMediaTitle.length + ' ' + 'photos';
  return photographerMediaTitle;
};

// Afficher les médias du photographe
function displayPhotographerMedia() {
  const photographerMedia = getPhotographerMedia();
  const photographerMediaSection = document.querySelector('.media_section');
  photographerMedia.forEach((media) => {
    // Création de la div contenant les médias
    const mediaDiv = document.createElement('div');
    mediaDiv.classList.add('media');
    photographerMediaSection.appendChild(mediaDiv);
    // Rendu des médias
    const mediaFactory = new MediaFactory();
    mediaDiv.appendChild(mediaFactory.renderMedia(media));
    // Creation de la div contenant les likes et le titre 
    const mediaInfo = document.createElement('div');
    mediaInfo.classList.add('media_info');
    mediaDiv.appendChild(mediaInfo);
    // Ajout du titre
    const mediaTitle = document.createElement('h3');
    mediaTitle.classList.add('media_title');
    mediaInfo.appendChild(mediaTitle);
    mediaTitle.innerHTML = media.title;
    // Ajout des likes
    const mediaLikes = document.createElement('p');
    mediaLikes.classList.add('media_likes');
    mediaInfo.appendChild(mediaLikes);
    mediaLikes.innerHTML = media.likes + ' ' + 'likes';
    // Ajout du bouton like
    const likeButton = document.createElement('button');
    likeButton.classList.add('like_button');
    mediaInfo.appendChild(likeButton);
    likeButton.innerHTML = '<i class="fas fa-heart"></i>';
    // Ajout du bouton like
    likeButton.onclick = () => {
      media.likes++;
      mediaLikes.innerHTML = media.likes + ' ' + 'likes';
    };
  });
};
displayPhotographerMedia();


// Loader
window.onload = () => { loader(); };
  
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

  // Alimentation du cartouche : Tarif
  const tarif = document.querySelector('.price')
  tarif.innerHTML = photographerObject.price + '€/jour'
  
  return photographHeader;
}

// Récupère les données du photographe sélectionné
const photographers = getPhotographers();
function getPhotographer(photographerID) {
  const photographer = photographers.find(photographers => photographers.id == photographerID);
  return photographer;
};

// Afficher les données du photographe sélectionné
function displayPhotographer(data) {
  const main = document.getElementById('main');
  const userCardDOM = makeHeader(data);
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
};

init();