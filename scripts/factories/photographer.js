function photographerFactory(data) {
    const { name, tagline, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const p = document.createElement( 'p' );
        p.textContent = tagline;
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p);
        return (article);
    }

    return { name, tagline, portrait, getUserCardDOM };
}