// Loader
window.onload = () => {
  const loader = document.querySelector('.loader_container');
  loader.classList.add('hidden');
}

// Fetch du Json
async function getPhotographers() {

  try {
      let photographers = []
      const JSONFile = 'data/photographers.json';

      let res = await fetch(JSONFile, {mode: 'no-cors'})
      if (res.ok) {
          let data = await res.json();
          photographers = data.photographers;
      }
      console.log(photographers);
      return photographers;
  }

  catch (err) {
      console.log(err);
      return new Error(err);
  };
};

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");
  // console.log('photographers' + photographers);
  photographers.forEach((photographer) => {
      const photographerModel = photographerFactory(photographer);
      const userCardDOM = photographerModel.getUserCardDOM();
      photographersSection.appendChild(userCardDOM);
  });
};

async function init() {

  // Récupère les datas des photographes
  const photographers = await getPhotographers();
  // Affiche les Photographes
  displayData(photographers);
};

init();