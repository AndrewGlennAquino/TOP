import "./styles.css";
import { homePage } from "./home-page.js";
import { menuPage } from "./menu-page.js";
import { contactPage } from "./contact-page.js";


// Content container
export const content = document.getElementById("content");

// Home page by default 
homePage.create();

// Get all button elements
const homeButton = document.getElementById("nav-home-button");
const menuButton = document.getElementById("nav-menu-button");
const contactButton = document.getElementById("nav-contact-button");

// Add functionality to home button on click to create home page
homeButton.addEventListener("click", () => {
  homeButton.classList.add("active");
  menuButton.classList.remove("active");
  contactButton.classList.remove("active");
  
  content.textContent = "";
  homePage.create();
});

// Add functionality to menu button on click to create menu page
menuButton.addEventListener("click", () => {
  homeButton.classList.remove("active");
  menuButton.classList.add("active");
  contactButton.classList.remove("active");

  content.textContent = "";
  menuPage.create();
});

// Add functionality to contact button on click to create contact page
contactButton.addEventListener("click", () => {
  homeButton.classList.remove("active");
  menuButton.classList.remove("active");
  contactButton.classList.add("active");

  content.textContent = "";
  contactPage.create();
});