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

// TODO : HEADER PHOTOGRAPHER