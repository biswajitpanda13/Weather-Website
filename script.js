const apiKey = "0e0f1feb37024f52b98170823251708"; // your API key
const btn = document.getElementById("getWeather");

btn.addEventListener("click", () => {
  const city = document.getElementById("cityInput").value.trim();
  if (city === "") {
    alert("Please enter a city name.");
    return;
  }

  fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`)
    .then(response => response.json())
    .then(data => {
      document.getElementById("cityName").textContent = `${data.location.name}, ${data.location.country}`;
      document.getElementById("temperature").textContent = `🌡️ ${data.current.temp_c}°C`;
    })
    .catch(error => {
      document.getElementById("cityName").textContent = "City not found!";
      document.getElementById("temperature").textContent = "";
      console.error(error);
    });
});
