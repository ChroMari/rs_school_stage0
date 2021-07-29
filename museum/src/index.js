import cardView from './js/card';
import videoView from './js/video/index';
import formView from './js/form';

import './css/style.sass';

const cardWrapper = document.querySelector('.card-wrapper');
cardView(cardWrapper);

const playWind = document.querySelector('.player');
videoView(playWind);

const bodyFrom = document.querySelector('.form');
formView(bodyFrom);
