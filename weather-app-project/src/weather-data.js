export class WeatherData {
  // async method that gets weather conditions from specified city
  async getCurrentConditions(city) {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=8UYG5C5Y2TJ2L4JRXWP49TJSH`,
      { mode: "cors" }
    );
    const data = await response.json();
    return data.currentConditions.conditions;
  }

  // async method that gets weather description from specified city
  async getDescription(city) {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=8UYG5C5Y2TJ2L4JRXWP49TJSH`,
      { mode: "cors" }
    );
    const data = await response.json();
    return data.description;
  }
}
