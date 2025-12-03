function getWeather() {
    const city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const apiKey = "a5f1ac713d4f666ba43e7d2f2c90d732";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                alert("City not found!");
                return;
            }

            document.getElementById("cityName").innerText = data.name;
            document.getElementById("temp").innerText =
                "Temperature: " + data.main.temp + "°C";

            document.getElementById("humidity").innerText =
                "Humidity: " + data.main.humidity + "%";

            document.getElementById("wind").innerText =
                "Wind Speed: " + data.wind.speed + " km/h";
        })
        .catch(error => {
            alert("Error fetching weather!");
            console.log(error);
        });
}
