let apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let apikey = "e67b7010785db9f0b484b3293cfbff1e";
let main_weather=document.querySelector(".main_weather");
let inputBtn = document.querySelector(".search_icon img");
let input = document.querySelector("input");
let img=document.querySelector(".wheather_img img")
async function checkWeather(city) {
    let res = await fetch(apiurl + city + `&appid=${apikey}`);
    let data = await res.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    if(data.weather[0].main=="Clouds"){
        img.src="Images/clouds.png"
    }
    else if(data.weather[0].main=="Clear"){
        img.src="Images/clear.png"
    }
    else if(data.weather[0].main=="Mist"){
        img.src="Images/mist.png"
    }
    else if(data.weather[0].main=="Rain"){
        img.src="Images/rain.png"
    }
    else if(data.weather[0].main=="Snow"){
        img.src="Images/snow.png"
    }
    else if(data.weather[0].main=="wind"){
        img.src="Images/Wind.png"
    }
    else if(data.weather[0].main=="Drizzle"){
        img.src="Images/drizzle.png"
    }
}

inputBtn.addEventListener("click", () => { 
    main_weather.style.display="block";         
    checkWeather(input.value);
});