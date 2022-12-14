function createMenuContent() {

  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');

  const menuMainTitle = document.createElement('div');
  menuMainTitle.classList.add('menu-main-title');
  menuMainTitle.textContent = 'Menus';

  const menuDisplay = document.createElement('div');
  menuDisplay.classList.add('menu-display');

  menuContainer.append(menuMainTitle, createMenuNavigation(), menuDisplay);

  return menuContainer;
}

function createMenuNavigation() {

  const menuOptions = document.createElement('div');
  menuOptions.classList.add('menu-options');

  const menuTypeOne = document.createElement('div');
  menuTypeOne.classList.add('menu-type');
  menuTypeOne.textContent = 'Drinks';
  menuTypeOne.addEventListener('click', (btn) => {
    if (btn.target.classList.contains('active')) return;
      buttonStatus(menuTypeOne);
      loadDrinksMenu();
  });

  const menuTypeTwo = document.createElement('div');
  menuTypeTwo.classList.add('menu-type');
  menuTypeTwo.textContent = 'Desserts';
  menuTypeTwo.addEventListener('click', (btn) => {
    if (btn.target.classList.contains('active')) return;
      buttonStatus(menuTypeTwo);
  });

  menuOptions.append(menuTypeOne, menuTypeTwo);

  return menuOptions;

}

function loadMenuContent() {
  const main = document.querySelector('.main');
  main.innerHTML = '';
  main.append(createMenuContent());
}

function createMenuCard(name, description, price) {

  const menuCard = document.createElement('div');
  menuCard.classList.add('menu-card');

  const menuCardList = document.createElement('ul');
  menuCardList.classList.add('menu-card-list');

  const menuItem = document.createElement('li');
  menuItem.classList.add('menu-item');

  const menuItemName = document.createElement('p');
  menuItemName.classList.add('menu-item-name');
  menuItemName.textContent = name;

  const menuItemDetails = document.createElement('p');
  menuItemDetails.classList.add('menu-item-details');
  menuItemDetails.textContent = description;

  const menuItemPrice = document.createElement('p');
  menuItemPrice.classList.add('menu-item-price');
  menuItemPrice.textContent = price;

  menuItem.append(menuItemName, menuItemDetails, menuItemPrice);
  menuCardList.append(menuItem);
  menuCard.append(menuCardList);

  return menuCard;

}

function createDrinksMenu() {
  const menuDisplay = document.createElement('div');
  menuDisplay.classList.add('menu-display');

  menuDisplay.append(
    createMenuCard(
      "Drip Coffee",
      "Our rich coffee beans are sourced straight from Ethiopia and roasted to provide an aroma that is bold and exotic.",
      "3"
    )
  );

  return menuDisplay;
}

function loadDrinksMenu() {
  const displayMenu = document.querySelector('.menu-display');
  displayMenu.innerHTML = '';
  displayMenu.append(createDrinksMenu());
}

function buttonStatus(button) {
  const buttons = document.querySelectorAll('.menu-type');
  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove('active');
    }
  })
  button.classList.add('active');
};

export default loadMenuContent;