let place = prompt("enter city")

let url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=89e6763cb86394f164f17f237c0c4f24&units=metric`


async function getData(){
  let response = await fetch(url);
  let data = await response.json();
  console.log(data.main.temp)

  let div = document.createElement("div");
  
  let place = document.createElement("h1");
  place.innerText = `You have choosen <=> ${data.name} <=> City`;

  let cityName = document.createElement("h1");
  cityName.innerText = `City: ${data.name}`;

  let tem = document.createElement("h1");
  tem.innerText = `Temp: ${data.main.temp}`;

  let tem_min = document.createElement("h1");
  tem_min.innerText = `Min_Temp: ${data.main.temp_min}`;

  let tem_max = document.createElement("h1");
  tem_max.innerText = `Max_Temp: ${data.main.temp_max}`;



  let humidity = document.createElement("h1");
  humidity.innerText = `Humidity: ${data.main.humidity}`;

  let feels_like = document.createElement("h1");
  feels_like.innerText = `feels_like: ${data.main.feels_like}`;

  div.append(place, cityName, tem, tem_min, tem_max, humidity, feels_like);
  document.body.appendChild(div)
  
}



getData();

