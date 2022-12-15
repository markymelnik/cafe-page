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
  menuTypeOne.classList.add('menu-type-btn');
  menuTypeOne.textContent = 'Drinks';
  menuTypeOne.addEventListener('click', (btn) => {
    if (btn.target.classList.contains('active')) return;
      buttonStatus(menuTypeOne);
      loadDrinksMenu();
  });

  const menuTypeTwo = document.createElement('div');
  menuTypeTwo.classList.add('menu-type-btn');
  menuTypeTwo.textContent = 'Desserts';
  menuTypeTwo.addEventListener('click', (btn) => {
    if (btn.target.classList.contains('active')) return;
      buttonStatus(menuTypeTwo);
      loadDessertsMenu();
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
  const drinksMenu = document.createElement('div');
  drinksMenu.classList.add('drinks-menu');

  drinksMenu.append(
    createMenuCard(
      "Drip Coffee",
      "Our rich coffee beans are sourced straight from Ethiopia and roasted to provide an aroma that is bold and exotic.",
      "3"
    ),
    createMenuCard(
      "Latté",
      "A classic espresso drink made with a shot of espresso and serveral ounces of steamed milk to create a rich, creamy beverage",
      "4"
    ),
    createMenuCard(
      "Mocha",
      "A special beverage composed of espresso, milk, and our exquisite, home-made dark chocolate.",
      "5"
    ),
    createMenuCard(
      "Americano",
      "You don't have to worry about crying over spilled milk becasue this has none. A shot of espresso with hot water.",
      "3"
    ),
    createMenuCard(
      "Espresso",
      "Cut straight to the chase. One shot of goodness with no bullshit. Double shots available upon request.",
      "2"
    )
  );
  return drinksMenu;
}

function createDessertsMenu() {
  const dessertMenu = document.createElement('div');
  dessertMenu.classList.add('dessert-menu');

  dessertMenu.append(
    createMenuCard(
      "Croissant",
      "A buttery, flaky pastry that will leave you very satisfied. Can be ordered in regular, chocolate, or almond variety.",
      "3"
    ),
    createMenuCard(
      "Strüdel",
      "A delicious, layered pastry of Austrian origin with your choice of chocolate or fruit filling.",
      "4"
    ),
    createMenuCard(
      "Baklava",
      "A moouth-watering, Turkish delicacy made from filo pastry, filled with nuts, and sweetened with our homemade honey.",
      "4"
    ),
    createMenuCard(
      "Tiramisu",
      "A rich, coffee-flavored Italian dessert that will pair well with your chosen coffee. We use our secret recipe!",
      "5"
    ),
    createMenuCard(
      "Soft Serve Ice Cream",
      "Imported from our local farmer's market. Enough said. Served in a bowl, regular cone, or waffle cone!",
      "3"
    )
  );
  return dessertMenu;
}

function loadDrinksMenu() {
  const menuDisplay = document.querySelector('.menu-display');
  menuDisplay.innerHTML = '';
  menuDisplay.append(createDrinksMenu());
}

function loadDessertsMenu() {
  const menuDisplay = document.querySelector('.menu-display');
  menuDisplay.innerHTML = '';
  menuDisplay.append(createDessertsMenu());
}

function buttonStatus(button) {
  const buttons = document.querySelectorAll('.menu-type-btn');
  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove('active');
    }
  })
  button.classList.add('active');
};

export default loadMenuContent;