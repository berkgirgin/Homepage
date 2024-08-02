"use strict";
(self["webpackChunktestrepo"] = self["webpackChunktestrepo"] || []).push([["index"],{

/***/ "./src/javascript/index.js":
/*!*********************************!*\
  !*** ./src/javascript/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.css */ "./src/styles/index.css");


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/index.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/project_battleship.png */ "./src/images/project_battleship.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/project_to_do_list.png */ "./src/images/project_to_do_list.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/project_weather_app.png */ "./src/images/project_weather_app.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/project_visited_cities.png */ "./src/images/project_visited_cities.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../images/project_connect_four.png */ "./src/images/project_connect_four.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../images/project_calculator.png */ "./src/images/project_calculator.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* variables Start*/
:root {
  --custom-white: #fcfcfc;
  --light-blue: #0fc9e7;
  --medium-blue: #0391b2;
  --dark-blue: #4756ca;
  --section-title-font-size: 2.5rem;
  --mobil-default-side-padding: 1.5rem;
  --tablet-default-side-padding: 3.5rem;
  --project-title-font-size: 1.2rem;
  --small-tablet-profile-photo-dimension: 240px;
  --tablet-profile-photo-dimension: 320px;
  --laptop-profile-photo-dimension: 450px;
  --default-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
}

/* variables End */

/* reset Start*/
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
  font-size: 100%;
  font-weight: normal;
}

img {
  overflow: hidden;
  object-fit: cover;
}

/* reset End*/

/* base styles Start*/

body {
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: stretch;
  color: black;
  /* background-color: purple; */
}
.section_wrapper {
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
}

.section_wrapper_about-me-main-container {
  background: linear-gradient(
    320deg,
    var(--custom-white) 62%,
    var(--medium-blue) 62%,
    var(--light-blue)
  );
}
.section_wrapper_contact-me-main-container {
  /* background-color: var(--medium-blue); */
  background: linear-gradient(var(--medium-blue) 20%, var(--light-blue));
  /* background: linear-gradient(#e66465, #9198e5); */
}

.about-me-main-container {
  align-self: stretch;
}

.projects-main-container {
  max-width: 1400px;
}

.contact-me-main-container {
  max-width: 1400px;
}

.icon-parent {
  text-decoration: none;
  transition-duration: 0.2s;
}
.icon-parent:hover {
  scale: 1.1;
}
/* default icon size, just in case */
.icon {
  height: 2rem;
}

/* *** */
.about-me-main-container {
  /* background-color: orange; */
}

/* *** */

/* *** */
.projects-main-container {
  background-color: var(--custom-white);
}
/* *** */

/* *** */
.contact-me-main-container {
}
/* *** */

/* base styles End*/

/* fonts Start*/
/* fonts End*/

/* mobile styles Start*/
/* ********************/

/* >>> about me main section */
.about-me-main-container {
  padding: var(--mobil-default-side-padding);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.profile-photo-container {
  /* box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75); */

  position: relative;
  box-shadow: var(--default-box-shadow);
}

.profile-photo-container .full-name {
  position: absolute;
  bottom: 10px;
  left: 10px;

  font-size: calc(3rem + 3vw);
  color: var(--custom-white);
}

.about-me-profile-photo img {
  width: 100%;
  max-width: 600px;
  overflow: hidden;
  display: block;
  /* object-fit: cover; */
}

.about-me-container {
  display: flex;
  flex-direction: column;
}

.about-me-title {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.7rem;

  font-size: var(--section-title-font-size);
}

.about-me-text {
  font-size: 1.2rem;
  line-height: 1.4;
}

.contact-icons-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  margin-top: 1rem;
}

.contact-icons-container .icon {
  height: 2rem;
}

/* >>> projects main section */
.projects-main-container {
  align-self: center;

  padding: var(--mobil-default-side-padding);
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: min(100%, 1400px);
}

.projects-main-title {
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: var(--section-title-font-size);
}

.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 350px), 1fr));

  gap: 3rem;
}

.project-container {
  /* border: 2px black solid; */
  padding-bottom: 2rem;
  box-shadow: var(--default-box-shadow);
  transition-duration: 0.5s;
}
.project-container:hover {
  scale: 1.05;
}

.project-image-wrapper {
  height: 250px;
  /* width: 500px; */
  width: 100%;
  background-color: black;
  /* object-fit: cover;
  display: block; */
}
.project-image-wrapper img {
  /* display: block; */
}

