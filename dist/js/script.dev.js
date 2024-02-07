/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app/app_data.js":
/*!********************************!*\
  !*** ./src/js/app/app_data.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AppData: () => (/* binding */ AppData)\n/* harmony export */ });\nvar AppData = {\n  BaseUrl: 'http://192.168.1.6:3000/',\n  Fsz: {\n    FszClassName: 'fsz',\n    FszNormal: 18,\n    FszMinimum: 8,\n    FszMaximum: 36\n  },\n  Theme: {\n    ClassName: 'theme',\n    LigntClassMame: 'theme-light',\n    DarkClassMame: 'theme-dark'\n  }\n};\n\n//# sourceURL=webpack://app-begin/./src/js/app/app_data.js?");

/***/ }),

/***/ "./src/js/app/bookmark/main.js":
/*!*************************************!*\
  !*** ./src/js/app/bookmark/main.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nvar bookmarks__top_btn, bookmarks__top_btn_data_show;\nvar bookmarks__wrapper;\nif (document.querySelector('.bookmarks__top-btn') != null) {\n  console.log('bookmarks__top-btn');\n  bookmarks__top_btn = document.querySelector('.bookmarks__top-btn');\n  bookmarks__wrapper = document.querySelectorAll('.bookmarks__wrapper');\n  bookmarks__top_btn.addEventListener('click', function (e) {\n    console.log(e.target);\n    bookmarks__wrapper.forEach(function (element) {\n      if (element.dataset.show == 'show') {\n        element.dataset.show = 'hide';\n      } else {\n        element.dataset.show = 'show';\n      }\n    });\n    if (e.target.tagName == 'SPAN') {\n      if (e.target.parentElement.dataset.show == 'show') {\n        e.target.parentElement.dataset.show = 'hide';\n      } else {\n        e.target.parentElement.dataset.show = 'show';\n      }\n    } else {\n      if (e.target.dataset.show == 'show') {\n        e.target.dataset.show = 'hide';\n      } else {\n        e.target.dataset.show = 'show';\n      }\n    }\n  });\n}\n\n//# sourceURL=webpack://app-begin/./src/js/app/bookmark/main.js?");

/***/ }),

/***/ "./src/js/app/nav/nav-data.js":
/*!************************************!*\
  !*** ./src/js/app/nav/nav-data.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NavData: () => (/* binding */ NavData)\n/* harmony export */ });\n/* harmony import */ var _app_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../app_data.js */ \"./src/js/app/app_data.js\");\n\n\n//const BaseUrl = 'http://192.168.1.4:3000/';\nconsole.log('AppData');\nconsole.dir(_app_data_js__WEBPACK_IMPORTED_MODULE_0__.AppData);\nvar NavData = {\n  0: {\n    href: _app_data_js__WEBPACK_IMPORTED_MODULE_0__.AppData.BaseUrl,\n    title: 'главная'\n  },\n  1: {\n    href: _app_data_js__WEBPACK_IMPORTED_MODULE_0__.AppData.BaseUrl + 'page/bookmarks/index.html',\n    title: 'закладки'\n  },\n  2: {\n    href: _app_data_js__WEBPACK_IMPORTED_MODULE_0__.AppData.BaseUrl + 'page/blog/javascript/index.html',\n    title: 'блог'\n  },\n  27: {\n    href: _app_data_js__WEBPACK_IMPORTED_MODULE_0__.AppData.BaseUrl + 'page/aboutus/index.html',\n    title: 'о нас'\n  }\n};\n\n//# sourceURL=webpack://app-begin/./src/js/app/nav/nav-data.js?");

/***/ }),

