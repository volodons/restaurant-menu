"use strict";
// import { dishes } from "data.js";
const buttonAll = document.getElementById("all");
const buttonBreakfast = document.getElementById("breakfast");
const buttonLunch = document.getElementById("lunch");
const buttonDinner = document.getElementById("dinner");
const buttonDrinks = document.getElementById("drinks");

buttonAll.addEventListener("click", testFunction);
buttonBreakfast.addEventListener("click", testFunction);
buttonLunch.addEventListener("click", testFunction);
buttonDinner.addEventListener("click", testFunction);
buttonDrinks.addEventListener("click", testFunction);

function testFunction() {
  alert("We have all dishes listed, enjoy!");
}
