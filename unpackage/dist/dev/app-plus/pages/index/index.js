"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*************************************************************************************!*\
  !*** D:/test/uniapp-test/Imitated-Mi-Mall/main.js?{"page":"pages%2Findex%2Findex"} ***!
  \*************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/index/index.nvue?mpType=page */ 4);\n\n        \n        \n        \n        if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {\n          Promise.prototype.finally = function(callback) {\n            var promise = this.constructor\n            return this.then(function(value) {\n              return promise.resolve(callback()).then(function() {\n                return value\n              })\n            }, function(reason) {\n              return promise.resolve(callback()).then(function() {\n                throw reason\n              })\n            })\n          }\n        }\n        _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/index/index'\n        _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQThEO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLFFBQVEsMkVBQUc7QUFDWCxRQUFRLDJFQUFHO0FBQ1gsUUFBUSwyRUFBRztBQUNYLGdCQUFnQiwyRUFBRyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIFxuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9pbmRleC9pbmRleC5udnVlP21wVHlwZT1wYWdlJ1xuICAgICAgICBpZiAodHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnICYmICFQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5KSB7XG4gICAgICAgICAgUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgcHJvbWlzZSA9IHRoaXMuY29uc3RydWN0b3JcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyByZWFzb25cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL2luZGV4L2luZGV4J1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!************************************************************************!*\
  !*** D:/test/uniapp-test/Imitated-Mi-Mall/main.js?{"type":"appStyle"} ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!************************************************************************************!*\
  !*** D:/test/uniapp-test/Imitated-Mi-Mall/App.vue?vue&type=style&index=0&lang=css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../softwaresrc/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../softwaresrc/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../softwaresrc/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../softwaresrc/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!../../../softwaresrc/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/test/uniapp-test/Imitated-Mi-Mall/App.vue?vue&type=style&index=0&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "@FONT-FACE": [
    {
      "fontFamily": "uniicons",
      "fontWeight": "normal",
      "fontStyle": "normal",
      "src": "url('~@/static/uni.ttf') format('truetype')"
    },
    {
      "fontFamily": "iconfont",
      "src": "url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2')"
    }
  ],
  "uni-flex": {
    "display": "flex",
    "flexDirection": "row"
  },
  "uni-flex-item": {
    "flex": 1
  },
  "uni-row": {
    "flexDirection": "row"
  },
  "uni-column": {
    "flexDirection": "column"
  },
  "uni-link": {
    "color": "#576B95",
    "fontSize": "26rpx"
  },
  "uni-center": {
    "textAlign": "center"
  },
  "uni-inline-item": {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "common-page-head": {
    "paddingTop": "35rpx",
    "paddingRight": "35rpx",
    "paddingBottom": "35rpx",
    "paddingLeft": "35rpx",
    "textAlign": "center"
  },
  "common-page-head-title": {
    "paddingTop": 0,
    "paddingRight": "40rpx",
    "paddingBottom": 0,
    "paddingLeft": "40rpx",
    "fontSize": "30rpx",
    "height": "88rpx",
    "lineHeight": "88rpx",
    "color": "#BEBEBE",
    "boxSizing": "border-box",
    "borderBottomWidth": "2rpx",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#D8D8D8"
  },
  "uni-padding-wrap": {
    "paddingTop": 0,
    "paddingRight": "30rpx",
    "paddingBottom": 0,
    "paddingLeft": "30rpx"
  },
  "uni-word": {
    "textAlign": "center",
    "paddingTop": "200rpx",
    "paddingRight": "100rpx",
    "paddingBottom": "200rpx",
    "paddingLeft": "100rpx"
  },
  "uni-title": {
    "fontSize": "30rpx",
    "fontWeight": "500",
    "paddingTop": "20rpx",
    "paddingRight": 0,
    "paddingBottom": "20rpx",
    "paddingLeft": 0,
    "lineHeight": 1.5
  },
  "uni-text": {
    "fontSize": "28rpx"
  },
  "uni-text-gray": {
    "color": "#cccccc"
  },
  "uni-text-small": {
    "fontSize": "24rpx"
  },
  "uni-common-mb": {
    "marginBottom": "30rpx"
  },
  "uni-common-pb": {
    "paddingBottom": "30rpx"
  },
  "uni-common-pl": {
    "paddingLeft": "30rpx"
  },
  "uni-common-mt": {
    "marginTop": "30rpx"
  },
  "uni-bg-red": {
    "backgroundColor": "#F76260",
    "color": "#FFFFFF"
  },
  "uni-bg-green": {
    "backgroundColor": "#09BB07",
    "color": "#FFFFFF"
  },
  "uni-bg-blue": {
    "backgroundColor": "#007AFF",
    "color": "#FFFFFF"
  },
  "uni-h1": {
    "fontSize": "80rpx",
    "fontWeight": "700"
  },
  "uni-h2": {
    "fontSize": "60rpx",
    "fontWeight": "700"
  },
  "uni-h3": {
    "fontSize": "48rpx",
    "fontWeight": "700"
  },
  "uni-h4": {
    "fontSize": "36rpx",
    "fontWeight": "700"
  },
  "uni-h5": {
    "fontSize": "28rpx",
    "color": "#8f8f94"
  },
  "uni-h6": {
    "fontSize": "24rpx",
    "color": "#8f8f94"
  },
  "uni-bold": {
    "fontWeight": "bold"
  },
  "uni-ellipsis": {
    "overflow": "hidden",
    "whiteSpace": "nowrap",
    "textOverflow": "ellipsis"
  },
  "uni-btn-v": {
    "paddingTop": "10rpx",
    "paddingRight": 0,
    "paddingBottom": "10rpx",
    "paddingLeft": 0
  },
  "uni-form-item": {
    "display": "flex",
    "width": 100,
    "paddingTop": "10rpx",
    "paddingRight": 0,
    "paddingBottom": "10rpx",
    "paddingLeft": 0
  },
  "uni-label": {
    "width": "210rpx",
    "wordWrap": "break-word",
    "wordBreak": "break-all",
    "textIndent": "20rpx"
  },
  "uni-input": {
    "height": "50rpx",
    "paddingTop": "15rpx",
    "paddingRight": "25rpx",
    "paddingBottom": "15rpx",
    "paddingLeft": "25rpx",
    "lineHeight": "50rpx",
    "fontSize": "28rpx",
    "backgroundColor": "#FFFFFF",
    "flex": 1
  },
  "uni-loadmore": {
    "height": "80rpx",
    "lineHeight": "80rpx",
    "textAlign": "center",
    "paddingBottom": "30rpx"
  },
  "uni-badge-primary": {
    "color": "#ffffff",
    "backgroundColor": "#007aff"
  },
  "uni-badge-green": {
    "color": "#ffffff",
    "backgroundColor": "#4cd964"
  },
  "uni-badge-success": {
    "color": "#ffffff",
    "backgroundColor": "#4cd964"
  },
  "uni-badge-warning": {
    "color": "#ffffff",
    "backgroundColor": "#f0ad4e"
  },
  "uni-badge-yellow": {
    "color": "#ffffff",
    "backgroundColor": "#f0ad4e"
  },
  "uni-badge-danger": {
    "color": "#ffffff",
    "backgroundColor": "#dd524d"
  },
  "uni-badge-red": {
    "color": "#ffffff",
    "backgroundColor": "#dd524d"
  },
  "uni-badge-purple": {
    "color": "#ffffff",
    "backgroundColor": "#8a6de9"
  },
  "uni-badge-royal": {
    "color": "#ffffff",
    "backgroundColor": "#8a6de9"
  },
  "uni-collapse-content": {
    "height": 0,
    "width": 100,
    "overflow": "hidden"
  },
  "uni-card": {
    "backgroundColor": "#ffffff",
    "borderRadius": "8rpx",
    "marginTop": "20rpx",
    "marginRight": 0,
    "marginBottom": "20rpx",
    "marginLeft": 0,
    "position": "relative"
  },
  "uni-card-content": {
    "fontSize": "30rpx"
  },
  "uni-card-content-inner": {
    "position": "relative",
    "paddingTop": "30rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "30rpx",
    "paddingLeft": "30rpx"
  },
  "uni-card-footer": {
    "position": "relative",
    "display": "flex",
    "minHeight": "50rpx",
    "paddingTop": "20rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "30rpx",
    "justifyContent": "space-between",
    "alignItems": "center",
    "color": "#6d6d72",
    "position:before": "absolute",
    "top:before": 0,
    "right:before": 0,
    "left:before": 0,
    "height:before": "2rpx",
    "content:before": "''",
    "WebkitTransform:before": "scaleY(.5)",
    "transform:before": "scaleY(.5)",
    "backgroundColor:before": "#c8c7cc"
  },
  "uni-card-header": {
    "position": "relative",
    "display": "flex",
    "minHeight": "50rpx",
    "paddingTop": "20rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "30rpx",
    "justifyContent": "space-between",
    "alignItems": "center",
    "fontSize": "36rpx",
    "position:before:after": "absolute",
    "top:before:after": 0,
    "right:before:after": 0,
    "left:before:after": 0,
    "height:before:after": "2rpx",
    "content:before:after": "''",
    "WebkitTransform:before:after": "scaleY(.5)",
    "transform:before:after": "scaleY(.5)",
    "backgroundColor:before:after": "#c8c7cc",
    "bottom:after": 0
  },
  "uni-card-media": {
    "justifyContent": "flex-start"
  },
  "uni-card-media-logo": {
    "height": "84rpx",
    "width": "84rpx",
    "marginRight": "20rpx"
  },
  "uni-card-media-body": {
    "height": "84rpx",
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "space-between",
    "alignItems": "flex-start"
  },
  "uni-card-media-text-top": {
    "lineHeight": "36rpx",
    "fontSize": "34rpx"
  },
  "uni-card-media-text-bottom": {
    "lineHeight": "30rpx",
    "fontSize": "28rpx",
    "color": "#8f8f94"
  },
  "uni-card-link": {
    "color": "#007AFF"
  },
  "uni-list": {
    "backgroundColor": "#FFFFFF",
    "position": "relative",
    "width": 100,
    "display": "flex",
    "flexDirection": "column",
    "position:after": "absolute",
    "zIndex:after": 10,
    "right:after": 0,
    "bottom:after": 0,
    "left:after": 0,
    "height:after": "1",
    "content:after": "''",
    "WebkitTransform:after": "scaleY(.5)",
    "transform:after": "scaleY(.5)",
    "backgroundColor:after": "#c8c7cc"
  },
  "uni-list-cell": {
    "position": "relative",
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "position::after": "absolute",
    "zIndex::after": 3,
    "right::after": 0,
    "bottom::after": 0,
    "left::after": "30rpx",
    "height::after": "1",
    "content::after": "''",
    "WebkitTransform::after": "scaleY(.5)",
    "transform::after": "scaleY(.5)",
    "backgroundColor::after": "#c8c7cc"
  },
  "uni-list-cell-hover": {
    "backgroundColor": "#eeeeee"
  },
  "uni-list-cell-pd": {
    "paddingTop": "22rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "22rpx",
    "paddingLeft": "30rpx"
  },
  "uni-list-cell-left": {
    "whiteSpace": "nowrap",
    "fontSize": "28rpx",
    "paddingTop": 0,
    "paddingRight": "30rpx",
    "paddingBottom": 0,
    "paddingLeft": "30rpx"
  },
  "uni-list-cell-db": {
    "flex": 1
  },
  "uni-list-cell-right": {
    "flex": 1
  },
  "uni-list-cell-divider": {
    "position": "relative",
    "display": "flex",
    "color": "#999999",
    "backgroundColor": "#f7f7f7",
    "paddingTop": "15rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "15rpx",
    "paddingLeft": "20rpx",
    "position::before": "absolute",
    "right::before": 0,
    "top::before": 0,
    "left::before": 0,
    "height::before": "1",
    "content::before": "''",
    "WebkitTransform::before": "scaleY(.5)",
    "transform::before": "scaleY(.5)",
    "backgroundColor::before": "#c8c7cc",
    "position::after": "absolute",
    "right::after": 0,
    "bottom::after": 0,
    "left::after": "0rpx",
    "height::after": "1",
    "content::after": "''",
    "WebkitTransform::after": "scaleY(.5)",
    "transform::after": "scaleY(.5)",
    "backgroundColor::after": "#c8c7cc"
  },
  "uni-list-cell-navigate": {
    "fontSize": "30rpx",
    "paddingTop": "22rpx",
    "paddingRight": "36rpx",
    "paddingBottom": "22rpx",
    "paddingLeft": "30rpx",
    "lineHeight": "48rpx",
    "position": "relative",
    "display": "flex",
    "boxSizing": "border-box",
    "width": 100,
    "flex": 1,
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "uni-navigate-badge": {
    "paddingRight": "50rpx"
  },
  "uni-triplex-row": {
    "display": "flex",
    "flex": 1,
    "width": 100,
    "boxSizing": "border-box",
    "flexDirection": "row",
    "paddingTop": "22rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "22rpx",
    "paddingLeft": "30rpx"
  },
  "uni-triplex-right": {
    "display": "flex",
    "flexDirection": "column",
    "width": 16,
    "textAlign": "right"
  },
  "uni-triplex-left": {
    "display": "flex",
    "flexDirection": "column",
    "width": 84
  },
  "uni-media-list": {
    "paddingTop": "22rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "22rpx",
    "paddingLeft": "30rpx",
    "boxSizing": "border-box",
    "display": "flex",
    "width": 100,
    "flexDirection": "row"
  },
  "uni-pull-right": {
    "flexDirection": "row-reverse"
  },
  "uni-media-list-logo": {
    "height": "84rpx",
    "width": "84rpx",
    "marginRight": "20rpx"
  },
  "uni-media-list-body": {
    "height": "84rpx",
    "display": "flex",
    "flex": 1,
    "flexDirection": "column",
    "justifyContent": "space-between",
    "alignItems": "flex-start",
    "overflow": "hidden"
  },
  "uni-media-list-text-top": {
    "width": 100,
    "lineHeight": "36rpx",
    "fontSize": "30rpx"
  },
  "uni-media-list-text-bottom": {
    "width": 100,
    "lineHeight": "30rpx",
    "fontSize": "26rpx",
    "color": "#8f8f94"
  },
  "uni-grid-9": {
    "backgroundColor": "#f2f2f2",
    "width": "750rpx",
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "wrap",
    "borderTopWidth": "2rpx",
    "borderTopStyle": "solid",
    "borderTopColor": "#eeeeee"
  },
  "uni-grid-9-item": {
    "width": "250rpx",
    "height": "200rpx",
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center",
    "borderBottomWidth": "2rpx",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#000000",
    "borderRightWidth": "2rpx",
    "borderRightStyle": "solid",
    "borderRightColor": "#000000",
    "borderColor": "#eeeeee",
    "boxSizing": "border-box"
  },
  "no-border-right": {
    "borderRightWidth": 0,
    "borderRightStyle": "solid"
  },
  "uni-grid-9-image": {
    "width": "100rpx",
    "height": "100rpx"
  },
  "uni-grid-9-text": {
    "width": "250rpx",
    "lineHeight": "4rpx",
    "height": "40rpx",
    "textAlign": "center",
    "fontSize": "30rpx"
  },
  "uni-grid-9-item-hover": {
    "backgroundColor": "rgba(0,0,0,0.1)"
  },
  "uni-uploader": {
    "flex": 1,
    "flexDirection": "column"
  },
  "uni-uploader-head": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "uni-uploader-info": {
    "color": "#B2B2B2"
  },
  "uni-uploader-body": {
    "marginTop": "16rpx"
  },
  "uni-uploader__files": {
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "wrap"
  },
  "uni-uploader__file": {
    "marginTop": "10rpx",
    "marginRight": "10rpx",
    "marginBottom": "10rpx",
    "marginLeft": "10rpx",
    "width": "210rpx",
    "height": "210rpx"
  },
  "uni-uploader__img": {
    "width": "210rpx",
    "height": "210rpx"
  },
  "uni-uploader__input-box": {
    "position": "relative",
    "marginTop": "10rpx",
    "marginRight": "10rpx",
    "marginBottom": "10rpx",
    "marginLeft": "10rpx",
    "width": "208rpx",
    "height": "208rpx",
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#D9D9D9",
    "content:before": "\" \"",
    "position:before": "absolute",
    "top:before": 50,
    "left:before": 50,
    "WebkitTransform:before": "translate(-50%, -50%)",
    "transform:before": "translate(-50%, -50%)",
    "backgroundColor:before": "#D9D9D9",
    "content:before:after": "\" \"",
    "position:before:after": "absolute",
    "top:before:after": 50,
    "left:before:after": 50,
    "WebkitTransform:before:after": "translate(-50%, -50%)",
    "transform:before:after": "translate(-50%, -50%)",
    "backgroundColor:before:after": "#D9D9D9",
    "width:before": "4rpx",
    "height:before": "79rpx",
    "width:after": "79rpx",
    "height:after": "4rpx",
    "borderColor:active": "#999999",
    "backgroundColor:active:before": "#999999",
    "backgroundColor:active:before:active:after": "#999999"
  },
  "uni-uploader__input": {
    "position": "absolute",
    "zIndex": 1,
    "top": 0,
    "left": 0,
    "width": 100,
    "height": 100,
    "opacity": 0
  },
  "feedback-title": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "paddingTop": "20rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "20rpx",
    "color": "#8f8f94",
    "fontSize": "28rpx"
  },
  "feedback-quick": {
    "position": "relative",
    "paddingRight": "40rpx",
    "fontFamily:after": "uniicons",
    "fontSize:after": "40rpx",
    "content:after": "'\\e581'",
    "position:after": "absolute",
    "right:after": 0,
    "top:after": 50,
    "color:after": "#bbbbbb",
    "WebkitTransform:after": "translateY(-50%)",
    "transform:after": "translateY(-50%)"
  },
  "feedback-body": {
    "backgroundColor": "#ffffff"
  },
  "feedback-textare": {
    "height": "200rpx",
    "fontSize": "34rpx",
    "lineHeight": "50rpx",
    "width": 100,
    "boxSizing": "border-box",
    "paddingTop": "20rpx",
    "paddingRight": "30rpx",
    "paddingBottom": 0,
    "paddingLeft": "30rpx"
  },
  "feedback-input": {
    "fontSize": "34rpx",
    "height": "50rpx",
    "minHeight": "50rpx",
    "paddingTop": "15rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "15rpx",
    "paddingLeft": "20rpx",
    "lineHeight": "50rpx"
  },
  "feedback-uploader": {
    "paddingTop": "22rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "22rpx",
    "paddingLeft": "20rpx"
  },
  "feedback-star": {
    "fontFamily": "uniicons",
    "fontSize": "40rpx",
    "marginLeft": "6rpx",
    "content:after": "'\\e408'"
  },
  "feedback-star-view": {
    "marginLeft": "20rpx"
  },
  "feedback-submit": {
    "backgroundColor": "#007AFF",
    "color": "#FFFFFF",
    "marginTop": "20rpx",
    "marginRight": "20rpx",
    "marginBottom": "20rpx",
    "marginLeft": "20rpx"
  },
  "uni-input-group": {
    "position": "relative",
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderWidth": 0,
    "borderStyle": "solid",
    "borderColor": "#000000",
    "backgroundColor": "#ffffff",
    "position:before": "absolute",
    "top:before": 0,
    "right:before": 0,
    "left:before": 0,
    "height:before": "2rpx",
    "content:before": "''",
    "transform:before": "scaleY(.5)",
    "backgroundColor:before": "#c8c7cc",
    "position:after": "absolute",
    "right:after": 0,
    "bottom:after": 0,
    "left:after": 0,
    "height:after": "2rpx",
    "content:after": "''",
    "transform:after": "scaleY(.5)",
    "backgroundColor:after": "#c8c7cc"
  },
  "uni-input-row": {
    "position": "relative",
    "display": "flex",
    "flexDirection": "row",
    "fontSize": "28rpx",
    "paddingTop": "22rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "22rpx",
    "paddingLeft": "30rpx",
    "justifyContent": "space-between"
  },
  "uni-textarea": {
    "width": 100,
    "backgroundColor": "#FFFFFF"
  },
  "uni-tab-bar": {
    "display": "flex",
    "flex": 1,
    "flexDirection": "column",
    "overflow": "hidden",
    "height": 100
  },
  "uni-swiper-tab": {
    "width": 100,
    "whiteSpace": "nowrap",
    "lineHeight": "100rpx",
    "height": "100rpx",
    "borderBottomWidth": "1",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#c8c7cc"
  },
  "swiper-tab-list": {
    "fontSize": "30rpx",
    "width": "150rpx",
    "textAlign": "center",
    "color": "#555555"
  },
  "uni-tab-bar-loading": {
    "paddingTop": "20rpx",
    "paddingRight": 0,
    "paddingBottom": "20rpx",
    "paddingLeft": 0
  },
  "uni-comment": {
    "paddingTop": "5rpx",
    "paddingRight": 0,
    "paddingBottom": "5rpx",
    "paddingLeft": 0,
    "display": "flex",
    "flexGrow": 1,
    "flexDirection": "column"
  },
  "uni-comment-list": {
    "flexWrap": "nowrap",
    "paddingTop": "10rpx",
    "paddingRight": 0,
    "paddingBottom": "10rpx",
    "paddingLeft": 0,
    "marginTop": "10rpx",
    "marginRight": 0,
    "marginBottom": "10rpx",
    "marginLeft": 0,
    "width": 100,
    "display": "flex"
  },
  "uni-comment-face": {
    "width": "70rpx",
    "height": "70rpx",
    "borderRadius": 100,
    "marginRight": "20rpx",
    "flexShrink": 0,
    "overflow": "hidden"
  },
  "uni-comment-body": {
    "width": 100
  },
  "uni-comment-top": {
    "lineHeight": 1.5,
    "justifyContent": "space-between"
  },
  "uni-comment-date": {
    "lineHeight": "38rpx",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "display": "flex",
    "flexGrow": 1
  },
  "uni-comment-content": {
    "lineHeight": 1.6,
    "fontSize": "28rpx",
    "paddingTop": "8rpx",
    "paddingRight": 0,
    "paddingBottom": "8rpx",
    "paddingLeft": 0
  },
  "uni-comment-replay-btn": {
    "backgroundColor": "#FFFFFF",
    "fontSize": "24rpx",
    "lineHeight": "28rpx",
    "paddingTop": "5rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "5rpx",
    "paddingLeft": "20rpx",
    "borderRadius": "30rpx",
    "color": "#333333",
    "marginTop": 0,
    "marginRight": "10rpx",
    "marginBottom": 0,
    "marginLeft": "10rpx"
  },
  "uni-swiper-msg": {
    "width": 100,
    "paddingTop": "12rpx",
    "paddingRight": 0,
    "paddingBottom": "12rpx",
    "paddingLeft": 0,
    "flexWrap": "nowrap",
    "display": "flex"
  },
  "uni-swiper-msg-icon": {
    "width": "50rpx",
    "marginRight": "20rpx"
  },
  "uni-product-list": {
    "display": "flex",
    "width": 100,
    "flexWrap": "wrap",
    "flexDirection": "row"
  },
  "uni-product": {
    "paddingTop": "20rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "20rpx",
    "display": "flex",
    "flexDirection": "column"
  },
  "image-view": {
    "height": "330rpx",
    "width": "330rpx",
    "marginTop": "12rpx",
    "marginRight": 0,
    "marginBottom": "12rpx",
    "marginLeft": 0
  },
  "uni-product-image": {
    "height": "330rpx",
    "width": "330rpx"
  },
  "uni-product-title": {
    "width": "300rpx",
    "wordBreak": "break-all",
    "overflow": "hidden",
    "lineHeight": 1.5,
    "textOverflow": "ellipsis",
    "WebkitBoxOrient": "vertical",
    "WebkitLineClamp": 2
  },
  "uni-product-price": {
    "marginTop": "10rpx",
    "fontSize": "28rpx",
    "lineHeight": 1.5,
    "position": "relative"
  },
  "uni-product-price-original": {
    "color": "#e80080"
  },
  "uni-product-price-favour": {
    "color": "#888888",
    "textDecoration": "line-through",
    "marginLeft": "10rpx"
  },
  "uni-product-tip": {
    "position": "absolute",
    "right": "10rpx",
    "backgroundColor": "#ff3333",
    "color": "#ffffff",
    "paddingTop": 0,
    "paddingRight": "10rpx",
    "paddingBottom": 0,
    "paddingLeft": "10rpx",
    "borderRadius": "5rpx"
  },
  "uni-timeline": {
    "marginTop": "35rpx",
    "marginRight": 0,
    "marginBottom": "35rpx",
    "marginLeft": 0,
    "display": "flex",
    "flexDirection": "column",
    "position": "relative"
  },
  "uni-timeline-item": {
    "display": "flex",
    "flexDirection": "row",
    "position": "relative",
    "paddingBottom": "20rpx",
    "boxSizing": "border-box",
    "overflow": "hidden"
  },
  "uni-timeline-item-divider": {
    "position::before": "absolute",
    "left::before": "15rpx",
    "width::before": "1rpx",
    "height::before": 100,
    "content::before": "''",
    "position::before::after": "absolute",
    "left::before::after": "15rpx",
    "width::before::after": "1rpx",
    "height::before::after": 100,
    "content::before::after": "''",
    "bottom::before": 100,
    "top::after": 100
  },
  "uni-icon": {
    "fontFamily": "uniicons",
    "fontSize": "24",
    "fontWeight": "normal",
    "fontStyle": "normal",
    "lineHeight": 1,
    "textDecoration": "none",
    "WebkitFontSmoothing": "antialiased"
  },
  "uni-icon-contact": {
    "content:before": "'\\e100'"
  },
  "uni-icon-person": {
    "content:before": "'\\e101'"
  },
  "uni-icon-personadd": {
    "content:before": "'\\e102'"
  },
  "uni-icon-contact-filled": {
    "content:before": "'\\e130'"
  },
  "uni-icon-person-filled": {
    "content:before": "'\\e131'"
  },
  "uni-icon-personadd-filled": {
    "content:before": "'\\e132'"
  },
  "uni-icon-phone": {
    "content:before": "'\\e200'"
  },
  "uni-icon-email": {
    "content:before": "'\\e201'"
  },
  "uni-icon-chatbubble": {
    "content:before": "'\\e202'"
  },
  "uni-icon-chatboxes": {
    "content:before": "'\\e203'"
  },
  "uni-icon-phone-filled": {
    "content:before": "'\\e230'"
  },
  "uni-icon-email-filled": {
    "content:before": "'\\e231'"
  },
  "uni-icon-chatbubble-filled": {
    "content:before": "'\\e232'"
  },
  "uni-icon-chatboxes-filled": {
    "content:before": "'\\e233'"
  },
  "uni-icon-weibo": {
    "content:before": "'\\e260'"
  },
  "uni-icon-weixin": {
    "content:before": "'\\e261'"
  },
  "uni-icon-pengyouquan": {
    "content:before": "'\\e262'"
  },
  "uni-icon-chat": {
    "content:before": "'\\e263'"
  },
  "uni-icon-qq": {
    "content:before": "'\\e264'"
  },
  "uni-icon-videocam": {
    "content:before": "'\\e300'"
  },
  "uni-icon-camera": {
    "content:before": "'\\e301'"
  },
  "uni-icon-mic": {
    "content:before": "'\\e302'"
  },
  "uni-icon-location": {
    "content:before": "'\\e303'"
  },
  "uni-icon-mic-filled": {
    "content:before": "'\\e332'"
  },
  "uni-icon-speech": {
    "content:before:before": "'\\e332'"
  },
  "uni-icon-location-filled": {
    "content:before": "'\\e333'"
  },
  "uni-icon-micoff": {
    "content:before": "'\\e360'"
  },
  "uni-icon-image": {
    "content:before": "'\\e363'"
  },
  "uni-icon-map": {
    "content:before": "'\\e364'"
  },
  "uni-icon-compose": {
    "content:before": "'\\e400'"
  },
  "uni-icon-trash": {
    "content:before": "'\\e401'"
  },
  "uni-icon-upload": {
    "content:before": "'\\e402'"
  },
  "uni-icon-download": {
    "content:before": "'\\e403'"
  },
  "uni-icon-close": {
    "content:before": "'\\e404'"
  },
  "uni-icon-redo": {
    "content:before": "'\\e405'"
  },
  "uni-icon-undo": {
    "content:before": "'\\e406'"
  },
  "uni-icon-refresh": {
    "content:before": "'\\e407'"
  },
  "uni-icon-star": {
    "content:before": "'\\e408'"
  },
  "uni-icon-plus": {
    "content:before": "'\\e409'"
  },
  "uni-icon-minus": {
    "content:before": "'\\e410'"
  },
  "uni-icon-circle": {
    "content:before": "'\\e411'"
  },
  "uni-icon-checkbox": {
    "content:before:before": "'\\e411'"
  },
  "uni-icon-close-filled": {
    "content:before": "'\\e434'"
  },
  "uni-icon-clear": {
    "content:before:before": "'\\e434'"
  },
  "uni-icon-refresh-filled": {
    "content:before": "'\\e437'"
  },
  "uni-icon-star-filled": {
    "content:before": "'\\e438'"
  },
  "uni-icon-plus-filled": {
    "content:before": "'\\e439'"
  },
  "uni-icon-minus-filled": {
    "content:before": "'\\e440'"
  },
  "uni-icon-circle-filled": {
    "content:before": "'\\e441'"
  },
  "uni-icon-checkbox-filled": {
    "content:before": "'\\e442'"
  },
  "uni-icon-closeempty": {
    "content:before": "'\\e460'"
  },
  "uni-icon-refreshempty": {
    "content:before": "'\\e461'"
  },
  "uni-icon-reload": {
    "content:before": "'\\e462'"
  },
  "uni-icon-starhalf": {
    "content:before": "'\\e463'"
  },
  "uni-icon-spinner": {
    "content:before": "'\\e464'"
  },
  "uni-icon-spinner-cycle": {
    "content:before": "'\\e465'"
  },
  "uni-icon-search": {
    "content:before": "'\\e466'"
  },
  "uni-icon-plusempty": {
    "content:before": "'\\e468'"
  },
  "uni-icon-forward": {
    "content:before": "'\\e470'"
  },
  "uni-icon-back": {
    "content:before": "'\\e471'"
  },
  "uni-icon-left-nav": {
    "content:before:before": "'\\e471'"
  },
  "uni-icon-checkmarkempty": {
    "content:before": "'\\e472'"
  },
  "uni-icon-home": {
    "content:before": "'\\e500'"
  },
  "uni-icon-navigate": {
    "content:before": "'\\e501'"
  },
  "uni-icon-gear": {
    "content:before": "'\\e502'"
  },
  "uni-icon-paperplane": {
    "content:before": "'\\e503'"
  },
  "uni-icon-info": {
    "content:before": "'\\e504'"
  },
  "uni-icon-help": {
    "content:before": "'\\e505'"
  },
  "uni-icon-locked": {
    "content:before": "'\\e506'"
  },
  "uni-icon-more": {
    "content:before": "'\\e507'"
  },
  "uni-icon-flag": {
    "content:before": "'\\e508'"
  },
  "uni-icon-home-filled": {
    "content:before": "'\\e530'"
  },
  "uni-icon-gear-filled": {
    "content:before": "'\\e532'"
  },
  "uni-icon-info-filled": {
    "content:before": "'\\e534'"
  },
  "uni-icon-help-filled": {
    "content:before": "'\\e535'"
  },
  "uni-icon-more-filled": {
    "content:before": "'\\e537'"
  },
  "uni-icon-settings": {
    "content:before": "'\\e560'"
  },
  "uni-icon-list": {
    "content:before": "'\\e562'"
  },
  "uni-icon-bars": {
    "content:before": "'\\e563'"
  },
  "uni-icon-loop": {
    "content:before": "'\\e565'"
  },
  "uni-icon-paperclip": {
    "content:before": "'\\e567'"
  },
  "uni-icon-eye": {
    "content:before": "'\\e568'"
  },
  "uni-icon-arrowup": {
    "content:before": "'\\e580'"
  },
  "uni-icon-arrowdown": {
    "content:before": "'\\e581'"
  },
  "uni-icon-arrowleft": {
    "content:before": "'\\e582'"
  },
  "uni-icon-arrowright": {
    "content:before": "'\\e583'"
  },
  "uni-icon-arrowthinup": {
    "content:before": "'\\e584'"
  },
  "uni-icon-arrowthindown": {
    "content:before": "'\\e585'"
  },
  "uni-icon-arrowthinleft": {
    "content:before": "'\\e586'"
  },
  "uni-icon-arrowthinright": {
    "content:before": "'\\e587'"
  },
  "uni-icon-pulldown": {
    "content:before": "'\\e588'"
  },
  "uni-icon-scan": {
    "content:before": "\"\\e612\""
  },
  "uni-divider": {
    "height": "110rpx",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "position": "relative"
  },
  "uni-divider__content": {
    "fontSize": "28rpx",
    "color": "#999999",
    "paddingTop": 0,
    "paddingRight": "20rpx",
    "paddingBottom": 0,
    "paddingLeft": "20rpx",
    "position": "relative",
    "zIndex": 101,
    "backgroundColor": "#F4F5F6"
  },
  "uni-divider__line": {
    "backgroundColor": "#CCCCCC",
    "height": "1",
    "width": 100,
    "position": "absolute",
    "zIndex": 100,
    "top": 50,
    "left": 0,
    "transform": "translateY(50%)"
  },
  "animate__animated": {
    "WebkitAnimationDuration": "var(--animate-duration)",
    "animationDuration": "var(--animate-duration)",
    "WebkitAnimationFillMode": "both",
    "animationFillMode": "both"
  },
  "animate__bounce": {
    "WebkitAnimationName": "bounce",
    "animationName": "bounce",
    "WebkitTransformOrigin": "center bottom",
    "transformOrigin": "center bottom"
  },
  "animate__flash": {
    "WebkitAnimationName": "flash",
    "animationName": "flash"
  },
  "animate__pulse": {
    "WebkitAnimationName": "pulse",
    "animationName": "pulse",
    "WebkitAnimationTimingFunction": "ease-in-out",
    "animationTimingFunction": "ease-in-out"
  },
  "animate__rubberBand": {
    "WebkitAnimationName": "rubberBand",
    "animationName": "rubberBand"
  },
  "animate__shakeX": {
    "WebkitAnimationName": "shakeX",
    "animationName": "shakeX"
  },
  "animate__shakeY": {
    "WebkitAnimationName": "shakeY",
    "animationName": "shakeY"
  },
  "animate__headShake": {
    "WebkitAnimationTimingFunction": "ease-in-out",
    "animationTimingFunction": "ease-in-out",
    "WebkitAnimationName": "headShake",
    "animationName": "headShake"
  },
  "animate__swing": {
    "WebkitTransformOrigin": "top center",
    "transformOrigin": "top center",
    "WebkitAnimationName": "swing",
    "animationName": "swing"
  },
  "animate__tada": {
    "WebkitAnimationName": "tada",
    "animationName": "tada"
  },
  "animate__wobble": {
    "WebkitAnimationName": "wobble",
    "animationName": "wobble"
  },
  "animate__jello": {
    "WebkitAnimationName": "jello",
    "animationName": "jello",
    "WebkitTransformOrigin": "center",
    "transformOrigin": "center"
  },
  "animate__heartBeat": {
    "WebkitAnimationName": "heartBeat",
    "animationName": "heartBeat",
    "WebkitAnimationDuration": "calc(var(--animate-duration) * 1.3)",
    "animationDuration": "calc(var(--animate-duration) * 1.3)",
    "WebkitAnimationTimingFunction": "ease-in-out",
    "animationTimingFunction": "ease-in-out"
  },
  "animate__backInDown": {
    "WebkitAnimationName": "backInDown",
    "animationName": "backInDown"
  },
  "animate__backInLeft": {
    "WebkitAnimationName": "backInLeft",
    "animationName": "backInLeft"
  },
  "animate__backInRight": {
    "WebkitAnimationName": "backInRight",
    "animationName": "backInRight"
  },
  "animate__backInUp": {
    "WebkitAnimationName": "backInUp",
    "animationName": "backInUp"
  },
  "animate__backOutDown": {
    "WebkitAnimationName": "backOutDown",
    "animationName": "backOutDown"
  },
  "animate__backOutLeft": {
    "WebkitAnimationName": "backOutLeft",
    "animationName": "backOutLeft"
  },
  "animate__backOutRight": {
    "WebkitAnimationName": "backOutRight",
    "animationName": "backOutRight"
  },
  "animate__backOutUp": {
    "WebkitAnimationName": "backOutUp",
    "animationName": "backOutUp"
  },
  "animate__bounceIn": {
    "WebkitAnimationDuration": "calc(var(--animate-duration) * 0.75)",
    "animationDuration": "calc(var(--animate-duration) * 0.75)",
    "WebkitAnimationName": "bounceIn",
    "animationName": "bounceIn"
  },
  "animate__bounceInDown": {
    "WebkitAnimationName": "bounceInDown",
    "animationName": "bounceInDown"
  },
  "animate__bounceInLeft": {
    "WebkitAnimationName": "bounceInLeft",
    "animationName": "bounceInLeft"
  },
  "animate__bounceInRight": {
    "WebkitAnimationName": "bounceInRight",
    "animationName": "bounceInRight"
  },
  "animate__bounceInUp": {
    "WebkitAnimationName": "bounceInUp",
    "animationName": "bounceInUp"
  },
  "animate__bounceOut": {
    "WebkitAnimationDuration": "calc(var(--animate-duration) * 0.75)",
    "animationDuration": "calc(var(--animate-duration) * 0.75)",
    "WebkitAnimationName": "bounceOut",
    "animationName": "bounceOut"
  },
  "animate__bounceOutDown": {
    "WebkitAnimationName": "bounceOutDown",
    "animationName": "bounceOutDown"
  },
  "animate__bounceOutLeft": {
    "WebkitAnimationName": "bounceOutLeft",
    "animationName": "bounceOutLeft"
  },
  "animate__bounceOutRight": {
    "WebkitAnimationName": "bounceOutRight",
    "animationName": "bounceOutRight"
  },
  "animate__bounceOutUp": {
    "WebkitAnimationName": "bounceOutUp",
    "animationName": "bounceOutUp"
  },
  "animate__fadeIn": {
    "WebkitAnimationName": "fadeIn",
    "animationName": "fadeIn"
  },
  "animate__fadeInDown": {
    "WebkitAnimationName": "fadeInDown",
    "animationName": "fadeInDown"
  },
  "animate__fadeInDownBig": {
    "WebkitAnimationName": "fadeInDownBig",
    "animationName": "fadeInDownBig"
  },
  "animate__fadeInLeft": {
    "WebkitAnimationName": "fadeInLeft",
    "animationName": "fadeInLeft"
  },
  "animate__fadeInLeftBig": {
    "WebkitAnimationName": "fadeInLeftBig",
    "animationName": "fadeInLeftBig"
  },
  "animate__fadeInRight": {
    "WebkitAnimationName": "fadeInRight",
    "animationName": "fadeInRight"
  },
  "animate__fadeInRightBig": {
    "WebkitAnimationName": "fadeInRightBig",
    "animationName": "fadeInRightBig"
  },
  "animate__fadeInUp": {
    "WebkitAnimationName": "fadeInUp",
    "animationName": "fadeInUp"
  },
  "animate__fadeInUpBig": {
    "WebkitAnimationName": "fadeInUpBig",
    "animationName": "fadeInUpBig"
  },
  "animate__fadeInTopLeft": {
    "WebkitAnimationName": "fadeInTopLeft",
    "animationName": "fadeInTopLeft"
  },
  "animate__fadeInTopRight": {
    "WebkitAnimationName": "fadeInTopRight",
    "animationName": "fadeInTopRight"
  },
  "animate__fadeInBottomLeft": {
    "WebkitAnimationName": "fadeInBottomLeft",
    "animationName": "fadeInBottomLeft"
  },
  "animate__fadeInBottomRight": {
    "WebkitAnimationName": "fadeInBottomRight",
    "animationName": "fadeInBottomRight"
  },
  "animate__fadeOut": {
    "WebkitAnimationName": "fadeOut",
    "animationName": "fadeOut"
  },
  "animate__fadeOutDown": {
    "WebkitAnimationName": "fadeOutDown",
    "animationName": "fadeOutDown"
  },
  "animate__fadeOutDownBig": {
    "WebkitAnimationName": "fadeOutDownBig",
    "animationName": "fadeOutDownBig"
  },
  "animate__fadeOutLeft": {
    "WebkitAnimationName": "fadeOutLeft",
    "animationName": "fadeOutLeft"
  },
  "animate__fadeOutLeftBig": {
    "WebkitAnimationName": "fadeOutLeftBig",
    "animationName": "fadeOutLeftBig"
  },
  "animate__fadeOutRight": {
    "WebkitAnimationName": "fadeOutRight",
    "animationName": "fadeOutRight"
  },
  "animate__fadeOutRightBig": {
    "WebkitAnimationName": "fadeOutRightBig",
    "animationName": "fadeOutRightBig"
  },
  "animate__fadeOutUp": {
    "WebkitAnimationName": "fadeOutUp",
    "animationName": "fadeOutUp"
  },
  "animate__fadeOutUpBig": {
    "WebkitAnimationName": "fadeOutUpBig",
    "animationName": "fadeOutUpBig"
  },
  "animate__fadeOutTopLeft": {
    "WebkitAnimationName": "fadeOutTopLeft",
    "animationName": "fadeOutTopLeft"
  },
  "animate__fadeOutTopRight": {
    "WebkitAnimationName": "fadeOutTopRight",
    "animationName": "fadeOutTopRight"
  },
  "animate__fadeOutBottomRight": {
    "WebkitAnimationName": "fadeOutBottomRight",
    "animationName": "fadeOutBottomRight"
  },
  "animate__fadeOutBottomLeft": {
    "WebkitAnimationName": "fadeOutBottomLeft",
    "animationName": "fadeOutBottomLeft"
  },
  "animate__flipInX": {
    "WebkitBackfaceVisibility": "visible",
    "backfaceVisibility": "visible",
    "WebkitAnimationName": "flipInX",
    "animationName": "flipInX"
  },
  "animate__flipInY": {
    "WebkitBackfaceVisibility": "visible",
    "backfaceVisibility": "visible",
    "WebkitAnimationName": "flipInY",
    "animationName": "flipInY"
  },
  "animate__flipOutX": {
    "WebkitAnimationDuration": "calc(var(--animate-duration) * 0.75)",
    "animationDuration": "calc(var(--animate-duration) * 0.75)",
    "WebkitAnimationName": "flipOutX",
    "animationName": "flipOutX",
    "WebkitBackfaceVisibility": "visible",
    "backfaceVisibility": "visible"
  },
  "animate__flipOutY": {
    "WebkitAnimationDuration": "calc(var(--animate-duration) * 0.75)",
    "animationDuration": "calc(var(--animate-duration) * 0.75)",
    "WebkitBackfaceVisibility": "visible",
    "backfaceVisibility": "visible",
    "WebkitAnimationName": "flipOutY",
    "animationName": "flipOutY"
  },
  "animate__lightSpeedInRight": {
    "WebkitAnimationName": "lightSpeedInRight",
    "animationName": "lightSpeedInRight",
    "WebkitAnimationTimingFunction": "ease-out",
    "animationTimingFunction": "ease-out"
  },
  "animate__lightSpeedInLeft": {
    "WebkitAnimationName": "lightSpeedInLeft",
    "animationName": "lightSpeedInLeft",
    "WebkitAnimationTimingFunction": "ease-out",
    "animationTimingFunction": "ease-out"
  },
  "animate__lightSpeedOutRight": {
    "WebkitAnimationName": "lightSpeedOutRight",
    "animationName": "lightSpeedOutRight",
    "WebkitAnimationTimingFunction": "ease-in",
    "animationTimingFunction": "ease-in"
  },
  "animate__lightSpeedOutLeft": {
    "WebkitAnimationName": "lightSpeedOutLeft",
    "animationName": "lightSpeedOutLeft",
    "WebkitAnimationTimingFunction": "ease-in",
    "animationTimingFunction": "ease-in"
  },
  "animate__rotateIn": {
    "WebkitAnimationName": "rotateIn",
    "animationName": "rotateIn",
    "WebkitTransformOrigin": "center",
    "transformOrigin": "center"
  },
  "animate__rotateInDownLeft": {
    "WebkitAnimationName": "rotateInDownLeft",
    "animationName": "rotateInDownLeft",
    "WebkitTransformOrigin": "left bottom",
    "transformOrigin": "left bottom"
  },
  "animate__rotateInDownRight": {
    "WebkitAnimationName": "rotateInDownRight",
    "animationName": "rotateInDownRight",
    "WebkitTransformOrigin": "right bottom",
    "transformOrigin": "right bottom"
  },
  "animate__rotateInUpLeft": {
    "WebkitAnimationName": "rotateInUpLeft",
    "animationName": "rotateInUpLeft",
    "WebkitTransformOrigin": "left bottom",
    "transformOrigin": "left bottom"
  },
  "animate__rotateInUpRight": {
    "WebkitAnimationName": "rotateInUpRight",
    "animationName": "rotateInUpRight",
    "WebkitTransformOrigin": "right bottom",
    "transformOrigin": "right bottom"
  },
  "animate__rotateOut": {
    "WebkitAnimationName": "rotateOut",
    "animationName": "rotateOut",
    "WebkitTransformOrigin": "center",
    "transformOrigin": "center"
  },
  "animate__rotateOutDownLeft": {
    "WebkitAnimationName": "rotateOutDownLeft",
    "animationName": "rotateOutDownLeft",
    "WebkitTransformOrigin": "left bottom",
    "transformOrigin": "left bottom"
  },
  "animate__rotateOutDownRight": {
    "WebkitAnimationName": "rotateOutDownRight",
    "animationName": "rotateOutDownRight",
    "WebkitTransformOrigin": "right bottom",
    "transformOrigin": "right bottom"
  },
  "animate__rotateOutUpLeft": {
    "WebkitAnimationName": "rotateOutUpLeft",
    "animationName": "rotateOutUpLeft",
    "WebkitTransformOrigin": "left bottom",
    "transformOrigin": "left bottom"
  },
  "animate__rotateOutUpRight": {
    "WebkitAnimationName": "rotateOutUpRight",
    "animationName": "rotateOutUpRight",
    "WebkitTransformOrigin": "right bottom",
    "transformOrigin": "right bottom"
  },
  "animate__hinge": {
    "WebkitAnimationDuration": "calc(var(--animate-duration) * 2)",
    "animationDuration": "calc(var(--animate-duration) * 2)",
    "WebkitAnimationName": "hinge",
    "animationName": "hinge",
    "WebkitTransformOrigin": "top left",
    "transformOrigin": "top left"
  },
  "animate__jackInTheBox": {
    "WebkitAnimationName": "jackInTheBox",
    "animationName": "jackInTheBox"
  },
  "animate__rollIn": {
    "WebkitAnimationName": "rollIn",
    "animationName": "rollIn"
  },
  "animate__rollOut": {
    "WebkitAnimationName": "rollOut",
    "animationName": "rollOut"
  },
  "animate__zoomIn": {
    "WebkitAnimationName": "zoomIn",
    "animationName": "zoomIn"
  },
  "animate__zoomInDown": {
    "WebkitAnimationName": "zoomInDown",
    "animationName": "zoomInDown"
  },
  "animate__zoomInLeft": {
    "WebkitAnimationName": "zoomInLeft",
    "animationName": "zoomInLeft"
  },
  "animate__zoomInRight": {
    "WebkitAnimationName": "zoomInRight",
    "animationName": "zoomInRight"
  },
  "animate__zoomInUp": {
    "WebkitAnimationName": "zoomInUp",
    "animationName": "zoomInUp"
  },
  "animate__zoomOut": {
    "WebkitAnimationName": "zoomOut",
    "animationName": "zoomOut"
  },
  "animate__zoomOutDown": {
    "WebkitAnimationName": "zoomOutDown",
    "animationName": "zoomOutDown",
    "WebkitTransformOrigin": "center bottom",
    "transformOrigin": "center bottom"
  },
  "animate__zoomOutLeft": {
    "WebkitAnimationName": "zoomOutLeft",
    "animationName": "zoomOutLeft",
    "WebkitTransformOrigin": "left center",
    "transformOrigin": "left center"
  },
  "animate__zoomOutRight": {
    "WebkitAnimationName": "zoomOutRight",
    "animationName": "zoomOutRight",
    "WebkitTransformOrigin": "right center",
    "transformOrigin": "right center"
  },
  "animate__zoomOutUp": {
    "WebkitAnimationName": "zoomOutUp",
    "animationName": "zoomOutUp",
    "WebkitTransformOrigin": "center bottom",
    "transformOrigin": "center bottom"
  },
  "animate__slideInDown": {
    "WebkitAnimationName": "slideInDown",
    "animationName": "slideInDown"
  },
  "animate__slideInLeft": {
    "WebkitAnimationName": "slideInLeft",
    "animationName": "slideInLeft"
  },
  "animate__slideInRight": {
    "WebkitAnimationName": "slideInRight",
    "animationName": "slideInRight"
  },
  "animate__slideInUp": {
    "WebkitAnimationName": "slideInUp",
    "animationName": "slideInUp"
  },
  "animate__slideOutDown": {
    "WebkitAnimationName": "slideOutDown",
    "animationName": "slideOutDown"
  },
  "animate__slideOutLeft": {
    "WebkitAnimationName": "slideOutLeft",
    "animationName": "slideOutLeft"
  },
  "animate__slideOutRight": {
    "WebkitAnimationName": "slideOutRight",
    "animationName": "slideOutRight"
  },
  "animate__slideOutUp": {
    "WebkitAnimationName": "slideOutUp",
    "animationName": "slideOutUp"
  },
  "iconfont": {
    "fontFamily": "\"iconfont\"",
    "fontSize": "16",
    "fontStyle": "normal",
    "WebkitFontSmoothing": "antialiased",
    "MozOsxFontSmoothing": "grayscale"
  },
  "icon-zhifubao": {
    "content:before": "\"\\e63c\""
  },
  "icon-weixinzhifu": {
    "content:before": "\"\\e631\""
  },
  "icon-wode": {
    "content:before": "\"\\e62b\""
  },
  "icon-pinglun": {
    "content:before": "\"\\e60d\""
  },
  "icon-fabu": {
    "content:before": "\"\\e643\""
  },
  "icon-gouwuche1": {
    "content:before": "\"\\e64c\""
  },
  "icon-iconfontxuanzhong4": {
    "content:before": "\"\\e623\""
  },
  "icon-2fanhui": {
    "content:before": "\"\\e601\""
  },
  "icon-huangguan": {
    "content:before": "\"\\e7eb\""
  },
  "icon-shanchu": {
    "content:before": "\"\\e64b\""
  },
  "icon-gantan": {
    "content:before": "\"\\e610\""
  },
  "icon-service": {
    "content:before": "\"\\e60b\""
  },
  "icon-guanzhu": {
    "content:before": "\"\\e612\""
  },
  "icon-sousuo": {
    "content:before": "\"\\e6e3\""
  },
  "icon-dianzan": {
    "content:before": "\"\\e611\""
  },
  "icon-guanzhu1": {
    "content:before": "\"\\e61d\""
  },
  "icon-shanchu1": {
    "content:before": "\"\\e6f0\""
  },
  "icon-you": {
    "content:before": "\"\\e63f\""
  },
  "icon-paizhao": {
    "content:before": "\"\\e690\""
  },
  "icon-gantan1": {
    "content:before": "\"\\e65f\""
  },
  "icon-icon_set_up": {
    "content:before": "\"\\e613\""
  },
  "icon-fanhuidingbu": {
    "content:before": "\"\\e65b\""
  },
  "icon-buoumaotubiao46": {
    "content:before": "\"\\e629\""
  },
  "icon-xiaoxi": {
    "content:before": "\"\\e67a\""
  },
  "icon-shouye": {
    "content:before": "\"\\e653\""
  },
  "icon-share": {
    "content:before": "\"\\e621\""
  },
  "icon-jia": {
    "content:before": "\"\\e626\""
  },
  "icon-home": {
    "content:before": "\"\\e62a\""
  },
  "icon-jia1": {
    "content:before": "\"\\e659\""
  },
  "icon-VIP": {
    "content:before": "\"\\e68e\""
  },
  "icon-xihuan": {
    "content:before": "\"\\e630\""
  },
  "icon-gouwuche": {
    "content:before": "\"\\e60c\""
  },
  "icon-top": {
    "content:before": "\"\\e65c\""
  },
  "icon-bottom": {
    "content:before": "\"\\e65d\""
  },
  "icon-finish": {
    "content:before": "\"\\e6ce\""
  },
  "icon-pinglun1": {
    "content:before": "\"\\e891\""
  },
  "icon-richscan_icon": {
    "content:before": "\"\\e661\""
  },
  "icon-wallet_icon": {
    "content:before": "\"\\e664\""
  },
  "icon-chaojihuati-chaojihuati": {
    "content:before": "\"\\e67b\""
  },
  "icon-dianhua": {
    "content:before": "\"\\e638\""
  },
  "icon-fenxiang": {
    "content:before": "\"\\e655\""
  },
  "icon-shijian": {
    "content:before": "\"\\e60e\""
  },
  "icon-gengduo": {
    "content:before": "\"\\e68f\""
  },
  "icon-yanjizhushou-shangchuan_houzhishexiangtou": {
    "content:before": "\"\\e62d\""
  },
  "icon-yanjizhushou-shangchuan_neicun": {
    "content:before": "\"\\e62e\""
  },
  "icon-tongxunlu": {
    "content:before": "\"\\e8fb\""
  },
  "icon-yiwen": {
    "content:before": "\"\\e600\""
  },
  "icon-dingwei": {
    "content:before": "\"\\e64d\""
  },
  "icon-gengduo1": {
    "content:before": "\"\\e6ed\""
  },
  "icon-dianchi": {
    "content:before": "\"\\e602\""
  },
  "icon-cpu": {
    "content:before": "\"\\e61f\""
  },
  "icon-paishe": {
    "content:before": "\"\\e62c\""
  },
  "icon-daishouhuo": {
    "content:before": "\"\\e614\""
  },
  "icon-paixu-jiangxu": {
    "content:before": "\"\\e75c\""
  },
  "icon-paixu-shengxu": {
    "content:before": "\"\\e75d\""
  },
  "icon-fenlei": {
    "content:before": "\"\\e615\""
  },
  "icon-faxian": {
    "content:before": "\"\\e63b\""
  },
  "icon-yinhangqia": {
    "content:before": "\"\\e65a\""
  },
  "icon-quanping": {
    "content:before": "\"\\e657\""
  },
  "icon-wangluo": {
    "content:before": "\"\\e834\""
  },
  "icon-fuzhi": {
    "content:before": "\"\\e67e\""
  },
  "icon-liulan": {
    "content:before": "\"\\e68b\""
  },
  "icon-fuzhi1": {
    "content:before": "\"\\e624\""
  },
  "icon-fenbianshuai": {
    "content:before": "\"\\e62f\""
  },
  "icon-paixupaihang": {
    "content:before": "\"\\e654\""
  },
  "icon-icon_cunchu": {
    "content:before": "\"\\e656\""
  },
  "scroll-row": {
    "width": 100,
    "whiteSpace": "nowrap"
  },
  "shadow-sm": {
    "boxShadow": "0 2upx 4upx rgba(114, 130, 138, 0.2)"
  },
  "shadow": {
    "boxShadow": "0 8upx 16upx rgba(114, 130, 138, 0.2)"
  },
  "shadow-lg": {
    "boxShadow": "0 16upx 48upx rgba(114, 130, 138, 0.2)"
  },
  "position-absolute": {
    "position": "absolute"
  },
  "position-fixed": {
    "position": "fixed"
  },
  "position-relative": {
    "position": "relative"
  },
  "left-0": {
    "left": 0
  },
  "top-0": {
    "top": 0
  },
  "bottom-0": {
    "bottom": 0
  },
  "right-0": {
    "right": 0
  },
  "w-100": {
    "width": 100
  },
  "w-50": {
    "width": 50
  },
  "h-100": {
    "height": "1250upx"
  },
  "h-50": {
    "width": "625upx"
  },
  "font": {
    "fontSize": "25upx"
  },
  "font-sm": {
    "fontSize": "22upx"
  },
  "font-md": {
    "fontSize": "30upx"
  },
  "font-lg": {
    "fontSize": "40upx"
  },
  "font-big": {
    "fontSize": "60upx"
  },
  "font-weight": {
    "fontWeight": "bold"
  },
  "font-weight-100": {
    "fontWeight": "100"
  },
  "line-h0": {
    "lineHeight": 0
  },
  "line-h": {
    "lineHeight": 1
  },
  "line-h-sm": {
    "lineHeight": 1.2
  },
  "line-h-md": {
    "lineHeight": 1.5
  },
  "line-h-lg": {
    "lineHeight": 2
  },
  "line-h-big": {
    "lineHeight": 3
  },
  "line-through": {
    "textDecoration": "line-through"
  },
  "text-center": {
    "textAlign": "center"
  },
  "text-left": {
    "textAlign": "left"
  },
  "text-right": {
    "textAlign": "right"
  },
  "row": {
    "boxSizing": "border-box",
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "wrap"
  },
  "col-1": {
    "width": "62.5upx"
  },
  "col-2": {
    "width": "125upx"
  },
  "col-3": {
    "width": "187.5upx"
  },
  "col-4": {
    "width": "250upx"
  },
  "col-5": {
    "width": "312.5upx"
  },
  "col-6": {
    "width": "375upx"
  },
  "col-7": {
    "width": "437.5upx"
  },
  "col-8": {
    "width": "500upx"
  },
  "col-9": {
    "width": "562.5upx"
  },
  "col-10": {
    "width": "625upx"
  },
  "col-11": {
    "width": "687.5upx"
  },
  "col-12": {
    "width": "750upx"
  },
  "span-1": {
    "width": 5
  },
  "span-2": {
    "width": 10
  },
  "span-3": {
    "width": 15
  },
  "span-4": {
    "width": 20
  },
  "span-5": {
    "width": 25
  },
  "span-6": {
    "width": 30
  },
  "span-7": {
    "width": 35
  },
  "span-8": {
    "width": 40
  },
  "span-9": {
    "width": 45
  },
  "span-10": {
    "width": 50
  },
  "span-11": {
    "width": 55
  },
  "span-12": {
    "width": 60
  },
  "span-13": {
    "width": 65
  },
  "span-14": {
    "width": 70
  },
  "span-15": {
    "width": 75
  },
  "span-16": {
    "width": 80
  },
  "span-17": {
    "width": 85
  },
  "span-18": {
    "width": 90
  },
  "span-19": {
    "width": 95
  },
  "span-20": {
    "width": 100
  },
  "span24-1": {
    "width": 4.17
  },
  "span24-2": {
    "width": 8.33
  },
  "span24-3": {
    "width": 12.5
  },
  "span24-4": {
    "width": 16.67
  },
  "span24-5": {
    "width": 20.83
  },
  "span24-6": {
    "width": 25
  },
  "span24-7": {
    "width": 29.17
  },
  "span24-8": {
    "width": 33.33
  },
  "span24-9": {
    "width": 37.5
  },
  "span24-10": {
    "width": 41.67
  },
  "span24-11": {
    "width": 45.83
  },
  "span24-12": {
    "width": 50
  },
  "span24-13": {
    "width": 54.17
  },
  "span24-14": {
    "width": 58.33
  },
  "span24-15": {
    "width": 62.5
  },
  "span24-16": {
    "width": 66.67
  },
  "span24-17": {
    "width": 70.83
  },
  "span24-18": {
    "width": 75
  },
  "span24-19": {
    "width": 79.17
  },
  "span24-20": {
    "width": 83.33
  },
  "span24-21": {
    "width": 87.5
  },
  "span24-22": {
    "width": 91.67
  },
  "span24-23": {
    "width": 95.83
  },
  "span24-24": {
    "width": 100
  },
  "d-flex": {
    "display": "flex"
  },
  "flex-1": {
    "flex": 1
  },
  "flex-column": {
    "flexDirection": "column"
  },
  "flex-row": {
    "flexDirection": "row"
  },
  "flex-wrap": {
    "flexWrap": "wrap"
  },
  "flex-nowrap": {
    "flexWrap": "nowrap"
  },
  "flex-shrink": {
    "flexShrink": 0
  },
  "j-start": {
    "justifyContent": "flex-start"
  },
  "j-center": {
    "justifyContent": "center"
  },
  "j-end": {
    "justifyContent": "flex-end"
  },
  "j-sb": {
    "justifyContent": "space-between"
  },
  "a-center": {
    "alignItems": "center"
  },
  "a-start": {
    "alignItems": "flex-start"
  },
  "a-end": {
    "alignItems": "flex-end"
  },
  "a-stretch": {
    "alignItems": "stretch"
  },
  "a-self-start": {
    "alignSelf": "flex-start"
  },
  "a-self-auto": {
    "alignSelf": "auto"
  },
  "a-self-end": {
    "alignSelf": "flex-end"
  },
  "a-self-stretch": {
    "alignSelf": "stretch"
  },
  "a-self-baseline": {
    "alignSelf": "baseline"
  },
  "border": {
    "borderWidth": "1upx",
    "borderStyle": "solid"
  },
  "border-top": {
    "borderTopWidth": "1upx",
    "borderTopStyle": "solid"
  },
  "border-right": {
    "borderRightWidth": "1upx",
    "borderRightStyle": "solid"
  },
  "border-bottom": {
    "borderBottomWidth": "1upx",
    "borderBottomStyle": "solid"
  },
  "border-left": {
    "borderLeftWidth": "1upx",
    "borderLeftStyle": "solid"
  },
  "border-0": {
    "borderWidth": 0
  },
  "border-top-0": {
    "borderTopWidth": 0
  },
  "border-right-0": {
    "borderRightWidth": 0
  },
  "border-bottom-0": {
    "borderBottomWidth": 0
  },
  "border-left-0": {
    "borderLeftWidth": 0
  },
  "border-light-secondary": {
    "borderColor": "#F1F1F1"
  },
  "rounded": {
    "borderRadius": "5upx"
  },
  "rounded-circle": {
    "borderRadius": 100
  },
  "rounded-0": {
    "borderRadius": 0
  },
  "bg-light-secondary": {
    "backgroundColor": "#F1F1F1"
  },
  "m-0": {
    "marginLeft": 0,
    "marginRight": 0,
    "marginTop": 0,
    "marginBottom": 0
  },
  "m": {
    "marginLeft": "5upx",
    "marginRight": "5upx",
    "marginTop": "5upx",
    "marginBottom": "5upx"
  },
  "m-1": {
    "marginLeft": "10upx",
    "marginRight": "10upx",
    "marginTop": "10upx",
    "marginBottom": "10upx"
  },
  "m-2": {
    "marginLeft": "20upx",
    "marginRight": "20upx",
    "marginTop": "20upx",
    "marginBottom": "20upx"
  },
  "m-3": {
    "marginLeft": "30upx",
    "marginRight": "30upx",
    "marginTop": "30upx",
    "marginBottom": "30upx"
  },
  "m-4": {
    "marginLeft": "40upx",
    "marginRight": "40upx",
    "marginTop": "40upx",
    "marginBottom": "40upx"
  },
  "m-5": {
    "marginLeft": "50upx",
    "marginRight": "50upx",
    "marginTop": "50upx",
    "marginBottom": "50upx"
  },
  "mx-0": {
    "marginLeft": 0,
    "marginRight": 0
  },
  "mx": {
    "marginLeft": "5upx",
    "marginRight": "5upx"
  },
  "mx-1": {
    "marginLeft": "10upx",
    "marginRight": "10upx"
  },
  "mx-2": {
    "marginLeft": "20upx",
    "marginRight": "20upx"
  },
  "mx-3": {
    "marginLeft": "30upx",
    "marginRight": "30upx"
  },
  "mx-4": {
    "marginLeft": "40upx",
    "marginRight": "40upx"
  },
  "mx-5": {
    "marginLeft": "50upx",
    "marginRight": "50upx"
  },
  "my-0": {
    "marginTop": 0,
    "marginBottom": 0
  },
  "my": {
    "marginTop": "5upx",
    "marginBottom": "5upx"
  },
  "my-1": {
    "marginTop": "10upx",
    "marginBottom": "10upx"
  },
  "my-2": {
    "marginTop": "20upx",
    "marginBottom": "20upx"
  },
  "my-3": {
    "marginTop": "30upx",
    "marginBottom": "30upx"
  },
  "my-4": {
    "marginTop": "40upx",
    "marginBottom": "40upx"
  },
  "my-5": {
    "marginTop": "50upx",
    "marginBottom": "50upx"
  },
  "mt-0": {
    "marginTop": 0
  },
  "mt": {
    "marginTop": "5upx"
  },
  "mt-1": {
    "marginTop": "10upx"
  },
  "mt-2": {
    "marginTop": "20upx"
  },
  "mt-3": {
    "marginTop": "30upx"
  },
  "mt-4": {
    "marginTop": "40upx"
  },
  "mt-5": {
    "marginTop": "50upx"
  },
  "mb-0": {
    "marginBottom": 0
  },
  "mb": {
    "marginBottom": "5upx"
  },
  "mb-1": {
    "marginBottom": "10upx"
  },
  "mb-2": {
    "marginBottom": "20upx"
  },
  "mb-3": {
    "marginBottom": "30upx"
  },
  "mb-4": {
    "marginBottom": "40upx"
  },
  "mb-5": {
    "marginBottom": "50upx"
  },
  "ml-0": {
    "marginLeft": 0
  },
  "ml": {
    "marginLeft": "5upx"
  },
  "ml-1": {
    "marginLeft": "10upx"
  },
  "ml-2": {
    "marginLeft": "20upx"
  },
  "ml-3": {
    "marginLeft": "30upx"
  },
  "ml-4": {
    "marginLeft": "40upx"
  },
  "ml-5": {
    "marginLeft": "50upx"
  },
  "mr-0": {
    "marginRight": 0
  },
  "mr": {
    "marginRight": "5upx"
  },
  "mr-1": {
    "marginRight": "10upx"
  },
  "mr-2": {
    "marginRight": "20upx"
  },
  "mr-3": {
    "marginRight": "30upx"
  },
  "mr-4": {
    "marginRight": "40upx"
  },
  "mr-5": {
    "marginRight": "50upx"
  },
  "p-0": {
    "paddingLeft": 0,
    "paddingRight": 0,
    "paddingTop": 0,
    "paddingBottom": 0
  },
  "p": {
    "paddingLeft": "5upx",
    "paddingRight": "5upx",
    "paddingTop": "5upx",
    "paddingBottom": "5upx"
  },
  "p-1": {
    "paddingLeft": "10upx",
    "paddingRight": "10upx",
    "paddingTop": "10upx",
    "paddingBottom": "10upx"
  },
  "p-2": {
    "paddingLeft": "20upx",
    "paddingRight": "20upx",
    "paddingTop": "20upx",
    "paddingBottom": "20upx"
  },
  "p-3": {
    "paddingLeft": "30upx",
    "paddingRight": "30upx",
    "paddingTop": "30upx",
    "paddingBottom": "30upx"
  },
  "p-4": {
    "paddingLeft": "40upx",
    "paddingRight": "40upx",
    "paddingTop": "40upx",
    "paddingBottom": "40upx"
  },
  "p-5": {
    "paddingLeft": "50upx",
    "paddingRight": "50upx",
    "paddingTop": "50upx",
    "paddingBottom": "50upx"
  },
  "px-0": {
    "paddingLeft": 0,
    "paddingRight": 0
  },
  "px": {
    "paddingLeft": "5upx",
    "paddingRight": "5upx"
  },
  "px-1": {
    "paddingLeft": "10upx",
    "paddingRight": "10upx"
  },
  "px-2": {
    "paddingLeft": "20upx",
    "paddingRight": "20upx"
  },
  "px-3": {
    "paddingLeft": "30upx",
    "paddingRight": "30upx"
  },
  "px-4": {
    "paddingLeft": "40upx",
    "paddingRight": "40upx"
  },
  "px-5": {
    "paddingLeft": "50upx",
    "paddingRight": "50upx"
  },
  "py-0": {
    "paddingTop": 0,
    "paddingBottom": 0
  },
  "py": {
    "paddingTop": "5upx",
    "paddingBottom": "5upx"
  },
  "py-1": {
    "paddingTop": "10upx",
    "paddingBottom": "10upx"
  },
  "py-2": {
    "paddingTop": "20upx",
    "paddingBottom": "20upx"
  },
  "py-3": {
    "paddingTop": "30upx",
    "paddingBottom": "30upx"
  },
  "py-4": {
    "paddingTop": "40upx",
    "paddingBottom": "40upx"
  },
  "py-5": {
    "paddingTop": "50upx",
    "paddingBottom": "50upx"
  },
  "pt-0": {
    "paddingTop": 0
  },
  "pt": {
    "paddingTop": "5upx"
  },
  "pt-1": {
    "paddingTop": "10upx"
  },
  "pt-2": {
    "paddingTop": "20upx"
  },
  "pt-3": {
    "paddingTop": "30upx"
  },
  "pt-4": {
    "paddingTop": "40upx"
  },
  "pt-5": {
    "paddingTop": "50upx"
  },
  "pb-0": {
    "paddingBottom": 0
  },
  "pb": {
    "paddingBottom": "5upx"
  },
  "pb-1": {
    "paddingBottom": "10upx"
  },
  "pb-2": {
    "paddingBottom": "20upx"
  },
  "pb-3": {
    "paddingBottom": "30upx"
  },
  "pb-4": {
    "paddingBottom": "40upx"
  },
  "pb-5": {
    "paddingBottom": "50upx"
  },
  "pl-0": {
    "paddingLeft": 0
  },
  "pl": {
    "paddingLeft": "5upx"
  },
  "pl-1": {
    "paddingLeft": "10upx"
  },
  "pl-2": {
    "paddingLeft": "20upx"
  },
  "pl-3": {
    "paddingLeft": "30upx"
  },
  "pl-4": {
    "paddingLeft": "40upx"
  },
  "pl-5": {
    "paddingLeft": "50upx"
  },
  "pr-0": {
    "paddingRight": 0
  },
  "pr": {
    "paddingRight": "5upx"
  },
  "pr-1": {
    "paddingRight": "10upx"
  },
  "pr-2": {
    "paddingRight": "20upx"
  },
  "pr-3": {
    "paddingRight": "30upx"
  },
  "pr-4": {
    "paddingRight": "40upx"
  },
  "pr-5": {
    "paddingRight": "50upx"
  },
  "main-bg-color": {
    "backgroundColor": "#FD6801"
  },
  "main-bg-hover-color": {
    "backgroundColor": "rgba(253,104,1,0.85)"
  },
  "main-text-color": {
    "color": "#FD6801"
  },
  "main-border-color": {
    "borderColor": "#F1F1F1"
  },
  "@VERSION": 2
}

