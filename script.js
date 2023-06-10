"use strict";

// DOM - selections
const password_input = document.getElementById("password");
const password_confirm_input = document.getElementById("password_confirmation");
const password_confirm_label = document.querySelector(".confirm_password");
const create_acc_btn = document.querySelector(".sub-btn");

// Function to check if password 1 === password 2
let is_a_match = false;
const check_password_match = function (password1, password2) {
  const input_1 = password1.value.split("");
  const input_2 = password2.value.split("");

  if (input_1.length !== 0) {
    for (let i = 0; i <= input_2.length; i++) {
      if (input_1.join("") === input_2.join("")) {
        is_a_match = true;
        password2.style.backgroundColor = "lightgreen";
      } else {
        is_a_match = false;
        password2.style.backgroundColor = "red";
      }
    }
  }
  return is_a_match;
};

// This is for making sure that the user must have password 1 === password 2 before
// creating an account
password_confirm_input.addEventListener("input", function () {
  check_password_match(password_input, password_confirm_input);
  if (check_password_match(password_input, password_confirm_input) === false) {
    password_confirm_label.textContent = "Incorrect match";
    create_acc_btn.disabled = true;
  } else {
    password_confirm_label.textContent = "Confirm Password";
    create_acc_btn.disabled = false;
  }
});
