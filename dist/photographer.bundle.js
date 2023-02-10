/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/factories/image.js":
/*!************************************!*\
  !*** ./scripts/factories/image.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ImageFactory\": () => (/* binding */ ImageFactory)\n/* harmony export */ });\n/* harmony import */ var _models_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/image */ \"./scripts/models/image.js\");\n\n\nclass ImageFactory {\n    createHTML(data) {\n        const image = new _models_image__WEBPACK_IMPORTED_MODULE_0__.Image(data);\n        let element = document.createElement('img');\n        element.setAttribute('src', image.src);\n        element.setAttribute('alt', image.alt);\n        element.className = 'media';\n\n        return element;\n    }\n}\n\n//# sourceURL=webpack://front-end-fisheye/./scripts/factories/image.js?");

/***/ }),

/***/ "./scripts/factories/media.js":
/*!************************************!*\
  !*** ./scripts/factories/media.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MediaFactory\": () => (/* binding */ MediaFactory)\n/* harmony export */ });\n/* harmony import */ var _factories_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factories/image */ \"./scripts/factories/image.js\");\n/* harmony import */ var _factories_video__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factories/video */ \"./scripts/factories/video.js\");\n\n\n\nclass MediaFactory {\n  renderMedia(data) {\n    let factory = null;\n    if (data.hasOwnProperty('image') || data.hasOwnProperty('portrait')) {\n      factory = new _factories_image__WEBPACK_IMPORTED_MODULE_0__.ImageFactory();\n    } else if (data.hasOwnProperty('video')) {\n      factory = new _factories_video__WEBPACK_IMPORTED_MODULE_1__.VideoFactory();\n    } else {\n      throw new Error('Type must be either \"image\" or \"video\"');\n    }\n    return factory.createHTML(data);\n  }\n}\n\n\n//# sourceURL=webpack://front-end-fisheye/./scripts/factories/media.js?");

/***/ }),

/***/ "./scripts/factories/video.js":
/*!************************************!*\
  !*** ./scripts/factories/video.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"VideoFactory\": () => (/* binding */ VideoFactory)\n/* harmony export */ });\n/* harmony import */ var _models_video__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/video */ \"./scripts/models/video.js\");\n\n\nclass VideoFactory {\n    createHTML(data) {\n        const video = new _models_video__WEBPACK_IMPORTED_MODULE_0__.Video(data);\n        let element = document.createElement('video');\n        element.setAttribute('controls', '');\n        element.setAttribute('src', video.src);\n        element.className = 'media';\n\n        return element;\n    }\n}\n\n//# sourceURL=webpack://front-end-fisheye/./scripts/factories/video.js?");

/***/ }),

/***/ "./scripts/models/image.js":
/*!*********************************!*\
  !*** ./scripts/models/image.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Image\": () => (/* binding */ Image)\n/* harmony export */ });\nclass Image {\n  constructor (data) {\n    this._id = data.id;\n    this._photographerId = data.photographerId;\n    this._title = data.title;\n    if (data.hasOwnProperty('portrait')) {\n      this._src = 'assets/portraits/' + data.portrait;\n    } else if (data.hasOwnProperty('image')) {\n      this._src = 'assets/media/' + data.image;\n    }\n    this._likes = data.likes;\n    this._date = data.date;\n    this._price = data.price;\n  }\n\n  get id() {\n    return this._id;\n  }\n\n  get photographerId() {\n    return this._photographerId;\n  }\n\n  get title() {\n    return this._title;\n  }\n\n  get src() {\n    return this._src;\n  }\n\n  get likes() {\n    return this._likes;\n  }\n\n  get date() {\n    return this._date;\n  }\n\n  get price() {\n    return this._price;\n  }\n}\n\n//# sourceURL=webpack://front-end-fisheye/./scripts/models/image.js?");

/***/ }),

