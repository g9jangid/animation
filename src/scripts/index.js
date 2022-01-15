import { qs } from './utils';
import '../stylesheets/style.scss';
import {
  animateSideDrawer,
  hideHeroIntroContent,
  openReadMoreBox,
  showHeroIntroContent,
  animateOutSideDrawer,
  hideReadMoreBox,
} from './animations';

let readMoreBtn = qs('.read-more-btn');
let readMoreModal = qs('.more-info-box');
let burgerMenu = qs('.burger-menu-btn');

readMoreBtn.onclick = () => {
  burgerMenu.classList.add('back-arrow');

  hideHeroIntroContent();
  openReadMoreBox();
  animateSideDrawer();
};

document.onclick = (e) => {
  let isClickInside = readMoreModal.contains(e.target) || readMoreBtn.contains(e.target);

  if (!isClickInside) {
    burgerMenu.classList.remove('back-arrow');
    showHeroIntroContent();
    animateOutSideDrawer();
    hideReadMoreBox();
  }
};
