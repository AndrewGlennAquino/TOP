import { content } from "./index.js";

/**
 * Exported function that creates the contact page
 */
export const contactPage = (() => {
  // Function that creates the contact page
  const create = () => {
    // Contact container
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");

    // Contact header
    const contactHeader = document.createElement("p");
    contactHeader.classList.add("contact-header");
    contactHeader.textContent = "Contact";

    // Append contact header to contact container
    contactContainer.appendChild(contactHeader);

    // Contact text container
    const contactTextContainer = document.createElement("div");
    contactTextContainer.classList.add("contact-text-container");

    // Contact text
    const contactInfo = [
      "Himothy Drinksalot",
      "(111) 222-3333",
      "drinkhenny@booze.com",
    ];
    // Loop through contact info, and create elements for all information, the append to contact text container
    for (const info of contactInfo) {
      const contactText = document.createElement("p");
      contactText.classList.add("contact-text");
      contactText.textContent = info;

      contactTextContainer.appendChild(contactText);
    }

    // Append contact text container to contact container
    contactContainer.appendChild(contactTextContainer);

    // Append contact container to content container
    content.appendChild(contactContainer);
  };

  return {
    create,
  };
})();