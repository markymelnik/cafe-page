import './style.css';

function loadAboutPage() {

  const container = document.querySelector('.container');

  const aboutContainer = document.createElement('div');
  aboutContainer.classList.add('about-container');

  const aboutInformation = document.createElement('p');
  aboutInformation.classList.add('about-info');
  aboutInformation.textContent = 'About this restaurant!'

  aboutContainer.append(aboutInformation);
  container.append(aboutContainer);

  return container;
}

export default loadAboutPage;