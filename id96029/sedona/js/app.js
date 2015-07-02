var button = document.querySelector(".form-btn");
var dropdown = document.querySelector(".search-form");
var searchForm = document.querySelector(".search-form form");
var from = document.querySelector("[name=from]");
var to = document.querySelector("[name=to]");
var adults = document.querySelector("[name=adults]");

button.addEventListener("click", function (event) {
  event.preventDefault();
  dropdown.classList.toggle("show-form");
});
searchForm.addEventListener("submit", function (event) {
  if (!(from.value && to.value && adults.value)) {
    event.preventDefault();
    searchForm.classList.add("error");
  }
});
