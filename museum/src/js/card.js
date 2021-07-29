import royalPalaceSrc from '../assets/img/virtual-1.jpg';
import denonWingSrc from '../assets/img/virtual-2.jpg';
import colonnadePerraultSrc from '../assets/img/virtual-3.jpg';
import greekHallSrc from '../assets/img/virtual-4.jpg';
import monaLisaSrc from '../assets/img/virtual-5.jpg';
import nightPalaceSrc from '../assets/img/virtual-6.jpg';

const db_card = [{
  'img_src': royalPalaceSrc,
  'title': 'Royal Palace',
  'link': 'https://www.google.com/maps/@48.8606882,2.3356791,3a,90y,328.36h,87.55t/data=!3m7!1e1!3m5!1sAF1QipMZ9YgnArbwEIbTDANeSQYFu9gNqpW_2Sv8FBvY!2e10!3e12!7i4352!8i1815',
}, 
{
  'img_src': denonWingSrc,
  'title': 'Denon Wing',
  'link': 'https://www.google.com/maps/@48.8563254,2.3352706,3a,75y,90t/data=!3m7!1e1!3m5!1sAF1QipNRj_CwP4coDMYdCHj6qHeBeJpI2VxU5BUsOX4F!2e10!3e12!7i11000!8i5500',
},
{
  'img_src': colonnadePerraultSrc,
  'title': 'Colonnade Perrault',
  'link': 'https://www.google.com/maps/@48.8601723,2.3395439,3a,88.4y,322.04h,84.25t/data=!3m7!1e1!3m5!1sAF1QipNMZGQuEA-pAUvIG_eP_2f3gWTKZEJ6XLVJ-Pgb!2e10!3e12!7i10240!8i5120',
},
{
  'img_src': greekHallSrc,
  'title': 'Greek hall',
  'link': 'https://www.google.com/maps/@48.860183,2.3356156,3a,90y,177.69h,95.61t/data=!3m7!1e1!3m5!1sAF1QipP7uFZnTITRe-7AEVAgHAfqiCL-03gvBHcYWgF3!2e10!3e12!7i5472!8i2736',
},
{
  'img_src': monaLisaSrc,
  'title': 'Mona Lisa',
  'link': 'https://www.google.com/maps/@48.8598788,2.3355157,3a,82.2y,7.53h,94t/data=!3m7!1e1!3m5!1sAF1QipO1wkUUbyzpPjj-OR0mR5etZJT-xl-40XK8rDQ3!2e10!3e12!7i10240!8i5120',
},
{
  'img_src': nightPalaceSrc,
  'title': 'Night Palace',
  'link': 'https://www.google.com/maps/@48.8563254,2.3352706,3a,90y,21.26h,79.91t/data=!3m7!1e1!3m5!1sAF1QipPpGAowYatVyk3MMGnZAaQkYm2EUk-Dlca06SS5!2e10!3e12!7i11304!8i5652',
}];

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