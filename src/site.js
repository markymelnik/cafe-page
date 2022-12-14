import './style.css';
import loadHomeContent from "./home";
import loadMenuContent from "./menu";
import loadAboutContent from "./about";

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

  const navigationContainer = document.createElement('div');
  navigationContainer.classList.add('nav-container');

  const navHomeBtn = document.createElement('div');
  navHomeBtn.classList.add('nav-btn');
  navHomeBtn.textContent = 'Home';
  navHomeBtn.addEventListener('click', (btn) => {
    if (btn.target.classList.contains('active')) return;
    buttonStatus(navHomeBtn);
    loadHomeContent();
  });

  const navMenuBtn = document.createElement('div');
  navMenuBtn.classList.add('nav-btn');
  navMenuBtn.textContent = 'Menu';
  navMenuBtn.addEventListener('click', (btn) => {
    if (btn.target.classList.contains('active')) return;
      buttonStatus(navMenuBtn);
      loadMenuContent();
  });

  const navAboutBtn = document.createElement('div');
  navAboutBtn.classList.add('nav-btn');
  navAboutBtn.textContent = 'About';
  navAboutBtn.addEventListener('click', (btn) => {
    if (btn.target.classList.contains('active')) return;
      buttonStatus(navAboutBtn);
      loadAboutContent();
  });

  navigationContainer.append(navHomeBtn, navMenuBtn, navAboutBtn);

  return navigationContainer;

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

function buttonStatus(button) {
  const buttons = document.querySelectorAll('.nav-btn');
  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove('active');
    }
  })
  button.classList.add('active');
};

function loadWebsite() {

  const container = document.querySelector('.container');
  container.append(createHeader(), createMain(), createFooter());

  const navBtn = document.querySelector('.nav-btn');
  buttonStatus(navBtn);

  loadHomeContent();
  
  return container;

}

export default loadWebsite;