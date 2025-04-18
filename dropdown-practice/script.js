// Get body div
const body = document.querySelector("body");

// Create the dropdown button
const dropdown = document.createElement("button");
dropdown.setAttribute("id", "dropdown-button");

// Create three divs that create the dropdown gray bars
for (let i = 0; i < 3; i++) {
  const bar = document.createElement("div");
  bar.classList.add("bar");
  dropdown.appendChild(bar);
}

// Create the open dropdown box container
const dropdownContainer = document.createElement("div");
dropdownContainer.classList.add("open-dropdown", "closed");

// Create links for dropdown container and append to dropdown menu
const linkNames = ["Home", "About", "Contact"];
for (const linkName of linkNames) {
  const link = document.createElement("a");
  link.textContent = linkName;
  link.classList.add("link");
  link.href = "#";
  dropdownContainer.appendChild(link);
}

/**
 * Function that opens the dropdown menu
 */
const openDropdown = () => {
  const openDropdown = document.querySelector(".open-dropdown");
  openDropdown.classList.remove("closed");
  openDropdown.classList.add("open");
};

/**
 * Function that closes the dropdown menu
 */
const closeDropdown = () => {
  // Clear the text content of openDropdown
  const openDropdown = document.querySelector(".open-dropdown");
  openDropdown.classList.remove("open");
  openDropdown.classList.add("closed");
};

// Add functionality to butotn click
let active = false;
dropdown.addEventListener("click", () => {
  active = !active;
  if (active) {
    openDropdown();
  } else {
    closeDropdown();
  }
});

// Append dropdown button and container to body
body.appendChild(dropdown);
body.appendChild(dropdownContainer);