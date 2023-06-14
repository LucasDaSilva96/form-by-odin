"use strict";

// DOM - selections
const password_input = document.getElementById("password");
const password_confirm_input = document.getElementById("password_confirmation");
const password_confirm_label = document.querySelector(".confirm_password");
const create_acc_btn = document.querySelector(".sub-btn");
const user_first_name = document.getElementById("first_name");
const user_last_name = document.getElementById("last_name");
const user_email = document.getElementById("email");
const user_phone_nr = document.getElementById("phone_number");
const form = document.getElementById("form");

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

// These variables are for storing the user's information
let f_name;
let l_name;
let phone_nr;
let email;

// This is for triggering the nested eventListener every time that the index.html is loaded
window.onload = function () {
  if (window.location.pathname.includes("index.html")) {
    // *****
    // This is for saving the user's first name
    user_first_name.addEventListener("input", function () {
      f_name = user_first_name.value;
    });

    // *****
    // This is for saving the user's last name
    user_last_name.addEventListener("input", function () {
      l_name = user_last_name.value;
    });

    // *****
    // This is for saving the user's phone nr
    user_phone_nr.addEventListener("input", function () {
      phone_nr = user_phone_nr.value;
    });

    // *****
    // This is for saving the user's email
    user_email.addEventListener("input", function () {
      email = user_email.value;
    });

    // This is for making sure that the user must have password 1 === password 2 before
    // creating an account
    password_input.addEventListener("input", function () {
      check_password_match(password_input, password_confirm_input);
      if (
        check_password_match(password_input, password_confirm_input) === false
      ) {
        password_confirm_label.textContent = "Incorrect match";
        create_acc_btn.disabled = true;
      } else {
        password_confirm_label.textContent = "Confirm Password";
        create_acc_btn.disabled = false;
      }
    });
    // This is for making sure that the user must have password 1 === password 2 before
    // creating an account
    password_confirm_input.addEventListener("input", function () {
      check_password_match(password_input, password_confirm_input);
      if (
        check_password_match(password_input, password_confirm_input) === false
      ) {
        password_confirm_label.textContent = "Incorrect match";
        create_acc_btn.disabled = true;
      } else {
        password_confirm_label.textContent = "Confirm Password";
        create_acc_btn.disabled = false;
      }
    });

    // This is for setting up the localStorage
    create_acc_btn.addEventListener("click", function (event) {
      event.preventDefault();
      // Store user information in localStorage
      localStorage.setItem("firstName", f_name);
      localStorage.setItem("lastName", l_name);
      localStorage.setItem("email", email);
      localStorage.setItem("phone", phone_nr);

      if (is_a_match) {
        window.location.href = "confirm.html";
      }
    });
  }
};
if (window.location.pathname.includes("/login.html")) {
  // This for updating the year on the footer automatically
  const date = new Date();
  const year = date.getFullYear();
  document.querySelector("time").textContent = year;
}
