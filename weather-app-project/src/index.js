import "./style.css";
import { WeatherData } from "./weather-data.js";

const weatherData = new WeatherData();
const conditionsElement = document.querySelector(".conditions");
const descriptionElement = document.querySelector(".description");

(async () => {
  const conditions = await weatherData.getCurrentConditions("Chicago");
  const description = await weatherData.getDescription("Chicago");

  conditionsElement.textContent = conditions;
  descriptionElement.textContent = description;
})();
