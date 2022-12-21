let weatherDescription, sysCountry, mainHumidity, mainPressure, cityName, temperature, date; 

let dayString = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const form = document.querySelector('[form-container]')
const locationValue = document.getElementById('location')

const locationResult = document.querySelector('.location')
const dateResult = document.querySelector('.date')
const weather = document.querySelector('.weather')
const condition = document.querySelector('.condition')
const humidity = document.querySelector('.humidity')
const pressure = document.querySelector('.pressure')

locationValue.addEventListener('focusout', () => locationValue.value='')

form.addEventListener('submit', e => {
    e.preventDefault()
    getWeather(locationValue.value).then((data) => {
        console.log(data);
        condition.innerText = data.weatherDescription
        sysCountry = data.sysCountry
        humidity.innerText = "Humidity " + data.mainHumidity 
        pressure.innerText = "Pressure " + data.mainPressure 
        weather.innerHTML = data.temperature+ " &#176;"
        dateResult.innerText = dayString[data.d.getDay()-1] + "  " + data.sysCountry
        locationResult.innerText=data.cityName 
        locationValue.value=''
    })
})

async function getWeather(location){
    let d = new Date(0)
    try {
        await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WEATHER_KEY}&units=metric`,{mode:'cors'}).then(res=>res.json()).then((res)=>{
            if(res.cod === '404'){
                alert('City not found')
            }else{
                console.log(res);
                mainPressure = res.main.pressure
                weatherDescription = res.weather[0].description
                sysCountry = res.sys.country
                mainHumidity=res.main.humidity
                cityName=res.name
                temperature = res.main.temp
                d.setUTCSeconds(res.dt)
                console.log(d);
            }
        })
    } catch (error) {
        console.log(error);
    }
    return{weatherDescription, mainHumidity, sysCountry, cityName, d, mainPressure, temperature}
}

