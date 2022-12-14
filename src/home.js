import Background from './images/background.jpg';

function createHomeContent() {

  const mainContainer = document.createElement('div');
  mainContainer.classList.add('main-container');

  const backgroundImgContainer = document.createElement('div');
  backgroundImgContainer.classList.add('background-img-container');

  const backgroundImg = document.createElement('img');
  backgroundImg.src = Background;
  backgroundImg.alt = "Background photo of restaurant setting";
  backgroundImg.classList.add('background-img');

  backgroundImgContainer.append(backgroundImg);

  const welcomeTextContainer = document.createElement('div');
  welcomeTextContainer.classList.add('welcome-text-container');

  const welcomeText = document.createElement('div');
  welcomeText.classList.add('welcome-text');
  welcomeText.textContent = 'Welcome!';

  welcomeTextContainer.append(welcomeText);

  mainContainer.append(backgroundImgContainer, welcomeTextContainer);

  return mainContainer;
}

function loadHomeContent() {
  const main = document.querySelector('.main');
  main.append(createHomeContent());
  return main;
}

export default loadHomeContent;