.project-details-container {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.project-title-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.project-title {
  /* text-align: center; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.3rem;

  font-size: var(--project-title-font-size);
  font-weight: bold;
}

.project-link-logos-container {
  display: flex;
  gap: 0.5rem;
}

/* project background images */

.project-image-wrapper {
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
.project-1 .project-image-wrapper {
  /* Battleship game */
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}
.project-2 .project-image-wrapper {
  /* To Do App */
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}
.project-3 .project-image-wrapper {
  /* Weather App */
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}
.project-4 .project-image-wrapper {
  /* Visited Cities App */
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}
.project-5 .project-image-wrapper {
  /* Connect Four Game */
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
}
.project-6 .project-image-wrapper {
  /* Calculator */
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
}

/* !! Check if different text lengths would have same size on the box */
.project-description {
  /* border: 2px black solid; */
}

/* >>> contact me main section */
.contact-me-main-container {
}

.contact-me-sub-container {
  padding-top: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 4rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-me-sub-container > div:nth-child(1) {
  font-size: var(--section-title-font-size);
  margin-bottom: -0.5rem;
  text-align: center;
}

.contact-me-sub-container > div:nth-child(2) {
  font-size: var(--project-title-font-size);
}

.email-address {
  margin-left: 0.4rem;
}

.contact-me-sub-container .icon {
  height: 2.5rem;
}

.contact-me-profile-photo {
  /* padding: 0px; */
  box-shadow: var(--default-box-shadow);
}

.contact-me-profile-photo > img {
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 500px;
  overflow: hidden;
  object-fit: cover;
  display: block;
}

/* ******************/
/* mobile styles End*/

/* ********************/
/* tablet styles Start*/
@media screen and (min-width: 560px) {
  .section_wrapper_about-me-main-container {
    background: linear-gradient(
      348deg,
      var(--custom-white) 45%,
      var(--medium-blue) 45%,
      var(--light-blue)
    );
  }

  .about-me-main-container {
    display: block;
    padding: var(--mobil-default-side-padding);
    padding-top: 2.5rem;
  }

  .profile-photo-container {
    width: var(--small-tablet-profile-photo-dimension);
    height: var(--small-tablet-profile-photo-dimension);
    float: left;
    margin-left: -0.5rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
  }

  .profile-photo-container .full-name {
    position: absolute;
    top: 10px;
    left: 280px;
    white-space: nowrap;

    font-size: 3.2rem;
    color: var(--custom-white);
    display: none;
  }

  .about-me-profile-photo img {
    max-height: var(--small-tablet-profile-photo-dimension);
    object-fit: cover;

    /* width: auto; */
  }
  .about-me-container {
    display: block;
    width: min(100vw - 40px, 650px);
    margin: auto;
    margin-top: 80px;
    padding: 2.4rem;

    background-color: var(--custom-white);
    box-shadow: var(--default-box-shadow);
  }

  .about-me-main-container .contact-icons-container {
    display: none;
  }

  .projects-main-container {
    padding: var(--tablet-default-side-padding);
  }

  .projects-main-title {
    display: block;
  }

  .contact-me-main-container {
    display: grid;
    grid-template-columns: 1fr 1fr;

    padding: var(--mobil-default-side-padding);
  }

  .contact-me-profile-photo {
    margin: calc(0.5rem + 1vw);
  }

  .contact-me-profile-photo > img {
    width: 100%;
    max-width: 600px;
    /* max-height: 500px; */
    overflow: hidden;
    object-fit: cover;
    display: block;
  }

  .contact-me-sub-container > div:nth-child(1) {
    text-align: left;
  }

  .email-address {
    margin-left: 0rem;
  }
}

/* tablet styles End*/

/* big tablet styles Start*/
@media screen and (min-width: 760px) {
  .about-me-main-container {
    padding-right: var(--tablet-default-side-padding);
    padding-left: var(--tablet-default-side-padding);
  }

  .profile-photo-container {
    width: var(--tablet-profile-photo-dimension);
    height: var(--tablet-profile-photo-dimension);
    margin-left: -1.5rem;
  }

  .about-me-profile-photo img {
    max-height: var(--tablet-profile-photo-dimension);
  }

  .contact-me-profile-photo {
    margin: calc(1rem + 1vw);
  }
}
/* big tablet styles End*/

/* *********************/
/* desktop styles Start*/
@media screen and (min-width: 1160px) {
  .section_wrapper_about-me-main-container {
    /* background: linear-gradient(
      348deg,
      var(--custom-white) 45%,
      var(--medium-blue) 45%,
      var(--light-blue)
    ); */
  }
  .about-me-main-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 0px;
    padding: var(--tablet-default-side-padding);
    /* padding-left: 1rem;
    padding-right: 1rem; */
    /* padding-top: 2.5rem; */
  }

  .profile-photo-container {
    width: var(--laptop-profile-photo-dimension);
    height: var(--laptop-profile-photo-dimension);
    /* float: left; */
    margin-left: 0rem;
    margin-right: 0rem;
    margin-bottom: 0rem;

    position: relative;
  }

  .profile-photo-container .full-name {
    position: absolute;
    display: block;
    top: auto;
    bottom: 10px;
    left: 10px;
    font-size: 3.3rem;
    color: var(--custom-white);
  }

  .about-me-profile-photo img {
    max-height: var(--laptop-profile-photo-dimension);

    /* width: auto; */
  }
  .about-me-container {
    /* display: block; */
    justify-self: center;
    margin: 0px;
    /* margin-top: 2rem;
    margin-bottom: 2rem; */
    /* margin-top: 80px; */
    /* padding: 1.4rem; */

    background-color: var(--custom-white);
    box-shadow: var(--default-box-shadow);
  }

  .about-me-main-container .contact-icons-container {
    display: flex;
  }

  .contact-me-main-container {
    display: grid;
    /* grid-template-columns: 2fr 3fr; */
  }
}
/* desktop styles End*/

/* add here maybe screens very wide */
@media screen and (min-width: 1400px) {
  .section_wrapper_about-me-main-container {
    background: linear-gradient(
      350deg,
      var(--custom-white) 52%,
      var(--medium-blue) 52%,
      var(--light-blue)
    );
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"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","sourcesContent":["/* variables Start*/\n:root {\n  --custom-white: #fcfcfc;\n  --light-blue: #0fc9e7;\n  --medium-blue: #0391b2;\n  --dark-blue: #4756ca;\n  --section-title-font-size: 2.5rem;\n  --mobil-default-side-padding: 1.5rem;\n  --tablet-default-side-padding: 3.5rem;\n  --project-title-font-size: 1.2rem;\n  --small-tablet-profile-photo-dimension: 240px;\n  --tablet-profile-photo-dimension: 320px;\n  --laptop-profile-photo-dimension: 450px;\n  --default-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);\n}\n\n/* variables End */\n\n/* reset Start*/\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  padding: 0;\n  font-size: 100%;\n  font-weight: normal;\n}\n\nimg {\n  overflow: hidden;\n  object-fit: cover;\n}\n\n/* reset End*/\n\n/* base styles Start*/\n\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  align-items: stretch;\n  color: black;\n  /* background-color: purple; */\n}\n.section_wrapper {\n  display: flex;\n  /* flex-direction: column; */\n  justify-content: center;\n  align-items: center;\n}\n\n.section_wrapper_about-me-main-container {\n  background: linear-gradient(\n    320deg,\n    var(--custom-white) 62%,\n    var(--medium-blue) 62%,\n    var(--light-blue)\n  );\n}\n.section_wrapper_contact-me-main-container {\n  /* background-color: var(--medium-blue); */\n  background: linear-gradient(var(--medium-blue) 20%, var(--light-blue));\n  /* background: linear-gradient(#e66465, #9198e5); */\n}\n\n.about-me-main-container {\n  align-self: stretch;\n}\n\n.projects-main-container {\n  max-width: 1400px;\n}\n\n.contact-me-main-container {\n  max-width: 1400px;\n}\n\n.icon-parent {\n  text-decoration: none;\n  transition-duration: 0.2s;\n}\n.icon-parent:hover {\n  scale: 1.1;\n}\n/* default icon size, just in case */\n.icon {\n  height: 2rem;\n}\n\n/* *** */\n.about-me-main-container {\n  /* background-color: orange; */\n}\n\n/* *** */\n\n/* *** */\n.projects-main-container {\n  background-color: var(--custom-white);\n}\n/* *** */\n\n/* *** */\n.contact-me-main-container {\n}\n/* *** */\n\n/* base styles End*/\n\n/* fonts Start*/\n/* fonts End*/\n\n/* mobile styles Start*/\n/* ********************/\n\n/* >>> about me main section */\n.about-me-main-container {\n  padding: var(--mobil-default-side-padding);\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n\n.profile-photo-container {\n  /* box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75); */\n\n  position: relative;\n  box-shadow: var(--default-box-shadow);\n}\n\n.profile-photo-container .full-name {\n  position: absolute;\n  bottom: 10px;\n  left: 10px;\n\n  font-size: calc(3rem + 3vw);\n  color: var(--custom-white);\n}\n\n.about-me-profile-photo img {\n  width: 100%;\n  max-width: 600px;\n  overflow: hidden;\n  display: block;\n  /* object-fit: cover; */\n}\n\n.about-me-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.about-me-title {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 0.7rem;\n\n  font-size: var(--section-title-font-size);\n}\n\n.about-me-text {\n  font-size: 1.2rem;\n  line-height: 1.4;\n}\n\n.contact-icons-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n\n  margin-top: 1rem;\n}\n\n.contact-icons-container .icon {\n  height: 2rem;\n}\n\n/* >>> projects main section */\n.projects-main-container {\n  align-self: center;\n\n  padding: var(--mobil-default-side-padding);\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n\n  width: min(100%, 1400px);\n}\n\n.projects-main-title {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: var(--section-title-font-size);\n}\n\n.projects-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(min(100%, 350px), 1fr));\n\n  gap: 3rem;\n}\n\n.project-container {\n  /* border: 2px black solid; */\n  padding-bottom: 2rem;\n  box-shadow: var(--default-box-shadow);\n  transition-duration: 0.5s;\n}\n.project-container:hover {\n  scale: 1.05;\n}\n\n.project-image-wrapper {\n  height: 250px;\n  /* width: 500px; */\n  width: 100%;\n  background-color: black;\n  /* object-fit: cover;\n  display: block; */\n}\n.project-image-wrapper img {\n  /* display: block; */\n}\n\n.project-details-container {\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.project-title-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.project-title {\n  /* text-align: center; */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 0.3rem;\n\n  font-size: var(--project-title-font-size);\n  font-weight: bold;\n}\n\n.project-link-logos-container {\n  display: flex;\n  gap: 0.5rem;\n}\n\n/* project background images */\n\n.project-image-wrapper {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n.project-1 .project-image-wrapper {\n  /* Battleship game */\n  background-image: url(../images/project_battleship.png);\n}\n.project-2 .project-image-wrapper {\n  /* To Do App */\n  background-image: url(../images/project_to_do_list.png);\n}\n.project-3 .project-image-wrapper {\n  /* Weather App */\n  background-image: url(../images/project_weather_app.png);\n}\n.project-4 .project-image-wrapper {\n  /* Visited Cities App */\n  background-image: url(../images/project_visited_cities.png);\n}\n.project-5 .project-image-wrapper {\n  /* Connect Four Game */\n  background-image: url(../images/project_connect_four.png);\n}\n.project-6 .project-image-wrapper {\n  /* Calculator */\n  background-image: url(../images/project_calculator.png);\n}\n\n/* !! Check if different text lengths would have same size on the box */\n.project-description {\n  /* border: 2px black solid; */\n}\n\n/* >>> contact me main section */\n.contact-me-main-container {\n}\n\n.contact-me-sub-container {\n  padding-top: 2rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-bottom: 4rem;\n\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n\n.contact-me-sub-container > div:nth-child(1) {\n  font-size: var(--section-title-font-size);\n  margin-bottom: -0.5rem;\n  text-align: center;\n}\n\n.contact-me-sub-container > div:nth-child(2) {\n  font-size: var(--project-title-font-size);\n}\n\n.email-address {\n  margin-left: 0.4rem;\n}\n\n.contact-me-sub-container .icon {\n  height: 2.5rem;\n}\n\n.contact-me-profile-photo {\n  /* padding: 0px; */\n  box-shadow: var(--default-box-shadow);\n}\n\n.contact-me-profile-photo > img {\n  width: 100%;\n  height: 100%;\n  max-width: 600px;\n  max-height: 500px;\n  overflow: hidden;\n  object-fit: cover;\n  display: block;\n}\n\n/* ******************/\n/* mobile styles End*/\n\n/* ********************/\n/* tablet styles Start*/\n@media screen and (min-width: 560px) {\n  .section_wrapper_about-me-main-container {\n    background: linear-gradient(\n      348deg,\n      var(--custom-white) 45%,\n      var(--medium-blue) 45%,\n      var(--light-blue)\n    );\n  }\n\n  .about-me-main-container {\n    display: block;\n    padding: var(--mobil-default-side-padding);\n    padding-top: 2.5rem;\n  }\n\n  .profile-photo-container {\n    width: var(--small-tablet-profile-photo-dimension);\n    height: var(--small-tablet-profile-photo-dimension);\n    float: left;\n    margin-left: -0.5rem;\n    margin-right: 1rem;\n    margin-bottom: 1rem;\n  }\n\n  .profile-photo-container .full-name {\n    position: absolute;\n    top: 10px;\n    left: 280px;\n    white-space: nowrap;\n\n    font-size: 3.2rem;\n    color: var(--custom-white);\n    display: none;\n  }\n\n  .about-me-profile-photo img {\n    max-height: var(--small-tablet-profile-photo-dimension);\n    object-fit: cover;\n\n    /* width: auto; */\n  }\n  .about-me-container {\n    display: block;\n    width: min(100vw - 40px, 650px);\n    margin: auto;\n    margin-top: 80px;\n    padding: 2.4rem;\n\n    background-color: var(--custom-white);\n    box-shadow: var(--default-box-shadow);\n  }\n\n  .about-me-main-container .contact-icons-container {\n    display: none;\n  }\n\n  .projects-main-container {\n    padding: var(--tablet-default-side-padding);\n  }\n\n  .projects-main-title {\n    display: block;\n  }\n\n  .contact-me-main-container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n\n    padding: var(--mobil-default-side-padding);\n  }\n\n  .contact-me-profile-photo {\n    margin: calc(0.5rem + 1vw);\n  }\n\n  .contact-me-profile-photo > img {\n    width: 100%;\n    max-width: 600px;\n    /* max-height: 500px; */\n    overflow: hidden;\n    object-fit: cover;\n    display: block;\n  }\n\n  .contact-me-sub-container > div:nth-child(1) {\n    text-align: left;\n  }\n\n  .email-address {\n    margin-left: 0rem;\n  }\n}\n\n/* tablet styles End*/\n\n/* big tablet styles Start*/\n@media screen and (min-width: 760px) {\n  .about-me-main-container {\n    padding-right: var(--tablet-default-side-padding);\n    padding-left: var(--tablet-default-side-padding);\n  }\n\n  .profile-photo-container {\n    width: var(--tablet-profile-photo-dimension);\n    height: var(--tablet-profile-photo-dimension);\n    margin-left: -1.5rem;\n  }\n\n  .about-me-profile-photo img {\n    max-height: var(--tablet-profile-photo-dimension);\n  }\n\n  .contact-me-profile-photo {\n    margin: calc(1rem + 1vw);\n  }\n}\n/* big tablet styles End*/\n\n/* *********************/\n/* desktop styles Start*/\n@media screen and (min-width: 1160px) {\n  .section_wrapper_about-me-main-container {\n    /* background: linear-gradient(\n      348deg,\n      var(--custom-white) 45%,\n      var(--medium-blue) 45%,\n      var(--light-blue)\n    ); */\n  }\n  .about-me-main-container {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n\n    gap: 0px;\n    padding: var(--tablet-default-side-padding);\n    /* padding-left: 1rem;\n    padding-right: 1rem; */\n    /* padding-top: 2.5rem; */\n  }\n\n  .profile-photo-container {\n    width: var(--laptop-profile-photo-dimension);\n    height: var(--laptop-profile-photo-dimension);\n    /* float: left; */\n    margin-left: 0rem;\n    margin-right: 0rem;\n    margin-bottom: 0rem;\n\n    position: relative;\n  }\n\n  .profile-photo-container .full-name {\n    position: absolute;\n    display: block;\n    top: auto;\n    bottom: 10px;\n    left: 10px;\n    font-size: 3.3rem;\n    color: var(--custom-white);\n  }\n\n  .about-me-profile-photo img {\n    max-height: var(--laptop-profile-photo-dimension);\n\n    /* width: auto; */\n  }\n  .about-me-container {\n    /* display: block; */\n    justify-self: center;\n    margin: 0px;\n    /* margin-top: 2rem;\n    margin-bottom: 2rem; */\n    /* margin-top: 80px; */\n    /* padding: 1.4rem; */\n\n    background-color: var(--custom-white);\n    box-shadow: var(--default-box-shadow);\n  }\n\n  .about-me-main-container .contact-icons-container {\n    display: flex;\n  }\n\n  .contact-me-main-container {\n    display: grid;\n    /* grid-template-columns: 2fr 3fr; */\n  }\n}\n/* desktop styles End*/\n\n/* add here maybe screens very wide */\n@media screen and (min-width: 1400px) {\n  .section_wrapper_about-me-main-container {\n    background: linear-gradient(\n      350deg,\n      var(--custom-white) 52%,\n      var(--medium-blue) 52%,\n      var(--light-blue)\n    );\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/images/project_battleship.png":
/*!*******************************************!*\
  !*** ./src/images/project_battleship.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1bf0e612dad1c132ab78.png";

/***/ }),

/***/ "./src/images/project_calculator.png":
/*!*******************************************!*\
  !*** ./src/images/project_calculator.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dded34722cc24c60c9d8.png";

/***/ }),

/***/ "./src/images/project_connect_four.png":
/*!*********************************************!*\
  !*** ./src/images/project_connect_four.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8d8b021d07a90a3798b1.png";

/***/ }),

