import { getPhotographers } from '../utils/model.js'
import { getMedia } from '../utils/model.js'
import { loader } from '../utils/loader.js'
import { displayModal } from '../utils/contactForm.js'
import { closeModal } from '../utils/contactForm.js'
import { validateForm } from '../utils/contactForm.js'
import { MediaFactory } from '../factories/media.js'

// ***************** LOADER *****************

window.onload = () => { loader() }
  
// ***************** HEADER *****************
/*
* Création du header du photographe
*/
function makeHeader(photographerObject) {

  // Section 'header'
  const photographHeader = document.createElement('section')
  photographHeader.classList.add('photograph-header')

  // Bloc 'identité' du photographe
  const photographerIdentity = document.createElement('div')
  photographHeader.appendChild(photographerIdentity)
  photographerIdentity.classList.add('photographerIdentity')

  const photographerName = document.createElement('h2')
  photographerIdentity.appendChild(photographerName)
  photographerName.classList.add('photographerName')

  const photographerCity = document.createElement('h3')
  photographerIdentity.appendChild(photographerCity)
  photographerCity.classList.add('photographerCity')

  const photographerTagLine = document.createElement('h4')
  photographerIdentity.appendChild(photographerTagLine)
  photographerTagLine.classList.add('photographerTagLine')

  // Alimentation des zones HTML
  photographerName.innerHTML = photographerObject.name
  photographerCity.innerHTML = photographerObject.city + ', ' + photographerObject.country
  photographerTagLine.innerHTML = photographerObject.tagline

  // Bouton "Contactez-moi"
  const contact_button = document.createElement('button')
  photographHeader.appendChild(contact_button)
  contact_button.classList.add('contact_button')
  contact_button.onclick = displayModal
  contact_button.innerHTML = 'Contactez-moi'
  contact_button.setAttribute('aria-label', 'Contactez-moi')

  // Fermer la modale
  const close_button = document.getElementById('closeModal')
  close_button.onclick = closeModal

  // Validarion du formulaire
  const submitForm = document.getElementById('submit_button')
  submitForm.onclick = validateForm

  // Portrait du Photographe
  const media = new MediaFactory()
  const photographerPortrait = document.createElement('div')
  photographHeader.appendChild(photographerPortrait)
  photographerPortrait.classList.add('photographerPortrait')
  photographerPortrait.appendChild(media.renderMedia(photographerObject))
  photographerPortrait.querySelector('img').setAttribute('alt', 'Portrait de ' + photographerObject.name)

  // ***************** LIKES *****************

  // Alimentation du cartouche : Tarif
  const tarif = document.querySelector('.price')
  tarif.innerHTML = photographerObject.price + '€/jour'

  // Recupération de la somme des likes
  const photographerMedia = getPhotographerMedia()
  let sum = 0
  photographerMedia.forEach((media) => {
    sum += media.likes
  })
  photographerObject.likes = sum

  // Alimentation du cartouche : Quantité de likes
  const likes = document.querySelector('.likes')
  likes.innerHTML = photographerObject.likes + ' <i class="fas fa-heart"></i>'
  likes.onclick = () => {
    photographerObject.likes++
    likes.innerHTML = photographerObject.likes + ' <i class="fas fa-heart"></i>'
  }
  
  return photographHeader
}

// ***************** AFFICHAGE PHOTOGRAPHE *****************
/*
* Récupère les données du photographe sélectionné
*/
const photographers = getPhotographers()
function getPhotographer(photographerID) {
  const photographer = photographers.find(photographers => photographers.id == photographerID)
  return photographer
}

/* 
* Afficher les données du photographe sélectionné
*/
function displayPhotographer(data) {
  const main = document.getElementById('main')
  const userCardDOM = makeHeader(data)
  main.appendChild(userCardDOM)
}

// ***************** AFFICHAGE MEDIAS *****************
/* 
* Récupérer l'id du photographe 
*/
function getPhotographerId() {
  const url = new URL(window.location.href)
  const photographerId = url.searchParams.get('id')
  return photographerId
}

