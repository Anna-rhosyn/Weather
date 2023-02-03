let search = document.getElementById("ser");
// const parent = document.querySelector("p").parentElement;
search.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    e.preventDefault();
    go();
  }
});

function go() {
  weather(search.value);
}

//passing city name
function weather(city) {
  var key = `d06d88f51991e05fc9bfb87ae954ca05`;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`
  )
    .then((resp) => {
      return resp.json();
    })
    .then((data) => showWeather(data))
    .catch((err) => console.log(err));
}

//showing city climate
function showWeather(data) {
  parent = document.getElementById("weather");

  document.getElementById("des").innerHTML = ` ${data.weather[0].description}`;
  document.getElementById("temp").innerHTML = ` ${Math.round(
    data.main.temp
  )} c`;
  document.getElementById("location").innerHTML = data.name;
  document.getElementById("con").innerHTML = data.sys.country;
  parent.classList.add("weather");
}
