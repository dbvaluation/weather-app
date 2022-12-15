/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/aggregator.js":
/*!***************************!*\
  !*** ./src/aggregator.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _weatherCurrentData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherCurrentData */ \"./src/weatherCurrentData.js\");\n/* harmony import */ var _weatherForecast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherForecast */ \"./src/weatherForecast.js\");\n/* harmony import */ var _geoCodingRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./geoCodingRequest */ \"./src/geoCodingRequest.js\");\n\r\n\r\n\r\n\r\nasync function aggregatorRequest(CITY_NAME) {\r\n    try {\r\n        let latLon = await (0,_geoCodingRequest__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(CITY_NAME)\r\n        let weatherCurrentData = await (0,_weatherCurrentData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(latLon.lat, latLon.lon)\r\n        let weatherForecastData = await (0,_weatherForecast__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(latLon.lat, latLon.lon)\r\n        return { weatherCurrentData, weatherForecastData }\r\n    } catch (err) {\r\n        console.error(`Input error param=CITY_NAME, error: ${err}`)\r\n    }\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aggregatorRequest);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWdncmVnYXRvci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTREO0FBQ047QUFDTDtBQUNqRDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNkRBQWdCO0FBQzNDLHVDQUF1QywrREFBeUI7QUFDaEUsd0NBQXdDLDREQUFzQjtBQUM5RCxpQkFBaUI7QUFDakIsTUFBTTtBQUNOLDZEQUE2RCxJQUFJO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hZ2dyZWdhdG9yLmpzP2ZkYzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlYXRoZXJDdXJyZW50RGF0YVJlcXVlc3QgZnJvbSAnLi93ZWF0aGVyQ3VycmVudERhdGEnXHJcbmltcG9ydCB3ZWF0aGVyRm9yZWNhc3RSZXF1ZXN0IGZyb20gJy4vd2VhdGhlckZvcmVjYXN0J1xyXG5pbXBvcnQgZ2VvQ29kaW5nUmVxdWVzdCBmcm9tICcuL2dlb0NvZGluZ1JlcXVlc3QnXHJcblxyXG5hc3luYyBmdW5jdGlvbiBhZ2dyZWdhdG9yUmVxdWVzdChDSVRZX05BTUUpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IGxhdExvbiA9IGF3YWl0IGdlb0NvZGluZ1JlcXVlc3QoQ0lUWV9OQU1FKVxyXG4gICAgICAgIGxldCB3ZWF0aGVyQ3VycmVudERhdGEgPSBhd2FpdCB3ZWF0aGVyQ3VycmVudERhdGFSZXF1ZXN0KGxhdExvbi5sYXQsIGxhdExvbi5sb24pXHJcbiAgICAgICAgbGV0IHdlYXRoZXJGb3JlY2FzdERhdGEgPSBhd2FpdCB3ZWF0aGVyRm9yZWNhc3RSZXF1ZXN0KGxhdExvbi5sYXQsIGxhdExvbi5sb24pXHJcbiAgICAgICAgcmV0dXJuIHsgd2VhdGhlckN1cnJlbnREYXRhLCB3ZWF0aGVyRm9yZWNhc3REYXRhIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYElucHV0IGVycm9yIHBhcmFtPUNJVFlfTkFNRSwgZXJyb3I6ICR7ZXJyfWApXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZ2dyZWdhdG9yUmVxdWVzdCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/aggregator.js\n");

/***/ }),