/* 
*Récuperer tous les médias du photographe
*/
function getPhotographerMedia() {
  const photographerMedia = getMedia().filter(media => media.photographerId == getPhotographerId()).sort((a, b) => b.likes - a.likes)
  return photographerMedia
}

/*
*Trier les médias par popularité, date ou titre
*/
function sortPhotographerMedia(){
  const photographerMedia = getPhotographerMedia()
  const object = document.querySelector('.media_tri_input')

  if (object.value == 'date') {
    photographerMedia.sort((a, b) => new Date(b.date) - new Date(a.date))
  }
  else if (object.value == 'titre') {
    photographerMedia.sort((a, b) => a.title.localeCompare(b.title))
  }

  displayPhotographerMedia(photographerMedia)
}

const object = document.querySelector('.media_tri_input')
object.addEventListener('change', sortPhotographerMedia)

/*
* Afficher les médias du photographe
*/ 
let media = document.querySelectorAll('.media:not(.portrait)')
let mediaArray = Array.from(media)

function displayPhotographerMedia(photographerMedia) {
  const photographerMediaSection = document.querySelector('.media_section')
  photographerMediaSection.innerHTML = ''
  photographerMedia.forEach((media) => {
    
    // Création de la div contenant les médias
    const mediaDiv = document.createElement('div')
    mediaDiv.classList.add('media_card')
    photographerMediaSection.appendChild(mediaDiv)

    // Rendu des médias
    const mediaFactory = new MediaFactory()
    mediaDiv.appendChild(mediaFactory.renderMedia(media))

    // Creation de la div contenant les likes et le titre 
    const mediaInfo = document.createElement('div')
    mediaInfo.classList.add('media_card-info')
    mediaDiv.appendChild(mediaInfo)

    // Ajout du titre
    const mediaTitle = document.createElement('h3')
    mediaTitle.classList.add('media_card-title')
    mediaInfo.appendChild(mediaTitle)
    mediaTitle.innerHTML = media.title

    // Ajout des likes et du bouton like dans la div
    const mediaLikes = document.createElement('div')
    mediaLikes.classList.add('media_card-likes')
    mediaInfo.appendChild(mediaLikes)
    const mediaLikesNumber = document.createElement('p')
    mediaLikesNumber.classList.add('media_card-likes-number')
    mediaLikes.appendChild(mediaLikesNumber)
    mediaLikesNumber.innerHTML = media.likes
    const mediaLikesButton = document.createElement('button')
    mediaLikesButton.classList.add('media_card-likes-button')
    mediaLikes.appendChild(mediaLikesButton)
    mediaLikesButton.innerHTML = '<i class="fas fa-heart"></i>'

    // Ajout des likes sous le média et incrémentation des likes dans la cartouche du photographe
    mediaLikesButton.onclick = () => {
      media.likes++
      mediaLikesNumber.innerHTML = media.likes
      const likes = document.querySelector('.likes')
      likes.innerHTML = parseInt(likes.innerHTML) + 1 + ' <i class="fas fa-heart"></i>'
    }

    // Pouvoir liker les médias une seule fois
    mediaLikesButton.addEventListener('click', () => {
      mediaLikesButton.disabled = true
    })

    // Focus sur le coeur quand le media est liké et l'enlever quand on clique sur le bouton like
    mediaLikesButton.addEventListener('click', () => {
      mediaLikesButton.classList.add('liked')
    })
  })
  media = document.querySelectorAll('.media:not(.portrait)')
  mediaArray = Array.from(media)
}
const photographerMedia = getPhotographerMedia()
displayPhotographerMedia(photographerMedia)