/***/ "./src/images/project_to_do_list.png":
/*!*******************************************!*\
  !*** ./src/images/project_to_do_list.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ef8fd764abd98be150f5.png";

/***/ }),

/***/ "./src/images/project_visited_cities.png":
/*!***********************************************!*\
  !*** ./src/images/project_visited_cities.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bce130da29658c533e1f.png";

/***/ }),

/***/ "./src/images/project_weather_app.png":
/*!********************************************!*\
  !*** ./src/images/project_weather_app.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "47df0fab1c9da0ce977c.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/javascript/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLDRCQUE0QjtBQUM1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHlCQUF5QjtBQUN6Qix3QkFBd0I7O0FBRXhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sOEZBQThGLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxhQUFhLFdBQVcsS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sV0FBVyxhQUFhLE1BQU0sVUFBVSxZQUFZLGNBQWMsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFNBQVMsS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxLQUFLLFlBQVksTUFBTSxVQUFVLE1BQU0sVUFBVSxLQUFLLFlBQVksT0FBTyxXQUFXLFVBQVUsS0FBSyxZQUFZLE1BQU0sV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLGFBQWEsV0FBVyxXQUFXLFlBQVksY0FBYyxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGNBQWMsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFlBQVksWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLFlBQVksTUFBTSxhQUFhLGFBQWEsV0FBVyxZQUFZLFlBQVksWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGNBQWMsYUFBYSxPQUFPLEtBQUssVUFBVSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxPQUFPLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxjQUFjLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sYUFBYSxNQUFNLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGNBQWMsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZ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Q0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3RyZXBvLy4vc3JjL2phdmFzY3JpcHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGVzdHJlcG8vLi9zcmMvc3R5bGVzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly90ZXN0cmVwby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGVzdHJlcG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Rlc3RyZXBvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGVzdHJlcG8vLi9zcmMvc3R5bGVzL2luZGV4LmNzcz82MzQ5Iiwid2VicGFjazovL3Rlc3RyZXBvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Rlc3RyZXBvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90ZXN0cmVwby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90ZXN0cmVwby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZXN0cmVwby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Rlc3RyZXBvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2luZGV4LmNzc1wiO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9wcm9qZWN0X2JhdHRsZXNoaXAucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3Byb2plY3RfdG9fZG9fbGlzdC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvcHJvamVjdF93ZWF0aGVyX2FwcC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvcHJvamVjdF92aXNpdGVkX2NpdGllcy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvcHJvamVjdF9jb25uZWN0X2ZvdXIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3Byb2plY3RfY2FsY3VsYXRvci5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogdmFyaWFibGVzIFN0YXJ0Ki9cbjpyb290IHtcbiAgLS1jdXN0b20td2hpdGU6ICNmY2ZjZmM7XG4gIC0tbGlnaHQtYmx1ZTogIzBmYzllNztcbiAgLS1tZWRpdW0tYmx1ZTogIzAzOTFiMjtcbiAgLS1kYXJrLWJsdWU6ICM0NzU2Y2E7XG4gIC0tc2VjdGlvbi10aXRsZS1mb250LXNpemU6IDIuNXJlbTtcbiAgLS1tb2JpbC1kZWZhdWx0LXNpZGUtcGFkZGluZzogMS41cmVtO1xuICAtLXRhYmxldC1kZWZhdWx0LXNpZGUtcGFkZGluZzogMy41cmVtO1xuICAtLXByb2plY3QtdGl0bGUtZm9udC1zaXplOiAxLjJyZW07XG4gIC0tc21hbGwtdGFibGV0LXByb2ZpbGUtcGhvdG8tZGltZW5zaW9uOiAyNDBweDtcbiAgLS10YWJsZXQtcHJvZmlsZS1waG90by1kaW1lbnNpb246IDMyMHB4O1xuICAtLWxhcHRvcC1wcm9maWxlLXBob3RvLWRpbWVuc2lvbjogNDUwcHg7XG4gIC0tZGVmYXVsdC1ib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG59XG5cbi8qIHZhcmlhYmxlcyBFbmQgKi9cblxuLyogcmVzZXQgU3RhcnQqL1xuKiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbmltZyB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4vKiByZXNldCBFbmQqL1xuXG4vKiBiYXNlIHN0eWxlcyBTdGFydCovXG5cbmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgY29sb3I6IGJsYWNrO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7ICovXG59XG4uc2VjdGlvbl93cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgLyogZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZWN0aW9uX3dyYXBwZXJfYWJvdXQtbWUtbWFpbi1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgMzIwZGVnLFxuICAgIHZhcigtLWN1c3RvbS13aGl0ZSkgNjIlLFxuICAgIHZhcigtLW1lZGl1bS1ibHVlKSA2MiUsXG4gICAgdmFyKC0tbGlnaHQtYmx1ZSlcbiAgKTtcbn1cbi5zZWN0aW9uX3dyYXBwZXJfY29udGFjdC1tZS1tYWluLWNvbnRhaW5lciB7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZGl1bS1ibHVlKTsgKi9cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHZhcigtLW1lZGl1bS1ibHVlKSAyMCUsIHZhcigtLWxpZ2h0LWJsdWUpKTtcbiAgLyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNlNjY0NjUsICM5MTk4ZTUpOyAqL1xufVxuXG4uYWJvdXQtbWUtbWFpbi1jb250YWluZXIge1xuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xufVxuXG4ucHJvamVjdHMtbWFpbi1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDE0MDBweDtcbn1cblxuLmNvbnRhY3QtbWUtbWFpbi1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDE0MDBweDtcbn1cblxuLmljb24tcGFyZW50IHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xufVxuLmljb24tcGFyZW50OmhvdmVyIHtcbiAgc2NhbGU6IDEuMTtcbn1cbi8qIGRlZmF1bHQgaWNvbiBzaXplLCBqdXN0IGluIGNhc2UgKi9cbi5pY29uIHtcbiAgaGVpZ2h0OiAycmVtO1xufVxuXG4vKiAqKiogKi9cbi5hYm91dC1tZS1tYWluLWNvbnRhaW5lciB7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTsgKi9cbn1cblxuLyogKioqICovXG5cbi8qICoqKiAqL1xuLnByb2plY3RzLW1haW4tY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3VzdG9tLXdoaXRlKTtcbn1cbi8qICoqKiAqL1xuXG4vKiAqKiogKi9cbi5jb250YWN0LW1lLW1haW4tY29udGFpbmVyIHtcbn1cbi8qICoqKiAqL1xuXG4vKiBiYXNlIHN0eWxlcyBFbmQqL1xuXG4vKiBmb250cyBTdGFydCovXG4vKiBmb250cyBFbmQqL1xuXG4vKiBtb2JpbGUgc3R5bGVzIFN0YXJ0Ki9cbi8qICoqKioqKioqKioqKioqKioqKioqL1xuXG4vKiA+Pj4gYWJvdXQgbWUgbWFpbiBzZWN0aW9uICovXG4uYWJvdXQtbWUtbWFpbi1jb250YWluZXIge1xuICBwYWRkaW5nOiB2YXIoLS1tb2JpbC1kZWZhdWx0LXNpZGUtcGFkZGluZyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMS41cmVtO1xufVxuXG4ucHJvZmlsZS1waG90by1jb250YWluZXIge1xuICAvKiBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7ICovXG5cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2hhZG93OiB2YXIoLS1kZWZhdWx0LWJveC1zaGFkb3cpO1xufVxuXG4ucHJvZmlsZS1waG90by1jb250YWluZXIgLmZ1bGwtbmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMHB4O1xuICBsZWZ0OiAxMHB4O1xuXG4gIGZvbnQtc2l6ZTogY2FsYygzcmVtICsgM3Z3KTtcbiAgY29sb3I6IHZhcigtLWN1c3RvbS13aGl0ZSk7XG59XG5cbi5hYm91dC1tZS1wcm9maWxlLXBob3RvIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBibG9jaztcbiAgLyogb2JqZWN0LWZpdDogY292ZXI7ICovXG59XG5cbi5hYm91dC1tZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uYWJvdXQtbWUtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMC43cmVtO1xuXG4gIGZvbnQtc2l6ZTogdmFyKC0tc2VjdGlvbi10aXRsZS1mb250LXNpemUpO1xufVxuXG4uYWJvdXQtbWUtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBsaW5lLWhlaWdodDogMS40O1xufVxuXG4uY29udGFjdC1pY29ucy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xuXG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi5jb250YWN0LWljb25zLWNvbnRhaW5lciAuaWNvbiB7XG4gIGhlaWdodDogMnJlbTtcbn1cblxuLyogPj4+IHByb2plY3RzIG1haW4gc2VjdGlvbiAqL1xuLnByb2plY3RzLW1haW4tY29udGFpbmVyIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuXG4gIHBhZGRpbmc6IHZhcigtLW1vYmlsLWRlZmF1bHQtc2lkZS1wYWRkaW5nKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcmVtO1xuXG4gIHdpZHRoOiBtaW4oMTAwJSwgMTQwMHB4KTtcbn1cblxuLnByb2plY3RzLW1haW4tdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBmb250LXNpemU6IHZhcigtLXNlY3Rpb24tdGl0bGUtZm9udC1zaXplKTtcbn1cblxuLnByb2plY3RzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KG1pbigxMDAlLCAzNTBweCksIDFmcikpO1xuXG4gIGdhcDogM3JlbTtcbn1cblxuLnByb2plY3QtY29udGFpbmVyIHtcbiAgLyogYm9yZGVyOiAycHggYmxhY2sgc29saWQ7ICovXG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICBib3gtc2hhZG93OiB2YXIoLS1kZWZhdWx0LWJveC1zaGFkb3cpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xufVxuLnByb2plY3QtY29udGFpbmVyOmhvdmVyIHtcbiAgc2NhbGU6IDEuMDU7XG59XG5cbi5wcm9qZWN0LWltYWdlLXdyYXBwZXIge1xuICBoZWlnaHQ6IDI1MHB4O1xuICAvKiB3aWR0aDogNTAwcHg7ICovXG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgLyogb2JqZWN0LWZpdDogY292ZXI7XG4gIGRpc3BsYXk6IGJsb2NrOyAqL1xufVxuLnByb2plY3QtaW1hZ2Utd3JhcHBlciBpbWcge1xuICAvKiBkaXNwbGF5OiBibG9jazsgKi9cbn1cblxuLnByb2plY3QtZGV0YWlscy1jb250YWluZXIge1xuICBwYWRkaW5nOiAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDAuNXJlbTtcbn1cblxuLnByb2plY3QtdGl0bGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucHJvamVjdC10aXRsZSB7XG4gIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAwLjNyZW07XG5cbiAgZm9udC1zaXplOiB2YXIoLS1wcm9qZWN0LXRpdGxlLWZvbnQtc2l6ZSk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucHJvamVjdC1saW5rLWxvZ29zLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMC41cmVtO1xufVxuXG4vKiBwcm9qZWN0IGJhY2tncm91bmQgaW1hZ2VzICovXG5cbi5wcm9qZWN0LWltYWdlLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cbi5wcm9qZWN0LTEgLnByb2plY3QtaW1hZ2Utd3JhcHBlciB7XG4gIC8qIEJhdHRsZXNoaXAgZ2FtZSAqL1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG4ucHJvamVjdC0yIC5wcm9qZWN0LWltYWdlLXdyYXBwZXIge1xuICAvKiBUbyBEbyBBcHAgKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuLnByb2plY3QtMyAucHJvamVjdC1pbWFnZS13cmFwcGVyIHtcbiAgLyogV2VhdGhlciBBcHAgKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xufVxuLnByb2plY3QtNCAucHJvamVjdC1pbWFnZS13cmFwcGVyIHtcbiAgLyogVmlzaXRlZCBDaXRpZXMgQXBwICovXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbn1cbi5wcm9qZWN0LTUgLnByb2plY3QtaW1hZ2Utd3JhcHBlciB7XG4gIC8qIENvbm5lY3QgRm91ciBHYW1lICovXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KTtcbn1cbi5wcm9qZWN0LTYgLnByb2plY3QtaW1hZ2Utd3JhcHBlciB7XG4gIC8qIENhbGN1bGF0b3IgKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fX30pO1xufVxuXG4vKiAhISBDaGVjayBpZiBkaWZmZXJlbnQgdGV4dCBsZW5ndGhzIHdvdWxkIGhhdmUgc2FtZSBzaXplIG9uIHRoZSBib3ggKi9cbi5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcbiAgLyogYm9yZGVyOiAycHggYmxhY2sgc29saWQ7ICovXG59XG5cbi8qID4+PiBjb250YWN0IG1lIG1haW4gc2VjdGlvbiAqL1xuLmNvbnRhY3QtbWUtbWFpbi1jb250YWluZXIge1xufVxuXG4uY29udGFjdC1tZS1zdWItY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDJyZW07XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDRyZW07XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxLjVyZW07XG59XG5cbi5jb250YWN0LW1lLXN1Yi1jb250YWluZXIgPiBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgZm9udC1zaXplOiB2YXIoLS1zZWN0aW9uLXRpdGxlLWZvbnQtc2l6ZSk7XG4gIG1hcmdpbi1ib3R0b206IC0wLjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRhY3QtbWUtc3ViLWNvbnRhaW5lciA+IGRpdjpudGgtY2hpbGQoMikge1xuICBmb250LXNpemU6IHZhcigtLXByb2plY3QtdGl0bGUtZm9udC1zaXplKTtcbn1cblxuLmVtYWlsLWFkZHJlc3Mge1xuICBtYXJnaW4tbGVmdDogMC40cmVtO1xufVxuXG4uY29udGFjdC1tZS1zdWItY29udGFpbmVyIC5pY29uIHtcbiAgaGVpZ2h0OiAyLjVyZW07XG59XG5cbi5jb250YWN0LW1lLXByb2ZpbGUtcGhvdG8ge1xuICAvKiBwYWRkaW5nOiAwcHg7ICovXG4gIGJveC1zaGFkb3c6IHZhcigtLWRlZmF1bHQtYm94LXNoYWRvdyk7XG59XG5cbi5jb250YWN0LW1lLXByb2ZpbGUtcGhvdG8gPiBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiAqKioqKioqKioqKioqKioqKiovXG4vKiBtb2JpbGUgc3R5bGVzIEVuZCovXG5cbi8qICoqKioqKioqKioqKioqKioqKioqL1xuLyogdGFibGV0IHN0eWxlcyBTdGFydCovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NjBweCkge1xuICAuc2VjdGlvbl93cmFwcGVyX2Fib3V0LW1lLW1haW4tY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAzNDhkZWcsXG4gICAgICB2YXIoLS1jdXN0b20td2hpdGUpIDQ1JSxcbiAgICAgIHZhcigtLW1lZGl1bS1ibHVlKSA0NSUsXG4gICAgICB2YXIoLS1saWdodC1ibHVlKVxuICAgICk7XG4gIH1cblxuICAuYWJvdXQtbWUtbWFpbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IHZhcigtLW1vYmlsLWRlZmF1bHQtc2lkZS1wYWRkaW5nKTtcbiAgICBwYWRkaW5nLXRvcDogMi41cmVtO1xuICB9XG5cbiAgLnByb2ZpbGUtcGhvdG8tY29udGFpbmVyIHtcbiAgICB3aWR0aDogdmFyKC0tc21hbGwtdGFibGV0LXByb2ZpbGUtcGhvdG8tZGltZW5zaW9uKTtcbiAgICBoZWlnaHQ6IHZhcigtLXNtYWxsLXRhYmxldC1wcm9maWxlLXBob3RvLWRpbWVuc2lvbik7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IC0wLjVyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cblxuICAucHJvZmlsZS1waG90by1jb250YWluZXIgLmZ1bGwtbmFtZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTBweDtcbiAgICBsZWZ0OiAyODBweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gICAgZm9udC1zaXplOiAzLjJyZW07XG4gICAgY29sb3I6IHZhcigtLWN1c3RvbS13aGl0ZSk7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5hYm91dC1tZS1wcm9maWxlLXBob3RvIGltZyB7XG4gICAgbWF4LWhlaWdodDogdmFyKC0tc21hbGwtdGFibGV0LXByb2ZpbGUtcGhvdG8tZGltZW5zaW9uKTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcblxuICAgIC8qIHdpZHRoOiBhdXRvOyAqL1xuICB9XG4gIC5hYm91dC1tZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiBtaW4oMTAwdncgLSA0MHB4LCA2NTBweCk7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDgwcHg7XG4gICAgcGFkZGluZzogMi40cmVtO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3VzdG9tLXdoaXRlKTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1kZWZhdWx0LWJveC1zaGFkb3cpO1xuICB9XG5cbiAgLmFib3V0LW1lLW1haW4tY29udGFpbmVyIC5jb250YWN0LWljb25zLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5wcm9qZWN0cy1tYWluLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogdmFyKC0tdGFibGV0LWRlZmF1bHQtc2lkZS1wYWRkaW5nKTtcbiAgfVxuXG4gIC5wcm9qZWN0cy1tYWluLXRpdGxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5jb250YWN0LW1lLW1haW4tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcblxuICAgIHBhZGRpbmc6IHZhcigtLW1vYmlsLWRlZmF1bHQtc2lkZS1wYWRkaW5nKTtcbiAgfVxuXG4gIC5jb250YWN0LW1lLXByb2ZpbGUtcGhvdG8ge1xuICAgIG1hcmdpbjogY2FsYygwLjVyZW0gKyAxdncpO1xuICB9XG5cbiAgLmNvbnRhY3QtbWUtcHJvZmlsZS1waG90byA+IGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAvKiBtYXgtaGVpZ2h0OiA1MDBweDsgKi9cbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLmNvbnRhY3QtbWUtc3ViLWNvbnRhaW5lciA+IGRpdjpudGgtY2hpbGQoMSkge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuICAuZW1haWwtYWRkcmVzcyB7XG4gICAgbWFyZ2luLWxlZnQ6IDByZW07XG4gIH1cbn1cblxuLyogdGFibGV0IHN0eWxlcyBFbmQqL1xuXG4vKiBiaWcgdGFibGV0IHN0eWxlcyBTdGFydCovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjBweCkge1xuICAuYWJvdXQtbWUtbWFpbi1jb250YWluZXIge1xuICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLXRhYmxldC1kZWZhdWx0LXNpZGUtcGFkZGluZyk7XG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS10YWJsZXQtZGVmYXVsdC1zaWRlLXBhZGRpbmcpO1xuICB9XG5cbiAgLnByb2ZpbGUtcGhvdG8tY29udGFpbmVyIHtcbiAgICB3aWR0aDogdmFyKC0tdGFibGV0LXByb2ZpbGUtcGhvdG8tZGltZW5zaW9uKTtcbiAgICBoZWlnaHQ6IHZhcigtLXRhYmxldC1wcm9maWxlLXBob3RvLWRpbWVuc2lvbik7XG4gICAgbWFyZ2luLWxlZnQ6IC0xLjVyZW07XG4gIH1cblxuICAuYWJvdXQtbWUtcHJvZmlsZS1waG90byBpbWcge1xuICAgIG1heC1oZWlnaHQ6IHZhcigtLXRhYmxldC1wcm9maWxlLXBob3RvLWRpbWVuc2lvbik7XG4gIH1cblxuICAuY29udGFjdC1tZS1wcm9maWxlLXBob3RvIHtcbiAgICBtYXJnaW46IGNhbGMoMXJlbSArIDF2dyk7XG4gIH1cbn1cbi8qIGJpZyB0YWJsZXQgc3R5bGVzIEVuZCovXG5cbi8qICoqKioqKioqKioqKioqKioqKioqKi9cbi8qIGRlc2t0b3Agc3R5bGVzIFN0YXJ0Ki9cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDExNjBweCkge1xuICAuc2VjdGlvbl93cmFwcGVyX2Fib3V0LW1lLW1haW4tY29udGFpbmVyIHtcbiAgICAvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAzNDhkZWcsXG4gICAgICB2YXIoLS1jdXN0b20td2hpdGUpIDQ1JSxcbiAgICAgIHZhcigtLW1lZGl1bS1ibHVlKSA0NSUsXG4gICAgICB2YXIoLS1saWdodC1ibHVlKVxuICAgICk7ICovXG4gIH1cbiAgLmFib3V0LW1lLW1haW4tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGdhcDogMHB4O1xuICAgIHBhZGRpbmc6IHZhcigtLXRhYmxldC1kZWZhdWx0LXNpZGUtcGFkZGluZyk7XG4gICAgLyogcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07ICovXG4gICAgLyogcGFkZGluZy10b3A6IDIuNXJlbTsgKi9cbiAgfVxuXG4gIC5wcm9maWxlLXBob3RvLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IHZhcigtLWxhcHRvcC1wcm9maWxlLXBob3RvLWRpbWVuc2lvbik7XG4gICAgaGVpZ2h0OiB2YXIoLS1sYXB0b3AtcHJvZmlsZS1waG90by1kaW1lbnNpb24pO1xuICAgIC8qIGZsb2F0OiBsZWZ0OyAqL1xuICAgIG1hcmdpbi1sZWZ0OiAwcmVtO1xuICAgIG1hcmdpbi1yaWdodDogMHJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwcmVtO1xuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLnByb2ZpbGUtcGhvdG8tY29udGFpbmVyIC5mdWxsLW5hbWUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0b3A6IGF1dG87XG4gICAgYm90dG9tOiAxMHB4O1xuICAgIGxlZnQ6IDEwcHg7XG4gICAgZm9udC1zaXplOiAzLjNyZW07XG4gICAgY29sb3I6IHZhcigtLWN1c3RvbS13aGl0ZSk7XG4gIH1cblxuICAuYWJvdXQtbWUtcHJvZmlsZS1waG90byBpbWcge1xuICAgIG1heC1oZWlnaHQ6IHZhcigtLWxhcHRvcC1wcm9maWxlLXBob3RvLWRpbWVuc2lvbik7XG5cbiAgICAvKiB3aWR0aDogYXV0bzsgKi9cbiAgfVxuICAuYWJvdXQtbWUtY29udGFpbmVyIHtcbiAgICAvKiBkaXNwbGF5OiBibG9jazsgKi9cbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBtYXJnaW46IDBweDtcbiAgICAvKiBtYXJnaW4tdG9wOiAycmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07ICovXG4gICAgLyogbWFyZ2luLXRvcDogODBweDsgKi9cbiAgICAvKiBwYWRkaW5nOiAxLjRyZW07ICovXG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jdXN0b20td2hpdGUpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWRlZmF1bHQtYm94LXNoYWRvdyk7XG4gIH1cblxuICAuYWJvdXQtbWUtbWFpbi1jb250YWluZXIgLmNvbnRhY3QtaWNvbnMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgLmNvbnRhY3QtbWUtbWFpbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyOyAqL1xuICB9XG59XG4vKiBkZXNrdG9wIHN0eWxlcyBFbmQqL1xuXG4vKiBhZGQgaGVyZSBtYXliZSBzY3JlZW5zIHZlcnkgd2lkZSAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQwMHB4KSB7XG4gIC5zZWN0aW9uX3dyYXBwZXJfYWJvdXQtbWUtbWFpbi1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIDM1MGRlZyxcbiAgICAgIHZhcigtLWN1c3RvbS13aGl0ZSkgNTIlLFxuICAgICAgdmFyKC0tbWVkaXVtLWJsdWUpIDUyJSxcbiAgICAgIHZhcigtLWxpZ2h0LWJsdWUpXG4gICAgKTtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxtQkFBbUI7QUFDbkI7RUFDRSx1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsaUNBQWlDO0VBQ2pDLG9DQUFvQztFQUNwQyxxQ0FBcUM7RUFDckMsaUNBQWlDO0VBQ2pDLDZDQUE2QztFQUM3Qyx1Q0FBdUM7RUFDdkMsdUNBQXVDO0VBQ3ZDLDBEQUEwRDtBQUM1RDs7QUFFQSxrQkFBa0I7O0FBRWxCLGVBQWU7QUFDZjtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBOzs7Ozs7RUFNRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBLGFBQWE7O0FBRWIscUJBQXFCOztBQUVyQjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCOztFQUV2QixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsYUFBYTtFQUNiLDRCQUE0QjtFQUM1Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VB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cUJBQXFCOztJQUVyQixxQ0FBcUM7SUFDckMscUNBQXFDO0VBQ3ZDOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG9DQUFvQztFQUN0QztBQUNGO0FBQ0Esc0JBQXNCOztBQUV0QixxQ0FBcUM7QUFDckM7RUFDRTtJQUNFOzs7OztLQUtDO0VBQ0g7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiB2YXJpYWJsZXMgU3RhcnQqL1xcbjpyb290IHtcXG4gIC0tY3VzdG9tLXdoaXRlOiAjZmNmY2ZjO1xcbiAgLS1saWdodC1ibHVlOiAjMGZjOWU3O1xcbiAgLS1tZWRpdW0tYmx1ZTogIzAzOTFiMjtcXG4gIC0tZGFyay1ibHVlOiAjNDc1NmNhO1xcbiAgLS1zZWN0aW9uLXRpdGxlLWZvbnQtc2l6ZTogMi41cmVtO1xcbiAgLS1tb2JpbC1kZWZhdWx0LXNpZGUtcGFkZGluZzogMS41cmVtO1xcbiAgLS10YWJsZXQtZGVmYXVsdC1zaWRlLXBhZGRpbmc6IDMuNXJlbTtcXG4gIC0tcHJvamVjdC10aXRsZS1mb250LXNpemU6IDEuMnJlbTtcXG4gIC0tc21hbGwtdGFibGV0LXByb2ZpbGUtcGhvdG8tZGltZW5zaW9uOiAyNDBweDtcXG4gIC0tdGFibGV0LXByb2ZpbGUtcGhvdG8tZGltZW5zaW9uOiAzMjBweDtcXG4gIC0tbGFwdG9wLXByb2ZpbGUtcGhvdG8tZGltZW5zaW9uOiA0NTBweDtcXG4gIC0tZGVmYXVsdC1ib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxufVxcblxcbi8qIHZhcmlhYmxlcyBFbmQgKi9cXG5cXG4vKiByZXNldCBTdGFydCovXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbmltZyB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi8qIHJlc2V0IEVuZCovXFxuXFxuLyogYmFzZSBzdHlsZXMgU3RhcnQqL1xcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcHVycGxlOyAqL1xcbn1cXG4uc2VjdGlvbl93cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAvKiBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2VjdGlvbl93cmFwcGVyX2Fib3V0LW1lLW1haW4tY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgMzIwZGVnLFxcbiAgICB2YXIoLS1jdXN0b20td2hpdGUpIDYyJSxcXG4gICAgdmFyKC0tbWVkaXVtLWJsdWUpIDYyJSxcXG4gICAgdmFyKC0tbGlnaHQtYmx1ZSlcXG4gICk7XFxufVxcbi5zZWN0aW9uX3dyYXBwZXJfY29udGFjdC1tZS1tYWluLWNvbnRhaW5lciB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWRpdW0tYmx1ZSk7ICovXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodmFyKC0tbWVkaXVtLWJsdWUpIDIwJSwgdmFyKC0tbGlnaHQtYmx1ZSkpO1xcbiAgLyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNlNjY0NjUsICM5MTk4ZTUpOyAqL1xcbn1cXG5cXG4uYWJvdXQtbWUtbWFpbi1jb250YWluZXIge1xcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG59XFxuXFxuLnByb2plY3RzLW1haW4tY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogMTQwMHB4O1xcbn1cXG5cXG4uY29udGFjdC1tZS1tYWluLWNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDE0MDBweDtcXG59XFxuXFxuLmljb24tcGFyZW50IHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxufVxcbi5pY29uLXBhcmVudDpob3ZlciB7XFxuICBzY2FsZTogMS4xO1xcbn1cXG4vKiBkZWZhdWx0IGljb24gc2l6ZSwganVzdCBpbiBjYXNlICovXFxuLmljb24ge1xcbiAgaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4vKiAqKiogKi9cXG4uYWJvdXQtbWUtbWFpbi1jb250YWluZXIge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlOyAqL1xcbn1cXG5cXG4vKiAqKiogKi9cXG5cXG4vKiAqKiogKi9cXG4ucHJvamVjdHMtbWFpbi1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3VzdG9tLXdoaXRlKTtcXG59XFxuLyogKioqICovXFxuXFxuLyogKioqICovXFxuLmNvbnRhY3QtbWUtbWFpbi1jb250YWluZXIge1xcbn1cXG4vKiAqKiogKi9cXG5cXG4vKiBiYXNlIHN0eWxlcyBFbmQqL1xcblxcbi8qIGZvbnRzIFN0YXJ0Ki9cXG4vKiBmb250cyBFbmQqL1xcblxcbi8qIG1vYmlsZSBzdHlsZXMgU3RhcnQqL1xcbi8qICoqKioqKioqKioqKioqKioqKioqL1xcblxcbi8qID4+PiBhYm91dCBtZSBtYWluIHNlY3Rpb24gKi9cXG4uYWJvdXQtbWUtbWFpbi1jb250YWluZXIge1xcbiAgcGFkZGluZzogdmFyKC0tbW9iaWwtZGVmYXVsdC1zaWRlLXBhZGRpbmcpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEuNXJlbTtcXG59XFxuXFxuLnByb2ZpbGUtcGhvdG8tY29udGFpbmVyIHtcXG4gIC8qIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTsgKi9cXG5cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLWRlZmF1bHQtYm94LXNoYWRvdyk7XFxufVxcblxcbi5wcm9maWxlLXBob3RvLWNvbnRhaW5lciAuZnVsbC1uYW1lIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMTBweDtcXG4gIGxlZnQ6IDEwcHg7XFxuXFxuICBmb250LXNpemU6IGNhbGMoM3JlbSArIDN2dyk7XFxuICBjb2xvcjogdmFyKC0tY3VzdG9tLXdoaXRlKTtcXG59XFxuXFxuLmFib3V0LW1lLXByb2ZpbGUtcGhvdG8gaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA2MDBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIC8qIG9iamVjdC1maXQ6IGNvdmVyOyAqL1xcbn1cXG5cXG4uYWJvdXQtbWUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uYWJvdXQtbWUtdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDAuN3JlbTtcXG5cXG4gIGZvbnQtc2l6ZTogdmFyKC0tc2VjdGlvbi10aXRsZS1mb250LXNpemUpO1xcbn1cXG5cXG4uYWJvdXQtbWUtdGV4dCB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxufVxcblxcbi5jb250YWN0LWljb25zLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG5cXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi5jb250YWN0LWljb25zLWNvbnRhaW5lciAuaWNvbiB7XFxuICBoZWlnaHQ6IDJyZW07XFxufVxcblxcbi8qID4+PiBwcm9qZWN0cyBtYWluIHNlY3Rpb24gKi9cXG4ucHJvamVjdHMtbWFpbi1jb250YWluZXIge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcblxcbiAgcGFkZGluZzogdmFyKC0tbW9iaWwtZGVmYXVsdC1zaWRlLXBhZGRpbmcpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxuXFxuICB3aWR0aDogbWluKDEwMCUsIDE0MDBweCk7XFxufVxcblxcbi5wcm9qZWN0cy1tYWluLXRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBmb250LXNpemU6IHZhcigtLXNlY3Rpb24tdGl0bGUtZm9udC1zaXplKTtcXG59XFxuXFxuLnByb2plY3RzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgobWluKDEwMCUsIDM1MHB4KSwgMWZyKSk7XFxuXFxuICBnYXA6IDNyZW07XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAvKiBib3JkZXI6IDJweCBibGFjayBzb2xpZDsgKi9cXG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tZGVmYXVsdC1ib3gtc2hhZG93KTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XFxufVxcbi5wcm9qZWN0LWNvbnRhaW5lcjpob3ZlciB7XFxuICBzY2FsZTogMS4wNTtcXG59XFxuXFxuLnByb2plY3QtaW1hZ2Utd3JhcHBlciB7XFxuICBoZWlnaHQ6IDI1MHB4O1xcbiAgLyogd2lkdGg6IDUwMHB4OyAqL1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIC8qIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgZGlzcGxheTogYmxvY2s7ICovXFxufVxcbi5wcm9qZWN0LWltYWdlLXdyYXBwZXIgaW1nIHtcXG4gIC8qIGRpc3BsYXk6IGJsb2NrOyAqL1xcbn1cXG5cXG4ucHJvamVjdC1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnByb2plY3QtdGl0bGUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZSB7XFxuICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDAuM3JlbTtcXG5cXG4gIGZvbnQtc2l6ZTogdmFyKC0tcHJvamVjdC10aXRsZS1mb250LXNpemUpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wcm9qZWN0LWxpbmstbG9nb3MtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLyogcHJvamVjdCBiYWNrZ3JvdW5kIGltYWdlcyAqL1xcblxcbi5wcm9qZWN0LWltYWdlLXdyYXBwZXIge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG59XFxuLnByb2plY3QtMSAucHJvamVjdC1pbWFnZS13cmFwcGVyIHtcXG4gIC8qIEJhdHRsZXNoaXAgZ2FtZSAqL1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltYWdlcy9wcm9qZWN0X2JhdHRsZXNoaXAucG5nKTtcXG59XFxuLnByb2plY3QtMiAucHJvamVjdC1pbWFnZS13cmFwcGVyIHtcXG4gIC8qIFRvIERvIEFwcCAqL1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltYWdlcy9wcm9qZWN0X3RvX2RvX2xpc3QucG5nKTtcXG59XFxuLnByb2plY3QtMyAucHJvamVjdC1pbWFnZS13cmFwcGVyIHtcXG4gIC8qIFdlYXRoZXIgQXBwICovXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1hZ2VzL3Byb2plY3Rfd2VhdGhlcl9hcHAucG5nKTtcXG59XFxuLnByb2plY3QtNCAucHJvamVjdC1pbWFnZS13cmFwcGVyIHtcXG4gIC8qIFZpc2l0ZWQgQ2l0aWVzIEFwcCAqL1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltYWdlcy9wcm9qZWN0X3Zpc2l0ZWRfY2l0aWVzLnBuZyk7XFxufVxcbi5wcm9qZWN0LTUgLnByb2plY3QtaW1hZ2Utd3JhcHBlciB7XFxuICAvKiBDb25uZWN0IEZvdXIgR2FtZSAqL1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltYWdlcy9wcm9qZWN0X2Nvbm5lY3RfZm91ci5wbmcpO1xcbn1cXG4ucHJvamVjdC02IC5wcm9qZWN0LWltYWdlLXdyYXBwZXIge1xcbiAgLyogQ2FsY3VsYXRvciAqL1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltYWdlcy9wcm9qZWN0X2NhbGN1bGF0b3IucG5nKTtcXG59XFxuXFxuLyogISEgQ2hlY2sgaWYgZGlmZmVyZW50IHRleHQgbGVuZ3RocyB3b3VsZCBoYXZlIHNhbWUgc2l6ZSBvbiB0aGUgYm94ICovXFxuLnByb2plY3QtZGVzY3JpcHRpb24ge1xcbiAgLyogYm9yZGVyOiAycHggYmxhY2sgc29saWQ7ICovXFxufVxcblxcbi8qID4+PiBjb250YWN0IG1lIG1haW4gc2VjdGlvbiAqL1xcbi5jb250YWN0LW1lLW1haW4tY29udGFpbmVyIHtcXG59XFxuXFxuLmNvbnRhY3QtbWUtc3ViLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogNHJlbTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxLjVyZW07XFxufVxcblxcbi5jb250YWN0LW1lLXN1Yi1jb250YWluZXIgPiBkaXY6bnRoLWNoaWxkKDEpIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc2VjdGlvbi10aXRsZS1mb250LXNpemUpO1xcbiAgbWFyZ2luLWJvdHRvbTogLTAuNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhY3QtbWUtc3ViLWNvbnRhaW5lciA+IGRpdjpudGgtY2hpbGQoMikge1xcbiAgZm9udC1zaXplOiB2YXIoLS1wcm9qZWN0LXRpdGxlLWZvbnQtc2l6ZSk7XFxufVxcblxcbi5lbWFpbC1hZGRyZXNzIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjRyZW07XFxufVxcblxcbi5jb250YWN0LW1lLXN1Yi1jb250YWluZXIgLmljb24ge1xcbiAgaGVpZ2h0OiAyLjVyZW07XFxufVxcblxcbi5jb250YWN0LW1lLXByb2ZpbGUtcGhvdG8ge1xcbiAgLyogcGFkZGluZzogMHB4OyAqL1xcbiAgYm94LXNoYWRvdzogdmFyKC0tZGVmYXVsdC1ib3gtc2hhZG93KTtcXG59XFxuXFxuLmNvbnRhY3QtbWUtcHJvZmlsZS1waG90byA+IGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1heC13aWR0aDogNjAwcHg7XFxuICBtYXgtaGVpZ2h0OiA1MDBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiAqKioqKioqKioqKioqKioqKiovXFxuLyogbW9iaWxlIHN0eWxlcyBFbmQqL1xcblxcbi8qICoqKioqKioqKioqKioqKioqKioqL1xcbi8qIHRhYmxldCBzdHlsZXMgU3RhcnQqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU2MHB4KSB7XFxuICAuc2VjdGlvbl93cmFwcGVyX2Fib3V0LW1lLW1haW4tY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICAgIDM0OGRlZyxcXG4gICAgICB2YXIoLS1jdXN0b20td2hpdGUpIDQ1JSxcXG4gICAgICB2YXIoLS1tZWRpdW0tYmx1ZSkgNDUlLFxcbiAgICAgIHZhcigtLWxpZ2h0LWJsdWUpXFxuICAgICk7XFxuICB9XFxuXFxuICAuYWJvdXQtbWUtbWFpbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcGFkZGluZzogdmFyKC0tbW9iaWwtZGVmYXVsdC1zaWRlLXBhZGRpbmcpO1xcbiAgICBwYWRkaW5nLXRvcDogMi41cmVtO1xcbiAgfVxcblxcbiAgLnByb2ZpbGUtcGhvdG8tY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IHZhcigtLXNtYWxsLXRhYmxldC1wcm9maWxlLXBob3RvLWRpbWVuc2lvbik7XFxuICAgIGhlaWdodDogdmFyKC0tc21hbGwtdGFibGV0LXByb2ZpbGUtcGhvdG8tZGltZW5zaW9uKTtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMC41cmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICB9XFxuXFxuICAucHJvZmlsZS1waG90by1jb250YWluZXIgLmZ1bGwtbmFtZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMHB4O1xcbiAgICBsZWZ0OiAyODBweDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG5cXG4gICAgZm9udC1zaXplOiAzLjJyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1jdXN0b20td2hpdGUpO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLmFib3V0LW1lLXByb2ZpbGUtcGhvdG8gaW1nIHtcXG4gICAgbWF4LWhlaWdodDogdmFyKC0tc21hbGwtdGFibGV0LXByb2ZpbGUtcGhvdG8tZGltZW5zaW9uKTtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuXFxuICAgIC8qIHdpZHRoOiBhdXRvOyAqL1xcbiAgfVxcbiAgLmFib3V0LW1lLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogbWluKDEwMHZ3IC0gNDBweCwgNjUwcHgpO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDgwcHg7XFxuICAgIHBhZGRpbmc6IDIuNHJlbTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3VzdG9tLXdoaXRlKTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tZGVmYXVsdC1ib3gtc2hhZG93KTtcXG4gIH1cXG5cXG4gIC5hYm91dC1tZS1tYWluLWNvbnRhaW5lciAuY29udGFjdC1pY29ucy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLnByb2plY3RzLW1haW4tY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogdmFyKC0tdGFibGV0LWRlZmF1bHQtc2lkZS1wYWRkaW5nKTtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0cy1tYWluLXRpdGxlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICAuY29udGFjdC1tZS1tYWluLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG5cXG4gICAgcGFkZGluZzogdmFyKC0tbW9iaWwtZGVmYXVsdC1zaWRlLXBhZGRpbmcpO1xcbiAgfVxcblxcbiAgLmNvbnRhY3QtbWUtcHJvZmlsZS1waG90byB7XFxuICAgIG1hcmdpbjogY2FsYygwLjVyZW0gKyAxdncpO1xcbiAgfVxcblxcbiAgLmNvbnRhY3QtbWUtcHJvZmlsZS1waG90byA+IGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgICAvKiBtYXgtaGVpZ2h0OiA1MDBweDsgKi9cXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcblxcbiAgLmNvbnRhY3QtbWUtc3ViLWNvbnRhaW5lciA+IGRpdjpudGgtY2hpbGQoMSkge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgfVxcblxcbiAgLmVtYWlsLWFkZHJlc3Mge1xcbiAgICBtYXJnaW4tbGVmdDogMHJlbTtcXG4gIH1cXG59XFxuXFxuLyogdGFibGV0IHN0eWxlcyBFbmQqL1xcblxcbi8qIGJpZyB0YWJsZXQgc3R5bGVzIFN0YXJ0Ki9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjBweCkge1xcbiAgLmFib3V0LW1lLW1haW4tY29udGFpbmVyIHtcXG4gICAgcGFkZGluZy1yaWdodDogdmFyKC0tdGFibGV0LWRlZmF1bHQtc2lkZS1wYWRkaW5nKTtcXG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS10YWJsZXQtZGVmYXVsdC1zaWRlLXBhZGRpbmcpO1xcbiAgfVxcblxcbiAgLnByb2ZpbGUtcGhvdG8tY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IHZhcigtLXRhYmxldC1wcm9maWxlLXBob3RvLWRpbWVuc2lvbik7XFxuICAgIGhlaWdodDogdmFyKC0tdGFibGV0LXByb2ZpbGUtcGhvdG8tZGltZW5zaW9uKTtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xLjVyZW07XFxuICB9XFxuXFxuICAuYWJvdXQtbWUtcHJvZmlsZS1waG90byBpbWcge1xcbiAgICBtYXgtaGVpZ2h0OiB2YXIoLS10YWJsZXQtcHJvZmlsZS1waG90by1kaW1lbnNpb24pO1xcbiAgfVxcblxcbiAgLmNvbnRhY3QtbWUtcHJvZmlsZS1waG90byB7XFxuICAgIG1hcmdpbjogY2FsYygxcmVtICsgMXZ3KTtcXG4gIH1cXG59XFxuLyogYmlnIHRhYmxldCBzdHlsZXMgRW5kKi9cXG5cXG4vKiAqKioqKioqKioqKioqKioqKioqKiovXFxuLyogZGVza3RvcCBzdHlsZXMgU3RhcnQqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDExNjBweCkge1xcbiAgLnNlY3Rpb25fd3JhcHBlcl9hYm91dC1tZS1tYWluLWNvbnRhaW5lciB7XFxuICAgIC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICAzNDhkZWcsXFxuICAgICAgdmFyKC0tY3VzdG9tLXdoaXRlKSA0NSUsXFxuICAgICAgdmFyKC0tbWVkaXVtLWJsdWUpIDQ1JSxcXG4gICAgICB2YXIoLS1saWdodC1ibHVlKVxcbiAgICApOyAqL1xcbiAgfVxcbiAgLmFib3V0LW1lLW1haW4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGdhcDogMHB4O1xcbiAgICBwYWRkaW5nOiB2YXIoLS10YWJsZXQtZGVmYXVsdC1zaWRlLXBhZGRpbmcpO1xcbiAgICAvKiBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07ICovXFxuICAgIC8qIHBhZGRpbmctdG9wOiAyLjVyZW07ICovXFxuICB9XFxuXFxuICAucHJvZmlsZS1waG90by1jb250YWluZXIge1xcbiAgICB3aWR0aDogdmFyKC0tbGFwdG9wLXByb2ZpbGUtcGhvdG8tZGltZW5zaW9uKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1sYXB0b3AtcHJvZmlsZS1waG90by1kaW1lbnNpb24pO1xcbiAgICAvKiBmbG9hdDogbGVmdDsgKi9cXG4gICAgbWFyZ2luLWxlZnQ6IDByZW07XFxuICAgIG1hcmdpbi1yaWdodDogMHJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMHJlbTtcXG5cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgfVxcblxcbiAgLnByb2ZpbGUtcGhvdG8tY29udGFpbmVyIC5mdWxsLW5hbWUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0b3A6IGF1dG87XFxuICAgIGJvdHRvbTogMTBweDtcXG4gICAgbGVmdDogMTBweDtcXG4gICAgZm9udC1zaXplOiAzLjNyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1jdXN0b20td2hpdGUpO1xcbiAgfVxcblxcbiAgLmFib3V0LW1lLXByb2ZpbGUtcGhvdG8gaW1nIHtcXG4gICAgbWF4LWhlaWdodDogdmFyKC0tbGFwdG9wLXByb2ZpbGUtcGhvdG8tZGltZW5zaW9uKTtcXG5cXG4gICAgLyogd2lkdGg6IGF1dG87ICovXFxuICB9XFxuICAuYWJvdXQtbWUtY29udGFpbmVyIHtcXG4gICAgLyogZGlzcGxheTogYmxvY2s7ICovXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgLyogbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTsgKi9cXG4gICAgLyogbWFyZ2luLXRvcDogODBweDsgKi9cXG4gICAgLyogcGFkZGluZzogMS40cmVtOyAqL1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jdXN0b20td2hpdGUpO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1kZWZhdWx0LWJveC1zaGFkb3cpO1xcbiAgfVxcblxcbiAgLmFib3V0LW1lLW1haW4tY29udGFpbmVyIC5jb250YWN0LWljb25zLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxuXFxuICAuY29udGFjdC1tZS1tYWluLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDNmcjsgKi9cXG4gIH1cXG59XFxuLyogZGVza3RvcCBzdHlsZXMgRW5kKi9cXG5cXG4vKiBhZGQgaGVyZSBtYXliZSBzY3JlZW5zIHZlcnkgd2lkZSAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0MDBweCkge1xcbiAgLnNlY3Rpb25fd3JhcHBlcl9hYm91dC1tZS1tYWluLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICAzNTBkZWcsXFxuICAgICAgdmFyKC0tY3VzdG9tLXdoaXRlKSA1MiUsXFxuICAgICAgdmFyKC0tbWVkaXVtLWJsdWUpIDUyJSxcXG4gICAgICB2YXIoLS1saWdodC1ibHVlKVxcbiAgICApO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==