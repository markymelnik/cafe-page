import './style.css';
import Background from './images/background.jpeg';
import createHeader from './header';

function createMainContent() {

  const main = document.createElement('div');
  main.classList.add('main');

  const mainBackground = document.createElement('div');
  mainBackground.classList.add('main-background');

  const backgroundImgContainer = document.createElement('div');
  backgroundImgContainer.classList.add('background-img-container');

  const backgroundImg = document.createElement('img');
  backgroundImg.src = Background;
  backgroundImg.alt = "Background photo of restaurant setting";
  backgroundImg.classList.add('background-img');

  backgroundImgContainer.append(backgroundImg);
  mainBackground.append(backgroundImgContainer);

  const welcomeTextContainer = document.createElement('div');
  welcomeTextContainer.classList.add('welcome-text-container');

  const welcomeText = document.createElement('div');
  welcomeText.classList.add('welcome-text');
  welcomeText.textContent = 'Welcome!';

  welcomeTextContainer.append(welcomeText);

  main.append(mainBackground, welcomeTextContainer);

  return main;
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

function homePageOnLoad() {

  const container = document.querySelector('.container');

  container.append(createHeader(), createMainContent(), createFooter());

  return container;
}

function loadHomePage() {

  const container = document.querySelector('.container');
  const homeBtn = document.querySelector('.nav-home');

  homeBtn.addEventListener('click', () => {
    container.innerHTML = '';
    container.append(createHeader(), createMainContent(), createFooter());
  })

  return container;

}


export {homePageOnLoad, loadHomePage};