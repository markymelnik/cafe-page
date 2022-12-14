function createAboutContent() {

  const aboutContainer = document.createElement('div');
  aboutContainer.classList.add('about-container');

  const aboutInformation = document.createElement('p');
  aboutInformation.classList.add('about-info');
  aboutInformation.textContent = 'About this restaurant!'

  aboutContainer.append(aboutInformation);
  
  return aboutContainer;
  
}

function loadAboutContent() {
  const main = document.querySelector('.main');
  main.innerHTML = '';
  main.append(createAboutContent());
}

export default loadAboutContent;