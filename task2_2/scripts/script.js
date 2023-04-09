"use strict";

import { dishes } from "./data.js";

const buttonAll = document.getElementById("all");
const buttonBreakfast = document.getElementById("breakfast");
const buttonLunch = document.getElementById("lunch");
const buttonDinner = document.getElementById("dinner");
const buttonDrinks = document.getElementById("drinks");
const body = document.getElementById("body");
const card = document.getElementById("card");
const cards = document.querySelectorAll(".card");
const mainContent = document.querySelector(".main-content");

buttonAll.addEventListener("click", allListed);
buttonBreakfast.addEventListener("click", showBreakfast);
buttonLunch.addEventListener("click", showLunch);
buttonDinner.addEventListener("click", allListed);
buttonDrinks.addEventListener("click", allListed);

function allListed() {
  alert("We have all dishes listed, enjoy!");
}

function showBreakfast() {
  mainContent.innerHTML = "";
  const result = dishes.filter((dish) => {
    return dish.category === "Breakfast";
  });
  for (let i = 0; i < result.length; i++) {
    const html = document.createElement("div");
    html.innerHTML = `<div class="card" id="card">
        <img
          class="card__image"
          src=${result[i].image}
          alt=${result[i].name}
          title=${result[i].name}
        />
        <h2 class="card__header">
          <span class="card__header--header-color">${result[i].name}</span>
          <span class="card__header--decoration-color">${result[i].price}</span>
        </h2>
        <h3 class="card__description">
          ${result[i].description}
        </h3>
      </div>`;
    mainContent.append(html);
  }
}

function showLunch() {
  mainContent.innerHTML = "";
  const result = dishes.filter((dish) => {
    return dish.category === "Lunch";
  });
  for (let i = 0; i < result.length; i++) {
    const html = document.createElement("div");
    html.innerHTML = `<div class="card" id="card">
        <img
          class="card__image"
          src=${result[i].image}
          alt=${result[i].name}
          title=${result[i].name}
        />
        <h2 class="card__header">
          <span class="card__header--header-color">${result[i].name}</span>
          <span class="card__header--decoration-color">${result[i].price}</span>
        </h2>
        <h3 class="card__description">
          ${result[i].description}
        </h3>
      </div>`;
    mainContent.append(html);
  }
}
