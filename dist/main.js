/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("let weatherDescription, sysCountry, mainHumidity, mainPressure, cityName, temperature, date; \n\nlet dayString = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']\n\nconst form = document.querySelector('[form-container]')\nconst locationValue = document.getElementById('location')\n\nconst locationResult = document.querySelector('.location')\nconst dateResult = document.querySelector('.date')\nconst weather = document.querySelector('.weather')\nconst condition = document.querySelector('.condition')\nconst humidity = document.querySelector('.humidity')\nconst pressure = document.querySelector('.pressure')\n\nlocationValue.addEventListener('focusout', () => locationValue.value='')\n\nform.addEventListener('submit', e => {\n    e.preventDefault()\n    getWeather(locationValue.value).then((data) => {\n        console.log(data);\n        condition.innerText = data.weatherDescription\n        sysCountry = data.sysCountry\n        humidity.innerText = \"Humidity \" + data.mainHumidity \n        pressure.innerText = \"Pressure \" + data.mainPressure \n        weather.innerHTML = data.temperature+ \" &#176;\"\n        dateResult.innerText = dayString[data.d.getDay()-1] + \"  \" + data.sysCountry\n        locationResult.innerText=data.cityName \n        locationValue.value=''\n    })\n})\n\nasync function getWeather(location){\n    let d = new Date(0)\n    try {\n        await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WEATHER_KEY}&units=metric`,{mode:'cors'}).then(res=>res.json()).then((res)=>{\n            if(res.cod === '404'){\n                alert('City not found')\n            }else{\n                console.log(res);\n                mainPressure = res.main.pressure\n                weatherDescription = res.weather[0].description\n                sysCountry = res.sys.country\n                mainHumidity=res.main.humidity\n                cityName=res.name\n                temperature = res.main.temp\n                d.setUTCSeconds(res.dt)\n                console.log(d);\n            }\n        })\n    } catch (error) {\n        console.log(error);\n    }\n    return{weatherDescription, mainHumidity, sysCountry, cityName, d, mainPressure, temperature}\n}\n\n\n\n//# sourceURL=webpack://weatherapp/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;