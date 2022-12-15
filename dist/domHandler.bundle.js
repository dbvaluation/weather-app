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

/***/ "./src/domHandler.js":
/*!***************************!*\
  !*** ./src/domHandler.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"draw\": () => (/* binding */ draw),\n/* harmony export */   \"drawHeader\": () => (/* binding */ drawHeader),\n/* harmony export */   \"drawInput\": () => (/* binding */ drawInput),\n/* harmony export */   \"removeChildren\": () => (/* binding */ removeChildren)\n/* harmony export */ });\nconst body = document.querySelector('body')\r\n\r\nfunction drawHeader(input) {\r\n    const header = document.createElement('header')\r\n    const title = document.createElement('h1')\r\n    title.textContent = input\r\n    header.appendChild(title)\r\n    body.appendChild(header)\r\n\r\n}\r\n\r\nfunction addEventListener(input, listener, action) {\r\n\r\n    try {\r\n        if (input == undefined || listener == undefined || action == undefined) {\r\n            throw new Error('Invalid input at addEventListener, please pass the valid parameters.')\r\n        }\r\n    } catch (err) {\r\n        console.error(err)\r\n    }\r\n\r\n    if (action == 'value') {\r\n        input.addEventListener(listener, (e) => {\r\n\r\n        })\r\n    }\r\n}\r\n\r\nfunction drawInput() {\r\n\r\n    const input = document.createElement('input')\r\n    input.type = 'text'\r\n    input.id = 'main-input'\r\n    body.appendChild(input)\r\n\r\n}\r\n\r\nfunction draw(elementType, data, id, parent) {\r\n    const element = document.createElement(`${elementType}`)\r\n    element.id = `${id}`\r\n    element.textContent = data\r\n    parent.appendChild(element)\r\n    return element\r\n}\r\n\r\nfunction removeChildren(parent) {\r\n    while (parent.firstChild) {\r\n        parent.removeChild(parent.firstChild);\r\n    }\r\n}\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZG9tSGFuZGxlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsWUFBWTtBQUMxRCxvQkFBb0IsR0FBRztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZG9tSGFuZGxlci5qcz9jMTkyIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcclxuXHJcbmZ1bmN0aW9uIGRyYXdIZWFkZXIoaW5wdXQpIHtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcclxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gaW5wdXRcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSlcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihpbnB1dCwgbGlzdGVuZXIsIGFjdGlvbikge1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKGlucHV0ID09IHVuZGVmaW5lZCB8fCBsaXN0ZW5lciA9PSB1bmRlZmluZWQgfHwgYWN0aW9uID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgaW5wdXQgYXQgYWRkRXZlbnRMaXN0ZW5lciwgcGxlYXNlIHBhc3MgdGhlIHZhbGlkIHBhcmFtZXRlcnMuJylcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9uID09ICd2YWx1ZScpIHtcclxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKGxpc3RlbmVyLCAoZSkgPT4ge1xyXG5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkcmF3SW5wdXQoKSB7XHJcblxyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICBpbnB1dC50eXBlID0gJ3RleHQnXHJcbiAgICBpbnB1dC5pZCA9ICdtYWluLWlucHV0J1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZChpbnB1dClcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyYXcoZWxlbWVudFR5cGUsIGRhdGEsIGlkLCBwYXJlbnQpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke2VsZW1lbnRUeXBlfWApXHJcbiAgICBlbGVtZW50LmlkID0gYCR7aWR9YFxyXG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGRhdGFcclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KVxyXG4gICAgcmV0dXJuIGVsZW1lbnRcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlQ2hpbGRyZW4ocGFyZW50KSB7XHJcbiAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBkcmF3SGVhZGVyLCBkcmF3SW5wdXQsIGRyYXcsIHJlbW92ZUNoaWxkcmVuIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/domHandler.js\n");

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
/******/ 	__webpack_modules__["./src/domHandler.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;