// ***************** TRI *****************
// Recherchez tous les éléments avec la classe "media_tri" 
var x, i, j, l, ll, selElmnt, a, b, c
x = document.getElementsByClassName('media_tri')
l = x.length
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName('select')[0]
  ll = selElmnt.length
  
  // Pour chaque élément, créez un nouveau DIV qui agira comme l'élément sélectionné
  a = document.createElement('DIV')
  a.setAttribute('class', 'select-selected')
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML
  x[i].appendChild(a)
  
  // Pour chaque élément, créez un nouveau DIV qui contiendra la liste d'options :
  b = document.createElement('DIV')
  b.setAttribute('class', 'select-items select-hide')
  for (j = 0; j < ll; j++) {
    
    // Pour chaque option de l'élément de sélection d'origine, créez un nouveau DIV qui agira comme un élément d'option
    c = document.createElement('DIV')
    if (j==0) {c.setAttribute('class', 'same-as-selected')}
    c.innerHTML = selElmnt.options[j].innerHTML
    c.addEventListener('click', function() {
      
      // Lorsqu'un élément est cliqué, mettre à jour la select box d'origine et l'élément sélectionné
      var y, i, k, s, h, sl, yl
      s = this.parentNode.parentNode.getElementsByTagName('select')[0]
      sl = s.length
      h = this.parentNode.previousSibling
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i
          h.innerHTML = this.innerHTML
          y = this.parentNode.getElementsByClassName('same-as-selected')
          yl = y.length
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute('class')
          }
          this.setAttribute('class', 'same-as-selected')
          sortPhotographerMedia()
          break
        }
      }
      h.click()
    })
    b.appendChild(c)
  }
  x[i].appendChild(b)
  a.addEventListener('click', function(e) {
    
    // Lorsque la select box est cliquée, fermez toutes les autres select boxes, et ouvrir/fermer la select box actuelle
    e.stopPropagation()
    closeAllSelect(this)
    this.nextSibling.classList.toggle('select-hide')
    this.classList.toggle('select-arrow-active')
  })
}

/*
* Une fonction qui fermera toutes les select boxes du document, sauf la select box actuelle
*/ 
function closeAllSelect(elmnt) {
  var x, y, i, xl, yl, arrNo = []
  x = document.getElementsByClassName('select-items')
  y = document.getElementsByClassName('select-selected')
  xl = x.length
  yl = y.length
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove('select-arrow-active')
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add('select-hide')
    }
  }
}

// Si l'utilisateur clique n'importe où en dehors de la zone de sélection fermer toutes les select boxes
document.addEventListener('click', closeAllSelect)

// ***************** LIGHTBOX *****************
// Ouverture de la lightbox
document.addEventListener('click', (e) => { 
  if (e.target.classList.contains('media') && !e.target.classList.contains('portrait')) {
    const modal = document.querySelector('.lightbox-background')
    const name = e.target.getAttribute('data-name')
    const lightboxTitle = document.querySelector('.lightbox-title')
    lightboxTitle.innerHTML = name
    modal.classList.add('open')
  }
})

// Fermeture de la lightbox 
const modal = document.querySelector('.lightbox-background')
document.addEventListener('click', (event) => {
  const lightboxMedia = document.querySelector('.lightbox-media')
  if (event.target === modal) {
    modal.classList.remove('open')
    lightboxMedia.innerHTML = ''
  }
})

// Fermeture de la lightbox avec la croix
const closeLightbox = document.querySelector('#close-lightbox')
closeLightbox.addEventListener('click', () => {
  const lightboxMedia = document.querySelector('.lightbox-media')
  modal.classList.remove('open')
  lightboxMedia.innerHTML = ''
})

// Fermeture de la lightbox avec la touche échap
document.addEventListener('keydown', (event) => {
  const lightboxMedia = document.querySelector('.lightbox-media')
  if (event.key === 'Escape') {
    modal.classList.remove('open')
    lightboxMedia.innerHTML = ''
  }
})

// Ajouter la classe open
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('media') && !e.target.classList.contains('portrait'))  {
    const lightboxClose = document.querySelector('.lightbox-close-arrow')
    const lightboxArrowPrevious = document.querySelector('.lightbox-arrow-previous')
    const lightboxArrowNext = document.querySelector('.lightbox-arrow-next')
    const lightboxTitle = document.querySelector('.lightbox-title')
    lightboxArrowPrevious.classList.add('open')
    lightboxArrowNext.classList.add('open')
    lightboxTitle.classList.add('open')
    lightboxClose.classList.add('open')
  }
})