/***/ "./scripts/models/video.js":
/*!*********************************!*\
  !*** ./scripts/models/video.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Video\": () => (/* binding */ Video)\n/* harmony export */ });\nclass Video {\n  constructor (data) {\n    this._id = data.id;\n    this._photographerId = data.photographerId;\n    this._title = data.title;\n    this._video = data.video;\n    this._likes = data.likes;\n    this._date = data.date;\n    this._price = data.price;\n  }\n\n  get id() {\n    return this._id;\n  }\n\n  get photographerId() {\n    return this._photographerId;\n  }\n\n  get title() {\n    return this._title;\n  }\n\n  get video() {\n    return this._video;\n  }\n\n  get likes() {\n    return this._likes;\n  }\n\n  get date() {\n    return this._date;\n  }\n\n  get price() {\n    return this._price;\n  }\n}\n\n//# sourceURL=webpack://front-end-fisheye/./scripts/models/video.js?");

/***/ }),

/***/ "./scripts/pages/photographer.js":
/*!***************************************!*\
  !*** ./scripts/pages/photographer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/model.js */ \"./scripts/utils/model.js\");\n/* harmony import */ var _utils_loader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/loader.js */ \"./scripts/utils/loader.js\");\n/* harmony import */ var _utils_contactForm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/contactForm.js */ \"./scripts/utils/contactForm.js\");\n/* harmony import */ var _factories_media_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../factories/media.js */ \"./scripts/factories/media.js\");\n\n\n\n\n\n\n\n\n// Récuper l'id du photographe de la page\nfunction getPhotographerId() {\n  const url = new URL(window.location.href);\n  const photographerId = url.searchParams.get('id');\n  return photographerId;\n};\n\n// Récuperer tous les médias du photographe et les r\nfunction getPhotographerMedia() {\n  const photographerMedia = (0,_utils_model_js__WEBPACK_IMPORTED_MODULE_0__.getMedia)().filter(media => media.photographerId == getPhotographerId());\n  return photographerMedia;\n};\n \n// Retourner le titre des médias du photographe\nfunction getPhotographerMediaTitle() {\n  const photographerMediaTitle = getPhotographerMedia().map(media => media.title);\n  document.querySelector('.media_title').innerHTML = photographerMediaTitle.length + ' ' + 'photos';\n  return photographerMediaTitle;\n};\n\n// Afficher les médias du photographe\nfunction displayPhotographerMedia() {\n  const photographerMedia = getPhotographerMedia();\n  const photographerMediaSection = document.querySelector('.media_section');\n  photographerMedia.forEach((media) => {\n    // Création de la div contenant les médias\n    const mediaDiv = document.createElement('div');\n    mediaDiv.classList.add('media');\n    photographerMediaSection.appendChild(mediaDiv);\n    // Rendu des médias\n    const mediaFactory = new _factories_media_js__WEBPACK_IMPORTED_MODULE_3__.MediaFactory();\n    mediaDiv.appendChild(mediaFactory.renderMedia(media));\n    // Creation de la div contenant les likes et le titre \n    const mediaInfo = document.createElement('div');\n    mediaInfo.classList.add('media_info');\n    mediaDiv.appendChild(mediaInfo);\n    // Ajout du titre\n    const mediaTitle = document.createElement('h3');\n    mediaTitle.classList.add('media_title');\n    mediaInfo.appendChild(mediaTitle);\n    mediaTitle.innerHTML = media.title;\n    // Ajout des likes\n    const mediaLikes = document.createElement('p');\n    mediaLikes.classList.add('media_likes');\n    mediaInfo.appendChild(mediaLikes);\n    mediaLikes.innerHTML = media.likes + ' ' + 'likes';\n    // Ajout du bouton like\n    const likeButton = document.createElement('button');\n    likeButton.classList.add('like_button');\n    mediaInfo.appendChild(likeButton);\n    likeButton.innerHTML = '<i class=\"fas fa-heart\"></i>';\n    // Ajout du bouton like\n    likeButton.onclick = () => {\n      media.likes++;\n      mediaLikes.innerHTML = media.likes + ' ' + 'likes';\n    };\n  });\n};\ndisplayPhotographerMedia();\n\n\n// Loader\nwindow.onload = () => { (0,_utils_loader_js__WEBPACK_IMPORTED_MODULE_1__.loader)(); };\n  \n/*\n* Création du header du photographe\n*/\nfunction makeHeader(photographerObject) {\n  // Section 'header'\n  const photographHeader = document.createElement('section')\n  photographHeader.classList.add('photograph-header')\n\n  // Bloc 'identité'\n  const photographerIdentity = document.createElement('div');\n  photographHeader.appendChild(photographerIdentity);\n  photographerIdentity.classList.add('photographerIdentity');\n\n  const photographerName = document.createElement('h2');\n  photographerIdentity.appendChild(photographerName);\n  photographerName.classList.add('photographerName');\n\n  const photographerCity = document.createElement('h3');\n  photographerIdentity.appendChild(photographerCity);\n  photographerCity.classList.add('photographerCity');\n\n  const photographerTagLine = document.createElement('h4');\n  photographerIdentity.appendChild(photographerTagLine);\n  photographerTagLine.classList.add('photographerTagLine');\n\n  // Alimentation des zones HTML\n  photographerName.innerHTML = photographerObject.name;\n  photographerCity.innerHTML = photographerObject.city + ', ' + photographerObject.country;\n  photographerTagLine.innerHTML = photographerObject.tagline;\n\n  // Bouton \"Contactez-moi\"\n  const contact_button = document.createElement('button');\n  photographHeader.appendChild(contact_button);\n  contact_button.classList.add('contact_button');\n  contact_button.onclick = _utils_contactForm_js__WEBPACK_IMPORTED_MODULE_2__.displayModal;\n  contact_button.innerHTML = 'Contactez-moi';\n\n  // Fermer la modale\n  const close_button = document.getElementById('closeModal');\n  close_button.onclick = _utils_contactForm_js__WEBPACK_IMPORTED_MODULE_2__.closeModal;\n\n  // Validarion du formulaire\n  const submitForm = document.getElementById('submit_button');\n  submitForm.onclick = _utils_contactForm_js__WEBPACK_IMPORTED_MODULE_2__.validateForm;\n\n  // Portrait du Photographe\n  const media = new _factories_media_js__WEBPACK_IMPORTED_MODULE_3__.MediaFactory();\n  const photographerPortrait = document.createElement('div');\n  photographHeader.appendChild(photographerPortrait);\n  photographerPortrait.classList.add('photographerPortrait');\n  photographerPortrait.appendChild(media.renderMedia(photographerObject));\n  photographerPortrait.querySelector('img').setAttribute('alt', 'Portrait de ' + photographerObject.name);\n\n  // Alimentation du cartouche : Tarif\n  const tarif = document.querySelector('.price')\n  tarif.innerHTML = photographerObject.price + '€/jour'\n  \n  return photographHeader;\n}\n\n// Récupère les données du photographe sélectionné\nconst photographers = (0,_utils_model_js__WEBPACK_IMPORTED_MODULE_0__.getPhotographers)();\nfunction getPhotographer(photographerID) {\n  const photographer = photographers.find(photographers => photographers.id == photographerID);\n  return photographer;\n};\n\n// Afficher les données du photographe sélectionné\nfunction displayPhotographer(data) {\n  const main = document.getElementById('main');\n  const userCardDOM = makeHeader(data);\n  main.appendChild(userCardDOM);\n}\n\nfunction init() {\n  //Extraction de l'ID du photographe à traiter.\n  let params = (new URL(document.location)).searchParams;\n  const photographerID = params.get('id');\n\n  // Récupère les datas du photographe sélectionné\n  const photographer = getPhotographer(photographerID);\n  // Génère le header de la page du Photographe\n  displayPhotographer(photographer);\n  // Ajoute le nom du photographe dans le header de la modale de contact\n  const contactPhotographer = document.querySelector('.modal header h2');\n  contactPhotographer.innerHTML = 'Contactez-moi : ' + '</br>' + photographer.name;\n};\n\ninit();\n\n//# sourceURL=webpack://front-end-fisheye/./scripts/pages/photographer.js?");

