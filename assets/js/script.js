'use strict'; // Ensures the code is executed in strict mode to catch common coding mistakes.

// Function to toggle element visibility
const elementToggleFunc = function (elem) 
{ 
  elem.classList.toggle("active"); // Toggles the "active" class on the element
}

// Sidebar toggle functionality (for mobile)
// Selecting sidebar and sidebar button elements
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Adding a click event to the sidebar button
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); }); // Toggles the sidebar visibility

// Selecting elements within the modal
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// Theme Toggle
const toggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');

  // Toggle icon
  if (document.body.classList.contains('light-mode')) {
    themeIcon.setAttribute('name', 'moon-outline');
  } else {
    themeIcon.setAttribute('name', 'sunny-outline');
  }
});

// Custom select dropdown functionality
// Selecting custom select elements
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

// Toggle dropdown menu when the select box is clicked
select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// Loop through all select items and add a click event
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    // Get the selected value and update the select box text
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;

    // Close the dropdown menu
    elementToggleFunc(select);

    // Apply the filter based on the selected value
    filterFunc(selectedValue);

  });
}

// Filtering functionality
// Selecting filterable items
const filterItems = document.querySelectorAll("[data-filter-item]");

// Function to filter items based on selected value
const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      // Show all items if "all" is selected
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      // Show only items that match the selected category
      filterItems[i].classList.add("active");
    } else {
      // Hide items that don't match the selected category
      filterItems[i].classList.remove("active");
    }

  }

}

// Keep track of the last clicked button
let lastClickedBtn = filterBtn[0];

// Loop through each filter button and add a click event
for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    // Get the selected value from the button
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;

    // Apply the filter
    filterFunc(selectedValue);

    // Remove active class from the last clicked button
    lastClickedBtn.classList.remove("active");

    // Add active class to the clicked button
    this.classList.add("active");

    // Update last clicked button reference
    lastClickedBtn = this;

  });

}

// Contact form validation
// Selecting form elements
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Add an input event to each form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // Check if the form is valid
    if (form.checkValidity()) {
      // Enable the submit button if the form is valid
      formBtn.removeAttribute("disabled");
    } else {
      // Disable the submit button if the form is not valid
      formBtn.setAttribute("disabled", "");
    }

  });
}

// Page navigation functionality
// Selecting navigation links and pages
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Loop through each navigation link and add a click event
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    // Loop through all pages
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        // If the clicked link matches the page, show it
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        // Scroll to top when the page changes
        window.scrollTo(0, 0);
      } else {
        // Hide other pages and remove active class from other links
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}