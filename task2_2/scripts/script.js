"use strict";

import { dishes } from "./data.js";
const buttonAll = document.getElementById("all");
const buttonBreakfast = document.getElementById("breakfast");
const buttonLunch = document.getElementById("lunch");
const buttonDinner = document.getElementById("dinner");
const buttonDrinks = document.getElementById("drinks");

const card = document.getElementById("card");

buttonAll.addEventListener("click", allListed);
buttonBreakfast.addEventListener("click", breakfastListed);
buttonLunch.addEventListener("click", allListed);
buttonDinner.addEventListener("click", allListed);
buttonDrinks.addEventListener("click", allListed);

function allListed() {
  alert("We have all dishes listed, enjoy!");
}

function breakfastListed() {
  card.innerHTML = dishes;
}
