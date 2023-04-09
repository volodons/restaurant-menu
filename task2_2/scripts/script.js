"use strict";

import { dishes } from "./data.js";

const buttonAll = document.getElementById("all");
const buttonBreakfast = document.getElementById("breakfast");
const buttonLunch = document.getElementById("lunch");
const buttonDinner = document.getElementById("dinner");
const buttonDrinks = document.getElementById("drinks");
const allCards = document.querySelector(".main-content");

buttonAll.addEventListener("click", showAll);
buttonBreakfast.addEventListener("click", showBreakfast);
buttonLunch.addEventListener("click", showLunch);
buttonDinner.addEventListener("click", showDinner);
buttonDrinks.addEventListener("click", showDrinks);

function showAll() {
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
}

function showBreakfast() {
  allCards.innerHTML = "";
  const itemsBreakfast = dishes.filter((dish) => {
    return dish.category === "Breakfast";
  });
  for (let i = 0; i < itemsBreakfast.length; i++) {
    const html = document.createElement("div");
    html.innerHTML = `<div class="card" id="card">
        <img
          class="card__image"
          src=${itemsBreakfast[i].image}
          alt=${itemsBreakfast[i].name}
          title=${itemsBreakfast[i].name}
        />
        <h2 class="card__header">
          <span class="card__header--header-color">${itemsBreakfast[i].name}</span>
          <span class="card__header--decoration-color">${itemsBreakfast[i].price}</span>
        </h2>
        <h3 class="card__description">
          ${itemsBreakfast[i].description}
        </h3>
      </div>`;
    allCards.append(html);
  }
}

function showLunch() {
  allCards.innerHTML = "";
  const itemsLunch = dishes.filter((dish) => {
    return dish.category === "Lunch";
  });
  for (let i = 0; i < itemsLunch.length; i++) {
    const html = document.createElement("div");
    html.innerHTML = `<div class="card" id="card">
        <img
          class="card__image"
          src=${itemsLunch[i].image}
          alt=${itemsLunch[i].name}
          title=${itemsLunch[i].name}
        />
        <h2 class="card__header">
          <span class="card__header--header-color">${itemsLunch[i].name}</span>
          <span class="card__header--decoration-color">${itemsLunch[i].price}</span>
        </h2>
        <h3 class="card__description">
          ${itemsLunch[i].description}
        </h3>
      </div>`;
    allCards.append(html);
  }
}

function showDinner() {
  allCards.innerHTML = "";
  const itemsDinner = dishes.filter((dish) => {
    return dish.category === "Dinner";
  });
  for (let i = 0; i < itemsDinner.length; i++) {
    const html = document.createElement("div");
    html.innerHTML = `<div class="card" id="card">
        <img
          class="card__image"
          src=${itemsDinner[i].image}
          alt=${itemsDinner[i].name}
          title=${itemsDinner[i].name}
        />
        <h2 class="card__header">
          <span class="card__header--header-color">${itemsDinner[i].name}</span>
          <span class="card__header--decoration-color">${itemsDinner[i].price}</span>
        </h2>
        <h3 class="card__description">
          ${itemsDinner[i].description}
        </h3>
      </div>`;
    allCards.append(html);
  }
}

function showDrinks() {
  allCards.innerHTML = "";
  const itemsDrinks = dishes.filter((dish) => {
    return dish.category === "Drinks";
  });
  for (let i = 0; i < itemsDrinks.length; i++) {
    const html = document.createElement("div");
    html.innerHTML = `<div class="card" id="card">
        <img
          class="card__image"
          src=${itemsDrinks[i].image}
          alt=${itemsDrinks[i].name}
          title=${itemsDrinks[i].name}
        />
        <h2 class="card__header">
          <span class="card__header--header-color">${itemsDrinks[i].name}</span>
          <span class="card__header--decoration-color">${itemsDrinks[i].price}</span>
        </h2>
        <h3 class="card__description">
          ${itemsDrinks[i].description}
        </h3>
      </div>`;
    allCards.append(html);
  }
}
