import { content } from "./index.js";

/**
 * Exported function that creates the home page
 */
export const homePage = (() => {
  // Private function that creates the quote container and contents
  const createQuoteContainer = () => {
    // Quote container
    const quoteContainer = document.createElement("div");
    quoteContainer.classList.add("quote-container");

    // Quote text
    const quote = document.createElement("p");
    quote.classList.add("quote-text");
    quote.textContent = "Man, what happened last night?";

    // Quote author
    const quoteAuthor = document.createElement("p");
    quoteAuthor.classList.add("quote-author");
    quoteAuthor.textContent = "- Anonymous";

    // Append quote text, quote author to quote container
    quoteContainer.appendChild(quote);
    quoteContainer.appendChild(quoteAuthor);

    // Append quote container to content container
    content.appendChild(quoteContainer);
  };

  // Private function that creates the business hours container and contents
  const createBusinessHoursContainer = () => {
    // Business hours container
    const businessHoursContainer = document.createElement("div");
    businessHoursContainer.classList.add("business-hours-container");

    // Create hours header and append to business hours container
    const businessHoursHeader = document.createElement("p");
    businessHoursHeader.textContent = "Hours";
    businessHoursHeader.classList.add("business-hours-header");
    businessHoursContainer.appendChild(businessHoursHeader);

    // Hours container
    const hoursContainer = document.createElement("div");
    hoursContainer.classList.add("hours-container");

    // For each weekday, create a <p> element for the day and another for the time
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    for (let i = 0; i < 5; i++) {
      // Create weekday element
      const weekday = document.createElement("p");
      weekday.classList.add("day");
      weekday.textContent = days[i];

      // Create hours element
      const hours = document.createElement("p");
      hours.classList.add("hours");
      hours.textContent = "4:00pm - 12:00am";

      // Append day and hours to hours container
      hoursContainer.appendChild(weekday);
      hoursContainer.appendChild(hours);
    }

    // For each weekend day, do the same as above for weekdays
    for (let i = 5; i < 7; i++) {
      // Create weekend element
      const weekend = document.createElement("p");
      weekend.classList.add("day");
      weekend.textContent = days[i];

      // Create hours element
      const hours = document.createElement("p");
      hours.classList.add("hours");
      hours.textContent = "4:00pm - 4:00am";

      // Append day and hours to hours container
      hoursContainer.appendChild(weekend);
      hoursContainer.appendChild(hours);
    }

    // Append hours container to business hours container
    businessHoursContainer.appendChild(hoursContainer);

    // Append business hours container to content container
    content.appendChild(businessHoursContainer);
  };

  // Private function that creates the address container and it's contents
  const createAddressContainer = () => {
    // Address container
    const addressContainer = document.createElement("div");
    addressContainer.classList.add("address-container");

    // Address header
    const addressHeader = document.createElement("p");
    addressHeader.classList.add("address-header");
    addressHeader.textContent = "Address";

    // Append address header to address container
    addressContainer.appendChild(addressHeader);

    // Address text
    const addressText = document.createElement("p");
    addressText.classList.add("address-text");
    addressText.textContent = "123 Sesame Street, Chicago, Philippines";

    // Append text to address container
    addressContainer.appendChild(addressText);

    // Append address container to content container
    content.appendChild(addressContainer);
  };

  // Function that creates the home page by parts
  const create = () => {
    createQuoteContainer();
    createBusinessHoursContainer();
    createAddressContainer();
  };

  return {
    create,
  };
})();