var ChickenCount = Cookies.get("Chicken");
var FriesCount = Cookies.get("Fries");
var ChipCount = Cookies.get("Chip");
var ChickenCounter;
var FriesCounter;
var ChipCounter;

function addChickenCount() {
  ChickenCounter += 1;
  Cookies.set("Chicken",ChickenCounter);
  document.getElementById('Chickens').innerText = "Dino Nuggets: " + ChickenCounter;
}
function addFriesCount() {
  FriesCounter += 1;
  Cookies.set("Fries",FriesCounter);
  document.getElementById('Fries').innerText = "Fries: " + FriesCounter;
}
function addChipCount() {
  ChipCounter += 1;
  Cookies.set("Chip",ChipCounter);
  document.getElementById('Chip').innerText = "Chips: " + ChipCounter;
}

function removeChickenCount() {
  ChickenCounter -= 1;
  Cookies.set("Chicken",ChickenCounter);
  document.getElementById('Chickens').innerText = "Dino Nuggets: " + ChickenCounter;
}
function removeFriesCount() {
  FriesCounter -= 1;
  Cookies.set("Fries",FriesCounter);
  document.getElementById('Fries').innerText = "Fries: " + FriesCounter;
}
function removeChipCount() {
  ChipCounter -= 1;
  Cookies.set("Chip",ChipCounter);
  document.getElementById('Chip').innerText = "Chips: " + ChipCounter;
}
function submitOrder() {
  Cookies.set("Chicken",0);
  Cookies.set("Chip",0);
  Cookies.set("Fries",0);
  ChickenCounter = 0;
  FriesCounter = 0;
  ChipCounter = 0;
  document.getElementById('Chip').innerText = "Chips: " + 0;
  document.getElementById('Fries').innerText = "Fries: " + 0;
  document.getElementById('Chickens').innerText = "Dino Nuggets: " + 0;
}

document.addEventListener("DOMContentLoaded", function(){
  event.preventDefault();
  if (document.cookie.indexOf('Chicken') > -1) {
    ChickenCounter = parseInt(ChickenCount);
    document.getElementById('Chickens').innerText = "Dino Nuggets: " + ChickenCounter;
  }
  if (document.cookie.indexOf('Fries') > -1) {
    FriesCounter = parseInt(FriesCount);
    document.getElementById('Fries').innerText = "Fries: " + FriesCounter;
  }
  if (document.cookie.indexOf('Chip') > -1) {
    ChipCounter = parseInt(ChipCount);
    document.getElementById('Chip').innerText = "Chips: " + ChipCounter;
  }
  else {
    ChickenCounter = 0;
    FriesCounter = 0;
    ChipCounter = 0;
  }
})
