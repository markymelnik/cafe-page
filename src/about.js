
function createAboutPage() {

  const container = document.querySelector('.container');

  const aboutContainer = document.createElement('div');
  aboutContainer.classList.add('about-container');

  const aboutInformation = document.createElement('p');
  aboutInformation.classList.add('about-info');
  aboutInformation.textContent = 'About this restaurant!'

  aboutContainer.append(aboutInformation);
  
  return aboutContainer;

}

function loadAboutPage() {
  const container = document.querySelector('.container');
  container.append(createAboutPage());
  return container;
}

export default loadAboutPage;