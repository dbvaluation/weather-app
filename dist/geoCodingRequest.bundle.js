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

/***/ "./src/geoCodingRequest.js":
/*!*********************************!*\
  !*** ./src/geoCodingRequest.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst API_KEY = \"34d5986fb1b59e7517a35c122e146c7d\"\r\n\r\nasync function geoCodingRequest(CITY_NAME) {\r\n    try {\r\n        const request = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${CITY_NAME}&limit=${1}&appid=${API_KEY}`)\r\n\r\n        // If request is valid(200) continue.\r\n        if (request.status == 200) {\r\n            try {\r\n                const response = await request.json()\r\n                // CITY_NAME check\r\n                if (response.length == 1) {\r\n                    return { lat: response[0].lat, lon: response[0].lon } // VALUE RETURN\r\n                }\r\n                // CITY_NAME ERROR HANDLING\r\n                if (response.length == 0) {\r\n                    throw new Error(`Input Error, please check City name.`)\r\n                }\r\n            } catch (err) {\r\n                console.log(err)\r\n            }\r\n        }\r\n        //Check if request is invalid.\r\n        if (request.status == 401) {\r\n            throw new Error('401 request error!')\r\n        }\r\n\r\n    } catch (err) {\r\n        console.log(`BAD: ${err}`)\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (geoCodingRequest);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2VvQ29kaW5nUmVxdWVzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsZ0JBQWdCLGtDQUFtQjtBQUNuQztBQUNBO0FBQ0E7QUFDQSxzRkFBc0YsVUFBVSxTQUFTLEVBQUUsU0FBUyxRQUFRO0FBQzVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDZDQUE2QztBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sNEJBQTRCLElBQUk7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsaUVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9nZW9Db2RpbmdSZXF1ZXN0LmpzPzM5OTUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQVBJX0tFWSA9IHByb2Nlc3MuZW52LkFQSV9LRVlcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdlb0NvZGluZ1JlcXVlc3QoQ0lUWV9OQU1FKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke0NJVFlfTkFNRX0mbGltaXQ9JHsxfSZhcHBpZD0ke0FQSV9LRVl9YClcclxuXHJcbiAgICAgICAgLy8gSWYgcmVxdWVzdCBpcyB2YWxpZCgyMDApIGNvbnRpbnVlLlxyXG4gICAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC5qc29uKClcclxuICAgICAgICAgICAgICAgIC8vIENJVFlfTkFNRSBjaGVja1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbGF0OiByZXNwb25zZVswXS5sYXQsIGxvbjogcmVzcG9uc2VbMF0ubG9uIH0gLy8gVkFMVUUgUkVUVVJOXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBDSVRZX05BTUUgRVJST1IgSEFORExJTkdcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW5wdXQgRXJyb3IsIHBsZWFzZSBjaGVjayBDaXR5IG5hbWUuYClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9DaGVjayBpZiByZXF1ZXN0IGlzIGludmFsaWQuXHJcbiAgICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09IDQwMSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJzQwMSByZXF1ZXN0IGVycm9yIScpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBCQUQ6ICR7ZXJyfWApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdlb0NvZGluZ1JlcXVlc3QiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/geoCodingRequest.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/geoCodingRequest.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;