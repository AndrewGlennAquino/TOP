import { content } from "./index.js";

/**
 * Exported function that creates the menu page
 */
export const menuPage = (() => {
  // Function that creates the menu page
  const create = () => {
    // Menu container
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    // Menu header
    const menuHeader = document.createElement("p");
    menuHeader.classList.add("menu-header");
    menuHeader.textContent = "Menu";

    // Menu items container
    const menuItemsContainer = document.createElement("div");
    menuItemsContainer.classList.add("menu-items-container");

    // Create menu items
    for(let i = 1; i < 12; i++) {
      // Menu item name
      const menuItem = document.createElement("p");
      menuItem.classList.add("menu-item");
      menuItem.textContent = `Random item #${i}`;
      
      // Menu item price
      const itemPrice = document.createElement("p");
      itemPrice.classList.add("item-price");
      itemPrice.textContent = "$99.99";

      // Append item and price to container
      menuItemsContainer.appendChild(menuItem);
      menuItemsContainer.appendChild(itemPrice);
    }

    // Append all divs to menu container
    menuContainer.appendChild(menuHeader);
    menuContainer.appendChild(menuItemsContainer);

    // Append menu container to content container
    content.appendChild(menuContainer);
  };

  return {
    create,
  };
})();
