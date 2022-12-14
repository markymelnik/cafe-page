
function createMenuPage() {

  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');

  const menuMainTitle = document.createElement('div');
  menuMainTitle.classList.add('menu-main-title');
  menuMainTitle.textContent = 'Menus';

  const menuTypeTitles = document.createElement('div');
  menuTypeTitles.classList.add('menu-type-titles');
  
  const menuTypeOne = document.createElement('div');
  menuTypeOne.classList.add('menu-type');
  menuTypeOne.textContent = 'Starters';

  const menuTypeTwo = document.createElement('div');
  menuTypeTwo.classList.add('menu-type');
  menuTypeTwo.textContent = 'Entrees';

  const menuTypeThree = document.createElement('div');
  menuTypeThree.classList.add('menu-type');
  menuTypeThree.textContent = 'Desserts';

  const menuOptions = document.createElement('div');
  menuOptions.classList.add('menu-options');

  menuTypeTitles.append(menuTypeOne, menuTypeTwo, menuTypeThree);
  menuContainer.append(menuMainTitle, menuTypeTitles, menuOptions);

  return menuContainer;
}

function loadMenuPage() {
  const container = document.querySelector('.container');
  container.append(createMenuPage());
  return container;

}


export default loadMenuPage;