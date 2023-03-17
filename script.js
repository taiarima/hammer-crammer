`use strict`;

// Get the header elements
const titleHeader = document.querySelector('.title');
const navHeader = document.querySelector('nav');

// Get the main element
const mainElement = document.querySelector('main');

// Get the card element
const cardElement = document.querySelector('.card');

// Create a new element for the footer
const footerElement = document.createElement('footer');
const footerText = document.createTextNode('Copyright © Hammer Crammer');
footerElement.appendChild(footerText);

// Add the header elements to the DOM
document.body.insertBefore(titleHeader, document.body.firstChild);
document.body.insertBefore(navHeader, document.body.firstChild);

// Add the main element to the DOM
document.body.appendChild(mainElement);

// Add the card element to the main element
mainElement.appendChild(cardElement);

// Add the footer element to the body
document.body.appendChild(footerElement);