/***/ }),
/* 4 */
/*!*******************************************************************************!*\
  !*** D:/test/uniapp-test/Imitated-Mi-Mall/pages/index/index.nvue?mpType=page ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.nvue?vue&type=template&id=7b909402&mpType=page */ 5);\n/* harmony import */ var _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.nvue?vue&type=script&lang=js&mpType=page */ 7);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../softwaresrc/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./index.nvue?vue&type=style&index=0&lang=css&mpType=page */ 9).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./index.nvue?vue&type=style&index=0&lang=css&mpType=page */ 9).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"53fcc7a1\",\n  false,\n  _index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/index/index.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEg7QUFDOUg7QUFDcUU7QUFDTDtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGlFQUEwRDtBQUM5RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsaUVBQTBEO0FBQ25IOztBQUVBOztBQUVBO0FBQ2tMO0FBQ2xMLGdCQUFnQix5TEFBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdiOTA5NDAyJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL2luZGV4Lm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL3NvZnR3YXJlc3JjL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCI1M2ZjYzdhMVwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9pbmRleC9pbmRleC5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!*************************************************************************************************************!*\
  !*** D:/test/uniapp-test/Imitated-Mi-Mall/pages/index/index.nvue?vue&type=template&id=7b909402&mpType=page ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../softwaresrc/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../softwaresrc/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../softwaresrc/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../softwaresrc/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../softwaresrc/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=template&id=7b909402&mpType=page */ 6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 6 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/test/uniapp-test/Imitated-Mi-Mall/pages/index/index.nvue?vue&type=template&id=7b909402&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: false,
        enableBackToTop: true,
        bubble: "true"
      }
    },
    [
      _c(
        "div",
        [
          _c(
            "u-slider",
            {
              staticClass: ["slider"],
              attrs: { autoPlay: true, interval: 3000 }
            },
            [
              _c(
                "div",
                { staticStyle: { position: "relative" } },
                [
                  _c("u-image", {
                    staticClass: ["image"],
                    attrs: {
                      resize: "cover",
                      src: "../../static/images/demo/demo4.jpg"
                    }
                  })
                ],
                1
              ),
              _c(
                "div",
                { staticStyle: { position: "relative" } },
                [
                  _c("u-image", {
                    staticClass: ["image"],
                    attrs: {
                      resize: "cover",
                      src: "../../static/images/demo/demo4.jpg"
                    }
                  })
                ],
                1
              ),
              _c(
                "div",
                { staticStyle: { position: "relative" } },
                [
                  _c("u-image", {
                    staticClass: ["image"],
                    attrs: {
                      resize: "cover",
                      src: "../../static/images/demo/demo4.jpg"
                    }
                  })
                ],
                1
              ),
              _c("indicator", { staticClass: ["indicator"] })
            ]
          )
        ],
        1
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 7 */
/*!*******************************************************************************************************!*\
  !*** D:/test/uniapp-test/Imitated-Mi-Mall/pages/index/index.nvue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../softwaresrc/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../softwaresrc/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../softwaresrc/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=script&lang=js&mpType=page */ 8);\n/* harmony import */ var _softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZkLENBQWdCLHlmQUFHLEVBQUMiLCJmaWxlIjoiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vc29mdHdhcmVzcmMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTAhLi4vLi4vLi4vLi4vLi4vc29mdHdhcmVzcmMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi9zb2Z0d2FyZXNyYy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vc29mdHdhcmVzcmMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTAhLi4vLi4vLi4vLi4vLi4vc29mdHdhcmVzcmMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi9zb2Z0d2FyZXNyYy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/test/uniapp-test/Imitated-Mi-Mall/pages/index/index.nvue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {};\n\n\n  },\n  created: function created() {\n\n  },\n  methods: {} };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkE7QUFDQSxNQURBLGtCQUNBO0FBQ0E7OztBQUdBLEdBTEE7QUFNQSxTQU5BLHFCQU1BOztBQUVBLEdBUkE7QUFTQSxhQVRBLEUiLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8ZGl2PlxyXG5cclxuXHRcdDwhLS0g6L2u5pKt5Zu+57uE5Lu2IC0tPlxyXG5cdFx0PHNsaWRlciA6YXV0by1wbGF5PVwidHJ1ZVwiIDppbnRlcnZhbD1cIjMwMDBcIiBjbGFzcz1cInNsaWRlclwiPlxyXG5cdFx0XHQ8ZGl2IHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlO1wiPlxyXG5cdFx0XHRcdDxpbWFnZSBjbGFzcz1cImltYWdlXCIgcmVzaXplPVwiY292ZXJcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2RlbW8vZGVtbzQuanBnXCI+PC9pbWFnZT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgc3R5bGU9XCJwb3NpdGlvbjogcmVsYXRpdmU7XCI+XHJcblx0XHRcdFx0PGltYWdlIGNsYXNzPVwiaW1hZ2VcIiByZXNpemU9XCJjb3ZlclwiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvZGVtby9kZW1vNC5qcGdcIj48L2ltYWdlPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBzdHlsZT1cInBvc2l0aW9uOiByZWxhdGl2ZTtcIj5cclxuXHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJpbWFnZVwiIHJlc2l6ZT1cImNvdmVyXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9kZW1vL2RlbW80LmpwZ1wiPjwvaW1hZ2U+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8aW5kaWNhdG9yIGNsYXNzPVwiaW5kaWNhdG9yXCI+PC9pbmRpY2F0b3I+XHJcblx0XHQ8L3NsaWRlcj5cclxuXHRcdFxyXG5cdDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNyZWF0ZWQoKSB7XHJcblxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6e1xyXG5cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4uc2xpZGVyLC5pbWFnZXtcclxuXHR3aWR0aDogNzUwcnB4O1xyXG5cdGhlaWdodDogMzAwcnB4O1xyXG5cdFxyXG59XHJcbi5pbmRpY2F0b3J7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdGJvdHRvbTogMDtcclxuXHR3aWR0aDogMTUwcnB4O1xyXG5cdGhlaWdodDogODBycHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwKTtcclxuXHRpdGVtLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XHJcblx0aXRlbS1zZWxlY3RlZC1jb2xvcjojZmZmO1xyXG5cdFxyXG59XHJcbjwvc3R5bGU+XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!***************************************************************************************************************!*\
  !*** D:/test/uniapp-test/Imitated-Mi-Mall/pages/index/index.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../softwaresrc/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../softwaresrc/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../../softwaresrc/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../../softwaresrc/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!../../../../../softwaresrc/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=style&index=0&lang=css&mpType=page */ 10);
/* harmony import */ var _softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_softwaresrc_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 10 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/test/uniapp-test/Imitated-Mi-Mall/pages/index/index.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "slider": {
    "width": "750rpx",
    "height": "300rpx"
  },
  "image": {
    "width": "750rpx",
    "height": "300rpx"
  },
  "indicator": {
    "position": "absolute",
    "right": 0,
    "bottom": 0,
    "width": "150rpx",
    "height": "80rpx",
    "backgroundColor": "rgba(0,0,0,0)",
    "itemColor": "rgba(255,255,255,0.5)",
    "itemSelectedColor": "#ffffff"
  },
  "@VERSION": 2
}

/***/ }),
/* 11 */,
/* 12 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ]);