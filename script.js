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
const confirm_h4 = document.querySelector(".confirm-h4");
const confirm_user_name = document.querySelector(".user-name");
const confirm_user_email = document.querySelector(".user-email");
const confirm_user_phone_nr = document.querySelector(".user-phone-nr");

// This is for making sure that the content is loaded before the script can run
document.addEventListener("DOMContentLoaded", function () {
  // Function to check if password 1 === password 2
  const check_password_match = function (password1, password2) {
    let is_a_match = false;
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
  if (window.location.pathname.includes("/index.html")) {
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
    });
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

    create_acc_btn.addEventListener("click", function (event) {
      // Prevent the default form submission
      event.preventDefault();
      // This is for catching the error
      try {
        // This is for saving the user's information to the local session-storage
        localStorage.setItem("First_name", f_name);
        localStorage.setItem("Last_name", l_name);
        localStorage.setItem("User_phone_nr", phone_nr);
        localStorage.setItem("User_email", email);
        // This is for catching the error
      } catch (error) {
        console.log("An error occurred setting the local storage: ", error);
      }
    });
  }

  // This function is for changing the welcome-content to match the user's information
  if (window.location.pathname.includes("/confirm.html")) {
    // This is for retrieving data from the local storage and displaying it on the confirm.html
    confirm_h4.textContent = `Welcome ${localStorage.getItem("First_name")}`;
    confirm_user_name.textContent = `${localStorage.getItem(
      "First_name"
    )} ${localStorage.getItem("Last_name")}`;
    confirm_user_email.textContent = `${localStorage.getItem("User_email")}`;
    confirm_user_phone_nr.textContent = `${localStorage.getItem(
      "User_phone_nr"
    )}`;

    // This is for clearing the local storage when the user clicks the back button.
    document.querySelector(".back-btn").addEventListener("click", function () {
      // This is for catching the errors
      try {
        localStorage.removeItem("First_name");
        localStorage.removeItem("Last_name");
        localStorage.removeItem("User_email");
        localStorage.removeItem("User_phone_nr");
        // This is for catching the errors
      } catch (error) {
        console.log(
          "An error occurred removing the wanted keys from the local storage: ",
          error
        );
      }
    });

    // This for updating the year on the footer automatically
    const date = new Date();
    const year = date.getFullYear();
    document.querySelector("time").textContent = year;
  }

  if (window.location.pathname.includes("/form-by-odin")) {
    // This for updating the year on the footer automatically
    const date = new Date();
    const year = date.getFullYear();
    document.querySelector("time").textContent = year;
  }
  //
});
