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
  if (!type) {
    allCards.innerHTML = "";
    for (let i = 0; i < dishes.length; i++) {
      const html = document.createElement("div");
      html.innerHTML = `<div class="card" id="card">
        <img
          class="card__image"
          src=${dishes[i].image}
          alt=${dishes[i].name}
          title=${dishes[i].name}
        />
        <h2 class="card__header">
          <span class="card__header--header-color">${dishes[i].name}</span>
          <span class="card__header--decoration-color">${dishes[i].price}</span>
        </h2>
        <h3 class="card__description">
          ${dishes[i].description}
        </h3>
      </div>`;
      allCards.append(html);
    }
    return;
  } else {
    allCards.innerHTML = "";
    const filteredDishes = dishes.filter((dish) => {
      return dish.category === type;
    });
    for (let i = 0; i < filteredDishes.length; i++) {
      const html = document.createElement("div");
      html.innerHTML = `<div class="card" id="card">
        <img
          class="card__image"
          src=${filteredDishes[i].image}
          alt=${filteredDishes[i].name}
          title=${filteredDishes[i].name}
        />
        <h2 class="card__header">
          <span class="card__header--header-color">${filteredDishes[i].name}</span>
          <span class="card__header--decoration-color">${filteredDishes[i].price}</span>
        </h2>
        <h3 class="card__description">
          ${filteredDishes[i].description}
        </h3>
      </div>`;
      allCards.append(html);
    }
    return;
  }
}
