"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/create/page",{

/***/ "(app-pages-browser)/./src/components/PostForm.jsx":
/*!*************************************!*\
  !*** ./src/components/PostForm.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_use_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/use-toast */ \"(app-pages-browser)/./src/components/ui/use-toast.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction PostForm() {\n    _s();\n    const { toast } = (0,_components_ui_use_toast__WEBPACK_IMPORTED_MODULE_2__.useToast)();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        title: \"\",\n        content: \"\",\n        category: \"\",\n        status: \"draft\",\n        isLoading: false\n    });\n    const changeHandler = (e)=>{\n        setData((prev)=>{\n            return {\n                ...prev,\n                [e.target.name]: e.target.value\n            };\n        });\n    };\n    const submitHandler = (e)=>{\n        setData((prev)=>{\n            return {\n                isLoading: true,\n                ...prev\n            };\n        });\n        e.preventDefault();\n        fetch(\"http://localhost:8080/api/v1/article\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(data)\n        }).then((response)=>{\n            if (response.status != 200) {\n                toast({\n                    title: \"Error\",\n                    description: response.message\n                });\n            }\n            console.log(response);\n            return response.json();\n        }).then((data)=>{\n            toast({\n                title: \"Success\",\n                description: data.message\n            });\n            setData({\n                title: \"\",\n                content: \"\",\n                category: \"\",\n                status: \"draft\",\n                loading: false\n            });\n        }).catch((error)=>{\n            console.error(\"There was a problem with your fetch operation:\", error);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: submitHandler,\n        className: \"space-y-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full flex flex-col gap-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"title\",\n                        className: \"text-sm\",\n                        children: \"Title\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Workspace\\\\explore\\\\sharing-vision-fullstack\\\\frontend\\\\src\\\\components\\\\PostForm.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"py-2 px-3 text-sm drop-shadow-sm rounded-sm\",\n                        name: \"title\",\n                        placeholder: \"Post title...\",\n                        onChange: changeHandler,\n                        value: data.title,\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Workspace\\\\explore\\\\sharing-vision-fullstack\\\\frontend\\\\src\\\\components\\\\PostForm.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Workspace\\\\explore\\\\sharing-vision-fullstack\\\\frontend\\\\src\\\\components\\\\PostForm.jsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full flex flex-col gap-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"content\",\n                        className: \"text-sm\",\n                        children: \"Content\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Workspace\\\\explore\\\\sharing-vision-fullstack\\\\frontend\\\\src\\\\components\\\\PostForm.jsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        name: \"content\",\n                        cols: \"30\",\n                        rows: \"15\",\n                        placeholder: \"Content...\",\n                        onChange: changeHandler,\n                        value: data.content,\n                        className: \"py-2 px-3 text-sm drop-shadow-sm rounded-sm\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Workspace\\\\explore\\\\sharing-vision-fullstack\\\\frontend\\\\src\\\\components\\\\PostForm.jsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Workspace\\\\explore\\\\sharing-vision-fullstack\\\\frontend\\\\src\\\\components\\\\PostForm.jsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full flex flex-col gap-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"category\",\n                        className: \"text-sm\",\n                        children: \"Category\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Workspace\\\\explore\\\\sharing-vision-fullstack\\\\frontend\\\\src\\\\components\\\\PostForm.jsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"py-2 px-3 text-sm drop-shadow-sm rounded-sm\",\n                        name: \"category\",\n                        onChange: changeHandler,\n                        value: data.category,\n                        placeholder: \"category...\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Workspace\\\\explore\\\\sharing-vision-fullstack\\\\frontend\\\\src\\\\components\\\\PostForm.jsx\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Workspace\\\\explore\\\\sharing-vision-fullstack\\\\frontend\\\\src\\\\components\\\\PostForm.jsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-1 bg-slate-200 max-w-40 flex gap-1\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            className: \"\".concat(data.status == \"draft\" ? \"bg-yellow-400 font-bold\" : \"bg-slate-100 text-slate-300\", \" cursor-pointer flex-1 text-sm text-center py-2\"),\n                            value: \"draft\",\n                            name: \"status\",\n                            onClick: changeHandler,\n                            children: \"Draft\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Workspace\\\\explore\\\\sharing-vision-fullstack\\\\frontend\\\\src\\\\components\\\\PostForm.jsx\",\n                            lineNumber: 113,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            className: \"\".concat(data.status == \"publish\" ? \"bg-green-400 font-bold\" : \"bg-slate-100 text-slate-300\", \" cursor-pointer flex-1 text-sm text-center py-2\"),\n                            onClick: changeHandler,\n                            value: \"publish\",\n                            name: \"status\",\n                            children: \"Publish\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Workspace\\\\explore\\\\sharing-vision-fullstack\\\\frontend\\\\src\\\\components\\\\PostForm.jsx\",\n                            lineNumber: 126,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Workspace\\\\explore\\\\sharing-vision-fullstack\\\\frontend\\\\src\\\\components\\\\PostForm.jsx\",\n                    lineNumber: 112,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Workspace\\\\explore\\\\sharing-vision-fullstack\\\\frontend\\\\src\\\\components\\\\PostForm.jsx\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"mt-3 w-full bg-blue-500 hover:bg-blue-600 py-3 text-sm rounded text-white\",\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Workspace\\\\explore\\\\sharing-vision-fullstack\\\\frontend\\\\src\\\\components\\\\PostForm.jsx\",\n                lineNumber: 141,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Workspace\\\\explore\\\\sharing-vision-fullstack\\\\frontend\\\\src\\\\components\\\\PostForm.jsx\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, this);\n}\n_s(PostForm, \"PxQ3e9Bom/drROPcOZFSrnn+Klk=\", false, function() {\n    return [\n        _components_ui_use_toast__WEBPACK_IMPORTED_MODULE_2__.useToast\n    ];\n});\n_c = PostForm;\nvar _c;\n$RefreshReg$(_c, \"PostForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Bvc3RGb3JtLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRWlDO0FBQ29CO0FBRXRDLFNBQVNFOztJQUN0QixNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHRixrRUFBUUE7SUFDMUIsTUFBTSxDQUFDRyxNQUFNQyxRQUFRLEdBQUdMLCtDQUFRQSxDQUFDO1FBQy9CTSxPQUFPO1FBQ1BDLFNBQVM7UUFDVEMsVUFBVTtRQUNWQyxRQUFRO1FBQ1JDLFdBQVc7SUFDYjtJQUVBLE1BQU1DLGdCQUFnQixDQUFDQztRQUNyQlAsUUFBUSxDQUFDUTtZQUNQLE9BQU87Z0JBQUUsR0FBR0EsSUFBSTtnQkFBRSxDQUFDRCxFQUFFRSxNQUFNLENBQUNDLElBQUksQ0FBQyxFQUFFSCxFQUFFRSxNQUFNLENBQUNFLEtBQUs7WUFBQztRQUNwRDtJQUNGO0lBRUEsTUFBTUMsZ0JBQWdCLENBQUNMO1FBQ3JCUCxRQUFRLENBQUNRO1lBQ1AsT0FBTztnQkFBRUgsV0FBVztnQkFBTSxHQUFHRyxJQUFJO1lBQUM7UUFDcEM7UUFFQUQsRUFBRU0sY0FBYztRQUNoQkMsTUFBTSx3Q0FBd0M7WUFDNUNDLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDcEI7UUFDdkIsR0FDR3FCLElBQUksQ0FBQyxDQUFDQztZQUNMLElBQUlBLFNBQVNqQixNQUFNLElBQUksS0FBSztnQkFDMUJOLE1BQU07b0JBQ0pHLE9BQU87b0JBQ1BxQixhQUFhRCxTQUFTRSxPQUFPO2dCQUMvQjtZQUNGO1lBRUFDLFFBQVFDLEdBQUcsQ0FBQ0o7WUFFWixPQUFPQSxTQUFTSyxJQUFJO1FBQ3RCLEdBQ0NOLElBQUksQ0FBQyxDQUFDckI7WUFDTEQsTUFBTTtnQkFDSkcsT0FBTztnQkFDUHFCLGFBQWF2QixLQUFLd0IsT0FBTztZQUMzQjtZQUVBdkIsUUFBUTtnQkFDTkMsT0FBTztnQkFDUEMsU0FBUztnQkFDVEMsVUFBVTtnQkFDVkMsUUFBUTtnQkFDUnVCLFNBQVM7WUFDWDtRQUNGLEdBQ0NDLEtBQUssQ0FBQyxDQUFDQztZQUNOTCxRQUFRSyxLQUFLLENBQUMsa0RBQWtEQTtRQUNsRTtJQUNKO0lBRUEscUJBQ0UsOERBQUNDO1FBQUtDLFVBQVVuQjtRQUFlb0IsV0FBVTs7MEJBQ3ZDLDhEQUFDQztnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUNFO3dCQUFNQyxTQUFRO3dCQUFRSCxXQUFVO2tDQUFVOzs7Ozs7a0NBRzNDLDhEQUFDSTt3QkFDQ0MsTUFBSzt3QkFDTEwsV0FBVTt3QkFDVnRCLE1BQUs7d0JBQ0w0QixhQUFZO3dCQUNaQyxVQUFVakM7d0JBQ1ZLLE9BQU9aLEtBQUtFLEtBQUs7d0JBQ2pCdUMsUUFBUTs7Ozs7Ozs7Ozs7OzBCQUdaLDhEQUFDUDtnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUNFO3dCQUFNQyxTQUFRO3dCQUFVSCxXQUFVO2tDQUFVOzs7Ozs7a0NBRzdDLDhEQUFDUzt3QkFDQy9CLE1BQUs7d0JBQ0xnQyxNQUFLO3dCQUNMQyxNQUFLO3dCQUNMTCxhQUFZO3dCQUNaQyxVQUFVakM7d0JBQ1ZLLE9BQU9aLEtBQUtHLE9BQU87d0JBQ25COEIsV0FBVTt3QkFDVlEsUUFBUTs7Ozs7Ozs7Ozs7OzBCQUdaLDhEQUFDUDtnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUNFO3dCQUFNQyxTQUFRO3dCQUFXSCxXQUFVO2tDQUFVOzs7Ozs7a0NBRzlDLDhEQUFDSTt3QkFDQ0MsTUFBSzt3QkFDTEwsV0FBVTt3QkFDVnRCLE1BQUs7d0JBQ0w2QixVQUFVakM7d0JBQ1ZLLE9BQU9aLEtBQUtJLFFBQVE7d0JBQ3BCbUMsYUFBWTt3QkFDWkUsUUFBUTs7Ozs7Ozs7Ozs7OzBCQUdaLDhEQUFDUDswQkFDQyw0RUFBQ0E7b0JBQUlELFdBQVU7O3NDQUNiLDhEQUFDWTs0QkFDQ1AsTUFBSzs0QkFDTEwsV0FBVyxHQUlWLE9BSENqQyxLQUFLSyxNQUFNLElBQUksVUFDWCw0QkFDQSwrQkFDTDs0QkFDRE8sT0FBTTs0QkFDTkQsTUFBSzs0QkFDTG1DLFNBQVN2QztzQ0FDVjs7Ozs7O3NDQUdELDhEQUFDc0M7NEJBQ0NQLE1BQUs7NEJBQ0xMLFdBQVcsR0FJVixPQUhDakMsS0FBS0ssTUFBTSxJQUFJLFlBQ1gsMkJBQ0EsK0JBQ0w7NEJBQ0R5QyxTQUFTdkM7NEJBQ1RLLE9BQU07NEJBQ05ELE1BQUs7c0NBQ047Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtMLDhEQUFDa0M7Z0JBQU9aLFdBQVU7MEJBQTRFOzs7Ozs7Ozs7Ozs7QUFLcEc7R0E1SXdCbkM7O1FBQ0pELDhEQUFRQTs7O0tBREpDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Bvc3RGb3JtLmpzeD8xNTc0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlVG9hc3QgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3VzZS10b2FzdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdEZvcm0oKSB7XHJcbiAgY29uc3QgeyB0b2FzdCB9ID0gdXNlVG9hc3QoKTtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICB0aXRsZTogXCJcIixcclxuICAgIGNvbnRlbnQ6IFwiXCIsXHJcbiAgICBjYXRlZ29yeTogXCJcIixcclxuICAgIHN0YXR1czogXCJkcmFmdFwiLFxyXG4gICAgaXNMb2FkaW5nOiBmYWxzZSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgY2hhbmdlSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICBzZXREYXRhKChwcmV2KSA9PiB7XHJcbiAgICAgIHJldHVybiB7IC4uLnByZXYsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN1Ym1pdEhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgc2V0RGF0YSgocHJldikgPT4ge1xyXG4gICAgICByZXR1cm4geyBpc0xvYWRpbmc6IHRydWUsIC4uLnByZXYgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS92MS9hcnRpY2xlXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT0gMjAwKSB7XHJcbiAgICAgICAgICB0b2FzdCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkVycm9yXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiByZXNwb25zZS5tZXNzYWdlLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgdG9hc3Qoe1xyXG4gICAgICAgICAgdGl0bGU6IFwiU3VjY2Vzc1wiLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEubWVzc2FnZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0RGF0YSh7XHJcbiAgICAgICAgICB0aXRsZTogXCJcIixcclxuICAgICAgICAgIGNvbnRlbnQ6IFwiXCIsXHJcbiAgICAgICAgICBjYXRlZ29yeTogXCJcIixcclxuICAgICAgICAgIHN0YXR1czogXCJkcmFmdFwiLFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiVGhlcmUgd2FzIGEgcHJvYmxlbSB3aXRoIHlvdXIgZmV0Y2ggb3BlcmF0aW9uOlwiLCBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0SGFuZGxlcn0gY2xhc3NOYW1lPVwic3BhY2UteS0zXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggZmxleC1jb2wgZ2FwLTFcIj5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpdGxlXCIgY2xhc3NOYW1lPVwidGV4dC1zbVwiPlxyXG4gICAgICAgICAgVGl0bGVcclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicHktMiBweC0zIHRleHQtc20gZHJvcC1zaGFkb3ctc20gcm91bmRlZC1zbVwiXHJcbiAgICAgICAgICBuYW1lPVwidGl0bGVcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJQb3N0IHRpdGxlLi4uXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgdmFsdWU9e2RhdGEudGl0bGV9XHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGZsZXgtY29sIGdhcC0xXCI+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb250ZW50XCIgY2xhc3NOYW1lPVwidGV4dC1zbVwiPlxyXG4gICAgICAgICAgQ29udGVudFxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICBuYW1lPVwiY29udGVudFwiXHJcbiAgICAgICAgICBjb2xzPVwiMzBcIlxyXG4gICAgICAgICAgcm93cz1cIjE1XCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29udGVudC4uLlwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgIHZhbHVlPXtkYXRhLmNvbnRlbnR9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJweS0yIHB4LTMgdGV4dC1zbSBkcm9wLXNoYWRvdy1zbSByb3VuZGVkLXNtXCJcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGZsZXgtY29sIGdhcC0xXCI+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjYXRlZ29yeVwiIGNsYXNzTmFtZT1cInRleHQtc21cIj5cclxuICAgICAgICAgIENhdGVnb3J5XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTIgcHgtMyB0ZXh0LXNtIGRyb3Atc2hhZG93LXNtIHJvdW5kZWQtc21cIlxyXG4gICAgICAgICAgbmFtZT1cImNhdGVnb3J5XCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgdmFsdWU9e2RhdGEuY2F0ZWdvcnl9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImNhdGVnb3J5Li4uXCJcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTEgYmctc2xhdGUtMjAwIG1heC13LTQwIGZsZXggZ2FwLTFcIj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgZGF0YS5zdGF0dXMgPT0gXCJkcmFmdFwiXHJcbiAgICAgICAgICAgICAgICA/IFwiYmcteWVsbG93LTQwMCBmb250LWJvbGRcIlxyXG4gICAgICAgICAgICAgICAgOiBcImJnLXNsYXRlLTEwMCB0ZXh0LXNsYXRlLTMwMFwiXHJcbiAgICAgICAgICAgIH0gY3Vyc29yLXBvaW50ZXIgZmxleC0xIHRleHQtc20gdGV4dC1jZW50ZXIgcHktMmB9XHJcbiAgICAgICAgICAgIHZhbHVlPVwiZHJhZnRcIlxyXG4gICAgICAgICAgICBuYW1lPVwic3RhdHVzXCJcclxuICAgICAgICAgICAgb25DbGljaz17Y2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgRHJhZnRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcclxuICAgICAgICAgICAgICBkYXRhLnN0YXR1cyA9PSBcInB1Ymxpc2hcIlxyXG4gICAgICAgICAgICAgICAgPyBcImJnLWdyZWVuLTQwMCBmb250LWJvbGRcIlxyXG4gICAgICAgICAgICAgICAgOiBcImJnLXNsYXRlLTEwMCB0ZXh0LXNsYXRlLTMwMFwiXHJcbiAgICAgICAgICAgIH0gY3Vyc29yLXBvaW50ZXIgZmxleC0xIHRleHQtc20gdGV4dC1jZW50ZXIgcHktMmB9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2NoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgIHZhbHVlPVwicHVibGlzaFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBQdWJsaXNoXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibXQtMyB3LWZ1bGwgYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS02MDAgcHktMyB0ZXh0LXNtIHJvdW5kZWQgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgIFN1Ym1pdFxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVRvYXN0IiwiUG9zdEZvcm0iLCJ0b2FzdCIsImRhdGEiLCJzZXREYXRhIiwidGl0bGUiLCJjb250ZW50IiwiY2F0ZWdvcnkiLCJzdGF0dXMiLCJpc0xvYWRpbmciLCJjaGFuZ2VIYW5kbGVyIiwiZSIsInByZXYiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJzdWJtaXRIYW5kbGVyIiwicHJldmVudERlZmF1bHQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXNwb25zZSIsImRlc2NyaXB0aW9uIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJqc29uIiwibG9hZGluZyIsImNhdGNoIiwiZXJyb3IiLCJmb3JtIiwib25TdWJtaXQiLCJjbGFzc05hbWUiLCJkaXYiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJ0ZXh0YXJlYSIsImNvbHMiLCJyb3dzIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/PostForm.jsx\n"));

/***/ })

});