/***/ "./src/js/app/nav/nav.js":
/*!*******************************!*\
  !*** ./src/js/app/nav/nav.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nav_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-data.js */ \"./src/js/app/nav/nav-data.js\");\n\n// console.log('NavData');\n// console.dir(NavData);\n/**\r\n * header-nav__burger\r\n * header-nav__menu-wrapper\r\n * header-nav__menu\r\n * \r\n *  * data-show=\"show\"\r\n */\nvar header_nav__burger, header_nav__menu_wrapper, header_nav__menu;\nif (document.querySelector('.header-nav__burger') != null) {\n  header_nav__burger = document.querySelector('.header-nav__burger');\n  header_nav__menu_wrapper = document.querySelector('.header-nav__menu-wrapper');\n  header_nav__menu = document.querySelector('.header-nav__menu');\n  // nav render\n  header_nav__menu.innerHTML = '';\n  for (var key in _nav_data_js__WEBPACK_IMPORTED_MODULE_0__.NavData) {\n    header_nav__menu.innerHTML += \"<li><a href=\\\"\".concat(_nav_data_js__WEBPACK_IMPORTED_MODULE_0__.NavData[key].href, \"\\\">\").concat(_nav_data_js__WEBPACK_IMPORTED_MODULE_0__.NavData[key].title, \"</a></li>\");\n  }\n  // burger click\n  header_nav__burger.addEventListener('click', function () {\n    if (header_nav__burger.dataset.show == undefined || header_nav__burger.dataset.show == 'hide') {\n      header_nav__burger.dataset.show = 'show';\n      header_nav__menu_wrapper.dataset.show = 'show';\n      header_nav__menu.dataset.show = 'show';\n    } else {\n      header_nav__burger.dataset.show = 'hide';\n      header_nav__menu_wrapper.dataset.show = 'hide';\n      header_nav__menu.dataset.show = 'hide';\n    }\n  });\n  // wrapper click\n  header_nav__menu_wrapper.addEventListener('click', function () {\n    header_nav__burger.dataset.show = 'hide';\n    header_nav__menu_wrapper.dataset.show = 'hide';\n    header_nav__menu.dataset.show = 'hide';\n  });\n}\n\n//# sourceURL=webpack://app-begin/./src/js/app/nav/nav.js?");

/***/ }),

/***/ "./src/js/app/settings/main.js":
/*!*************************************!*\
  !*** ./src/js/app/settings/main.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../app_data.js */ \"./src/js/app/app_data.js\");\n\nconsole.log('settings main.js');\n\n// header__settings-btn-wrapper\n// name=\"theme-light\" \"theme-dark\" data-show=\"show\"\n// header__settings-fsz-menu header__settings-btn name=\"fsz\"\n// header__settings-btn-theme\n//\nvar header__settings_btn_wrapper;\nvar header_btns_theme;\nvar FszClass, ThemeClasses;\nvar fsz, theme;\nvar btn_fsz_menu, fsz_menu;\n// Local Font size\nconsole.dir(localStorage.getItem('fsz'));\nconsole.dir(_app_data_js__WEBPACK_IMPORTED_MODULE_0__.AppData);\n\n// fsz\nif (localStorage.getItem('fsz') == null) {\n  localStorage.setItem('fsz', _app_data_js__WEBPACK_IMPORTED_MODULE_0__.AppData.Fsz.FszNormal);\n  fsz = _app_data_js__WEBPACK_IMPORTED_MODULE_0__.AppData.Fsz.FszNormal;\n} else {\n  fsz = localStorage.getItem('fsz');\n}\nif (document.querySelector('.' + _app_data_js__WEBPACK_IMPORTED_MODULE_0__.AppData.Fsz.FszClassName) != undefined) {\n  FszClass = document.querySelector('.' + _app_data_js__WEBPACK_IMPORTED_MODULE_0__.AppData.Fsz.FszClassName);\n  FszClass.style.fontSize = fsz + 'px';\n}\nif (document.querySelectorAll('.' + _app_data_js__WEBPACK_IMPORTED_MODULE_0__.AppData.Theme.ClassName) != undefined) {\n  ThemeClasses = document.querySelectorAll('.' + _app_data_js__WEBPACK_IMPORTED_MODULE_0__.AppData.Theme.ClassName);\n}\n// Theme\nif (localStorage.getItem('theme') == null) {\n  localStorage.setItem('theme', 'light');\n  theme = 'light';\n} else {\n  theme = localStorage.getItem('theme');\n}\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  start_change_classes_theme(theme);\n});\nif (document.querySelector('.header__settings-btn-wrapper') != null) {\n  header_btns_theme = document.querySelectorAll('.header__settings-btn-theme');\n  header__settings_btn_wrapper = document.querySelector('.header__settings-btn-wrapper');\n  header__settings_btn_wrapper.addEventListener('click', function (e) {\n    if (e.target.attributes.name != undefined) {\n      switch (e.target.attributes.name.value) {\n        case 'fsz':\n          btn_fsz_menu = e.target;\n          fsz_menu = document.querySelector('.header__settings-fsz-menu');\n          show_fsz_menu();\n          break;\n        case 'theme-dark':\n          change_theme('dark');\n          break;\n        case 'theme-light':\n          change_theme('light');\n          break;\n      }\n    }\n  });\n  // theme\n}\n\n//  Functions\nfunction start_change_classes_theme(theme) {\n  for (var i = 0; i < ThemeClasses.length; i++) {\n    ThemeClasses[i].classList.remove(_app_data_js__WEBPACK_IMPORTED_MODULE_0__.AppData.Theme.DarkClassMame);\n    ThemeClasses[i].classList.remove(_app_data_js__WEBPACK_IMPORTED_MODULE_0__.AppData.Theme.LigntClassMame);\n    if (theme == 'light') {\n      ThemeClasses[i].classList.add(_app_data_js__WEBPACK_IMPORTED_MODULE_0__.AppData.Theme.LigntClassMame);\n    } else if (theme == 'dark') {\n      ThemeClasses[i].classList.add(_app_data_js__WEBPACK_IMPORTED_MODULE_0__.AppData.Theme.DarkClassMame);\n    } else {\n      ThemeClasses[i].classList.add(_app_data_js__WEBPACK_IMPORTED_MODULE_0__.AppData.Theme.LigntClassMame);\n    }\n  }\n  for (var x = 0; x < header_btns_theme.length; x++) {\n    header_btns_theme[x].dataset.show = 'hide';\n    if (theme == 'light') {\n      if (header_btns_theme[x].getAttribute('name') == 'theme-dark') {\n        header_btns_theme[x].dataset.show = 'show';\n      }\n    } else if (theme == 'dark') {\n      if (header_btns_theme[x].getAttribute('name') == 'theme-light') {\n        header_btns_theme[x].dataset.show = 'show';\n      }\n    }\n  }\n}\nfunction change_theme(theme) {\n  localStorage.setItem('theme', theme);\n  for (var i = 0; i < header_btns_theme.length; i++) {\n    if (theme == 'dark') {\n      if (header_btns_theme[i].attributes.name.value == 'theme-dark') {\n        header_btns_theme[i].dataset.show = 'hide';\n      } else if (header_btns_theme[i].attributes.name.value == 'theme-light') {\n        header_btns_theme[i].dataset.show = 'show';\n      }\n    } else {\n      if (header_btns_theme[i].attributes.name.value == 'theme-light') {\n        header_btns_theme[i].dataset.show = 'hide';\n      } else if (header_btns_theme[i].attributes.name.value == 'theme-dark') {\n        header_btns_theme[i].dataset.show = 'show';\n      }\n    }\n  }\n  start_change_classes_theme(theme);\n}\nfunction show_fsz_menu() {\n  if (btn_fsz_menu.dataset.show == undefined || btn_fsz_menu.dataset.show == 'hide') {\n    btn_fsz_menu.dataset.show = 'show';\n    fsz_menu.dataset.show = 'show';\n  } else {\n    btn_fsz_menu.dataset.show = 'hide';\n    fsz_menu.dataset.show = 'hide';\n  }\n}\n\n//# sourceURL=webpack://app-begin/./src/js/app/settings/main.js?");

