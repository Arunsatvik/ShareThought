"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/r/[communityId]/submit",{

/***/ "./src/components/Posts/NewPostForm.tsx":
/*!**********************************************!*\
  !*** ./src/components/Posts/NewPostForm.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/io5 */ \"./node_modules/react-icons/io5/index.esm.js\");\n/* harmony import */ var _TabItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TabItem */ \"./src/components/Posts/TabItem.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst formTabs = [\n    {\n        title: \"Post\",\n        icon: react_icons_io5__WEBPACK_IMPORTED_MODULE_4__.IoDocumentText\n    },\n    {\n        title: \"Images & Video\",\n        icon: react_icons_io5__WEBPACK_IMPORTED_MODULE_4__.IoImageOutline\n    },\n    {\n        title: \"Link\",\n        icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsLink45Deg\n    },\n    {\n        title: \"Poll\",\n        icon: react_icons_bi__WEBPACK_IMPORTED_MODULE_6__.BiPoll\n    },\n    {\n        title: \"Talk\",\n        icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsMic\n    }\n];\nconst NewPostForm = ()=>{\n    _s();\n    const [selectedTab, setSelectedTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(formTabs[0].title);\n    const [textInputs, setTextInputs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        title: \"\",\n        body: \"\"\n    });\n    const [selectedFile, setSelectedFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const selectFileRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    //   const setPostItems = useSetRecoilState(postState);\n    const handleCreatePost = async ()=>{};\n    const onSelectImage = ()=>{};\n    const onTextChange = ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n        direction: \"column\",\n        bg: \"white\",\n        borderRadius: 4,\n        mt: 2,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n                width: \"100%\",\n                children: formTabs.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TabItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        item: item,\n                        selected: item.title === selectedTab,\n                        setSelectedTab: setSelectedTab\n                    }, index, false, {\n                        fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Posts/NewPostForm.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 17\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Posts/NewPostForm.tsx\",\n                lineNumber: 89,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {}, void 0, false, {\n                fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Posts/NewPostForm.tsx\",\n                lineNumber: 99,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Posts/NewPostForm.tsx\",\n        lineNumber: 88,\n        columnNumber: 9\n    }, undefined);\n};\n_s(NewPostForm, \"pFH0nqhZlTivkrp8Q6uZF7xK+u4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = NewPostForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewPostForm);\nvar _c;\n$RefreshReg$(_c, \"NewPostForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qb3N0cy9OZXdQb3N0Rm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBMkQ7QUFVakM7QUFTYztBQUNBO0FBQ1k7QUFDYTtBQVFqQztBQVFoQyxNQUFNVyxXQUFzQjtJQUN4QjtRQUNFQyxPQUFPO1FBQ1BDLE1BQU1MLDJEQUFjQTtJQUN0QjtJQUNBO1FBQ0VJLE9BQU87UUFDUEMsTUFBTUosMkRBQWNBO0lBQ3RCO0lBQ0E7UUFDRUcsT0FBTztRQUNQQyxNQUFNUCx1REFBV0E7SUFDbkI7SUFDQTtRQUNFTSxPQUFPO1FBQ1BDLE1BQU1SLGtEQUFNQTtJQUNkO0lBQ0E7UUFDRU8sT0FBTztRQUNQQyxNQUFNTixpREFBS0E7SUFDYjtDQUNEO0FBT0YsTUFBTU8sY0FBeUM7O0lBRTVDLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHZCwrQ0FBUUEsQ0FBQ1MsUUFBUSxDQUFDLEVBQUUsQ0FBQ0MsS0FBSztJQUNoRSxNQUFNLENBQUNLLFlBQVlDLGNBQWMsR0FBR2hCLCtDQUFRQSxDQUFDO1FBQ3pDVSxPQUFPO1FBQ1BPLE1BQU07SUFDUjtJQUNBLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUduQiwrQ0FBUUE7SUFDaEQsTUFBTW9CLGdCQUFnQnJCLDZDQUFNQSxDQUFtQjtJQUMvQyxNQUFNLENBQUNzQixTQUFTQyxXQUFXLEdBQUd0QiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUN1QixPQUFPQyxTQUFTLEdBQUd4QiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNeUIsU0FBU3ZCLHNEQUFTQTtJQUMxQix1REFBdUQ7SUFFdkQsTUFBTXdCLG1CQUFtQixXQUFhO0lBRXRDLE1BQU1DLGdCQUFnQixLQUFPO0lBRTdCLE1BQU1DLGVBQWUsS0FBTztJQUU1QixxQkFDSSw4REFBQzNCLGtEQUFJQTtRQUFDNEIsV0FBVTtRQUFTQyxJQUFHO1FBQVFDLGNBQWM7UUFBR0MsSUFBSTs7MEJBQ3JELDhEQUFDL0Isa0RBQUlBO2dCQUFDZ0MsT0FBTTswQkFDUHhCLFNBQVN5QixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ3JCLDhEQUFDNUIsZ0RBQU9BO3dCQUVKMkIsTUFBTUE7d0JBQ05FLFVBQVVGLEtBQUt6QixLQUFLLEtBQUtHO3dCQUN6QkMsZ0JBQWdCQTt1QkFIWHNCOzs7Ozs7Ozs7OzBCQU9iLDhEQUFDbkMsa0RBQUlBOzs7Ozs7Ozs7OztBQUtoQjtHQXJDTVc7O1FBV2NWLGtEQUFTQTs7O0tBWHZCVTtBQXNDTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qb3N0cy9OZXdQb3N0Rm9ybS50c3g/OTc0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIEJ1dHRvbixcbiAgRmxleCxcbiAgSWNvbixcbiAgSW5wdXQsXG4gIFN0YWNrLFxuICBUZXh0YXJlYSxcbiAgSW1hZ2UsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCB7XG4gIGFkZERvYyxcbiAgY29sbGVjdGlvbixcbiAgZG9jLFxuICBzZXJ2ZXJUaW1lc3RhbXAsXG4gIHVwZGF0ZURvYyxcbn0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBCaVBvbGwgfSBmcm9tIFwicmVhY3QtaWNvbnMvYmlcIjtcbmltcG9ydCB7IEJzTGluazQ1RGVnLCBCc01pYyB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xuaW1wb3J0IHsgSW9Eb2N1bWVudFRleHQsIElvSW1hZ2VPdXRsaW5lIH0gZnJvbSBcInJlYWN0LWljb25zL2lvNVwiO1xuaW1wb3J0IHsgQWlGaWxsQ2xvc2VDaXJjbGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlLCB1c2VTZXRSZWNvaWxTdGF0ZSB9IGZyb20gXCJyZWNvaWxcIjtcbi8vIGltcG9ydCB7IGZpcmVzdG9yZSwgc3RvcmFnZSB9IGZyb20gXCIuLi8uLi8uLi9maXJlYmFzZS9jbGllbnRBcHBcIjtcbi8vIGltcG9ydCB7IHBvc3RTdGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9hdG9tcy9wb3N0c0F0b21cIjtcbmltcG9ydCB7IGdldERvd25sb2FkVVJMLCByZWYsIHVwbG9hZFN0cmluZyB9IGZyb20gXCJmaXJlYmFzZS9zdG9yYWdlXCI7XG5cbmltcG9ydCB7IGl0IH0gZnJvbSBcIm5vZGU6dGVzdFwiO1xuaW1wb3J0IFRhYml0ZW0gZnJvbSBcIi4vVGFiSXRlbVwiO1xuXG5cbi8vIGltcG9ydCBUZXh0SW5wdXRzIGZyb20gXCIuL1RleHRJbnB1dHNcIjtcbi8vIGltcG9ydCBJbWFnZVVwbG9hZCBmcm9tIFwiLi9JbWFnZVVwbG9hZFwiO1xuIFxuIHR5cGUgTmV3UG9zdEZvcm1Qcm9wcyA9IHt9O1xuXG5jb25zdCBmb3JtVGFiczogVGFiSXRlbVtdID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiBcIlBvc3RcIixcbiAgICAgIGljb246IElvRG9jdW1lbnRUZXh0LFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiSW1hZ2VzICYgVmlkZW9cIixcbiAgICAgIGljb246IElvSW1hZ2VPdXRsaW5lLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiTGlua1wiLFxuICAgICAgaWNvbjogQnNMaW5rNDVEZWcsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJQb2xsXCIsXG4gICAgICBpY29uOiBCaVBvbGwsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJUYWxrXCIsXG4gICAgICBpY29uOiBCc01pYyxcbiAgICB9LFxuICBdO1xuXG4gIGV4cG9ydCB0eXBlIFRhYkl0ZW0gPSB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBpY29uOiB0eXBlb2YgSWNvbi5hcmd1bWVudHM7XG4gIH1cbiBcbiBjb25zdCBOZXdQb3N0Rm9ybTpSZWFjdC5GQzxOZXdQb3N0Rm9ybVByb3BzPiA9ICgpID0+IHtcblxuICAgIGNvbnN0IFtzZWxlY3RlZFRhYiwgc2V0U2VsZWN0ZWRUYWJdID0gdXNlU3RhdGUoZm9ybVRhYnNbMF0udGl0bGUpO1xuICAgIGNvbnN0IFt0ZXh0SW5wdXRzLCBzZXRUZXh0SW5wdXRzXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICAgIGJvZHk6IFwiXCIsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IFtzZWxlY3RlZEZpbGUsIHNldFNlbGVjdGVkRmlsZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG4gICAgICBjb25zdCBzZWxlY3RGaWxlUmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuICAgICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIC8vICAgY29uc3Qgc2V0UG9zdEl0ZW1zID0gdXNlU2V0UmVjb2lsU3RhdGUocG9zdFN0YXRlKTtcblxuICAgIGNvbnN0IGhhbmRsZUNyZWF0ZVBvc3QgPSBhc3luYyAoKSA9PiB7fTtcblxuICAgIGNvbnN0IG9uU2VsZWN0SW1hZ2UgPSAoKSA9PiB7fTtcblxuICAgIGNvbnN0IG9uVGV4dENoYW5nZSA9ICgpID0+IHt9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCIgYmc9XCJ3aGl0ZVwiIGJvcmRlclJhZGl1cz17NH0gbXQ9ezJ9PlxuICAgICAgICAgICAgPEZsZXggd2lkdGg9XCIxMDAlXCI+XG4gICAgICAgICAgICAgICAge2Zvcm1UYWJzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8VGFiaXRlbVxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICBpdGVtPXtpdGVtfVxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17aXRlbS50aXRsZSA9PT0gc2VsZWN0ZWRUYWJ9XG4gICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkVGFiPXtzZXRTZWxlY3RlZFRhYn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgPEZsZXg+XG4gICAgICAgICAgICAgICAgey8qIDxUZXh0SW5wdXRzIC8+ICovfVxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L0ZsZXg+XG4gICAgKVxuIH1cbiBleHBvcnQgZGVmYXVsdCBOZXdQb3N0Rm9ybTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkZsZXgiLCJ1c2VSb3V0ZXIiLCJCaVBvbGwiLCJCc0xpbms0NURlZyIsIkJzTWljIiwiSW9Eb2N1bWVudFRleHQiLCJJb0ltYWdlT3V0bGluZSIsIlRhYml0ZW0iLCJmb3JtVGFicyIsInRpdGxlIiwiaWNvbiIsIk5ld1Bvc3RGb3JtIiwic2VsZWN0ZWRUYWIiLCJzZXRTZWxlY3RlZFRhYiIsInRleHRJbnB1dHMiLCJzZXRUZXh0SW5wdXRzIiwiYm9keSIsInNlbGVjdGVkRmlsZSIsInNldFNlbGVjdGVkRmlsZSIsInNlbGVjdEZpbGVSZWYiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJyb3V0ZXIiLCJoYW5kbGVDcmVhdGVQb3N0Iiwib25TZWxlY3RJbWFnZSIsIm9uVGV4dENoYW5nZSIsImRpcmVjdGlvbiIsImJnIiwiYm9yZGVyUmFkaXVzIiwibXQiLCJ3aWR0aCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInNlbGVjdGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Posts/NewPostForm.tsx\n"));

/***/ })

});