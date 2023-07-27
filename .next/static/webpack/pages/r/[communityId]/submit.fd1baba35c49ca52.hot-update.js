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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/io5 */ \"./node_modules/react-icons/io5/index.esm.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/esm/index.esm.js\");\n/* harmony import */ var _TabItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TabItem */ \"./src/components/Posts/TabItem.tsx\");\n/* harmony import */ var _PostForm_TextInputs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PostForm/TextInputs */ \"./src/components/Posts/PostForm/TextInputs.tsx\");\n/* harmony import */ var _PostForm_ImageUpload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PostForm/ImageUpload */ \"./src/components/Posts/PostForm/ImageUpload.tsx\");\n/* harmony import */ var _src_firebase_clientApp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/src/firebase/clientApp */ \"./src/firebase/clientApp.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst formTabs = [\n    {\n        title: \"Post\",\n        icon: react_icons_io5__WEBPACK_IMPORTED_MODULE_9__.IoDocumentText\n    },\n    {\n        title: \"Images & Video\",\n        icon: react_icons_io5__WEBPACK_IMPORTED_MODULE_9__.IoImageOutline\n    },\n    {\n        title: \"Link\",\n        icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_10__.BsLink45Deg\n    },\n    {\n        title: \"Poll\",\n        icon: react_icons_bi__WEBPACK_IMPORTED_MODULE_11__.BiPoll\n    },\n    {\n        title: \"Talk\",\n        icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_10__.BsMic\n    }\n];\nconst NewPostForm = (param)=>{\n    let { user } = param;\n    _s();\n    const [selectedTab, setSelectedTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(formTabs[0].title);\n    const [textInputs, setTextInputs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        title: \"\",\n        body: \"\"\n    });\n    const [selectedFile, setSelectedFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const selectFileRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    //   const setPostItems = useSetRecoilState(postState);\n    const handleCreatePost = async ()=>{\n        var _user;\n        const { communityId } = router.query;\n        // create new post object => type Post\n        const newPost = {\n            communityId: communityId,\n            creatorId: (_user = user) === null || _user === void 0 ? void 0 : _user.uid,\n            creatorDisplayName: user.email.split(\"@\")[0],\n            title: textInputs.title,\n            body: textInputs.body,\n            numberOfComments: 0,\n            voteStatus: 0,\n            createdAt: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.serverTimestamp)()\n        };\n        setLoading(true);\n        try {\n            // store the post in db\n            const postDocRef = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_src_firebase_clientApp__WEBPACK_IMPORTED_MODULE_8__.firestore, \"posts\"), newPost);\n            // check for selectedFile\n            // store in storage => getDownloadURL (return image URL)\n            if (selectedFile) {\n                const imageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.ref)(_src_firebase_clientApp__WEBPACK_IMPORTED_MODULE_8__.storage, \"posts/\".concat(postDocRef.id, \"/image\"));\n                await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.uploadString)(imageRef, selectedFile, \"data_url\");\n                const downloadURL = await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.getDownloadURL)(imageRef);\n                //update post by adding image url\n                await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.updateDoc)(postDocRef, {\n                    imageURL: downloadURL\n                });\n                console.log(\"HERE IS DOWNLOAD URL\", downloadURL);\n            }\n        } catch (error) {\n            console.log(\"handleCreatePost error\", error.message);\n            setError(true);\n        }\n        setLoading(false);\n    // redirect the user back to the communitypage using the router\n    // router.back();\n    };\n    const onSelectImage = (event)=>{\n        var _event_target_files;\n        const reader = new FileReader();\n        if ((_event_target_files = event.target.files) === null || _event_target_files === void 0 ? void 0 : _event_target_files[0]) {\n            reader.readAsDataURL(event.target.files[0]);\n        }\n        reader.onload = (readerEvent)=>{\n            var _readerEvent_target;\n            if ((_readerEvent_target = readerEvent.target) === null || _readerEvent_target === void 0 ? void 0 : _readerEvent_target.result) {\n                var _readerEvent_target1;\n                setSelectedFile((_readerEvent_target1 = readerEvent.target) === null || _readerEvent_target1 === void 0 ? void 0 : _readerEvent_target1.result);\n            }\n        };\n    };\n    const onTextChange = (param)=>{\n        let { target: { name, value } } = param;\n        setTextInputs((prev)=>({\n                ...prev,\n                [name]: value\n            }));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Flex, {\n        direction: \"column\",\n        bg: \"white\",\n        borderRadius: 4,\n        mt: 2,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Flex, {\n                width: \"100%\",\n                children: formTabs.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TabItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        item: item,\n                        selected: item.title === selectedTab,\n                        setSelectedTab: setSelectedTab\n                    }, index, false, {\n                        fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Posts/NewPostForm.tsx\",\n                        lineNumber: 158,\n                        columnNumber: 15\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Posts/NewPostForm.tsx\",\n                lineNumber: 156,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Flex, {\n                p: 4,\n                children: [\n                    selectedTab === \"Post\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PostForm_TextInputs__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        textInputs: textInputs,\n                        onChange: onTextChange,\n                        handleCreatePost: handleCreatePost,\n                        loading: loading\n                    }, void 0, false, {\n                        fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Posts/NewPostForm.tsx\",\n                        lineNumber: 168,\n                        columnNumber: 19\n                    }, undefined),\n                    selectedTab === \"Images & Video\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PostForm_ImageUpload__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        selectedFile: selectedFile,\n                        setSelectedFile: setSelectedFile,\n                        setSelectedTab: setSelectedTab,\n                        selectFileRef: selectFileRef,\n                        onSelectImage: onSelectImage\n                    }, void 0, false, {\n                        fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Posts/NewPostForm.tsx\",\n                        lineNumber: 176,\n                        columnNumber: 19\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Posts/NewPostForm.tsx\",\n                lineNumber: 166,\n                columnNumber: 11\n            }, undefined),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Alert, {\n                status: \"error\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.AlertIcon, {}, void 0, false, {\n                        fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Posts/NewPostForm.tsx\",\n                        lineNumber: 187,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Text, {\n                        mr: 2,\n                        children: \"Error creating post\"\n                    }, void 0, false, {\n                        fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Posts/NewPostForm.tsx\",\n                        lineNumber: 188,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Posts/NewPostForm.tsx\",\n                lineNumber: 186,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Posts/NewPostForm.tsx\",\n        lineNumber: 155,\n        columnNumber: 9\n    }, undefined);\n};\n_s(NewPostForm, \"AekOhKmG3HJlR11YYft4i52DUPY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = NewPostForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewPostForm);\nvar _c;\n$RefreshReg$(_c, \"NewPostForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2QsOERBQUNuRix3REFBU0E7Ozs7O2tDQUNWLDhEQUFDQyxtREFBSUE7d0JBQUNtRixJQUFJO2tDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLeEI7R0F6SE03RDs7UUFXY2pCLGtEQUFTQTs7O0tBWHZCaUI7QUEwSE4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUG9zdHMvTmV3UG9zdEZvcm0udHN4Pzk3NDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBCdXR0b24sXG4gIEZsZXgsXG4gIEljb24sXG4gIElucHV0LFxuICBTdGFjayxcbiAgVGV4dGFyZWEsXG4gIEltYWdlLFxuICBBbGVydCxcbiAgQWxlcnREZXNjcmlwdGlvbixcbiAgQWxlcnRJY29uLFxuICBBbGVydFRpdGxlLFxuICBUZXh0LFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQge1xuICBhZGREb2MsXG4gIGNvbGxlY3Rpb24sXG4gIGRvYyxcbiAgc2VydmVyVGltZXN0YW1wLFxuICB1cGRhdGVEb2MsXG59IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgQmlQb2xsIH0gZnJvbSBcInJlYWN0LWljb25zL2JpXCI7XG5pbXBvcnQgeyBCc0xpbms0NURlZywgQnNNaWMgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcbmltcG9ydCB7IElvRG9jdW1lbnRUZXh0LCBJb0ltYWdlT3V0bGluZSB9IGZyb20gXCJyZWFjdC1pY29ucy9pbzVcIjtcbmltcG9ydCB7IEFpRmlsbENsb3NlQ2lyY2xlIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSwgdXNlU2V0UmVjb2lsU3RhdGUgfSBmcm9tIFwicmVjb2lsXCI7XG5pbXBvcnQgeyBnZXREb3dubG9hZFVSTCwgcmVmLCB1cGxvYWRTdHJpbmcgfSBmcm9tIFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xuaW1wb3J0IHsgaXQgfSBmcm9tIFwibm9kZTp0ZXN0XCI7XG5pbXBvcnQgVGFiaXRlbSBmcm9tIFwiLi9UYWJJdGVtXCI7XG5pbXBvcnQgVGV4dElucHV0cyBmcm9tIFwiLi9Qb3N0Rm9ybS9UZXh0SW5wdXRzXCI7XG5pbXBvcnQgSW1hZ2VVcGxvYWQgZnJvbSBcIi4vUG9zdEZvcm0vSW1hZ2VVcGxvYWRcIjtcbmltcG9ydCB7IFBvc3QgfSBmcm9tIFwiQC9zcmMvYXRvbXMvcG9zdHNBdG9tXCI7XG5pbXBvcnQgeyBUaW1lc3RhbXAgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5pbXBvcnQgeyBmaXJlc3RvcmUsIHN0b3JhZ2UgfSBmcm9tIFwiQC9zcmMvZmlyZWJhc2UvY2xpZW50QXBwXCI7XG4gXG4gdHlwZSBOZXdQb3N0Rm9ybVByb3BzID0ge1xuICB1c2VyOiBVc2VyO1xuIH07XG5cbmNvbnN0IGZvcm1UYWJzOiBUYWJJdGVtW10gPSBbXG4gICAge1xuICAgICAgdGl0bGU6IFwiUG9zdFwiLFxuICAgICAgaWNvbjogSW9Eb2N1bWVudFRleHQsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJJbWFnZXMgJiBWaWRlb1wiLFxuICAgICAgaWNvbjogSW9JbWFnZU91dGxpbmUsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJMaW5rXCIsXG4gICAgICBpY29uOiBCc0xpbms0NURlZyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIlBvbGxcIixcbiAgICAgIGljb246IEJpUG9sbCxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIlRhbGtcIixcbiAgICAgIGljb246IEJzTWljLFxuICAgIH0sXG4gIF07XG5cbiAgZXhwb3J0IHR5cGUgVGFiSXRlbSA9IHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGljb246IHR5cGVvZiBJY29uLmFyZ3VtZW50cztcbiAgfVxuIFxuIGNvbnN0IE5ld1Bvc3RGb3JtOlJlYWN0LkZDPE5ld1Bvc3RGb3JtUHJvcHM+ID0gKHsgdXNlciB9KSA9PiB7XG5cbiAgICBjb25zdCBbc2VsZWN0ZWRUYWIsIHNldFNlbGVjdGVkVGFiXSA9IHVzZVN0YXRlKGZvcm1UYWJzWzBdLnRpdGxlKTtcbiAgICBjb25zdCBbdGV4dElucHV0cywgc2V0VGV4dElucHV0c10gPSB1c2VTdGF0ZSh7XG4gICAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgICBib2R5OiBcIlwiLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBbc2VsZWN0ZWRGaWxlLCBzZXRTZWxlY3RlZEZpbGVdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuICAgICAgY29uc3Qgc2VsZWN0RmlsZVJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcbiAgICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgLy8gICBjb25zdCBzZXRQb3N0SXRlbXMgPSB1c2VTZXRSZWNvaWxTdGF0ZShwb3N0U3RhdGUpO1xuXG4gICAgY29uc3QgaGFuZGxlQ3JlYXRlUG9zdCA9IGFzeW5jICgpID0+IHtcblxuICAgICAgY29uc3Qge2NvbW11bml0eUlkfSA9IHJvdXRlci5xdWVyeTtcblxuICAgICAgLy8gY3JlYXRlIG5ldyBwb3N0IG9iamVjdCA9PiB0eXBlIFBvc3RcbiAgICAgIGNvbnN0IG5ld1Bvc3Q6IFBvc3QgPSB7XG4gICAgICAgIGNvbW11bml0eUlkOiBjb21tdW5pdHlJZCBhcyBzdHJpbmcsXG4gICAgICAgIGNyZWF0b3JJZDogdXNlcj8udWlkLFxuICAgICAgICBjcmVhdG9yRGlzcGxheU5hbWU6IHVzZXIuZW1haWwhLnNwbGl0KFwiQFwiKVswXSxcbiAgICAgICAgdGl0bGU6IHRleHRJbnB1dHMudGl0bGUsXG4gICAgICAgIGJvZHk6IHRleHRJbnB1dHMuYm9keSxcbiAgICAgICAgbnVtYmVyT2ZDb21tZW50czogMCxcbiAgICAgICAgdm90ZVN0YXR1czogMCxcbiAgICAgICAgY3JlYXRlZEF0OiBzZXJ2ZXJUaW1lc3RhbXAoKSBhcyBUaW1lc3RhbXBcbiAgICAgIH07XG5cbiAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIHN0b3JlIHRoZSBwb3N0IGluIGRiXG4gICAgICAgIGNvbnN0IHBvc3REb2NSZWYgPSBhd2FpdCBhZGREb2MoY29sbGVjdGlvbihmaXJlc3RvcmUsXCJwb3N0c1wiKSxuZXdQb3N0KTtcbiAgICAgICAgLy8gY2hlY2sgZm9yIHNlbGVjdGVkRmlsZVxuICAgICAgICAvLyBzdG9yZSBpbiBzdG9yYWdlID0+IGdldERvd25sb2FkVVJMIChyZXR1cm4gaW1hZ2UgVVJMKVxuICAgICAgICBcbiAgICAgICAgaWYgKHNlbGVjdGVkRmlsZSkge1xuICAgICAgICAgIGNvbnN0IGltYWdlUmVmID0gcmVmKHN0b3JhZ2UsIGBwb3N0cy8ke3Bvc3REb2NSZWYuaWR9L2ltYWdlYCk7XG4gICAgICAgICAgYXdhaXQgdXBsb2FkU3RyaW5nKGltYWdlUmVmLCBzZWxlY3RlZEZpbGUsIFwiZGF0YV91cmxcIik7XG4gICAgICAgICAgY29uc3QgZG93bmxvYWRVUkwgPSBhd2FpdCBnZXREb3dubG9hZFVSTChpbWFnZVJlZik7XG5cbiAgICAgICAgICAvL3VwZGF0ZSBwb3N0IGJ5IGFkZGluZyBpbWFnZSB1cmxcblxuICAgICAgICAgIGF3YWl0IHVwZGF0ZURvYyhwb3N0RG9jUmVmLCB7XG4gICAgICAgICAgICBpbWFnZVVSTDogZG93bmxvYWRVUkwsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJIRVJFIElTIERPV05MT0FEIFVSTFwiLCBkb3dubG9hZFVSTCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaGFuZGxlQ3JlYXRlUG9zdCBlcnJvclwiLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgc2V0RXJyb3IodHJ1ZSk7XG4gICAgICB9XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgXG4gICAgICAvLyByZWRpcmVjdCB0aGUgdXNlciBiYWNrIHRvIHRoZSBjb21tdW5pdHlwYWdlIHVzaW5nIHRoZSByb3V0ZXJcbiAgICAgIC8vIHJvdXRlci5iYWNrKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9uU2VsZWN0SW1hZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5maWxlcz8uWzBdKSB7XG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGV2ZW50LnRhcmdldC5maWxlc1swXSk7XG4gICAgICB9XG4gIFxuICAgICAgcmVhZGVyLm9ubG9hZCA9IChyZWFkZXJFdmVudCkgPT4ge1xuICAgICAgICBpZiAocmVhZGVyRXZlbnQudGFyZ2V0Py5yZXN1bHQpIHtcbiAgICAgICAgICBzZXRTZWxlY3RlZEZpbGUocmVhZGVyRXZlbnQudGFyZ2V0Py5yZXN1bHQgYXMgc3RyaW5nKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb25UZXh0Q2hhbmdlID0gKHtcbiAgICAgIHRhcmdldDogeyBuYW1lLCB2YWx1ZSB9LFxuICAgIH06IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50PikgPT4ge1xuICAgICAgc2V0VGV4dElucHV0cygocHJldikgPT4gKHtcbiAgICAgICAgLi4ucHJldixcbiAgICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICAgIH0pKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCIgYmc9XCJ3aGl0ZVwiIGJvcmRlclJhZGl1cz17NH0gbXQ9ezJ9PlxuICAgICAgICAgIDxGbGV4IHdpZHRoPVwiMTAwJVwiPlxuICAgICAgICAgICAgICB7Zm9ybVRhYnMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8VGFiaXRlbVxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgaXRlbT17aXRlbX1cbiAgICAgICAgICAgICAgICBzZWxlY3RlZD17aXRlbS50aXRsZSA9PT0gc2VsZWN0ZWRUYWJ9XG4gICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRUYWI9e3NldFNlbGVjdGVkVGFifVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgIDxGbGV4IHA9ezR9PlxuICAgICAgICAgICAgICAgIHtzZWxlY3RlZFRhYiA9PT0gXCJQb3N0XCIgJiYgKFxuICAgICAgICAgICAgICAgICAgPFRleHRJbnB1dHNcbiAgICAgICAgICAgICAgICAgICAgdGV4dElucHV0cz17dGV4dElucHV0c31cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uVGV4dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ3JlYXRlUG9zdD17aGFuZGxlQ3JlYXRlUG9zdH1cbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7c2VsZWN0ZWRUYWIgPT09IFwiSW1hZ2VzICYgVmlkZW9cIiAmJiAoXG4gICAgICAgICAgICAgICAgICA8SW1hZ2VVcGxvYWRcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRGaWxlPXtzZWxlY3RlZEZpbGV9XG4gICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkRmlsZT17c2V0U2VsZWN0ZWRGaWxlfVxuICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFRhYj17c2V0U2VsZWN0ZWRUYWJ9XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdEZpbGVSZWY9e3NlbGVjdEZpbGVSZWZ9XG4gICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0SW1hZ2U9e29uU2VsZWN0SW1hZ2V9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAge2Vycm9yICYmIChcbiAgICAgICAgICAgIDxBbGVydCBzdGF0dXM9J2Vycm9yJz5cbiAgICAgICAgICAgIDxBbGVydEljb24gLz5cbiAgICAgICAgICAgIDxUZXh0IG1yPXsyfT5FcnJvciBjcmVhdGluZyBwb3N0PC9UZXh0PlxuICAgICAgICAgIDwvQWxlcnQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9GbGV4PiBcbiAgICApXG4gfVxuIGV4cG9ydCBkZWZhdWx0IE5ld1Bvc3RGb3JtOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiRmxleCIsIkFsZXJ0IiwiQWxlcnRJY29uIiwiVGV4dCIsImFkZERvYyIsImNvbGxlY3Rpb24iLCJzZXJ2ZXJUaW1lc3RhbXAiLCJ1cGRhdGVEb2MiLCJ1c2VSb3V0ZXIiLCJCaVBvbGwiLCJCc0xpbms0NURlZyIsIkJzTWljIiwiSW9Eb2N1bWVudFRleHQiLCJJb0ltYWdlT3V0bGluZSIsImdldERvd25sb2FkVVJMIiwicmVmIiwidXBsb2FkU3RyaW5nIiwiVGFiaXRlbSIsIlRleHRJbnB1dHMiLCJJbWFnZVVwbG9hZCIsImZpcmVzdG9yZSIsInN0b3JhZ2UiLCJmb3JtVGFicyIsInRpdGxlIiwiaWNvbiIsIk5ld1Bvc3RGb3JtIiwidXNlciIsInNlbGVjdGVkVGFiIiwic2V0U2VsZWN0ZWRUYWIiLCJ0ZXh0SW5wdXRzIiwic2V0VGV4dElucHV0cyIsImJvZHkiLCJzZWxlY3RlZEZpbGUiLCJzZXRTZWxlY3RlZEZpbGUiLCJzZWxlY3RGaWxlUmVmIiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwicm91dGVyIiwiaGFuZGxlQ3JlYXRlUG9zdCIsImNvbW11bml0eUlkIiwicXVlcnkiLCJuZXdQb3N0IiwiY3JlYXRvcklkIiwidWlkIiwiY3JlYXRvckRpc3BsYXlOYW1lIiwiZW1haWwiLCJzcGxpdCIsIm51bWJlck9mQ29tbWVudHMiLCJ2b3RlU3RhdHVzIiwiY3JlYXRlZEF0IiwicG9zdERvY1JlZiIsImltYWdlUmVmIiwiaWQiLCJkb3dubG9hZFVSTCIsImltYWdlVVJMIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJvblNlbGVjdEltYWdlIiwiZXZlbnQiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwidGFyZ2V0IiwiZmlsZXMiLCJyZWFkQXNEYXRhVVJMIiwib25sb2FkIiwicmVhZGVyRXZlbnQiLCJyZXN1bHQiLCJvblRleHRDaGFuZ2UiLCJuYW1lIiwidmFsdWUiLCJwcmV2IiwiZGlyZWN0aW9uIiwiYmciLCJib3JkZXJSYWRpdXMiLCJtdCIsIndpZHRoIiwibWFwIiwiaXRlbSIsImluZGV4Iiwic2VsZWN0ZWQiLCJwIiwib25DaGFuZ2UiLCJzdGF0dXMiLCJtciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Posts/NewPostForm.tsx\n"));

/***/ })

});