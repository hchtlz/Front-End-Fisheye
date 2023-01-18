function photographerFactory(data) {
  const { name, portrait, city, country, tagline, price, id } = data;
  const picture = `assets/portraits/${portrait}`;

  function getUserCardDOM() {
      const tagA = document.createElement('a');
      const linkNewPage = `./photographer.html?id=${id}`;
      tagA.setAttribute('href', linkNewPage);

      const article = document.createElement('article');
      tagA.appendChild(article);
      const img = document.createElement('img');
      img.setAttribute("src", picture);
      img.setAttribute('alt', 'Portrait de ' + name)
      const h2 = document.createElement('h2');
      const h3 = document.createElement('h3');
      const h4 = document.createElement('h4');
      const p = document.createElement('p');
      h2.textContent = name;
      h3.textContent = city + ', ' + country;
      h4.textContent = tagline;
      p.textContent = price + '€/jour';
      article.appendChild(img);
      article.appendChild(h2);
      article.appendChild(h3);
      article.appendChild(h4);
      article.appendChild(p);
      return (tagA);
  }
}