/***/ }),

/***/ "./scripts/utils/contactForm.js":
/*!**************************************!*\
  !*** ./scripts/utils/contactForm.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeModal\": () => (/* binding */ closeModal),\n/* harmony export */   \"displayModal\": () => (/* binding */ displayModal),\n/* harmony export */   \"validateForm\": () => (/* binding */ validateForm)\n/* harmony export */ });\nfunction displayModal() {\n    const modal = document.getElementById(\"contact_modal\");\n\t  modal.style.display = \"block\";\n}\n\nfunction closeModal() {\n    const modal = document.getElementById(\"contact_modal\");\n    modal.style.display = \"none\";\n}\n\n// validation du formulaire\n\nfunction validateForm(event) {\n  event.preventDefault();\n\n  let error = false;\n\n  const firstName = document.getElementById(\"firstName\").value;\n  const lastName = document.getElementById(\"lastName\").value;\n  const email = document.getElementById(\"email\").value;\n  const message = document.getElementById(\"message\").value;\n\n  const firstNameError = document.getElementById(\"firstNameErr\");\n  const lastNameError = document.getElementById(\"lastNameErr\");\n  const emailError = document.getElementById(\"emailErr\");\n  const messageError = document.getElementById(\"messageErr\");\n  \n  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$/;\n\n  if (firstName.length < 2) {\n    error = true;\n    firstNameError.innerHTML = \"Veuillez entrer votre prénom\";\n    document.getElementById(\"firstName\").style.border = \"1px solid red\";\n  }\n  if (lastName.length < 2) {\n    error = true;\n    lastNameError.innerHTML = \"Veuillez entrer votre nom\";\n    document.getElementById(\"lastName\").style.border = \"1px solid red\";\n  }\n  if (!emailRegex.test(email)) {\n    error = true;\n    emailError.innerHTML = \"Veuillez entrer une adresse mail valide\";\n    document.getElementById(\"email\").style.border = \"1px solid red\";\n  }\n  if (message.length < 10) {\n    error = true;\n    messageError.innerHTML = \"Veuillez entrer un message d'au moins 10 caractères\";\n    document.getElementById(\"message\").style.border = \"1px solid red\";\n  }\n  if (!error) {\n    closeModal();\n  }\n}\n\n//# sourceURL=webpack://front-end-fisheye/./scripts/utils/contactForm.js?");

