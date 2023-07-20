"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Navbar/RightContent/UserMenu.tsx":
/*!*********************************************************!*\
  !*** ./src/components/Navbar/RightContent/UserMenu.tsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react_icons_vsc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/vsc */ \"./node_modules/react-icons/vsc/index.esm.js\");\n/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/io5 */ \"./node_modules/react-icons/io5/index.esm.js\");\n/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/cg */ \"./node_modules/react-icons/cg/index.esm.js\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var _src_firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/src/firebase/clientApp */ \"./src/firebase/clientApp.ts\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\n/* harmony import */ var _src_atoms_authModalAtom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/src/atoms/authModalAtom */ \"./src/atoms/authModalAtom.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst UserMenu = (param)=>{\n    let { user } = param;\n    var _user, _user_email;\n    _s();\n    const setAuthModalState = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useSetRecoilState)(_src_atoms_authModalAtom__WEBPACK_IMPORTED_MODULE_5__.authModalState);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Menu, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.MenuButton, {\n                cursor: \"pointer\",\n                padding: \"0px 6px\",\n                borderRadius: \"4px\",\n                _hover: {\n                    outline: \"1px solid\",\n                    outlineColor: \"gray.200\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                    align: \"center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                            align: \"center\",\n                            children: user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Icon, {\n                                        fontSize: 24,\n                                        mr: 1,\n                                        color: \"gray.300\",\n                                        as: react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaRedditSquare\n                                    }, void 0, false, {\n                                        fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Navbar/RightContent/UserMenu.tsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 21\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                                        direction: \"column\",\n                                        display: {\n                                            base: \"none\",\n                                            lg: \"flex\"\n                                        },\n                                        fontSize: \"8pt\",\n                                        align: \"flex-start\",\n                                        mr: 8,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                                fontWeight: 700,\n                                                children: ((_user = user) === null || _user === void 0 ? void 0 : _user.displayName) || ((_user_email = user.email) === null || _user_email === void 0 ? void 0 : _user_email.split(\"@\")[0])\n                                            }, void 0, false, {\n                                                fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Navbar/RightContent/UserMenu.tsx\",\n                                                lineNumber: 46,\n                                                columnNumber: 25\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Icon, {\n                                                        as: react_icons_io5__WEBPACK_IMPORTED_MODULE_8__.IoSparkles,\n                                                        color: \"brand.100\",\n                                                        mr: 1\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Navbar/RightContent/UserMenu.tsx\",\n                                                        lineNumber: 50,\n                                                        columnNumber: 29\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                                        color: \"gray.400\",\n                                                        children: \"1 karma\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Navbar/RightContent/UserMenu.tsx\",\n                                                        lineNumber: 51,\n                                                        columnNumber: 29\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Navbar/RightContent/UserMenu.tsx\",\n                                                lineNumber: 49,\n                                                columnNumber: 25\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Navbar/RightContent/UserMenu.tsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 21\n                                    }, undefined)\n                                ]\n                            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Icon, {\n                                fontSize: 24,\n                                mr: 1,\n                                color: \"gray.400\",\n                                as: react_icons_vsc__WEBPACK_IMPORTED_MODULE_9__.VscAccount\n                            }, void 0, false, {\n                                fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Navbar/RightContent/UserMenu.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Navbar/RightContent/UserMenu.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_10__.ChevronDownIcon, {}, void 0, false, {\n                            fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Navbar/RightContent/UserMenu.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Navbar/RightContent/UserMenu.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Navbar/RightContent/UserMenu.tsx\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.MenuList, {\n                children: user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.MenuItem, {\n                            fontSize: \"10pt\",\n                            fontWeight: 700,\n                            _hover: {\n                                bg: \"blue.500\",\n                                color: \"white\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Icon, {\n                                        fontSize: 20,\n                                        mr: 2,\n                                        as: react_icons_cg__WEBPACK_IMPORTED_MODULE_11__.CgProfile\n                                    }, void 0, false, {\n                                        fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Navbar/RightContent/UserMenu.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    \"Profile\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Navbar/RightContent/UserMenu.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 21\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Navbar/RightContent/UserMenu.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.MenuDivider, {}, void 0, false, {\n                            fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Navbar/RightContent/UserMenu.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.MenuItem, {\n                            fontSize: \"10pt\",\n                            fontWeight: 700,\n                            _hover: {\n                                bg: \"blue.500\",\n                                color: \"white\"\n                            },\n                            onClick: ()=>(0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signOut)(_src_firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__.auth),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Icon, {\n                                        fontSize: 20,\n                                        mr: 2,\n                                        as: react_icons_md__WEBPACK_IMPORTED_MODULE_12__.MdOutlineLogin\n                                    }, void 0, false, {\n                                        fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Navbar/RightContent/UserMenu.tsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    \"Log Out\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Navbar/RightContent/UserMenu.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 21\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Navbar/RightContent/UserMenu.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.MenuItem, {\n                        fontSize: \"10pt\",\n                        fontWeight: 700,\n                        _hover: {\n                            bg: \"blue.500\",\n                            color: \"white\"\n                        },\n                        onClick: ()=>setAuthModalState({\n                                open: true,\n                                view: \"login\"\n                            }),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Icon, {\n                                    fontSize: 20,\n                                    mr: 2,\n                                    as: react_icons_md__WEBPACK_IMPORTED_MODULE_12__.MdOutlineLogin\n                                }, void 0, false, {\n                                    fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Navbar/RightContent/UserMenu.tsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 25\n                                }, undefined),\n                                \"Log In / Sign Up\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Navbar/RightContent/UserMenu.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Navbar/RightContent/UserMenu.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false)\n            }, void 0, false, {\n                fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Navbar/RightContent/UserMenu.tsx\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Navbar/RightContent/UserMenu.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(UserMenu, \"IBreK6mrnMirt8NXZK/GmFJD8MA=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_4__.useSetRecoilState\n    ];\n});\n_c = UserMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserMenu);\nvar _c;\n$RefreshReg$(_c, \"UserMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZiYXIvUmlnaHRDb250ZW50L1VzZXJNZW51LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDNEQ7QUFDakU7QUFDcEI7QUFDcUI7QUFDSDtBQUNBO0FBQ0Y7QUFDSztBQUNDO0FBQ0w7QUFDZ0I7QUFPM0QsTUFBTW1CLFdBQW1DO1FBQUMsRUFBRUMsSUFBSSxFQUFFO1FBNEJyQkEsT0FBcUJBOztJQTNCOUMsTUFBTUMsb0JBQW9CSix5REFBaUJBLENBQUNDLG9FQUFjQTtJQUUxRCxxQkFDQSw4REFBQ2pCLGtEQUFJQTs7MEJBQ0QsOERBQUNDLHdEQUFVQTtnQkFDWG9CLFFBQU87Z0JBQ1BDLFNBQVE7Z0JBQ1JDLGNBQWE7Z0JBQ1pDLFFBQVE7b0JBQUVDLFNBQVM7b0JBQWFDLGNBQWM7Z0JBQVc7MEJBRXRELDRFQUFDckIsa0RBQUlBO29CQUFDc0IsT0FBTTs7c0NBQ1IsOERBQUN0QixrREFBSUE7NEJBQUNzQixPQUFNO3NDQUNQUixxQkFDRDs7a0RBQ0EsOERBQUNmLGtEQUFJQTt3Q0FDTHdCLFVBQVU7d0NBQ1ZDLElBQUk7d0NBQ0pDLE9BQU07d0NBQ05DLElBQUlyQiwwREFBY0E7Ozs7OztrREFDbEIsOERBQUNMLGtEQUFJQTt3Q0FDRDJCLFdBQVU7d0NBQ1ZDLFNBQVM7NENBQUVDLE1BQU07NENBQVFDLElBQUk7d0NBQU87d0NBQ3BDUCxVQUFTO3dDQUNURCxPQUFNO3dDQUNORSxJQUFJOzswREFFSiw4REFBQ3RCLGtEQUFJQTtnREFBQzZCLFlBQVk7MERBQ2JqQixFQUFBQSxRQUFBQSxrQkFBQUEsNEJBQUFBLE1BQU1rQixXQUFXLE9BQUlsQixjQUFBQSxLQUFLbUIsS0FBSyxjQUFWbkIsa0NBQUFBLFlBQVlvQixLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7Ozs7OzswREFFbkQsOERBQUNsQyxrREFBSUE7O2tFQUNELDhEQUFDRCxrREFBSUE7d0RBQUMyQixJQUFJbkIsdURBQVVBO3dEQUFFa0IsT0FBTTt3REFBWUQsSUFBSTs7Ozs7O2tFQUM1Qyw4REFBQ3RCLGtEQUFJQTt3REFBQ3VCLE9BQU07a0VBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkRBSzNCLDhEQUFDMUIsa0RBQUlBO2dDQUFDd0IsVUFBVTtnQ0FBSUMsSUFBSTtnQ0FBR0MsT0FBTTtnQ0FBV0MsSUFBSXBCLHVEQUFVQTs7Ozs7Ozs7Ozs7c0NBR3RFLDhEQUFDWiw4REFBZUE7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR2hCLDhEQUFDRyxzREFBUUE7MEJBQ0ppQixxQkFDRzs7c0NBQ0EsOERBQUNoQixzREFBUUE7NEJBQ2J5QixVQUFTOzRCQUNUUSxZQUFZOzRCQUNaWixRQUFRO2dDQUFFZ0IsSUFBSTtnQ0FBWVYsT0FBTzs0QkFBTztzQ0FFcEMsNEVBQUN6QixrREFBSUE7O2tEQUNELDhEQUFDRCxrREFBSUE7d0NBQUN3QixVQUFVO3dDQUFJQyxJQUFJO3dDQUFHRSxJQUFJbEIsc0RBQVNBOzs7Ozs7b0NBQUk7Ozs7Ozs7Ozs7OztzQ0FJcEQsOERBQUNQLHlEQUFXQTs7Ozs7c0NBQ1osOERBQUNILHNEQUFRQTs0QkFDVHlCLFVBQVM7NEJBQ1RRLFlBQVk7NEJBQ1paLFFBQVE7Z0NBQUVnQixJQUFJO2dDQUFZVixPQUFPOzRCQUFPOzRCQUN4Q1csU0FBUyxJQUFNakMsc0RBQU9BLENBQUNPLHlEQUFJQTtzQ0FFdkIsNEVBQUNWLGtEQUFJQTs7a0RBQ0QsOERBQUNELGtEQUFJQTt3Q0FBQ3dCLFVBQVU7d0NBQUlDLElBQUk7d0NBQUdFLElBQUlqQiwyREFBY0E7Ozs7OztvQ0FBSTs7Ozs7Ozs7Ozs7OztpREFNckQ7OEJBQ0EsNEVBQUNYLHNEQUFRQTt3QkFDYnlCLFVBQVM7d0JBQ1RRLFlBQVk7d0JBQ1paLFFBQVE7NEJBQUVnQixJQUFJOzRCQUFZVixPQUFPO3dCQUFPO3dCQUN4Q1csU0FBUyxJQUFNckIsa0JBQWtCO2dDQUFFc0IsTUFBTTtnQ0FBTUMsTUFBTTs0QkFBTztrQ0FFeEQsNEVBQUN0QyxrREFBSUE7OzhDQUNELDhEQUFDRCxrREFBSUE7b0NBQUN3QixVQUFVO29DQUFJQyxJQUFJO29DQUFHRSxJQUFJakIsMkRBQWNBOzs7Ozs7Z0NBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVd6RTtHQXpGTUk7O1FBQ3dCRixxREFBaUJBOzs7S0FEekNFO0FBMEZOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL05hdmJhci9SaWdodENvbnRlbnQvVXNlck1lbnUudHN4PzYxMTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hldnJvbkRvd25JY29uIH0gZnJvbSAnQGNoYWtyYS11aS9pY29ucyc7XG5pbXBvcnQgeyBNZW51LCBNZW51QnV0dG9uLCBCdXR0b24sIE1lbnVMaXN0LCBNZW51SXRlbSwgSWNvbiwgRmxleCwgTWVudURpdmlkZXIsIFRleHQgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7IFVzZXIsIHNpZ25PdXQgfSBmcm9tICdmaXJlYmFzZS9hdXRoJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGYVJlZGRpdFNxdWFyZSB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiXG5pbXBvcnQgeyBWc2NBY2NvdW50IH0gZnJvbSBcInJlYWN0LWljb25zL3ZzY1wiXG5pbXBvcnQgeyBJb1NwYXJrbGVzIH0gZnJvbSBcInJlYWN0LWljb25zL2lvNVwiXG5pbXBvcnQgeyBDZ1Byb2ZpbGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvY2dcIlxuaW1wb3J0IHsgTWRPdXRsaW5lTG9naW4gfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIlxuaW1wb3J0IHsgYXV0aCB9IGZyb20gJ0Avc3JjL2ZpcmViYXNlL2NsaWVudEFwcCc7XG5pbXBvcnQgeyB1c2VTZXRSZWNvaWxTdGF0ZSB9IGZyb20gJ3JlY29pbCc7XG5pbXBvcnQgeyBhdXRoTW9kYWxTdGF0ZSB9IGZyb20gJ0Avc3JjL2F0b21zL2F1dGhNb2RhbEF0b20nO1xuXG5cbnR5cGUgVXNlck1lbnVQcm9wcyA9IHtcbiAgICB1c2VyPzogVXNlciB8IG51bGwsXG59O1xuXG5jb25zdCBVc2VyTWVudTpSZWFjdC5GQzxVc2VyTWVudVByb3BzPiA9ICh7IHVzZXIgfSkgPT4ge1xuICAgIGNvbnN0IHNldEF1dGhNb2RhbFN0YXRlID0gdXNlU2V0UmVjb2lsU3RhdGUoYXV0aE1vZGFsU3RhdGUpO1xuXG4gICAgcmV0dXJuIChcbiAgICA8TWVudT5cbiAgICAgICAgPE1lbnVCdXR0b24gXG4gICAgICAgIGN1cnNvcj1cInBvaW50ZXJcIlxuICAgICAgICBwYWRkaW5nPVwiMHB4IDZweFwiXG4gICAgICAgIGJvcmRlclJhZGl1cz1cIjRweFwiXG4gICAgICAgICBfaG92ZXI9e3sgb3V0bGluZTogXCIxcHggc29saWRcIiwgb3V0bGluZUNvbG9yOiBcImdyYXkuMjAwXCIgfX1cbiAgICAgICAgID5cbiAgICAgICAgICAgIDxGbGV4IGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPEZsZXggYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAge3VzZXIgPyAoXG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uIFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT17MjR9IFxuICAgICAgICAgICAgICAgICAgICBtcj17MX0gXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiZ3JheS4zMDBcIlxuICAgICAgICAgICAgICAgICAgICBhcz17RmFSZWRkaXRTcXVhcmV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheT17eyBiYXNlOiBcIm5vbmVcIiwgbGc6IFwiZmxleFwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cIjhwdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImZsZXgtc3RhcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbXI9ezh9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGZvbnRXZWlnaHQ9ezcwMH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXI/LmRpc3BsYXlOYW1lIHx8IHVzZXIuZW1haWw/LnNwbGl0KFwiQFwiKVswXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGFzPXtJb1NwYXJrbGVzfSBjb2xvcj1cImJyYW5kLjEwMFwiIG1yPXsxfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwiZ3JheS40MDBcIj4xIGthcm1hPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICApOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBmb250U2l6ZT17MjR9IG1yPXsxfSBjb2xvcj1cImdyYXkuNDAwXCIgYXM9e1ZzY0FjY291bnR9IC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgPENoZXZyb25Eb3duSWNvbi8+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvTWVudUJ1dHRvbj5cbiAgICAgICAgICAgIDxNZW51TGlzdD5cbiAgICAgICAgICAgICAgICB7dXNlciA/IChcbiAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIFxuICAgICAgICAgICAgICAgIGZvbnRTaXplPScxMHB0JyBcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0PXs3MDB9XG4gICAgICAgICAgICAgICAgX2hvdmVyPXt7IGJnOiBcImJsdWUuNTAwXCIsIGNvbG9yOiBcIndoaXRlXCJ9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEZsZXg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBmb250U2l6ZT17MjB9IG1yPXsyfSBhcz17Q2dQcm9maWxlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvZmlsZVxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudURpdmlkZXIgLz5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gXG4gICAgICAgICAgICAgICAgZm9udFNpemU9JzEwcHQnIFxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9ezcwMH1cbiAgICAgICAgICAgICAgICBfaG92ZXI9e3sgYmc6IFwiYmx1ZS41MDBcIiwgY29sb3I6IFwid2hpdGVcIn19XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2lnbk91dChhdXRoKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxGbGV4PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gZm9udFNpemU9ezIwfSBtcj17Mn0gYXM9e01kT3V0bGluZUxvZ2lufSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nIE91dFxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKTooXG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBcbiAgICAgICAgICAgICAgICBmb250U2l6ZT0nMTBwdCcgXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodD17NzAwfVxuICAgICAgICAgICAgICAgIF9ob3Zlcj17eyBiZzogXCJibHVlLjUwMFwiLCBjb2xvcjogXCJ3aGl0ZVwifX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBdXRoTW9kYWxTdGF0ZSh7IG9wZW46IHRydWUsIHZpZXc6IFwibG9naW5cIn0pfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEZsZXg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBmb250U2l6ZT17MjB9IG1yPXsyfSBhcz17TWRPdXRsaW5lTG9naW59IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cgSW4gLyBTaWduIFVwXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgPC9NZW51TGlzdD5cbiAgICA8L01lbnU+XG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgVXNlck1lbnU7Il0sIm5hbWVzIjpbIkNoZXZyb25Eb3duSWNvbiIsIk1lbnUiLCJNZW51QnV0dG9uIiwiTWVudUxpc3QiLCJNZW51SXRlbSIsIkljb24iLCJGbGV4IiwiTWVudURpdmlkZXIiLCJUZXh0Iiwic2lnbk91dCIsIlJlYWN0IiwiRmFSZWRkaXRTcXVhcmUiLCJWc2NBY2NvdW50IiwiSW9TcGFya2xlcyIsIkNnUHJvZmlsZSIsIk1kT3V0bGluZUxvZ2luIiwiYXV0aCIsInVzZVNldFJlY29pbFN0YXRlIiwiYXV0aE1vZGFsU3RhdGUiLCJVc2VyTWVudSIsInVzZXIiLCJzZXRBdXRoTW9kYWxTdGF0ZSIsImN1cnNvciIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJfaG92ZXIiLCJvdXRsaW5lIiwib3V0bGluZUNvbG9yIiwiYWxpZ24iLCJmb250U2l6ZSIsIm1yIiwiY29sb3IiLCJhcyIsImRpcmVjdGlvbiIsImRpc3BsYXkiLCJiYXNlIiwibGciLCJmb250V2VpZ2h0IiwiZGlzcGxheU5hbWUiLCJlbWFpbCIsInNwbGl0IiwiYmciLCJvbkNsaWNrIiwib3BlbiIsInZpZXciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Navbar/RightContent/UserMenu.tsx\n"));

/***/ })

});