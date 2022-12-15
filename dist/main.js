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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/BlackBerryJam.ttf */ \"./src/fonts/BlackBerryJam.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Brisket.otf */ \"./src/fonts/Brisket.otf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Sansation.ttf */ \"./src/fonts/Sansation.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --primary-color: rgb(0, 0, 0);\\n  --secondary-color: rgb(200, 116, 36);\\n}\\n\\n@font-face {\\n font-family: 'BlackBerryJam'; \\n src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}  \\n\\n@font-face {\\n  font-family: 'Brisket';\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n}\\n\\n@font-face {\\n  font-family: 'Sansation';\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n}\\n  \\n* {\\n  box-sizing: border-box;\\n  border: 0;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nbody {\\n  background-color: antiquewhite;\\n}\\n.container {\\n  display: flex;\\n  flex-direction: column;\\n  flex: 1;\\n  width: 100%;\\n  height: 100vh;\\n  font-family: Sansation;\\n}\\n\\n.top-container {\\n  width: inherit;\\n  height: 150px;\\n}\\n\\n.header {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  height: inherit;\\n  width: inherit;\\n  background-color: var(--primary-color);\\n  border-bottom: 1px solid antiquewhite;\\n}\\n\\n.header-logo-container {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  height: 100%;\\n  margin-left: 40px;\\n  margin-bottom: 10px;\\n  transform: rotate(-8deg);\\n}\\n\\n.header-logo {\\n  font-family: BlackBerryJam;\\n  font-size: 70px;\\n  text-align: left;\\n  line-height: 45px;\\n}\\n\\n.header-logo:hover {\\n  transform: rotate(8deg);\\n}\\n\\n.line-1 {\\n  color: antiquewhite;\\n}\\n\\n.line-2 {\\n  color: var(--secondary-color);\\n}\\n\\n.nav-container {\\n  height: 90%;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  text-align: center;\\n  font-size: 25px;\\n  color: antiquewhite;\\n  margin-right: 600px;\\n  gap: 50px;\\n}\\n\\n.nav-btn {\\n  text-decoration: underline 0.05em rgba(255, 255, 255, 0);\\n  text-underline-offset: 6px;\\n  transition: text-decoration-color 400ms;\\n  cursor: pointer;\\n}\\n\\n.nav-btn:hover {\\n  text-decoration: underline 0.05em var(--secondary-color);\\n  color: var(--secondary-color);\\n  cursor: pointer;\\n}\\n\\n.takeout-btn-container {\\n  display: inline-flex;\\n  justify-content: center;\\n  align-items: center;\\n  margin-right: 40px;\\n}\\n\\n.takeout-btn {\\n  color: antiquewhite;\\n  background-color: var(--primary-color);\\n  height: 50px;\\n  width: 100px;\\n  font-size: 12px;\\n  letter-spacing: 2px;\\n  text-transform: uppercase;\\n  border: 1px solid antiquewhite;\\n  border-radius: 20px;\\n  cursor: pointer;\\n}\\n\\n.takeout-btn:hover {\\n  background-color: var(--secondary-color);\\n  opacity: 90%;\\n  transform: rotate(5deg);\\n}\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n.bottom-container {\\n  display: flex;\\n  flex: 1;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  width: inherit;\\n}\\n\\n.main {\\n  width: inherit;\\n  height: 100%;\\n}\\n\\n.footer {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: inherit;\\n  height: 50px;\\n  color: antiquewhite;\\n  background-color: var(--primary-color);\\n  font-size: 15px;\\n  text-align: center;\\n  border-top: 1px solid antiquewhite;\\n}\\n\\n.main-container {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: inherit;\\n  height: inherit;\\n}\\n\\n.background-img-container {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  height: 770px;\\n  background-color: var(--primary-color);\\n  background-blend-mode: multiply;\\n  overflow: hidden;\\n}\\n\\n.background-img {\\n  object-fit: cover;\\n  opacity: 65%;\\n}\\n\\n.welcome-text-container {\\n  position: fixed;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n}\\n\\n.welcome-text {\\n  font-family: Brisket;\\n  font-size: 80px;\\n  letter-spacing: 2px;\\n  color: antiquewhite;\\n}\\n\\n.welcome-text:hover {\\n  font-size: 90px;\\n}\\n\\n.menu-container {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  width: inherit;\\n  height: 100%;\\n  text-align: center;\\n  gap: 40px 0;\\n}\\n\\n.menu-main-title {\\n  font-size: 50px;\\n  height: auto;\\n  width: 80%;\\n  margin-top: 30px;\\n}\\n\\n.menu-options {\\n  display: flex;\\n  justify-content: center;\\n  height: auto;\\n  width: 80%;\\n  gap: 80px;\\n}\\n\\n.menu-type-btn {\\n  padding: 15px;\\n  font-size: 20px;\\n  text-transform: uppercase;\\n}\\n\\n.menu-type-btn:hover {\\n  background-color: var(--secondary-color);\\n  opacity: 80%;\\n  cursor: pointer;\\n}\\n\\n.menu-display {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  width: 50%;\\n  height: 100%;\\n  padding-bottom: 40px;\\n}\\n\\n.menu-card {\\n  display: flex;\\n  justify-content: center;\\n  font-size: 25px;\\n}\\n\\n.menu-card-list {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 20px;\\n  list-style: none;\\n}\\n\\n.drinks-menu, .dessert-menu {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 25px;\\n}\\n\\n.menu-item {\\n  width: 600px;\\n  color: darkred;\\n}\\n\\n.menu-item-header {\\n  font-weight: bolder;\\n}\\n\\n.menu-item-details {\\n  color: black;\\n  font-size: 18px;\\n}\\n\\n.menu-item-price {\\n  font-weight: bolder;\\n}\\n\\n.about-container {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  height: 100%;\\n}\\n\\n.about-info {\\n  font-size: 25px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createAboutContent() {\n\n  const aboutContainer = document.createElement('div');\n  aboutContainer.classList.add('about-container');\n\n  const aboutInformation = document.createElement('p');\n  aboutInformation.classList.add('about-info');\n  aboutInformation.textContent = 'About this restaurant!'\n\n  aboutContainer.append(aboutInformation);\n  \n  return aboutContainer;\n  \n}\n\nfunction loadAboutContent() {\n  const main = document.querySelector('.main');\n  main.innerHTML = '';\n  main.append(createAboutContent());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAboutContent);\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_background_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/background.jpg */ \"./src/images/background.jpg\");\n\n\nfunction createHomeContent() {\n\n  const mainContainer = document.createElement('div');\n  mainContainer.classList.add('main-container');\n\n  const backgroundImgContainer = document.createElement('div');\n  backgroundImgContainer.classList.add('background-img-container');\n\n  const backgroundImg = document.createElement('img');\n  backgroundImg.src = _images_background_jpg__WEBPACK_IMPORTED_MODULE_0__;\n  backgroundImg.alt = \"Background photo of restaurant setting\";\n  backgroundImg.classList.add('background-img');\n\n  backgroundImgContainer.append(backgroundImg);\n\n  const welcomeTextContainer = document.createElement('div');\n  welcomeTextContainer.classList.add('welcome-text-container');\n\n  const welcomeText = document.createElement('div');\n  welcomeText.classList.add('welcome-text');\n  welcomeText.textContent = 'Welcome!';\n\n  welcomeTextContainer.append(welcomeText);\n\n  mainContainer.append(backgroundImgContainer, welcomeTextContainer);\n\n  return mainContainer;\n  \n}\n\nfunction loadHomeContent() {\n  const main = document.querySelector('.main');\n  main.innerHTML = '';\n  main.append(createHomeContent());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHomeContent);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _site__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./site */ \"./src/site.js\");\n\n\n(0,_site__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMenuContent() {\n\n  const menuContainer = document.createElement('div');\n  menuContainer.classList.add('menu-container');\n\n  const menuMainTitle = document.createElement('div');\n  menuMainTitle.classList.add('menu-main-title');\n  menuMainTitle.textContent = 'Menus';\n\n  const menuDisplay = document.createElement('div');\n  menuDisplay.classList.add('menu-display');\n\n  menuContainer.append(menuMainTitle, createMenuNavigation(), menuDisplay);\n\n  return menuContainer;\n}\n\nfunction createMenuNavigation() {\n\n  const menuOptions = document.createElement('div');\n  menuOptions.classList.add('menu-options');\n\n  const menuTypeOne = document.createElement('div');\n  menuTypeOne.classList.add('menu-type-btn');\n  menuTypeOne.textContent = 'Drinks';\n  menuTypeOne.addEventListener('click', (btn) => {\n    if (btn.target.classList.contains('active')) return;\n      buttonStatus(menuTypeOne);\n      loadDrinksMenu();\n  });\n\n  const menuTypeTwo = document.createElement('div');\n  menuTypeTwo.classList.add('menu-type-btn');\n  menuTypeTwo.textContent = 'Desserts';\n  menuTypeTwo.addEventListener('click', (btn) => {\n    if (btn.target.classList.contains('active')) return;\n      buttonStatus(menuTypeTwo);\n      loadDessertsMenu();\n  });\n\n  menuOptions.append(menuTypeOne, menuTypeTwo);\n\n  return menuOptions;\n\n}\n\nfunction loadMenuContent() {\n  const main = document.querySelector('.main');\n  main.innerHTML = '';\n  main.append(createMenuContent());\n}\n\nfunction createMenuCard(name, description, price) {\n\n  const menuCard = document.createElement('div');\n  menuCard.classList.add('menu-card');\n\n  const menuCardList = document.createElement('ul');\n  menuCardList.classList.add('menu-card-list');\n\n  const menuItem = document.createElement('li');\n  menuItem.classList.add('menu-item');\n\n  const menuItemName = document.createElement('p');\n  menuItemName.classList.add('menu-item-name');\n  menuItemName.textContent = name;\n\n  const menuItemDetails = document.createElement('p');\n  menuItemDetails.classList.add('menu-item-details');\n  menuItemDetails.textContent = description;\n\n  const menuItemPrice = document.createElement('p');\n  menuItemPrice.classList.add('menu-item-price');\n  menuItemPrice.textContent = price;\n\n  menuItem.append(menuItemName, menuItemDetails, menuItemPrice);\n  menuCardList.append(menuItem);\n  menuCard.append(menuCardList);\n\n  return menuCard;\n\n}\n\nfunction createDrinksMenu() {\n  const drinksMenu = document.createElement('div');\n  drinksMenu.classList.add('drinks-menu');\n\n  drinksMenu.append(\n    createMenuCard(\n      \"Drip Coffee\",\n      \"Our rich coffee beans are sourced straight from Ethiopia and roasted to provide an aroma that is bold and exotic.\",\n      \"3\"\n    ),\n    createMenuCard(\n      \"Latté\",\n      \"A classic espresso drink made with a shot of espresso and serveral ounces of steamed milk to create a rich, creamy beverage\",\n      \"4\"\n    ),\n    createMenuCard(\n      \"Mocha\",\n      \"A special beverage composed of espresso, milk, and our exquisite, home-made dark chocolate.\",\n      \"5\"\n    ),\n    createMenuCard(\n      \"Americano\",\n      \"You don't have to worry about crying over spilled milk becasue this has none. A shot of espresso with hot water.\",\n      \"3\"\n    ),\n    createMenuCard(\n      \"Espresso\",\n      \"Cut straight to the chase. One shot of goodness with no bullshit. Double shots available upon request.\",\n      \"2\"\n    )\n  );\n  return drinksMenu;\n}\n\nfunction createDessertsMenu() {\n  const dessertMenu = document.createElement('div');\n  dessertMenu.classList.add('dessert-menu');\n\n  dessertMenu.append(\n    createMenuCard(\n      \"Croissant\",\n      \"A buttery, flaky pastry that will leave you very satisfied. Can be ordered in regular, chocolate, or almond variety.\",\n      \"3\"\n    ),\n    createMenuCard(\n      \"Strüdel\",\n      \"A delicious, layered pastry of Austrian origin with your choice of chocolate or fruit filling.\",\n      \"4\"\n    ),\n    createMenuCard(\n      \"Baklava\",\n      \"A moouth-watering, Turkish delicacy made from filo pastry, filled with nuts, and sweetened with our homemade honey.\",\n      \"4\"\n    ),\n    createMenuCard(\n      \"Tiramisu\",\n      \"A rich, coffee-flavored Italian dessert that will pair well with your chosen coffee. We use our secret recipe!\",\n      \"5\"\n    ),\n    createMenuCard(\n      \"Soft Serve Ice Cream\",\n      \"Imported from our local farmer's market. Enough said. Served in a bowl, regular cone, or waffle cone!\",\n      \"3\"\n    )\n  );\n  return dessertMenu;\n}\n\nfunction loadDrinksMenu() {\n  const menuDisplay = document.querySelector('.menu-display');\n  menuDisplay.innerHTML = '';\n  menuDisplay.append(createDrinksMenu());\n}\n\nfunction loadDessertsMenu() {\n  const menuDisplay = document.querySelector('.menu-display');\n  menuDisplay.innerHTML = '';\n  menuDisplay.append(createDessertsMenu());\n}\n\nfunction buttonStatus(button) {\n  const buttons = document.querySelectorAll('.menu-type-btn');\n  buttons.forEach((button) => {\n    if (button !== this) {\n      button.classList.remove('active');\n    }\n  })\n  button.classList.add('active');\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenuContent);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/site.js":
/*!*********************!*\
  !*** ./src/site.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\n\n\n\n\nfunction createHeader() {\n\n  const header = document.createElement('div');\n  header.classList.add('header');\n\n  const headerLogoContainer = document.createElement('div');\n  headerLogoContainer.classList.add('header-logo-container');\n\n  const headerLogo = document.createElement('div');\n  headerLogo.classList.add('header-logo');\n\n  const headerLogoLineOne = document.createElement('div');\n  headerLogoLineOne.classList.add('line-1');\n  headerLogoLineOne.textContent = 'Midtown';\n\n  const headerLogoLineTwo = document.createElement('div');\n  headerLogoLineTwo.classList.add('line-2');\n  headerLogoLineTwo.textContent = 'Café';\n\n  headerLogo.append(headerLogoLineOne, headerLogoLineTwo);\n  headerLogoContainer.append(headerLogo);\n\n  const takeOutBtnContainer = document.createElement('div');\n  takeOutBtnContainer.classList.add('takeout-btn-container');\n\n  const takeOutBtn = document.createElement('button');\n  takeOutBtn.classList.add('takeout-btn');\n  takeOutBtn.type = 'button';\n  takeOutBtn.textContent = 'Takeout!';\n\n  takeOutBtnContainer.append(takeOutBtn);\n\n  header.append(headerLogoContainer, createNavigation(), takeOutBtnContainer);\n\n  return header;\n\n}\n\nfunction createMain() {\n  const main = document.createElement('div');\n  main.classList.add('main');\n  main.append(createFooter());\n  return main;\n\n}\n\nfunction createNavigation() {\n\n  const navigationContainer = document.createElement('div');\n  navigationContainer.classList.add('nav-container');\n\n  const navHomeBtn = document.createElement('div');\n  navHomeBtn.classList.add('nav-btn');\n  navHomeBtn.textContent = 'Home';\n  navHomeBtn.addEventListener('click', (btn) => {\n    if (btn.target.classList.contains('active')) return;\n    buttonStatus(navHomeBtn);\n    (0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  });\n\n  const navMenuBtn = document.createElement('div');\n  navMenuBtn.classList.add('nav-btn');\n  navMenuBtn.textContent = 'Menu';\n  navMenuBtn.addEventListener('click', (btn) => {\n    if (btn.target.classList.contains('active')) return;\n      buttonStatus(navMenuBtn);\n      (0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  });\n\n  const navAboutBtn = document.createElement('div');\n  navAboutBtn.classList.add('nav-btn');\n  navAboutBtn.textContent = 'About';\n  navAboutBtn.addEventListener('click', (btn) => {\n    if (btn.target.classList.contains('active')) return;\n      buttonStatus(navAboutBtn);\n      (0,_about__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  });\n\n  navigationContainer.append(navHomeBtn, navMenuBtn, navAboutBtn);\n\n  return navigationContainer;\n\n}\n\nfunction createFooter() {\n\n  const footer = document.createElement('div');\n  footer.classList.add('footer');\n\n  const footerText = document.createElement('div');\n  footerText.classList.add('footer-text');\n  footerText.textContent = 'Created by Mark Melnik';\n\n  footer.append(footerText);\n\n  return footer;\n}\n\nfunction buttonStatus(button) {\n  const buttons = document.querySelectorAll('.nav-btn');\n  buttons.forEach((button) => {\n    if (button !== this) {\n      button.classList.remove('active');\n    }\n  })\n  button.classList.add('active');\n};\n\nfunction loadWebsite() {\n\n  const container = document.querySelector('.container');\n\n  const topContainer = document.createElement('div');\n  topContainer.classList.add('top-container');\n\n  const bottomContainer = document.createElement('div');\n  bottomContainer.classList.add('bottom-container');\n\n  topContainer.append(createHeader());\n  bottomContainer.append(createMain(), createFooter());\n\n  container.append(topContainer, bottomContainer);\n\n  const navBtn = document.querySelector('.nav-btn');\n  buttonStatus(navBtn);\n\n  (0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n  return container;\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadWebsite);\n\n//# sourceURL=webpack://restaurant-page/./src/site.js?");

/***/ }),

/***/ "./src/fonts/BlackBerryJam.ttf":
/*!*************************************!*\
  !*** ./src/fonts/BlackBerryJam.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8c11d68cb98b8e6be482.ttf\";\n\n//# sourceURL=webpack://restaurant-page/./src/fonts/BlackBerryJam.ttf?");

/***/ }),

/***/ "./src/fonts/Brisket.otf":
/*!*******************************!*\
  !*** ./src/fonts/Brisket.otf ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a5af48e5db3ec296dbb7.otf\";\n\n//# sourceURL=webpack://restaurant-page/./src/fonts/Brisket.otf?");

/***/ }),

/***/ "./src/fonts/Sansation.ttf":
/*!*********************************!*\
  !*** ./src/fonts/Sansation.ttf ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4b0e0e7199c58c7cc1d3.ttf\";\n\n//# sourceURL=webpack://restaurant-page/./src/fonts/Sansation.ttf?");

/***/ }),

/***/ "./src/images/background.jpg":
/*!***********************************!*\
  !*** ./src/images/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"82725c21337a2784b222.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/background.jpg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;