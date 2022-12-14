import './style.css';
import loadHomeContent from "./home";

function createHeader() {

  const header = document.createElement('div');
  header.classList.add('header');

  const headerLogoContainer = document.createElement('div');
  headerLogoContainer.classList.add('header-logo-container');

  const headerLogo = document.createElement('div');
  headerLogo.classList.add('header-logo');

  const headerLogoLineOne = document.createElement('div');
  headerLogoLineOne.classList.add('line-1');
  headerLogoLineOne.textContent = 'Midtown';

  const headerLogoLineTwo = document.createElement('div');
  headerLogoLineTwo.classList.add('line-2');
  headerLogoLineTwo.textContent = 'Café';

  headerLogo.append(headerLogoLineOne, headerLogoLineTwo);
  headerLogoContainer.append(headerLogo);

  const takeOutBtnContainer = document.createElement('div');
  takeOutBtnContainer.classList.add('takeout-btn-container');

  const takeOutBtn = document.createElement('button');
  takeOutBtn.classList.add('takeout-btn');
  takeOutBtn.type = 'button';
  takeOutBtn.textContent = 'Takeout!';

  takeOutBtnContainer.append(takeOutBtn);

  header.append(headerLogoContainer, createNavigation(), takeOutBtnContainer);

  return header;

}

function createMain() {
  const main = document.createElement('div');
  main.classList.add('main');
  return main;
}

function createNavigation() {

  const nav = document.createElement('div');
  nav.classList.add('header-navigation-container');

  const navigationContainer = document.createElement('div');
  navigationContainer.classList.add('header-navigation');

  const navHome = document.createElement('div');
  navHome.classList.add('nav-home');
  navHome.textContent = 'Home';

  const navMenu = document.createElement('div');
  navMenu.classList.add('nav-menu');
  navMenu.textContent = 'Menu';

  const navContact = document.createElement('div');
  navContact.classList.add('nav-about');
  navContact.textContent = 'About';

  navigationContainer.append(navHome, navMenu, navContact);
  nav.append(navigationContainer);

  return nav;

}

function createFooter() {

  const footer = document.createElement('div');
  footer.classList.add('footer');

  const footerText = document.createElement('div');
  footerText.classList.add('footer-text');
  footerText.textContent = 'Created by Mark Melnik';

  footer.append(footerText);

  return footer;
}

function loadWebsite() {
  const container = document.querySelector('.container');
  container.append(createHeader(), createMain(), createFooter());
  loadHomeContent();
  return container;
}

export default loadWebsite;