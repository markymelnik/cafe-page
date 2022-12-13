import './style.css';
import createHeader from './header';

function displayMenuOptions() {

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
  const menuBtn = document.querySelector('.nav-menu');

  menuBtn.addEventListener('click', () => {
    container.innerHTML = '';
    container.append(createHeader(), displayMenuOptions());
  })

  return container;

}

function revealStartersMenu() {

  const startersMenu = document.createElement('div');
  startersMenu.classList.add('starters-section');

  const menuSectionHeader = document.createElement('div');
  menuSectionHeader.classList.add('menu-section-header');
  menuSectionHeader.textContent = 'Starters';

  const menuItemList = document.createElement('ul');

  const menuItemOne = document.createElement('li');
  menuItemOne.classList.add('menu-items');

  const menuItemOneHeader = document.createElement('p');
  menuItemOneHeader.classList.add('menu-item-header');
  menuItemOneHeader.textContent = 'Starter 1';
  const menuItemOneDetails = document.createElement('p');
  menuItemOneDetails.classList.add('menu-item-details');
  menuItemOneDetails.textContent = 'Description';
  const menuItemOnePrice = document.createElement('p');
  menuItemOnePrice.classList.add('menu-item-price');
  menuItemOnePrice.textContent = '100';

  const menuItemTwo = document.createElement('li');
  menuItemTwo.classList.add('menu-items');

  const menuItemTwoHeader = document.createElement('p');
  menuItemTwoHeader.classList.add('menu-item-header');
  menuItemTwoHeader.textContent = 'Starter 2';
  const menuItemTwoDetails = document.createElement('p');
  menuItemTwoDetails.classList.add('menu-item-details');
  menuItemTwoDetails.textContent = 'Description';
  const menuItemTwoPrice = document.createElement('p');
  menuItemTwoPrice.classList.add('menu-item-price');
  menuItemTwoPrice.textContent = '100';

  const menuItemThree = document.createElement('li');
  menuItemThree.classList.add('menu-items');

  const menuItemThreeHeader = document.createElement('p');
  menuItemThreeHeader.classList.add('menu-item-header');
  menuItemThreeHeader.textContent = 'Starter 3';
  const menuItemThreeDetails = document.createElement('p');
  menuItemThreeDetails.classList.add('menu-item-details');
  menuItemThreeDetails.textContent = 'Description';
  const menuItemThreePrice = document.createElement('p');
  menuItemThreePrice.classList.add('menu-item-price');
  menuItemThreePrice.textContent = '100';

  const menuItemFour = document.createElement('li');
  menuItemFour.classList.add('menu-items');

  const menuItemFourHeader = document.createElement('p');
  menuItemFourHeader.classList.add('menu-item-header');
  menuItemFourHeader.textContent = 'Starter 4';
  const menuItemFourDetails = document.createElement('p');
  menuItemFourDetails.classList.add('menu-item-details');
  menuItemFourDetails.textContent = 'Description';
  const menuItemFourPrice = document.createElement('p');
  menuItemFourPrice.classList.add('menu-item-price');
  menuItemFourPrice.textContent = '100';

  menuItemOne.append(menuItemOneHeader, menuItemOneDetails, menuItemOnePrice);
  menuItemTwo.append(menuItemTwoHeader, menuItemTwoDetails, menuItemTwoPrice);
  menuItemThree.append(menuItemThreeHeader, menuItemThreeDetails, menuItemThreePrice);
  menuItemFour.append(menuItemFourHeader, menuItemFourDetails, menuItemFourPrice);
  menuItemList.append(menuItemOne, menuItemTwo, menuItemThree, menuItemFour);
  startersMenu.append(menuSectionHeader, menuItemList);

  return startersMenu;
}

export default loadMenuPage;