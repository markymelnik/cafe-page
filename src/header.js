import './style.css';
import Heart from './images/heart.png';

function createHeader() {

  const header = document.createElement('div');
  header.classList.add('header');

  const headerLogoContainer = document.createElement('div');
  headerLogoContainer.classList.add('header-logo-container');

  const headerLogo = document.createElement('div');
  headerLogo.classList.add('header-logo');

  const headerLogoLineOne = document.createElement('div');
  headerLogoLineOne.classList.add('line-1');
  headerLogoLineOne.textContent = 'Taste of';

  const headerLogoLineTwo = document.createElement('div');
  headerLogoLineTwo.classList.add('line-2');
  headerLogoLineTwo.textContent = 'Ukraine';

  headerLogo.append(headerLogoLineOne, headerLogoLineTwo);
  headerLogoContainer.append(headerLogo);

  const headerNavigationContainer = document.createElement('div');
  headerNavigationContainer.classList.add('header-navigation-container');

  const headerNavigation = document.createElement('div');
  headerNavigation.classList.add('header-navigation');

  const navHome = document.createElement('div');
  navHome.classList.add('nav-home');
  navHome.textContent = 'Home';

  const navMenu = document.createElement('div');
  navMenu.classList.add('nav-menu');
  navMenu.textContent = 'Menu';

  const navContact = document.createElement('div');
  navContact.classList.add('nav-about');
  navContact.textContent = 'About';

  headerNavigation.append(navHome, navMenu, navContact);
  headerNavigationContainer.append(headerNavigation);

  const headerImgContainer = document.createElement('div');
  headerImgContainer.classList.add('header-img-container');

  const headerImg = document.createElement('img');
  headerImg.classList.add('header-img');
  headerImg.src = Heart;
  headerImg.alt = 'Blue and yellow heart at top right header';

  headerImgContainer.append(headerImg);

  const takeOutBtnContainer = document.createElement('div');
  takeOutBtnContainer.classList.add('takeout-btn-container');

  const takeOutBtn = document.createElement('button');
  takeOutBtn.classList.add('takeout-btn');
  takeOutBtn.type = 'button';
  takeOutBtn.textContent = 'Takeout!';

  takeOutBtnContainer.append(takeOutBtn);

  header.append(headerLogoContainer, headerNavigationContainer, headerImgContainer, takeOutBtnContainer)

  return header;
}

export default createHeader;