/***/ "./src/geoCodingRequest.js":
/*!*********************************!*\
  !*** ./src/geoCodingRequest.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst API_KEY = \"34d5986fb1b59e7517a35c122e146c7d\"\r\n\r\nasync function geoCodingRequest(CITY_NAME) {\r\n    try {\r\n        const request = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${CITY_NAME}&limit=${1}&appid=${API_KEY}`)\r\n\r\n        // If request is valid(200) continue.\r\n        if (request.status == 200) {\r\n            try {\r\n                const response = await request.json()\r\n                // CITY_NAME check\r\n                if (response.length == 1) {\r\n                    return { lat: response[0].lat, lon: response[0].lon } // VALUE RETURN\r\n                }\r\n                // CITY_NAME ERROR HANDLING\r\n                if (response.length == 0) {\r\n                    throw new Error(`Input Error, please check City name.`)\r\n                }\r\n            } catch (err) {\r\n                console.log(err)\r\n            }\r\n        }\r\n        //Check if request is invalid.\r\n        if (request.status == 401) {\r\n            throw new Error('401 request error!')\r\n        }\r\n\r\n    } catch (err) {\r\n        console.log(`BAD: ${err}`)\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (geoCodingRequest);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2VvQ29kaW5nUmVxdWVzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsZ0JBQWdCLGtDQUFtQjtBQUNuQztBQUNBO0FBQ0E7QUFDQSxzRkFBc0YsVUFBVSxTQUFTLEVBQUUsU0FBUyxRQUFRO0FBQzVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDZDQUE2QztBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sNEJBQTRCLElBQUk7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsaUVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9nZW9Db2RpbmdSZXF1ZXN0LmpzPzM5OTUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQVBJX0tFWSA9IHByb2Nlc3MuZW52LkFQSV9LRVlcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdlb0NvZGluZ1JlcXVlc3QoQ0lUWV9OQU1FKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke0NJVFlfTkFNRX0mbGltaXQ9JHsxfSZhcHBpZD0ke0FQSV9LRVl9YClcclxuXHJcbiAgICAgICAgLy8gSWYgcmVxdWVzdCBpcyB2YWxpZCgyMDApIGNvbnRpbnVlLlxyXG4gICAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC5qc29uKClcclxuICAgICAgICAgICAgICAgIC8vIENJVFlfTkFNRSBjaGVja1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbGF0OiByZXNwb25zZVswXS5sYXQsIGxvbjogcmVzcG9uc2VbMF0ubG9uIH0gLy8gVkFMVUUgUkVUVVJOXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBDSVRZX05BTUUgRVJST1IgSEFORExJTkdcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW5wdXQgRXJyb3IsIHBsZWFzZSBjaGVjayBDaXR5IG5hbWUuYClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9DaGVjayBpZiByZXF1ZXN0IGlzIGludmFsaWQuXHJcbiAgICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09IDQwMSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJzQwMSByZXF1ZXN0IGVycm9yIScpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBCQUQ6ICR7ZXJyfWApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdlb0NvZGluZ1JlcXVlc3QiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/geoCodingRequest.js\n");

/***/ }),

/***/ "./src/weatherCurrentData.js":
/*!***********************************!*\
  !*** ./src/weatherCurrentData.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst API_KEY = \"34d5986fb1b59e7517a35c122e146c7d\"\r\n\r\n\r\nasync function weatherCurrentDataRequest(lat, lon) {\r\n\r\n    try {\r\n        const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)\r\n        if (request.status !== 200) throw new Error(`Request failed with status code: ${request.status}`)\r\n        const response = await request.json()\r\n        return response\r\n    }\r\n    catch (error) {\r\n        console.error(error.message)\r\n    }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherCurrentDataRequest);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvd2VhdGhlckN1cnJlbnREYXRhLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxnQkFBZ0Isa0NBQW1CO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRkFBMkYsSUFBSSxPQUFPLElBQUksU0FBUyxRQUFRO0FBQzNILHdGQUF3RixlQUFlO0FBQ3ZHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlckN1cnJlbnREYXRhLmpzP2QxOWYiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQVBJX0tFWSA9IHByb2Nlc3MuZW52LkFQSV9LRVlcclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiB3ZWF0aGVyQ3VycmVudERhdGFSZXF1ZXN0KGxhdCwgbG9uKSB7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZhcHBpZD0ke0FQSV9LRVl9JnVuaXRzPW1ldHJpY2ApXHJcbiAgICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzICE9PSAyMDApIHRocm93IG5ldyBFcnJvcihgUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZTogJHtyZXF1ZXN0LnN0YXR1c31gKVxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC5qc29uKClcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IubWVzc2FnZSlcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdlYXRoZXJDdXJyZW50RGF0YVJlcXVlc3QiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/weatherCurrentData.js\n");

/***/ }),

/***/ "./src/weatherForecast.js":
/*!********************************!*\
  !*** ./src/weatherForecast.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst API_KEY = \"34d5986fb1b59e7517a35c122e146c7d\"\r\n\r\nasync function weatherForecastRequest(lat, lon) {\r\n    try {\r\n        const request = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)\r\n        if (request.status !== 200) throw new Error(`Request failed with status code: ${request.status}`)\r\n        const response = await request.json()\r\n\r\n        return response\r\n    } catch (error) {\r\n        console.error(error.message)\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherForecastRequest);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvd2VhdGhlckZvcmVjYXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxnQkFBZ0Isa0NBQW1CO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLDRGQUE0RixJQUFJLE9BQU8sSUFBSSxTQUFTLFFBQVE7QUFDNUgsd0ZBQXdGLGVBQWU7QUFDdkc7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVyRm9yZWNhc3QuanM/NjcyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBBUElfS0VZID0gcHJvY2Vzcy5lbnYuQVBJX0tFWVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gd2VhdGhlckZvcmVjYXN0UmVxdWVzdChsYXQsIGxvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mYXBwaWQ9JHtBUElfS0VZfSZ1bml0cz1tZXRyaWNgKVxyXG4gICAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyAhPT0gMjAwKSB0aHJvdyBuZXcgRXJyb3IoYFJlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGU6ICR7cmVxdWVzdC5zdGF0dXN9YClcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3QuanNvbigpXHJcblxyXG4gICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yLm1lc3NhZ2UpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdlYXRoZXJGb3JlY2FzdFJlcXVlc3QiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/weatherForecast.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/aggregator.js");
/******/ 	
/******/ })()
;