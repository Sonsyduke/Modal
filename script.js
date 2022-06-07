"use strict";

// Selecting all the classes we'll be using
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

// Function to open modal
function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

// Function to close modal
function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

// Looping through the buttons and adding an event listener
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}

// adding event listener to close the modal
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
