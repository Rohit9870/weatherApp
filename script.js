const apiKey = "a5c4554e3caf8ae8fb9481601f95ee6b"

const searchValue = () => {
    let cityName = document.getElementById('search_bar').value;
    // console.log(cityName);
    // if(cityName){
    //     fetchApiData(cityName);
    // }else {
    //     alert("Please type the city Name");
    // }
    cityName ? fetchApiData(cityName) : alert("Please type the city Name")
}
const fetchApiData = async (city) => {

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    const api = await fetch(apiUrl);
    const data = await api.json();
    // console.log(data)
    
    document.querySelector('.city_name').innerHTML=data.name;
    
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";

    document.querySelector('.wind_speed').innerHTML = data.wind.speed + " Km/h";
    
    document.querySelector('.temperature').innerHTML = Math.round(data.main.temp - 273.15) + "°c";
    
    if(data.weather[0].main === "Clouds"){
        document.querySelector('.img-fluid').src= "images/clouds.png";
    }else if(data.weather[0].main === "Clear"){
        document.querySelector('.img-fluid').src= "images/clear.png";
    } else if(data.weather[0].main === "Rain"){
        document.querySelector('.img-fluid').src= "images/rain.png";
    }else if(data.weather[0].main === "Drizzle"){
        document.querySelector('.img-fluid').src= "images/drizzle.png";
    }else if(data.weather[0].main === "Mist"){
        document.querySelector('.img-fluid').src= "images/mist.png";
    }else if(data.weather[0].main === "Haze"){
        document.querySelector('.img-fluid').src= "images/icons8-haze-48.png";
    } 
    
    document.querySelector('.status').innerHTML = data.weather[0].main;

}

window.onload = () => {
    const defaultCity = "Delhi";
    fetchApiData(defaultCity);
}

