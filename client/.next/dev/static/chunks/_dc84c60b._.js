(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/assets/icons/down-arrow-sm.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/down-arrow-sm.93f9b054.svg");}),
"[project]/assets/icons/down-arrow-sm.svg.mjs { IMAGE => \"[project]/assets/icons/down-arrow-sm.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$down$2d$arrow$2d$sm$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/assets/icons/down-arrow-sm.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$down$2d$arrow$2d$sm$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 5,
    height: 3,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Dropdown.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Dropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$down$2d$arrow$2d$sm$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$icons$2f$down$2d$arrow$2d$sm$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/assets/icons/down-arrow-sm.svg.mjs { IMAGE => "[project]/assets/icons/down-arrow-sm.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
;
var _s = __turbopack_context__.k.signature();
;
;
function Dropdown({ id, list, label, defaultValue }) {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedOption, setSelectedOption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultValue);
    const handleOptionSelect = (option)=>{
        setSelectedOption(option);
        setIsOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative mb-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: id,
                className: "font-semibold text-[7px] text-[#454545]",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/Dropdown.jsx",
                lineNumber: 14,
                columnNumber: 16
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                name: id,
                id: id,
                value: selectedOption,
                onChange: (e)=>setSelectedOption(e.target.value),
                className: "hidden",
                children: list && list.map((option, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: option,
                        children: option
                    }, index, false, {
                        fileName: "[project]/components/Dropdown.jsx",
                        lineNumber: 17,
                        columnNumber: 26
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/Dropdown.jsx",
                lineNumber: 15,
                columnNumber: 16
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                type: "button",
                className: "flex items-center justify-between w-full min-h-4.75 border-[0.2px] border-[#888888] rounded-xs h-4.75 font-semibold text-left text-[7px] text-[#181818] px-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex-1 overflow-hidden line-clamp-1",
                        children: selectedOption
                    }, void 0, false, {
                        fileName: "[project]/components/Dropdown.jsx",
                        lineNumber: 21,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$down$2d$arrow$2d$sm$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$icons$2f$down$2d$arrow$2d$sm$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                        alt: "down arrow icon",
                        className: `${isOpen ? '' : 'rotate-180'}`
                    }, void 0, false, {
                        fileName: "[project]/components/Dropdown.jsx",
                        lineNumber: 22,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Dropdown.jsx",
                lineNumber: 20,
                columnNumber: 16
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: `absolute top-full w-full max-h-32.25 bg-white x-shadow-5 rounded-[1px] overflow-y-scroll p-1 z-10 ${isOpen ? 'block' : 'hidden'}`,
                children: list && list.map((option, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        onClick: ()=>handleOptionSelect(option),
                        className: `font-semibold text-[7px] text-[#181818] rounded-xs h-6 cursor-pointer px-1 leading-6 ${selectedOption === option ? 'bg-[#F5F5F5]' : ''}`,
                        children: option
                    }, index, false, {
                        fileName: "[project]/components/Dropdown.jsx",
                        lineNumber: 26,
                        columnNumber: 26
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/Dropdown.jsx",
                lineNumber: 24,
                columnNumber: 16
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Dropdown.jsx",
        lineNumber: 13,
        columnNumber: 11
    }, this);
}
_s(Dropdown, "WYTnhfxEdYWPPsjcoRIG48NMIAU=");
_c = Dropdown;
var _c;
__turbopack_context__.k.register(_c, "Dropdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/assets/icons/x-mark-sm.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/x-mark-sm.ba3682a2.svg");}),
"[project]/assets/icons/x-mark-sm.svg.mjs { IMAGE => \"[project]/assets/icons/x-mark-sm.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$x$2d$mark$2d$sm$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/assets/icons/x-mark-sm.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$x$2d$mark$2d$sm$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 5,
    height: 5,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/assets/icons/user-plus.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/user-plus.b3bce554.svg");}),
"[project]/assets/icons/user-plus.svg.mjs { IMAGE => \"[project]/assets/icons/user-plus.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$user$2d$plus$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/assets/icons/user-plus.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$user$2d$plus$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 10,
    height: 10,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/assets/icons/bank.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/bank.de772383.svg");}),
"[project]/assets/icons/bank.svg.mjs { IMAGE => \"[project]/assets/icons/bank.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$bank$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/assets/icons/bank.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$bank$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 9,
    height: 8,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/assets/icons/file.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/file.708993b3.svg");}),
"[project]/assets/icons/file.svg.mjs { IMAGE => \"[project]/assets/icons/file.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$file$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/assets/icons/file.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$file$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 11,
    height: 10,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/assets/icons/light.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/light.71ca072e.svg");}),
"[project]/assets/icons/light.svg.mjs { IMAGE => \"[project]/assets/icons/light.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$light$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/assets/icons/light.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$light$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 9,
    height: 11,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/assets/icons/location.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/location.5b1767dc.svg");}),
"[project]/assets/icons/location.svg.mjs { IMAGE => \"[project]/assets/icons/location.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$location$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/assets/icons/location.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$location$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 11,
    height: 10,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/assets/icons/calendar.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/calendar.5f3e57dd.svg");}),
"[project]/assets/icons/calendar.svg.mjs { IMAGE => \"[project]/assets/icons/calendar.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$calendar$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/assets/icons/calendar.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$calendar$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 9,
    height: 10,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/assets/icons/certificate.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/certificate.691715cf.svg");}),
"[project]/assets/icons/certificate.svg.mjs { IMAGE => \"[project]/assets/icons/certificate.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$certificate$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/assets/icons/certificate.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$certificate$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 11,
    height: 11,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/assets/icons/van.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/van.837a67d7.svg");}),
"[project]/assets/icons/van.svg.mjs { IMAGE => \"[project]/assets/icons/van.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$van$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/assets/icons/van.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$van$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 13,
    height: 8,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/assets/icons/support.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/support.de536237.svg");}),
"[project]/assets/icons/support.svg.mjs { IMAGE => \"[project]/assets/icons/support.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$support$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/assets/icons/support.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$support$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 11,
    height: 11,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ServiceSelect.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServiceSelect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$down$2d$arrow$2d$sm$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$icons$2f$down$2d$arrow$2d$sm$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/assets/icons/down-arrow-sm.svg.mjs { IMAGE => "[project]/assets/icons/down-arrow-sm.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$x$2d$mark$2d$sm$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$icons$2f$x$2d$mark$2d$sm$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/assets/icons/x-mark-sm.svg.mjs { IMAGE => "[project]/assets/icons/x-mark-sm.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$user$2d$plus$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$icons$2f$user$2d$plus$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/assets/icons/user-plus.svg.mjs { IMAGE => "[project]/assets/icons/user-plus.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$bank$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$icons$2f$bank$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/assets/icons/bank.svg.mjs { IMAGE => "[project]/assets/icons/bank.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$file$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$icons$2f$file$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/assets/icons/file.svg.mjs { IMAGE => "[project]/assets/icons/file.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$light$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$icons$2f$light$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/assets/icons/light.svg.mjs { IMAGE => "[project]/assets/icons/light.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$location$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$icons$2f$location$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/assets/icons/location.svg.mjs { IMAGE => "[project]/assets/icons/location.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$calendar$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$icons$2f$calendar$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/assets/icons/calendar.svg.mjs { IMAGE => "[project]/assets/icons/calendar.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$certificate$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$icons$2f$certificate$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/assets/icons/certificate.svg.mjs { IMAGE => "[project]/assets/icons/certificate.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$van$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$icons$2f$van$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/assets/icons/van.svg.mjs { IMAGE => "[project]/assets/icons/van.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$support$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$icons$2f$support$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/assets/icons/support.svg.mjs { IMAGE => "[project]/assets/icons/support.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
;
;
;
function ServiceSelect() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedOption, setSelectedOption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const handleOptionSelect = (option)=>{
        setSelectedOption((prev)=>{
            if (!prev.includes(option)) {
                return [
                    ...prev,
                    option
                ];
            }
            return prev;
        });
        setIsOpen(false);
    };
    const handleRemoveOption = (option)=>{
        setSelectedOption((prev)=>prev.filter((item)=>item !== option));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative mb-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: "additionalOfferings",
                className: "font-semibold text-[7px] text-[#454545]",
                children: "Service Offerings"
            }, void 0, false, {
                fileName: "[project]/components/ServiceSelect.jsx",
                lineNumber: 33,
                columnNumber: 16
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                name: "additionalOfferings",
                id: "additionalOfferings",
                value: selectedOption,
                onChange: (e)=>setSelectedOption(e.target.value),
                className: "hidden"
            }, void 0, false, {
                fileName: "[project]/components/ServiceSelect.jsx",
                lineNumber: 34,
                columnNumber: 16
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>setIsOpen(!isOpen),
                className: "flex items-center justify-between w-full min-h-4.75 border-[0.2px] border-[#888888] rounded-xs font-semibold text-left text-[7px] text-[#454545] px-1.5 py-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex flex-wrap gap-1",
                        children: selectedOption.length > 0 && selectedOption.map((option, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "flex items-center gap-2 h-3.5 rounded-xs bg-[#F5F5F5] px-1",
                                children: [
                                    option,
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleRemoveOption(option),
                                        type: "button",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$x$2d$mark$2d$sm$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$icons$2f$x$2d$mark$2d$sm$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                            alt: "x mark icon"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ServiceSelect.jsx",
                                            lineNumber: 39,
                                            columnNumber: 191
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/ServiceSelect.jsx",
                                        lineNumber: 39,
                                        columnNumber: 126
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/components/ServiceSelect.jsx",
                                lineNumber: 39,
                                columnNumber: 31
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/ServiceSelect.jsx",
                        lineNumber: 37,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$down$2d$arrow$2d$sm$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$icons$2f$down$2d$arrow$2d$sm$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                        alt: "down arrow icon",
                        className: `${isOpen ? '' : 'rotate-180'}`
                    }, void 0, false, {
                        fileName: "[project]/components/ServiceSelect.jsx",
                        lineNumber: 42,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ServiceSelect.jsx",
                lineNumber: 36,
                columnNumber: 16
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: `absolute top-full w-full max-h-32.25 bg-white x-shadow-5 rounded-[1px] overflow-y-scroll p-1 z-10 ${isOpen ? 'block' : 'hidden'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        onClick: ()=>handleOptionSelect("Company Secretary Subscription"),
                        className: `flex items-center gap-2 h-7.75 rounded-xs px-1.5 cursor-pointer ${selectedOption.includes("Company Secretary Subscription") ? 'bg-[#F5F5F5]' : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$user$2d$plus$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$icons$2f$user$2d$plus$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                alt: "user icon"
                            }, void 0, false, {
                                fileName: "[project]/components/ServiceSelect.jsx",
                                lineNumber: 46,
                                columnNumber: 26
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                        className: "font-semibold text-[7px] text-[#181818]",
                                        children: "Company Secretary Subscription"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ServiceSelect.jsx",
                                        lineNumber: 48,
                                        columnNumber: 31
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold text-[5.5px] text-[#888888] -mt-px",
                                        children: "Enjoy 1 month free Company Secretary Subscription"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ServiceSelect.jsx",
                                        lineNumber: 49,
                                        columnNumber: 31
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ServiceSelect.jsx",
                                lineNumber: 47,
                                columnNumber: 26
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ServiceSelect.jsx",
                        lineNumber: 45,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        onClick: ()=>handleOptionSelect("Opening of a Bank Account"),
                        className: `flex items-center gap-2 h-7.75 rounded-xs px-1.5 cursor-pointer ${selectedOption.includes("Opening of a Bank Account") ? 'bg-[#F5F5F5]' : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$bank$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$icons$2f$bank$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                alt: "user icon"
                            }, void 0, false, {
                                fileName: "[project]/components/ServiceSelect.jsx",
                                lineNumber: 53,
                                columnNumber: 26
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                        className: "font-semibold text-[7px] text-[#181818]",
                                        children: "Opening of a Bank Account"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ServiceSelect.jsx",
                                        lineNumber: 55,
                                        columnNumber: 31
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold text-[5.5px] text-[#888888] -mt-px",
                                        children: "Complimentary Corporate Bank Account Opening"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ServiceSelect.jsx",
                                        lineNumber: 56,
                                        columnNumber: 31
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ServiceSelect.jsx",
                                lineNumber: 54,
                                columnNumber: 26
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ServiceSelect.jsx",
                        lineNumber: 52,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        onClick: ()=>handleOptionSelect("Access Company Records and SSM Forms"),
                        className: `flex items-center gap-2 h-7.75 rounded-xs px-1.5 cursor-pointer ${selectedOption.includes("Access Company Records and SSM Forms") ? 'bg-[#F5F5F5]' : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$file$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$icons$2f$file$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                alt: "user icon"
                            }, void 0, false, {
                                fileName: "[project]/components/ServiceSelect.jsx",
                                lineNumber: 60,
                                columnNumber: 26
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                        className: "font-semibold text-[7px] text-[#181818]",
                                        children: "Access Company Records and SSM Forms"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ServiceSelect.jsx",
                                        lineNumber: 62,
                                        columnNumber: 31
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold text-[5.5px] text-[#888888] -mt-px",
                                        children: "24/7 Secure Access to Statutory Company Records"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ServiceSelect.jsx",
                                        lineNumber: 63,
                                        columnNumber: 31
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ServiceSelect.jsx",
                                lineNumber: 61,
                                columnNumber: 26
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ServiceSelect.jsx",
                        lineNumber: 59,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        onClick: ()=>handleOptionSelect("Priority Filling"),
                        className: `flex items-center gap-2 h-7.75 rounded-xs px-1.5 cursor-pointer ${selectedOption.includes("Priority Filling") ? 'bg-[#F5F5F5]' : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$light$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$icons$2f$light$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                alt: "user icon"
                            }, void 0, false, {
                                fileName: "[project]/components/ServiceSelect.jsx",
                                lineNumber: 67,
                                columnNumber: 26
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                        className: "font-semibold text-[7px] text-[#181818]",
                                        children: "Priority Filling"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ServiceSelect.jsx",
                                        lineNumber: 69,
                                        columnNumber: 31
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold text-[5.5px] text-[#888888] -mt-px",
                                        children: "Documents are prioritized for submission and swift processing - within 24 hours"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ServiceSelect.jsx",
                                        lineNumber: 70,
                                        columnNumber: 31
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ServiceSelect.jsx",
                                lineNumber: 68,
                                columnNumber: 26
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ServiceSelect.jsx",
                        lineNumber: 66,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        onClick: ()=>handleOptionSelect("Registered Office Address Use"),
                        className: `flex items-center gap-2 h-7.75 rounded-xs px-1.5 cursor-pointer ${selectedOption.includes("Registered Office Address Use") ? 'bg-[#F5F5F5]' : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$location$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$icons$2f$location$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                alt: "user icon"
                            }, void 0, false, {
                                fileName: "[project]/components/ServiceSelect.jsx",
                                lineNumber: 74,
                                columnNumber: 26
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                        className: "font-semibold text-[7px] text-[#181818]",
                                        children: "Registered Office Address Use"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ServiceSelect.jsx",
                                        lineNumber: 76,
                                        columnNumber: 31
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold text-[5.5px] text-[#888888] -mt-px",
                                        children: "Use of SSM-Compliant Registered Office Address with Optional Mail Forwarding"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ServiceSelect.jsx",
                                        lineNumber: 77,
                                        columnNumber: 31
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ServiceSelect.jsx",
                                lineNumber: 75,
                                columnNumber: 26
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ServiceSelect.jsx",
                        lineNumber: 73,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        onClick: ()=>handleOptionSelect("Compliance Calendar Setup"),
                        className: `flex items-center gap-2 h-7.75 rounded-xs px-1.5 cursor-pointer ${selectedOption.includes("Compliance Calendar Setup") ? 'bg-[#F5F5F5]' : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$calendar$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$icons$2f$calendar$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                alt: "user icon"
                            }, void 0, false, {
                                fileName: "[project]/components/ServiceSelect.jsx",
                                lineNumber: 81,
                                columnNumber: 26
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                        className: "font-semibold text-[7px] text-[#181818]",
                                        children: "Compliance Calendar Setup"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ServiceSelect.jsx",
                                        lineNumber: 83,
                                        columnNumber: 31
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold text-[5.5px] text-[#888888] -mt-px",
                                        children: "Get automated reminders for all statutory deadlines"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ServiceSelect.jsx",
                                        lineNumber: 84,
                                        columnNumber: 31
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ServiceSelect.jsx",
                                lineNumber: 82,
                                columnNumber: 26
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ServiceSelect.jsx",
                        lineNumber: 80,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        onClick: ()=>handleOptionSelect("First Share Certificate Issued Free"),
                        className: `flex items-center gap-2 h-7.75 rounded-xs px-1.5 cursor-pointer ${selectedOption.includes("First Share Certificate Issued Free") ? 'bg-[#F5F5F5]' : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$certificate$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$icons$2f$certificate$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                alt: "user icon"
                            }, void 0, false, {
                                fileName: "[project]/components/ServiceSelect.jsx",
                                lineNumber: 88,
                                columnNumber: 26
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                        className: "font-semibold text-[7px] text-[#181818]",
                                        children: "First Share Certificate Issued Free"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ServiceSelect.jsx",
                                        lineNumber: 90,
                                        columnNumber: 31
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold text-[5.5px] text-[#888888] -mt-px",
                                        children: "Receive your company’s first official share certificate at no cost "
                                    }, void 0, false, {
                                        fileName: "[project]/components/ServiceSelect.jsx",
                                        lineNumber: 91,
                                        columnNumber: 31
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ServiceSelect.jsx",
                                lineNumber: 89,
                                columnNumber: 26
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ServiceSelect.jsx",
                        lineNumber: 87,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        onClick: ()=>handleOptionSelect("CTC Delivery & Courier Handling"),
                        className: `flex items-center gap-2 h-7.75 rounded-xs px-1.5 cursor-pointer ${selectedOption.includes("CTC Delivery & Courier Handling") ? 'bg-[#F5F5F5]' : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$van$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$icons$2f$van$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                alt: "user icon"
                            }, void 0, false, {
                                fileName: "[project]/components/ServiceSelect.jsx",
                                lineNumber: 95,
                                columnNumber: 26
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                        className: "font-semibold text-[7px] text-[#181818]",
                                        children: "CTC Delivery & Courier Handling"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ServiceSelect.jsx",
                                        lineNumber: 97,
                                        columnNumber: 31
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold text-[5.5px] text-[#888888] -mt-px",
                                        children: "Have your company documents and certified copies delivered securely to you"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ServiceSelect.jsx",
                                        lineNumber: 98,
                                        columnNumber: 31
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ServiceSelect.jsx",
                                lineNumber: 96,
                                columnNumber: 26
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ServiceSelect.jsx",
                        lineNumber: 94,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        onClick: ()=>handleOptionSelect("Chat Support"),
                        className: `flex items-center gap-2 h-7.75 rounded-xs px-1.5 cursor-pointer ${selectedOption.includes("Chat Support") ? 'bg-[#F5F5F5]' : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$support$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$icons$2f$support$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                alt: "user icon"
                            }, void 0, false, {
                                fileName: "[project]/components/ServiceSelect.jsx",
                                lineNumber: 102,
                                columnNumber: 26
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                        className: "font-semibold text-[7px] text-[#181818]",
                                        children: "Chat Support"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ServiceSelect.jsx",
                                        lineNumber: 104,
                                        columnNumber: 31
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold text-[5.5px] text-[#888888] -mt-px",
                                        children: "Always-On Chat Support for Compliance, Filing, and General Queries"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ServiceSelect.jsx",
                                        lineNumber: 105,
                                        columnNumber: 31
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ServiceSelect.jsx",
                                lineNumber: 103,
                                columnNumber: 26
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ServiceSelect.jsx",
                        lineNumber: 101,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ServiceSelect.jsx",
                lineNumber: 44,
                columnNumber: 16
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ServiceSelect.jsx",
        lineNumber: 32,
        columnNumber: 11
    }, this);
}
_s(ServiceSelect, "+BgwPkfX+2O5urOUfLzhNYRLdtk=");
_c = ServiceSelect;
var _c;
__turbopack_context__.k.register(_c, "ServiceSelect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/assets/icons/info-2.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/info-2.5c56b2b1.svg");}),
"[project]/assets/icons/info-2.svg.mjs { IMAGE => \"[project]/assets/icons/info-2.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$info$2d$2$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/assets/icons/info-2.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$info$2d$2$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 5,
    height: 5,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/assets/icons/cloud.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/cloud.0dd041a9.svg");}),
"[project]/assets/icons/cloud.svg.mjs { IMAGE => \"[project]/assets/icons/cloud.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$cloud$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/assets/icons/cloud.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$cloud$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 29,
    height: 25,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/assets/icons/trash.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/trash.1d9220c9.svg");}),
"[project]/assets/icons/trash.svg.mjs { IMAGE => \"[project]/assets/icons/trash.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$trash$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/assets/icons/trash.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$trash$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 6,
    height: 6,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ImageUpload.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ImageUpload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$info$2d$2$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$icons$2f$info$2d$2$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/assets/icons/info-2.svg.mjs { IMAGE => "[project]/assets/icons/info-2.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$cloud$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$icons$2f$cloud$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/assets/icons/cloud.svg.mjs { IMAGE => "[project]/assets/icons/cloud.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$trash$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$icons$2f$trash$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/assets/icons/trash.svg.mjs { IMAGE => "[project]/assets/icons/trash.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
;
;
;
;
function ImageUpload({ id, position, data, handleUpload, handleRemove }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-semibold text-[7px] text-[#222222]",
                children: [
                    "Service - Image (",
                    position,
                    ")"
                ]
            }, void 0, true, {
                fileName: "[project]/components/ImageUpload.jsx",
                lineNumber: 9,
                columnNumber: 16
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "flex items-center gap-0.5 mb-0.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$info$2d$2$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$icons$2f$info$2d$2$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                        alt: "info icon"
                    }, void 0, false, {
                        fileName: "[project]/components/ImageUpload.jsx",
                        lineNumber: 11,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[4px] text-[#888888]",
                        children: "Maximum of 1 Image"
                    }, void 0, false, {
                        fileName: "[project]/components/ImageUpload.jsx",
                        lineNumber: 12,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ImageUpload.jsx",
                lineNumber: 10,
                columnNumber: 16
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: id,
                className: "flex flex-col justify-center items-center gap-0.5 h-18 border border-dashed x-border-dashes border-black text-[4px] text-[#888888]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$cloud$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$icons$2f$cloud$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                        alt: "cloud icon"
                    }, void 0, false, {
                        fileName: "[project]/components/ImageUpload.jsx",
                        lineNumber: 15,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center justify-center w-7.25 h-1.75 rounded-full bg-[#002F70] text-white",
                        children: "Browse"
                    }, void 0, false, {
                        fileName: "[project]/components/ImageUpload.jsx",
                        lineNumber: 16,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "or"
                    }, void 0, false, {
                        fileName: "[project]/components/ImageUpload.jsx",
                        lineNumber: 17,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Drag a file to upload"
                    }, void 0, false, {
                        fileName: "[project]/components/ImageUpload.jsx",
                        lineNumber: 18,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ImageUpload.jsx",
                lineNumber: 14,
                columnNumber: 16
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "flex items-center justify-between mt-0.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[4px] text-[#888888]",
                        children: "Accepted formats: JPG, JPEG, PNG or WEBP"
                    }, void 0, false, {
                        fileName: "[project]/components/ImageUpload.jsx",
                        lineNumber: 21,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[4px] text-[#888888]",
                        children: "Maximum file size: 4MB"
                    }, void 0, false, {
                        fileName: "[project]/components/ImageUpload.jsx",
                        lineNumber: 22,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ImageUpload.jsx",
                lineNumber: 20,
                columnNumber: 16
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                onChange: handleUpload,
                accept: "image/jpeg,image/png,image/webp",
                type: "file",
                id: id,
                name: id,
                className: "hidden"
            }, void 0, false, {
                fileName: "[project]/components/ImageUpload.jsx",
                lineNumber: 24,
                columnNumber: 16
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${data ? "flex" : "hidden"} items-center gap-1.5 mt-1.5 h-8.5 bg-white x-shadow-6 px-1.5`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: data?.base64,
                        alt: "preview",
                        className: "w-9.25 h-6 object-cover"
                    }, void 0, false, {
                        fileName: "[project]/components/ImageUpload.jsx",
                        lineNumber: 26,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-semibold text-[5px] text-[#454545] mb-0.5",
                                children: data?.name
                            }, void 0, false, {
                                fileName: "[project]/components/ImageUpload.jsx",
                                lineNumber: 28,
                                columnNumber: 26
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "flex items-center font-semibold text-[4px] text-[#888888]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block w-6",
                                        children: "Size:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ImageUpload.jsx",
                                        lineNumber: 30,
                                        columnNumber: 31
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            data?.size,
                                            " MB"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ImageUpload.jsx",
                                        lineNumber: 31,
                                        columnNumber: 31
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ImageUpload.jsx",
                                lineNumber: 29,
                                columnNumber: 26
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "flex items-center font-semibold text-[4px] text-[#888888]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block w-6",
                                        children: "File type:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ImageUpload.jsx",
                                        lineNumber: 34,
                                        columnNumber: 31
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: data?.mediaType
                                    }, void 0, false, {
                                        fileName: "[project]/components/ImageUpload.jsx",
                                        lineNumber: 35,
                                        columnNumber: 31
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ImageUpload.jsx",
                                lineNumber: 33,
                                columnNumber: 26
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ImageUpload.jsx",
                        lineNumber: 27,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>handleRemove(id),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$icons$2f$trash$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$icons$2f$trash$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                            alt: "trash icon"
                        }, void 0, false, {
                            fileName: "[project]/components/ImageUpload.jsx",
                            lineNumber: 38,
                            columnNumber: 76
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ImageUpload.jsx",
                        lineNumber: 38,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ImageUpload.jsx",
                lineNumber: 25,
                columnNumber: 16
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ImageUpload.jsx",
        lineNumber: 8,
        columnNumber: 11
    }, this);
}
_c = ImageUpload;
var _c;
__turbopack_context__.k.register(_c, "ImageUpload");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(root)/specialists/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dropdown$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Dropdown.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ServiceSelect$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ServiceSelect.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ImageUpload$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ImageUpload.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function CreateSpecialist() {
    _s();
    const [isEditOpen, setIsEditOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPublishOpen, setIsPublishOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [medias, setMedias] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const handleImageUpload = (e)=>{
        const fieldId = e.target.id;
        const file = e.target.files[0];
        if (!file) return;
        let data = {
            fieldId,
            name: file.name,
            size: (file.size / (1024 * 1024)).toFixed(2),
            mimeType: file.type,
            mediaType: file.type.split('/')[1].toUpperCase()
        };
        const reader = new FileReader();
        reader.onload = (ev)=>{
            data = {
                ...data,
                base64: ev.target.result
            };
            if (medias.findIndex((m)=>m.fieldId === data.fieldId) === -1) {
                setMedias([
                    ...medias,
                    data
                ]);
            } else {
                const updatedMedias = medias.map((m)=>m.fieldId === data.fieldId ? data : m);
                setMedias(updatedMedias);
            }
        };
        reader.readAsDataURL(file);
    };
    const handleImageRemove = (id)=>{
        const updatedMedias = medias.filter((m)=>m.fieldId !== id);
        setMedias(updatedMedias);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-7.75 pl-5.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-bold text-[11px] text-[#222222] pb-2",
                                children: "Profile"
                            }, void 0, false, {
                                fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: company,
                                        alt: "company logo",
                                        className: "w-5 h-5 rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                className: "text-[9px] font-semibold text-[#454545] -mt-0.5",
                                                children: "Consistant CoSec Services "
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                lineNumber: 54,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-[6px] text-[#002F70]",
                                                children: "Company Secretary - Store"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                lineNumber: 55,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-7.75",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-bold text-[7px] text-[#888888] pl-5.5 pb-1.5",
                                children: "Dashboard"
                            }, void 0, false, {
                                fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "px-0.75",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "",
                                            className: "flex items-center gap-1 h-6.25 rounded-[3px] pl-4.75 text-[9px] text-white bg-[#002F70]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: tagIcon,
                                                    alt: "tag icon"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Specialists"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                            lineNumber: 62,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                        lineNumber: 62,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "",
                                            className: "flex items-center gap-1 h-6.25 rounded-[3px] pl-4.75 text-[9px] text-[#484848]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: peopleIcon,
                                                    alt: "people icon"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Clients"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                            lineNumber: 66,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "",
                                            className: "flex items-center gap-1 h-6.25 rounded-[3px] pl-4.75 text-[9px] text-[#484848]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: orderIcon,
                                                    alt: "order icon"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Service Orders"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                            lineNumber: 70,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "",
                                            className: "flex items-center gap-1 h-6.25 rounded-[3px] pl-4.75 text-[9px] text-[#484848]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: signatureIcon,
                                                    alt: "signature icon"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "eSignature"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                            lineNumber: 74,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                        lineNumber: 74,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "",
                                            className: "flex items-center gap-1 h-6.25 rounded-[3px] pl-4.75 text-[9px] text-[#484848]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: messageIcon,
                                                    alt: "message icon"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                    lineNumber: 79,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Messages"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                            lineNumber: 78,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "",
                                            className: "flex items-center gap-1 h-6.25 rounded-[3px] pl-4.75 text-[9px] text-[#484848]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: invoiceIcon,
                                                    alt: "invoice icon"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Invoices & Receipts"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                            lineNumber: 82,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-15.5 px-0.75",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "",
                                        className: "flex items-center gap-1 h-6.25 rounded-[3px] pl-4.75 text-[9px] text-[#484848]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: helpIcon,
                                                alt: "help icon"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                lineNumber: 91,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Help"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                lineNumber: 92,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                        lineNumber: 90,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "",
                                        className: "flex items-center gap-1 h-6.25 rounded-[3px] pl-4.75 text-[9px] text-[#484848]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: settingsIcon,
                                                alt: "settings icon"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                lineNumber: 95,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Settings"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                lineNumber: 96,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                        lineNumber: 94,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex flex-wrap flex-1 px-3 pt-7.75 gap-5 overflow-y-scroll",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-106 space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-semibold text-lg text-[#222222]",
                                        children: "Register a new company | Private Limited - Sdn Bhd"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-0.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-center flex-col w-57.25 bg-[#F5F5F5]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: photoScanIcon,
                                                        alt: "photo scan icon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "w-34.5 font-semibold text-[5px] text-[#888888]",
                                                        children: "Upload an image for your service listing in PNG, JPG or JPEG up to 4MB"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                lineNumber: 106,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-px w-48",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: banner1,
                                                        alt: "banner 1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: banner2,
                                                        alt: "banner 2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                        lineNumber: 112,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                lineNumber: 110,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-b-[0.5px] border-[#E0E0E0] pb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-[11px] text-[#222222] mb-2",
                                        children: "Description"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                        lineNumber: 117,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold text-[7px] text-[#888888]",
                                        children: "Describe your service here"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-b-[0.5px] border-[#E0E0E0] pb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-[11px] text-[#222222] mb-2",
                                        children: "Additional Offerings"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold text-[7px] text-[#888888]",
                                        children: "Enhance your service by adding additional offerings"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-b-[0.5px] border-[#E0E0E0] pb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-[11px] text-[#222222] mb-2",
                                        children: "Company Secretary"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                        lineNumber: 125,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1 mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                src: user3,
                                                                alt: "user",
                                                                className: "w-7.5 h-7.5 rounded-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                                lineNumber: 129,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                        className: "flex items-center",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-semibold text-[6px] text-[#222222]",
                                                                                children: "Grace Lam"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                                                lineNumber: 132,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                src: verifiedIcon,
                                                                                alt: "verified icon",
                                                                                className: "ml-1 mr-px"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                                                lineNumber: 133,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-semibold text-[3px] text-[#454545]",
                                                                                children: "Verified"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                                                lineNumber: 134,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                                        lineNumber: 131,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                        className: "font-semibold text-[4.5px] text-[#454545] -mt-0.5 mb-0.5",
                                                                        children: "Corpsec Services Sdn Bhd"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                                        lineNumber: 136,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: "",
                                                                        className: "flex items-center justify-center bg-[#071331] h-2.5 w-8.75 rounded-[1.5px] font-semibold text-[4px] text-white",
                                                                        children: "View Profile"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                                        lineNumber: 137,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                                lineNumber: 130,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold text-[4.5px] leading-1.5 text-[#454545]",
                                                        children: "A company secretarial service founded by Grace, who believes that every company deserves clarity, confidence, and care in their compliance journey. Inspired by the spirit of entrepreneurship, Aida treats every client’s business as if it were her own — attentive to detail, committed to deadlines, and focused on growth. Step into a partnership built on trust, transparency, and professional excellence. Whether you’re just starting out or managing a growing company, Aida is here to make your corporate governance smooth, secure, and stress-free. Your company’s peace of mind starts here"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                lineNumber: 127,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                        className: "font-semibold text-[8px] text-[#222222]",
                                                        children: "Certified Company Secretary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                        lineNumber: 143,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    className: "w-4.5",
                                                                    src: company1,
                                                                    alt: "company 1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                                    lineNumber: 145,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                                lineNumber: 145,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    className: "w-4.5",
                                                                    src: company2,
                                                                    alt: "company 2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                                    lineNumber: 146,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                                lineNumber: 146,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    className: "w-4.5",
                                                                    src: company3,
                                                                    alt: "company 3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                                    lineNumber: 147,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                                lineNumber: 147,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                        lineNumber: 144,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                lineNumber: 142,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-0.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsEditOpen(!isEditOpen),
                                        className: "flex items-center justify-center gap-1 h-5.25 w-14.75 rounded-[3px] bg-[#071331] text-white text-[7px]",
                                        children: "Edit"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                        lineNumber: 155,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "flex items-center justify-center gap-1 h-5.25 w-14.75 rounded-[3px] bg-[#002F70] text-white text-[7px]",
                                        children: "Publish"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                        lineNumber: 158,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white px-3 py-3 x-shadow-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-semibold text-lg",
                                        children: "Professional Fee"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                        lineNumber: 163,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold text-[9px] text-[#888888] -mt-1",
                                        children: "Set a rate for your service"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                        lineNumber: 164,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center my-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-red-hot font-semibold leading-6 text-xl border-b-[1.5px] border-[#222222]",
                                            children: "RM 1,800"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                            lineNumber: 166,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                        lineNumber: 165,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "flex flex-wrap",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex-1 font-semibold text-[9px] text-[#454545]",
                                                        children: "Base price"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-11 font-semibold text-[9px] text-[#222222]",
                                                        children: "RM 1,800"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                lineNumber: 169,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "flex flex-wrap",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex-1 font-semibold text-[9px] text-[#454545] underline",
                                                        children: "Service processing fee"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                        lineNumber: 174,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-11 font-semibold text-[9px] text-[#222222]",
                                                        children: "RM 540"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                        lineNumber: 175,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                lineNumber: 173,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "flex flex-wrap border-b-[0.5px] border-[#888888] mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex-1 font-semibold text-[9px] text-[#454545]",
                                                        children: "Total"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                        lineNumber: 178,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-11 font-semibold text-[9px] text-[#222222]",
                                                        children: "RM 2,340"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                        lineNumber: 179,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                lineNumber: 177,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "flex flex-wrap",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex-1 font-semibold text-[9px] text-[#454545]",
                                                        children: "Your returns"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-11 font-semibold text-[9px] text-[#222222]",
                                                        children: "RM 1,800"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                lineNumber: 181,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                        lineNumber: 168,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${isEditOpen ? 'absolute' : 'hidden'} inset-0 h-screen bg-black/15 z-30 overh`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-68.25  min-h-screen max-h-full overflow-y-scroll bg-white ml-auto px-4 py-3 z-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-red-hot font-semibold text-xs",
                                        children: "Edit Service"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                        lineNumber: 192,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsEditOpen(!isEditOpen),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: closeIcon,
                                            alt: "Close"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                            lineNumber: 193,
                                            columnNumber: 64
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                        lineNumber: 193,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                className: "mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "title",
                                                className: "font-semibold text-[7px] text-[#454545]",
                                                children: "Title"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                lineNumber: 197,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                id: "title",
                                                placeholder: "Enter your service title",
                                                className: "border-[0.2px] border-[#888888] rounded-xs h-4.75 font-semibold text-[5px] px-1.5 text-[#181818]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                lineNumber: 198,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                        lineNumber: 196,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "description",
                                                className: "font-semibold text-[7px] text-[#454545]",
                                                children: "Description"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                lineNumber: 201,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                id: "description",
                                                placeholder: "Describe your service here",
                                                className: "border-[0.2px] border-[#888888] rounded-xs h-16 font-semibold text-[5px] pt-1 px-1.5 text-[#181818]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                lineNumber: 202,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-[5px] ml-auto text-[#222222]",
                                                children: "(500 words)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                lineNumber: 204,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                        lineNumber: 200,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dropdown$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        id: "estimatedCompletionTime",
                                        list: [
                                            "1 day",
                                            "2 days",
                                            "3 days",
                                            "4 days",
                                            "5 days",
                                            "6 days"
                                        ],
                                        label: "Estimated Completion Time (Days)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                        lineNumber: 206,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "price",
                                                className: "font-semibold text-[7px] text-[#454545]",
                                                children: "Price"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                lineNumber: 208,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex h-4.75",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-0.5 px-1.5 bg-[#F5F5F5] border-[0.2px] border-r-0  rounded-l-xs",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                src: flag,
                                                                alt: "flag",
                                                                className: "w-2.75"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                                lineNumber: 211,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[7px] text-[#222222]",
                                                                children: "MYR"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                                lineNumber: 212,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                        lineNumber: 210,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        id: "price",
                                                        placeholder: "0.00",
                                                        className: "flex-1 text-[7px] px-1.5 border-[0.2px] border-black border-l-0 rounded-r-xs font-semibold text-[#181818]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                        lineNumber: 214,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                lineNumber: 209,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                        lineNumber: 207,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dropdown$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        list: [
                                            "Incorporation of a new company",
                                            "Monthly Company Secretary subscription",
                                            "Opening of Bank Account",
                                            "Appointment of Secretary",
                                            "Appointment/Resignation of Director",
                                            "Change of Nature of Business"
                                        ],
                                        defaultValue: "Incorporation of a new company",
                                        label: "Service category",
                                        id: "serviceCategory"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                        lineNumber: 217,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ServiceSelect$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                        lineNumber: 218,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ImageUpload$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        data: medias.find((m)=>m.fieldId === "imageUpload1"),
                                        handleUpload: handleImageUpload,
                                        handleRemove: handleImageRemove,
                                        id: "imageUpload1",
                                        position: "1st"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                        lineNumber: 219,
                                        columnNumber: 13
                                    }, this),
                                    medias.length >= 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ImageUpload$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        data: medias.find((m)=>m.fieldId === "imageUpload2"),
                                        handleUpload: handleImageUpload,
                                        handleRemove: handleImageRemove,
                                        id: "imageUpload2",
                                        position: "2nd"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                        lineNumber: 220,
                                        columnNumber: 36
                                    }, this),
                                    medias.length >= 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ImageUpload$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        data: medias.find((m)=>m.fieldId === "imageUpload3"),
                                        handleUpload: handleImageUpload,
                                        handleRemove: handleImageRemove,
                                        id: "imageUpload3",
                                        position: "3rd"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                        lineNumber: 221,
                                        columnNumber: 36
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-1 mt-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                className: "w-14.75 h-5 border-[0.7px] border-[#C4C4C4] rounded-[2.5px] text-[6px] text-[#C00306]",
                                                children: "Cancel"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                lineNumber: 223,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "w-14.75 h-5 rounded-[2.5px] bg-[#002F70] text-[6px] text-white",
                                                children: "Confirm"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                lineNumber: 224,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                        lineNumber: 222,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                lineNumber: 195,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>setIsEditOpen(false),
                        className: "absolute inset-0 z-10"
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                lineNumber: 189,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${isPublishOpen ? 'absolute' : 'hidden'} flex items-center justify-center inset-0 h-screen bg-black/80 z-50`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-107 rounded-[5px] px-3 py-2 bg-white z-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: infoIcon,
                                                alt: ""
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                lineNumber: 234,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-red-hot font-bold text-xl text-[#222222]",
                                                children: "Publish changes"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                                lineNumber: 235,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                        lineNumber: 233,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] text-[#454545]",
                                        children: "Do you want to publish these changes? It will appear in the marketplace listing"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                        lineNumber: 237,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                lineNumber: 232,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-end gap-2 mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsPublishOpen(false),
                                        type: "button",
                                        className: "w-22.25 h-6 border-[0.6px] border-[#222222] rounded-[3px] font-semibold text-[8px] text-[#222222]",
                                        children: "Continue Editing"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                        lineNumber: 240,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "w-22.25 h-6 rounded-[3px] bg-[#002F70] text-[8px] text-white",
                                        children: "Save changes"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                        lineNumber: 241,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                                lineNumber: 239,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>setIsPublishOpen(false),
                        className: "absolute inset-0 z-10"
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                        lineNumber: 244,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(root)/specialists/[id]/page.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_s(CreateSpecialist, "6YCYtjcxF0jLGkXRd4P08UReLek=");
_c = CreateSpecialist;
const __TURBOPACK__default__export__ = CreateSpecialist;
var _c;
__turbopack_context__.k.register(_c, "CreateSpecialist");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_dc84c60b._.js.map