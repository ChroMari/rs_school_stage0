import db_card from "./cardDB";

const cardView = (body) => {
  for (let i = 0; i < db_card.length; i++) {
    const article = document.createElement('article');
    article.classList.add('card');

    const a = document.createElement('a');
    a.classList.add('card-link');
    a.setAttribute('href', db_card[i].link);

    const img = document.createElement('img');
    img.classList.add('card__img');
    img.src = db_card[i].img_src;
    img.alt = db_card[i].title;
    img.width = '440';
    img.height = '285';
    a.appendChild(img);

    const h3 = document.createElement('h3');
    h3.classList.add('card__title');
    h3.textContent = db_card[i].title;
    a.appendChild(h3);

    const pTour = document.createElement('p');
    pTour.classList.add('card__text');
    pTour.textContent = '360° Virtual Tour';
    a.appendChild(pTour);

    const pView = document.createElement('p');
    pView.classList.add('card__text');
    pView.textContent = 'Google Street Panorama View';
    a.appendChild(pView);

    article.appendChild(a);
    body.appendChild(article);
  }
};

export default cardView;