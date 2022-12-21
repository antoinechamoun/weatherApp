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

eval("\nconst form = document.querySelector('[form-container]')\nconst locationValue = document.getElementById('location')\n\nconst WEATHER_KEY='aca3918d4ecec6cfc3b6f0745f72bb83'\nlet locationSelected=''\n\nform.addEventListener('submit', e => {\n    e.preventDefault()\n    let a = getWeather(locationValue.value)\n    locationValue.value=''\n    console.log(a);\n})\n\nlocationValue.addEventListener('focusout', ()=>locationValue.value='')\n\nasync function getWeather(location){\n    let selected\n    try {\n        selected = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WEATHER_KEY}`).then(res=>res.json())\n    } catch (error) {\n        console.log(error);\n    }\n    return selected\n}\n\n//# sourceURL=webpack://weatherapp/./src/index.js?");

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