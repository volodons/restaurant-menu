"use strict";

import { dishes } from "./data.js";

const buttonAll = document.getElementById("all");
const buttonBreakfast = document.getElementById("breakfast");
const buttonLunch = document.getElementById("lunch");
const buttonDinner = document.getElementById("dinner");
const buttonDrinks = document.getElementById("drinks");
const allCards = document.querySelector(".main-content");

buttonAll.addEventListener("click", () => show());
buttonBreakfast.addEventListener("click", () => show("Breakfast"));
buttonLunch.addEventListener("click", () => show("Lunch"));
buttonDinner.addEventListener("click", () => show("Dinner"));
buttonDrinks.addEventListener("click", () => show("Drinks"));

show();

function show(type) {
  const currentDishes = type
    ? dishes.filter((dish) => dish.category === type)
    : dishes;

  allCards.innerHTML = generateManyCards(currentDishes);
}

function generateManyCards(dishes) {
  return dishes.map((dish) => generateCardHtml(dish)).join("");
}

function generateCardHtml(dish) {
  return `
    <div class="card" id="card">
      <img
        class="card__image"
        src=${dish.image}
        alt=${dish.name}
        title=${dish.name}
      />
      <h2 class="card__header">
        <span class="card__header--header-color">${dish.name}</span>
        <span class="card__header--decoration-color">${dish.price}</span>
      </h2>
      <h3 class="card__description">
        ${dish.description}
      </h3>
    </div>`;
}