// Enlever la classe open
modal.addEventListener('click', (e) => {
  const lightboxClose = document.querySelector('.lightbox-close-arrow')
  const lightboxArrowPrevious = document.querySelector('.lightbox-arrow-previous')
  const lightboxArrowNext = document.querySelector('.lightbox-arrow-next')
  const lightboxTitle = document.querySelector('.lightbox-title')
  if (e.target === modal) {
    lightboxClose.classList.remove('open')
    lightboxArrowPrevious.classList.remove('open')
    lightboxArrowNext.classList.remove('open')
    lightboxTitle.classList.remove('open')
  }
  else if (e.target === closeLightbox) {
    lightboxClose.classList.remove('open')
    lightboxArrowPrevious.classList.remove('open')
    lightboxArrowNext.classList.remove('open')
    lightboxTitle.classList.remove('open')
  }
})

// Fermeture de la lightbox avec touche échap
document.addEventListener('keydown', (event) => {
  const lightboxClose = document.querySelector('.lightbox-close-arrow')
  const lightboxArrowPrevious = document.querySelector('.lightbox-arrow-previous')
  const lightboxArrowNext = document.querySelector('.lightbox-arrow-next')
  const lightboxTitle = document.querySelector('.lightbox-title')
  if (event.key === 'Escape') {
    lightboxClose.classList.remove('open')
    lightboxArrowPrevious.classList.remove('open')
    lightboxArrowNext.classList.remove('open')
    lightboxTitle.classList.remove('open')
  }
})

// Afficher le media selectionné
let mediaIndex = 0
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('media') && !event.target.classList.contains('portrait')) {
    const lightboxMedia = document.querySelector('.lightbox-media')
    lightboxMedia.innerHTML = event.target.outerHTML
    mediaIndex = mediaArray.indexOf(event.target)
  }
})

// Afficher le media précédent
const lightboxArrowPrevious = document.querySelector('.lightbox-arrow-previous')

lightboxArrowPrevious.addEventListener('click', () => {
  if (mediaIndex > 0) {
    mediaIndex--
    const lightboxMedia = document.querySelector('.lightbox-media')
    lightboxMedia.innerHTML = media[mediaIndex].outerHTML
    const lightboxTitle = document.querySelector('.lightbox-title')
    lightboxTitle.innerHTML = media[mediaIndex].getAttribute('data-name')
  }
})

// Afficher le media suivant
const lightboxArrowNext = document.querySelector('.lightbox-arrow-next')

lightboxArrowNext.addEventListener('click', () => {
  if (mediaIndex < media.length - 1) {
    mediaIndex++
    const lightboxMedia = document.querySelector('.lightbox-media')
    lightboxMedia.innerHTML = media[mediaIndex].outerHTML
    const lightboxTitle = document.querySelector('.lightbox-title')
    lightboxTitle.innerHTML = media[mediaIndex].getAttribute('data-name')
  }
})

// Navigation avec les touches fléchées
document.addEventListener('keydown', (event) => {
  const lightboxMedia = document.querySelector('.lightbox-media')
  if (event.key === 'ArrowLeft') {
    if (mediaIndex > 0) {
      mediaIndex--
      lightboxMedia.innerHTML = media[mediaIndex].outerHTML
      const lightboxTitle = document.querySelector('.lightbox-title')
      lightboxTitle.innerHTML = media[mediaIndex].getAttribute('data-name')
    }
  }
  else if (event.key === 'ArrowRight') {
    if (mediaIndex < media.length - 1) {
      mediaIndex++
      lightboxMedia.innerHTML = media[mediaIndex].outerHTML
      const lightboxTitle = document.querySelector('.lightbox-title')
      lightboxTitle.innerHTML = media[mediaIndex].getAttribute('data-name')
    }
  }
})

// ***************** FUNCTION INIT *****************
/*
* Fonction qui initialise le script
*/ 
function init() {

  //Extraction de l'ID du photographe à traiter.
  let params = (new URL(document.location)).searchParams
  const photographerID = params.get('id')

  // Récupère les datas du photographe sélectionné
  const photographer = getPhotographer(photographerID)

  // Génère le header de la page du Photographe
  displayPhotographer(photographer)

  // Ajoute le nom du photographe dans le header de la modale de contact
  const contactPhotographer = document.querySelector('.modal header h2')
  contactPhotographer.innerHTML = 'Contactez-moi : ' + '</br>' + photographer.name
}

init()