/***/ }),

/***/ "./scripts/utils/loader.js":
/*!*********************************!*\
  !*** ./scripts/utils/loader.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loader\": () => (/* binding */ loader)\n/* harmony export */ });\nfunction loader() {\n  const loader = document.querySelector('.loader_container');\n  loader.classList.add('hidden');\n}\n\n//# sourceURL=webpack://front-end-fisheye/./scripts/utils/loader.js?");

/***/ }),

/***/ "./scripts/utils/model.js":
/*!********************************!*\
  !*** ./scripts/utils/model.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMedia\": () => (/* binding */ getMedia),\n/* harmony export */   \"getPhotographers\": () => (/* binding */ getPhotographers)\n/* harmony export */ });\n/* harmony import */ var _data_photographers_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/photographers.json */ \"./data/photographers.json\");\n\n\nfunction getPhotographers() {\n  return _data_photographers_json__WEBPACK_IMPORTED_MODULE_0__.photographers;\n};\n\nfunction getMedia() {\n  return _data_photographers_json__WEBPACK_IMPORTED_MODULE_0__.media;\n}\n\n//# sourceURL=webpack://front-end-fisheye/./scripts/utils/model.js?");

/***/ }),

/***/ "./data/photographers.json":
/*!*********************************!*\
  !*** ./data/photographers.json ***!
  \*********************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"photographers\":[{\"name\":\"Mimi Keel\",\"id\":243,\"city\":\"London\",\"country\":\"UK\",\"tagline\":\"Voir le beau dans le quotidien\",\"price\":400,\"portrait\":\"MimiKeel.jpg\"},{\"name\":\"Ellie-Rose Wilkens\",\"id\":930,\"city\":\"Paris\",\"country\":\"France\",\"tagline\":\"Capturer des compositions complexes\",\"price\":250,\"portrait\":\"EllieRoseWilkens.jpg\"},{\"name\":\"Tracy Galindo\",\"id\":82,\"city\":\"Montreal\",\"country\":\"Canada\",\"tagline\":\"Photographe freelance\",\"price\":500,\"portrait\":\"TracyGalindo.jpg\"},{\"name\":\"Nabeel Bradford\",\"id\":527,\"city\":\"Mexico City\",\"country\":\"Mexico\",\"tagline\":\"Toujours aller de l\\'avant\",\"price\":350,\"portrait\":\"NabeelBradford.jpg\"},{\"name\":\"Rhode Dubois\",\"id\":925,\"city\":\"Barcelona\",\"country\":\"Spain\",\"tagline\":\"Je crée des souvenirs\",\"price\":275,\"portrait\":\"RhodeDubois.jpg\"},{\"name\":\"Marcel Nikolic\",\"id\":195,\"city\":\"Berlin\",\"country\":\"Germany\",\"tagline\":\"Toujours à la recherche de LA photo\",\"price\":300,\"portrait\":\"MarcelNikolic.jpg\"}],\"media\":[{\"id\":342550,\"photographerId\":82,\"title\":\"Fashion Yellow Beach\",\"image\":\"Fashion_Yellow_Beach.jpg\",\"likes\":62,\"date\":\"2011-12-08\",\"price\":55},{\"id\":8520927,\"photographerId\":82,\"title\":\"Fashion Urban Jungle\",\"image\":\"Fashion_Urban_Jungle.jpg\",\"likes\":11,\"date\":\"2011-11-06\",\"price\":55},{\"id\":9025895,\"photographerId\":82,\"title\":\"Fashion Pattern on a Pattern\",\"image\":\"Fashion_Pattern_on_Pattern.jpg\",\"likes\":72,\"date\":\"2013-08-12\",\"price\":55},{\"id\":9275938,\"photographerId\":82,\"title\":\"Wedding Gazebo\",\"image\":\"Event_WeddingGazebo.jpg\",\"likes\":69,\"date\":\"2018-02-22\",\"price\":55},{\"id\":2053494,\"photographerId\":82,\"title\":\"Sparkles\",\"image\":\"Event_Sparklers.jpg\",\"likes\":2,\"date\":\"2020-05-25\",\"price\":55},{\"id\":7324238,\"photographerId\":82,\"title\":\"18th Anniversary\",\"image\":\"Event_18thAnniversary.jpg\",\"likes\":33,\"date\":\"2019-06-12\",\"price\":55},{\"id\":8328953,\"photographerId\":82,\"title\":\"Wooden sculpture of a horse\",\"video\":\"Art_Wooden_Horse_Sculpture.mp4\",\"likes\":24,\"date\":\"2011-12-08\",\"price\":100},{\"id\":7502053,\"photographerId\":82,\"title\":\"Triangle Man\",\"image\":\"Art_Triangle_Man.jpg\",\"likes\":88,\"date\":\"2007-05-07\",\"price\":55},{\"id\":8523492,\"photographerId\":82,\"title\":\"Purple Tunnel\",\"image\":\"Art_Purple_light.jpg\",\"likes\":24,\"date\":\"2018-05-05\",\"price\":55},{\"id\":75902334,\"photographerId\":82,\"title\":\"Art Mine\",\"image\":\"Art_Mine.jpg\",\"likes\":75,\"date\":\"2019-11-25\",\"price\":55},{\"id\":73852953,\"photographerId\":925,\"title\":\"8 Rows\",\"image\":\"Sport_2000_with_8.jpg\",\"likes\":52,\"date\":\"2013-02-30\",\"price\":70},{\"id\":92758372,\"photographerId\":925,\"title\":\"Fashion Wings\",\"image\":\"Fashion_Wings.jpg\",\"likes\":58,\"date\":\"2018-07-17\",\"price\":70},{\"id\":32958383,\"photographerId\":925,\"title\":\"Melody Red on Stripes\",\"image\":\"Fashion_Melody_Red_on_Stripes.jpg\",\"likes\":11,\"date\":\"2019-08-12\",\"price\":70},{\"id\":928587383,\"photographerId\":925,\"title\":\"Venture Conference\",\"image\":\"Event_VentureConference.jpg\",\"likes\":2,\"date\":\"2019-01-02\",\"price\":70},{\"id\":725639493,\"photographerId\":925,\"title\":\"Product Pitch\",\"image\":\"Event_ProductPitch.jpg\",\"likes\":3,\"date\":\"2019-05-20\",\"price\":70},{\"id\":23394384,\"photographerId\":925,\"title\":\"Musical Festival Keyboard\",\"image\":\"Event_KeyboardCheck.jpg\",\"likes\":52,\"date\":\"2019-07-18\",\"price\":70},{\"id\":87367293,\"photographerId\":925,\"title\":\"Musical Festival Singer\",\"image\":\"Event_Emcee.jpg\",\"likes\":23,\"date\":\"2018-02-22\",\"price\":70},{\"id\":593834784,\"photographerId\":925,\"title\":\"Animal Majesty\",\"image\":\"Animals_Majesty.jpg\",\"likes\":52,\"date\":\"2017-03-13\",\"price\":70},{\"id\":83958935,\"photographerId\":925,\"title\":\"Cute puppy on sunset\",\"video\":\"Animals_Puppiness.mp4\",\"likes\":52,\"date\":\"2016-06-12\",\"price\":70},{\"id\":394583434,\"photographerId\":527,\"title\":\"Rocky mountains from the air\",\"video\":\"Travel_Rock_Mountains.mp4\",\"likes\":23,\"date\":\"2017-03-18\",\"price\":45},{\"id\":343423425,\"photographerId\":527,\"title\":\"Outdoor Baths\",\"image\":\"Travel_Outdoor_Baths.jpg\",\"likes\":101,\"date\":\"2017-04-03\",\"price\":45},{\"id\":73434243,\"photographerId\":527,\"title\":\"Road into the Hill\",\"image\":\"Travel_Road_into_Hill.jpg\",\"likes\":99,\"date\":\"2018-04-30\",\"price\":45},{\"id\":23425523,\"photographerId\":527,\"title\":\"Bridge into the Forest\",\"image\":\"Travel_Bridge_into_Forest.jpg\",\"likes\":34,\"date\":\"2016-04-05\",\"price\":45},{\"id\":23134513,\"photographerId\":527,\"title\":\"Boat Wonderer\",\"image\":\"Travel_Boat_Wanderer.jpg\",\"likes\":23,\"date\":\"2017-03-18\",\"price\":45},{\"id\":92352352,\"photographerId\":527,\"title\":\"Portrait Sunkiss\",\"image\":\"Portrait_Sunkissed.jpg\",\"likes\":66,\"date\":\"2018-05-24\",\"price\":45},{\"id\":34513453,\"photographerId\":527,\"title\":\"Shaw Potrait\",\"image\":\"Portrait_Shaw.jpg\",\"likes\":52,\"date\":\"2017-04-21\",\"price\":45},{\"id\":23523533,\"photographerId\":527,\"title\":\"Alexandra\",\"image\":\"Portrait_Alexandra.jpg\",\"likes\":95,\"date\":\"2018-11-02\",\"price\":45},{\"id\":525834234,\"photographerId\":527,\"title\":\"Afternoon Break\",\"image\":\"Portrait_AfternoonBreak.jpg\",\"likes\":25,\"date\":\"2019-01-02\",\"price\":45},{\"id\":623534343,\"photographerId\":243,\"title\":\"Lonesome\",\"image\":\"Travel_Lonesome.jpg\",\"likes\":88,\"date\":\"2019-02-03\",\"price\":45},{\"id\":625025343,\"photographerId\":243,\"title\":\"Hillside Color\",\"image\":\"Travel_HillsideColor.jpg\",\"likes\":85,\"date\":\"2019-04-03\",\"price\":45},{\"id\":2525345343,\"photographerId\":243,\"title\":\"Wednesday Potrait\",\"image\":\"Portrait_Wednesday.jpg\",\"likes\":34,\"date\":\"2019-04-07\",\"price\":45},{\"id\":2523434634,\"photographerId\":243,\"title\":\"Nora Portrait\",\"image\":\"Portrait_Nora.jpg\",\"likes\":63,\"date\":\"2019-04-07\",\"price\":45},{\"id\":398847109,\"photographerId\":243,\"title\":\"Raw Black Portrait\",\"image\":\"Portrait_Background.jpg\",\"likes\":55,\"date\":\"2019-06-20\",\"price\":45},{\"id\":2534342,\"photographerId\":243,\"title\":\"Seaside Wedding\",\"image\":\"Event_SeasideWedding.jpg\",\"likes\":25,\"date\":\"2019-06-21\",\"price\":45},{\"id\":65235234,\"photographerId\":243,\"title\":\"Boulder Wedding\",\"image\":\"Event_PintoWedding.jpg\",\"likes\":52,\"date\":\"2019-06-25\",\"price\":45},{\"id\":23523434,\"photographerId\":243,\"title\":\"Benevides Wedding\",\"image\":\"Event_BenevidesWedding.jpg\",\"likes\":77,\"date\":\"2019-06-28\",\"price\":45},{\"id\":5234343,\"photographerId\":243,\"title\":\"Wild horses in the mountains\",\"video\":\"Animals_Wild_Horses_in_the_mountains.mp4\",\"likes\":142,\"date\":\"2019-08-23\",\"price\":60},{\"id\":95234343,\"photographerId\":243,\"title\":\"Rainbow Bird\",\"image\":\"Animals_Rainbow.jpg\",\"likes\":59,\"date\":\"2019-07-02\",\"price\":60},{\"id\":52343416,\"photographerId\":195,\"title\":\"Japanese Tower, Kyoto\",\"image\":\"Travel_Tower.jpg\",\"likes\":25,\"date\":\"2019-04-03\",\"price\":60},{\"id\":2523434,\"photographerId\":195,\"title\":\"Senset on Canals, Venice\",\"image\":\"Travel_SunsetonCanals.jpg\",\"likes\":53,\"date\":\"2019-05-06\",\"price\":60},{\"id\":95293534,\"photographerId\":195,\"title\":\"Mountain and Lake\",\"image\":\"Travel_OpenMountain.jpg\",\"likes\":33,\"date\":\"2019-05-12\",\"price\":60},{\"id\":356234343,\"photographerId\":195,\"title\":\"City Bike and Stair, Paris\",\"image\":\"Travel_Bike_and_Stair.jpg\",\"likes\":53,\"date\":\"2019-06-20\",\"price\":60},{\"id\":235234343,\"photographerId\":195,\"title\":\"Adventure Door, India\",\"image\":\"Travel_Adventure_Door.jpg\",\"likes\":63,\"date\":\"2019-06-26\",\"price\":60},{\"id\":6234234343,\"photographerId\":195,\"title\":\"Contrast, St Petersburg\",\"image\":\"Architecture_Contrast.jpg\",\"likes\":52,\"date\":\"2019-06-30\",\"price\":60},{\"id\":6525666253,\"photographerId\":195,\"title\":\"On a Hill, Tibet\",\"image\":\"Architecture_On_a_hill.jpg\",\"likes\":63,\"date\":\"2019-07-20\",\"price\":60},{\"id\":98252523433,\"photographerId\":195,\"title\":\"Leaning Tower, Pisa\",\"image\":\"Architecture_Dome.jpg\",\"likes\":88,\"date\":\"2020-01-05\",\"price\":60},{\"id\":9259398453,\"photographerId\":195,\"title\":\"Drone shot of Buenos Aires highways\",\"video\":\"Architecture_coverr_circle_empty_highway_in_buenos_aires_587740985637.mp4\",\"likes\":57,\"date\":\"2020-01-20\",\"price\":65},{\"id\":3523523534,\"photographerId\":195,\"title\":\"Corner Building and Blue Sky\",\"image\":\"Architecture_Corner_Room.jpg\",\"likes\":54,\"date\":\"2020-05-05\",\"price\":60},{\"id\":952343423,\"photographerId\":930,\"title\":\"Tricks in te air\",\"video\":\"Sport_Tricks_in_the_air.mp4\",\"likes\":150,\"date\":\"2018-02-30\",\"price\":70},{\"id\":235234343,\"photographerId\":930,\"title\":\"Climber\",\"image\":\"Sport_Next_Hold.jpg\",\"likes\":101,\"date\":\"2018-03-05\",\"price\":65},{\"id\":235343222,\"photographerId\":930,\"title\":\"Surfer\",\"image\":\"sport_water_tunnel.jpg\",\"likes\":103,\"date\":\"2018-03-10\",\"price\":70},{\"id\":7775342343,\"photographerId\":930,\"title\":\"Skier\",\"image\":\"Sport_Sky_Cross.jpg\",\"likes\":77,\"date\":\"2018-04-16\",\"price\":50},{\"id\":9253445784,\"photographerId\":930,\"title\":\"Race End\",\"image\":\"Sport_Race_End.jpg\",\"likes\":88,\"date\":\"2018-04-22\",\"price\":65},{\"id\":22299394,\"photographerId\":930,\"title\":\"Jump!\",\"image\":\"Sport_Jump.jpg\",\"likes\":95,\"date\":\"2018-04-27\",\"price\":70},{\"id\":3452342633,\"photographerId\":930,\"title\":\"White Light\",\"image\":\"Architecture_White_Light.jpg\",\"likes\":52,\"date\":\"2018-05-03\",\"price\":75},{\"id\":939234243,\"photographerId\":930,\"title\":\"Water on Modern Building\",\"image\":\"Architecture_Water_on_Modern.jpg\",\"likes\":55,\"date\":\"2018-05-10\",\"price\":72},{\"id\":222959233,\"photographerId\":930,\"title\":\"Horseshoe\",\"image\":\"Architecture_Horseshoe.jpg\",\"likes\":85,\"date\":\"2018-05-15\",\"price\":71},{\"id\":965933434,\"photographerId\":930,\"title\":\"Cross Bar\",\"image\":\"Architecture_Cross_Bar.jpg\",\"likes\":66,\"date\":\"2018-05-20\",\"price\":58},{\"id\":777723343,\"photographerId\":930,\"title\":\"Connected Curves\",\"image\":\"Architecture_Connected_Curves.jpg\",\"likes\":79,\"date\":\"2018-05-21\",\"price\":80}]}');\n\n//# sourceURL=webpack://front-end-fisheye/./data/photographers.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/pages/photographer.js");
/******/ 	
/******/ })()
;