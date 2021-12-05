// const form = document.querySelector('.form');
const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector('.top-banner .msg');
const list = document.querySelector(".ajax-section .cities");

const API_key = "288fa6526a4cfaea3da02c2a4c7c6166";

form.addEventListener("submit", (e) => {

  e.preventDefault(); // prevent from submitting form

  const listItems = list.querySelectorAll(".ajax-section .city");
  const input_value = input.value;


  const url = `https://api.openweathermap.org/data/2.5/weather?q=${input_value}&appid=${API_key}&units=metric`;

  fetch(url)
    .then((response) => {

      var result = response.json();
      console.log(result);
      return result;
    })
    .then((data) => {
      const { main, name, sys, weather } = data;
      const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;

      const li = document.createElement("li");
      li.classList.add("city");
      const markup = `
  <h2 class="city-name" data-name="${name},${sys.country}">
    <span>${name}</span>
    <sup>${sys.country}</sup>
  </h2>
  <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup>
  </div>
  <figure>
    <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
    <figcaption>${weather[0]["description"]}</figcaption>
    <span>Humidity : ${main.humidity} %</span>
    <span>${sys.message}</span>
  </figure>`;
      li.innerHTML = markup;
      list.appendChild(li);

      console.log(data)
    })
    .catch(() => {
      msg.textContent = "Please Search for a vaild city";

    });


  msg.textContent = "";
  form.reset();
  input.focus();

});


