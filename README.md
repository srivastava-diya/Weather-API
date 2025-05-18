# 🌤️ Weather API
A simple Node.js-based weather scraping API using Express, Axios, and Cheerio. This API scrapes real-time weather data based on the city provided in the URL.


## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/srivastava-diya/Weather-API.git
   cd weather-api


2. Install Dependencies:
   ```bash
   npm install


3. Create a .env file:
   ```bash
    ROOT_URL_BEG=https://www.indiatoday.in/weather/
    ROOT_URL_END=-weather-forecast-today


4. Start the server:
   ```bash
   node index.js


5. GET /:city
Returns weather data for the specified city.

  
    Example
    https://weather-api-xmi6.onrender.com/lucknow


6. Response in json format:
   ```bash
   {
   "City": "lucknow",
    "DateAndTime": "Sun, May 18 12:57 PM IST",
    "Temperature": "41° C",
    "Temp_min": "28°C",
    "Temp_max": "43°C",
    "Sunrise": "05:17 AM",
    "Sunset": "06:48 PM",
    "Humidity": "21",
    "Pressure": "1002",
    "Longitude": "80.89",
    "Latitude": "26.83"
   }


7. Notes
    This project relies on scraping, which means if the source website structure changes, the API might break.

    Please ensure you have permission to scrape the target website.