/***/ }),

/***/ "./src/js/lib/console/console_log.js":
/*!*******************************************!*\
  !*** ./src/js/lib/console/console_log.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   console_log: () => (/* binding */ console_log)\n/* harmony export */ });\nfunction console_log() {\n  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Test';\n  var bgc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#eee';\n  var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '#111';\n  var style = ['padding: 0.1rem 0.5rem;', 'background-color: ' + bgc + ';', 'color: ' + color + ';', 'font-size: 1rem'].join('');\n  console.log('%c%s', style, str);\n}\n\n//# sourceURL=webpack://app-begin/./src/js/lib/console/console_log.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_console_console_log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/console/console_log.js */ \"./src/js/lib/console/console_log.js\");\n/* harmony import */ var _app_nav_nav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/nav/nav.js */ \"./src/js/app/nav/nav.js\");\n/* harmony import */ var _app_settings_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/settings/main.js */ \"./src/js/app/settings/main.js\");\n/* harmony import */ var _app_bookmark_main_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/bookmark/main.js */ \"./src/js/app/bookmark/main.js\");\n\nvar dev_data = {\n  today: '| 07 feb 2024 | 22 : 05 |',\n  previous_day: '| 06 feb 2024 | 19 : 15 |',\n  developer: 'wisetiger'\n};\n(0,_lib_console_console_log_js__WEBPACK_IMPORTED_MODULE_0__.console_log)('-- scrip.js --', '#fff', 'blue');\n(0,_lib_console_console_log_js__WEBPACK_IMPORTED_MODULE_0__.console_log)('dev_data');\nconsole.dir(dev_data);\nconsole.log(dev_data.today + ' today');\nconsole.log(dev_data.previous_day + ' previous day');\n\n\n\n\n//# sourceURL=webpack://app-begin/./src/js/script.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;