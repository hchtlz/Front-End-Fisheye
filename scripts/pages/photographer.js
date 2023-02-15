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
/*
* Récupère les données du photographe sélectionné
*/
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
  const photographerMedia = getMedia().filter(media => media.photographerId == getPhotographerId()).sort((a, b) => b.likes - a.likes);
  return photographerMedia;
};

/*
*Trier les médias par popularité, date ou titre
*/
function sortPhotographerMedia(){
  const photographerMedia = getPhotographerMedia();
  const object = document.querySelector('.media_tri_input');

  if (object.value == 'date') {
    photographerMedia.sort((a, b) => new Date(b.date) - new Date(a.date));
  }
  else if (object.value == 'titre') {
    photographerMedia.sort((a, b) => a.title.localeCompare(b.title));
  }
  console.log(photographerMedia);

  displayPhotographerMedia(photographerMedia);
};

const object = document.querySelector('.media_tri_input');
object.addEventListener("change", sortPhotographerMedia);

/*
* Afficher les médias du photographe
*/ 
function displayPhotographerMedia(photographerMedia) {
  const photographerMediaSection = document.querySelector('.media_section');
  photographerMediaSection.innerHTML = '';
  console.log(photographerMedia);
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

const photographerMedia = getPhotographerMedia();
displayPhotographerMedia(photographerMedia);


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



var x, i, j, l, ll, selElmnt, a, b, c;

/* Look for any elements with the class "media_tri": */
x = document.getElementsByClassName("media_tri");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        
      /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);