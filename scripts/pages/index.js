window.onload = () => {
  const loader = document.querySelector('.loader_container');
  loader.classList.add('hidden');
}

async function getPhotographers() {

  try {
      let photographers = []
      const JSONFile = 'data/photographers.json';

      let res = await fetch(JSONFile)
      if (res.ok) {
          let data = await res.json();
          photographers = data.photographers;
      }
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

  // pour utilisation de Promise //
  // getPhotographers().then((photographers)=>{
  //     displayData(photographers);
  // };


  // Récupère les datas des photographes
  const photographers = await getPhotographers();
  // Affiche les Photographes
  displayData(photographers);
};

init();