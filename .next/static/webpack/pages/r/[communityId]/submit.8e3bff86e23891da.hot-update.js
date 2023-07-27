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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/io5 */ \"./node_modules/react-icons/io5/index.esm.js\");\n/* harmony import */ var _TabItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TabItem */ \"./src/components/Posts/TabItem.tsx\");\n/* harmony import */ var _PostForm_TextInputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PostForm/TextInputs */ \"./src/components/Posts/PostForm/TextInputs.tsx\");\n/* harmony import */ var _PostForm_ImageUpload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PostForm/ImageUpload */ \"./src/components/Posts/PostForm/ImageUpload.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst formTabs = [\n    {\n        title: \"Post\",\n        icon: react_icons_io5__WEBPACK_IMPORTED_MODULE_6__.IoDocumentText\n    },\n    {\n        title: \"Images & Video\",\n        icon: react_icons_io5__WEBPACK_IMPORTED_MODULE_6__.IoImageOutline\n    },\n    {\n        title: \"Link\",\n        icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_7__.BsLink45Deg\n    },\n    {\n        title: \"Poll\",\n        icon: react_icons_bi__WEBPACK_IMPORTED_MODULE_8__.BiPoll\n    },\n    {\n        title: \"Talk\",\n        icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_7__.BsMic\n    }\n];\nconst NewPostForm = ()=>{\n    _s();\n    const [selectedTab, setSelectedTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(formTabs[0].title);\n    const [textInputs, setTextInputs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        title: \"\",\n        body: \"\"\n    });\n    const [selectedFile, setSelectedFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const selectFileRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    //   const setPostItems = useSetRecoilState(postState);\n    const handleCreatePost = async ()=>{};\n    const onSelectImage = (event)=>{\n        var _event_target_files;\n        const reader = new FileReader();\n        if ((_event_target_files = event.target.files) === null || _event_target_files === void 0 ? void 0 : _event_target_files[0]) {\n            reader.readAsDataURL(event.target.files[0]);\n        }\n        reader.onload = (readerEvent)=>{\n            var _readerEvent_target;\n            if ((_readerEvent_target = readerEvent.target) === null || _readerEvent_target === void 0 ? void 0 : _readerEvent_target.result) {\n                var _readerEvent_target1;\n                setSelectedFile((_readerEvent_target1 = readerEvent.target) === null || _readerEvent_target1 === void 0 ? void 0 : _readerEvent_target1.result);\n            }\n        };\n    };\n    const onTextChange = (param)=>{\n        let { target: { name, value } } = param;\n        setTextInputs((prev)=>({\n                ...prev,\n                [name]: value\n            }));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Flex, {\n        direction: \"column\",\n        bg: \"white\",\n        borderRadius: 4,\n        mt: 2,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Flex, {\n                width: \"100%\",\n                children: formTabs.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TabItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        item: item,\n                        selected: item.title === selectedTab,\n                        setSelectedTab: setSelectedTab\n                    }, index, false, {\n                        fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Posts/NewPostForm.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 15\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Posts/NewPostForm.tsx\",\n                lineNumber: 105,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Flex, {\n                p: 4,\n                children: [\n                    selectedTab === \"Post\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PostForm_TextInputs__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        textInputs: textInputs,\n                        onChange: onTextChange,\n                        handleCreatePost: handleCreatePost,\n                        loading: loading\n                    }, void 0, false, {\n                        fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Posts/NewPostForm.tsx\",\n                        lineNumber: 117,\n                        columnNumber: 19\n                    }, undefined),\n                    selectedTab === \"Images & Video\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PostForm_ImageUpload__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        selectedFile: selectedFile,\n                        setSelectedFile: setSelectedFile,\n                        setSelectedTab: setSelectedTab,\n                        selectFileRef: selectFileRef,\n                        onSelectImage: onSelectImage\n                    }, void 0, false, {\n                        fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Posts/NewPostForm.tsx\",\n                        lineNumber: 125,\n                        columnNumber: 19\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Posts/NewPostForm.tsx\",\n                lineNumber: 115,\n                columnNumber: 11\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Posts/NewPostForm.tsx\",\n        lineNumber: 104,\n        columnNumber: 9\n    }, undefined);\n};\n_s(NewPostForm, \"pFH0nqhZlTivkrp8Q6uZF7xK+u4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = NewPostForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewPostForm);\nvar _c;\n$RefreshReg$(_c, \"NewPostForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V2NaLGtEQUFTQTs7O0tBWHZCWTtBQXdFTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qb3N0cy9OZXdQb3N0Rm9ybS50c3g/OTc0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIEJ1dHRvbixcbiAgRmxleCxcbiAgSWNvbixcbiAgSW5wdXQsXG4gIFN0YWNrLFxuICBUZXh0YXJlYSxcbiAgSW1hZ2UsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCB7XG4gIGFkZERvYyxcbiAgY29sbGVjdGlvbixcbiAgZG9jLFxuICBzZXJ2ZXJUaW1lc3RhbXAsXG4gIHVwZGF0ZURvYyxcbn0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBCaVBvbGwgfSBmcm9tIFwicmVhY3QtaWNvbnMvYmlcIjtcbmltcG9ydCB7IEJzTGluazQ1RGVnLCBCc01pYyB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xuaW1wb3J0IHsgSW9Eb2N1bWVudFRleHQsIElvSW1hZ2VPdXRsaW5lIH0gZnJvbSBcInJlYWN0LWljb25zL2lvNVwiO1xuaW1wb3J0IHsgQWlGaWxsQ2xvc2VDaXJjbGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlLCB1c2VTZXRSZWNvaWxTdGF0ZSB9IGZyb20gXCJyZWNvaWxcIjtcbi8vIGltcG9ydCB7IGZpcmVzdG9yZSwgc3RvcmFnZSB9IGZyb20gXCIuLi8uLi8uLi9maXJlYmFzZS9jbGllbnRBcHBcIjtcbi8vIGltcG9ydCB7IHBvc3RTdGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9hdG9tcy9wb3N0c0F0b21cIjtcbmltcG9ydCB7IGdldERvd25sb2FkVVJMLCByZWYsIHVwbG9hZFN0cmluZyB9IGZyb20gXCJmaXJlYmFzZS9zdG9yYWdlXCI7XG5pbXBvcnQgeyBpdCB9IGZyb20gXCJub2RlOnRlc3RcIjtcbmltcG9ydCBUYWJpdGVtIGZyb20gXCIuL1RhYkl0ZW1cIjtcbmltcG9ydCBUZXh0SW5wdXRzIGZyb20gXCIuL1Bvc3RGb3JtL1RleHRJbnB1dHNcIjtcbmltcG9ydCBJbWFnZVVwbG9hZCBmcm9tIFwiLi9Qb3N0Rm9ybS9JbWFnZVVwbG9hZFwiO1xuLy8gaW1wb3J0IEltYWdlVXBsb2FkIGZyb20gXCIuL0ltYWdlVXBsb2FkXCI7XG4gXG4gdHlwZSBOZXdQb3N0Rm9ybVByb3BzID0ge307XG5cbmNvbnN0IGZvcm1UYWJzOiBUYWJJdGVtW10gPSBbXG4gICAge1xuICAgICAgdGl0bGU6IFwiUG9zdFwiLFxuICAgICAgaWNvbjogSW9Eb2N1bWVudFRleHQsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJJbWFnZXMgJiBWaWRlb1wiLFxuICAgICAgaWNvbjogSW9JbWFnZU91dGxpbmUsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJMaW5rXCIsXG4gICAgICBpY29uOiBCc0xpbms0NURlZyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIlBvbGxcIixcbiAgICAgIGljb246IEJpUG9sbCxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIlRhbGtcIixcbiAgICAgIGljb246IEJzTWljLFxuICAgIH0sXG4gIF07XG5cbiAgZXhwb3J0IHR5cGUgVGFiSXRlbSA9IHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGljb246IHR5cGVvZiBJY29uLmFyZ3VtZW50cztcbiAgfVxuIFxuIGNvbnN0IE5ld1Bvc3RGb3JtOlJlYWN0LkZDPE5ld1Bvc3RGb3JtUHJvcHM+ID0gKCkgPT4ge1xuXG4gICAgY29uc3QgW3NlbGVjdGVkVGFiLCBzZXRTZWxlY3RlZFRhYl0gPSB1c2VTdGF0ZShmb3JtVGFic1swXS50aXRsZSk7XG4gICAgY29uc3QgW3RleHRJbnB1dHMsIHNldFRleHRJbnB1dHNdID0gdXNlU3RhdGUoe1xuICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgYm9keTogXCJcIixcbiAgICAgIH0pO1xuICAgICAgY29uc3QgW3NlbGVjdGVkRmlsZSwgc2V0U2VsZWN0ZWRGaWxlXSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcbiAgICAgIGNvbnN0IHNlbGVjdEZpbGVSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG4gICAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgLy8gICBjb25zdCBzZXRQb3N0SXRlbXMgPSB1c2VTZXRSZWNvaWxTdGF0ZShwb3N0U3RhdGUpO1xuXG4gICAgY29uc3QgaGFuZGxlQ3JlYXRlUG9zdCA9IGFzeW5jICgpID0+IHt9O1xuXG4gICAgY29uc3Qgb25TZWxlY3RJbWFnZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmZpbGVzPy5bMF0pIHtcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZXZlbnQudGFyZ2V0LmZpbGVzWzBdKTtcbiAgICAgIH1cbiAgXG4gICAgICByZWFkZXIub25sb2FkID0gKHJlYWRlckV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChyZWFkZXJFdmVudC50YXJnZXQ/LnJlc3VsdCkge1xuICAgICAgICAgIHNldFNlbGVjdGVkRmlsZShyZWFkZXJFdmVudC50YXJnZXQ/LnJlc3VsdCBhcyBzdHJpbmcpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH07XG5cbiAgICBjb25zdCBvblRleHRDaGFuZ2UgPSAoe1xuICAgICAgdGFyZ2V0OiB7IG5hbWUsIHZhbHVlIH0sXG4gICAgfTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PiB7XG4gICAgICBzZXRUZXh0SW5wdXRzKChwcmV2KSA9PiAoe1xuICAgICAgICAuLi5wcmV2LFxuICAgICAgICBbbmFtZV06IHZhbHVlLFxuICAgICAgfSkpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8RmxleCBkaXJlY3Rpb249XCJjb2x1bW5cIiBiZz1cIndoaXRlXCIgYm9yZGVyUmFkaXVzPXs0fSBtdD17Mn0+XG4gICAgICAgICAgPEZsZXggd2lkdGg9XCIxMDAlXCI+XG4gICAgICAgICAgICAgIHtmb3JtVGFicy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxUYWJpdGVtXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICBpdGVtPXtpdGVtfVxuICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtpdGVtLnRpdGxlID09PSBzZWxlY3RlZFRhYn1cbiAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFRhYj17c2V0U2VsZWN0ZWRUYWJ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgPEZsZXggcD17NH0+XG4gICAgICAgICAgICAgICAge3NlbGVjdGVkVGFiID09PSBcIlBvc3RcIiAmJiAoXG4gICAgICAgICAgICAgICAgICA8VGV4dElucHV0c1xuICAgICAgICAgICAgICAgICAgICB0ZXh0SW5wdXRzPXt0ZXh0SW5wdXRzfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25UZXh0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVDcmVhdGVQb3N0PXtoYW5kbGVDcmVhdGVQb3N0fVxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHtzZWxlY3RlZFRhYiA9PT0gXCJJbWFnZXMgJiBWaWRlb1wiICYmIChcbiAgICAgICAgICAgICAgICAgIDxJbWFnZVVwbG9hZFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEZpbGU9e3NlbGVjdGVkRmlsZX1cbiAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRGaWxlPXtzZXRTZWxlY3RlZEZpbGV9XG4gICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkVGFiPXtzZXRTZWxlY3RlZFRhYn1cbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0RmlsZVJlZj17c2VsZWN0RmlsZVJlZn1cbiAgICAgICAgICAgICAgICAgICAgb25TZWxlY3RJbWFnZT17b25TZWxlY3RJbWFnZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9GbGV4PlxuICAgIClcbiB9XG4gZXhwb3J0IGRlZmF1bHQgTmV3UG9zdEZvcm07Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJGbGV4IiwidXNlUm91dGVyIiwiQmlQb2xsIiwiQnNMaW5rNDVEZWciLCJCc01pYyIsIklvRG9jdW1lbnRUZXh0IiwiSW9JbWFnZU91dGxpbmUiLCJUYWJpdGVtIiwiVGV4dElucHV0cyIsIkltYWdlVXBsb2FkIiwiZm9ybVRhYnMiLCJ0aXRsZSIsImljb24iLCJOZXdQb3N0Rm9ybSIsInNlbGVjdGVkVGFiIiwic2V0U2VsZWN0ZWRUYWIiLCJ0ZXh0SW5wdXRzIiwic2V0VGV4dElucHV0cyIsImJvZHkiLCJzZWxlY3RlZEZpbGUiLCJzZXRTZWxlY3RlZEZpbGUiLCJzZWxlY3RGaWxlUmVmIiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwicm91dGVyIiwiaGFuZGxlQ3JlYXRlUG9zdCIsIm9uU2VsZWN0SW1hZ2UiLCJldmVudCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJ0YXJnZXQiLCJmaWxlcyIsInJlYWRBc0RhdGFVUkwiLCJvbmxvYWQiLCJyZWFkZXJFdmVudCIsInJlc3VsdCIsIm9uVGV4dENoYW5nZSIsIm5hbWUiLCJ2YWx1ZSIsInByZXYiLCJkaXJlY3Rpb24iLCJiZyIsImJvcmRlclJhZGl1cyIsIm10Iiwid2lkdGgiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJzZWxlY3RlZCIsInAiLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Posts/NewPostForm.tsx\n"));

/***/ })

});