import './style.css';
import loadHomePage from "./homepage";
import loadMenuPage from "./menu";
import loadAboutPage from "./about";

loadHomePage();

const homeBtn = document.querySelector('.nav-home');
const menuBtn = document.querySelector('.nav-menu');
const aboutBtn = document.querySelector('.nav-about');

homeBtn.addEventListener('click', () => {
  console.log("Home Tab Pressed");
});

menuBtn.addEventListener('click', () => {
  loadMenuPage();
  console.log("Menu Tab Pressed");
});

aboutBtn.addEventListener('click', () => {
  loadAboutPage();
  console.log("About Tab Pressed");
});
