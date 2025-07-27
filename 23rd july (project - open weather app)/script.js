const apiKey = "602c0abaa4b182f33f573716ec8ffac8"; // Your actual API key

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const weatherResult = document.getElementById("weatherResult");

  if (!city) {
    weatherResult.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then((data) => {
      const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      weatherResult.innerHTML = `
        <h2>${data.name}</h2>
        <img src="${icon}" alt="Weather icon">
        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
        <p><strong>Condition:</strong> ${data.weather[0].main}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
      `;
    })
    .catch((error) => {
      weatherResult.innerHTML = `<p>${error.message}</p>`;
    });
}
