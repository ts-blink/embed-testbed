(this["webpackJsonpembed-testbed"]=this["webpackJsonpembed-testbed"]||[]).push([[0],[,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Page}));var _Users_ayon_ghosh_dev_embed_testbed_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_monaco_editor_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(11),_snippets_search__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(8),_snippets_pinboard__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(9),_snippets_app__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(10),_playground_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(19),_playground_css__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_playground_css__WEBPACK_IMPORTED_MODULE_6__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(2),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__),_snippetMap,Page;!function(e){e.Search="search",e.Viz="viz",e.App="app"}(Page||(Page={}));var snippetMap=(_snippetMap={},Object(_Users_ayon_ghosh_dev_embed_testbed_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.a)(_snippetMap,Page.Search,_snippets_search__WEBPACK_IMPORTED_MODULE_3__.a),Object(_Users_ayon_ghosh_dev_embed_testbed_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.a)(_snippetMap,Page.Viz,_snippets_pinboard__WEBPACK_IMPORTED_MODULE_4__.a),Object(_Users_ayon_ghosh_dev_embed_testbed_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.a)(_snippetMap,Page.App,_snippets_app__WEBPACK_IMPORTED_MODULE_5__.a),_snippetMap);function compileSnippet(e,_){var n=e;for(var t in _){var r=_[t];n=n.replace(new RegExp("<%=".concat(t,"%>"),"gi"),r)}return n}function getCompiledSnippet(e,_){return compileSnippet(snippetMap[e],_)}function Playground(_ref){var pageId=_ref.pageId,params=_ref.params,editorRef=Object(react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);function onEditorMount(e,_){editorRef.current=e}function resetPreview(){document.getElementById("ts-embed").innerHTML=""}function executeCode(){var code=editorRef.current.getValue();try{resetPreview(),eval(code)}catch(e){console.log(e)}}return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_monaco_editor_react__WEBPACK_IMPORTED_MODULE_2__.a,{height:"90vh",width:"500px",defaultLanguage:"javascript",defaultValue:"",value:getCompiledSnippet(pageId,params),options:{minimap:{enabled:!1}},onMount:onEditorMount}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{className:"runBtn",onClick:executeCode,children:"Run \u25b6"})]})}__webpack_exports__.b=Playground},,,function(e,_,n){"use strict";_.a="\nconst { init, SearchEmbed } = TsEmbedSdk;\ninit({\n    thoughtSpotHost: '<%=tshost%>',\n    authType: 'None'\n});\n\nconst searchEmbed = new SearchEmbed(\n    document.getElementById('ts-embed'), \n    {\n        frameParams: {\n            width: '100%',\n            height: '100%'\n        }\n    });\n\nsearchEmbed.render({});\n"},function(e,_,n){"use strict";_.a="\nconst { init, PinboardEmbed } = TsEmbedSdk;\ninit({\n    thoughtSpotHost: '<%=tshost%>',\n    authType: 'None'\n});\n\nconst vizEmbed = new PinboardEmbed(\n    document.getElementById('ts-embed'), \n    {\n        frameParams: {\n            width: '100%',\n            height: '100%'\n        }\n    });\n\nvizEmbed.render({\n    pinboardId: '<%=pinboardid%>'\n});\n"},function(e,_,n){"use strict";_.a="\n"},,,,,,,,,function(e,_,n){},,function(e,_,n){},function(e,_,n){},function(e,_,n){},function(e,_,n){"use strict";n.r(_);var t=n(1),r=n.n(t),a=n(7),s=n.n(a),c=n(12),i=n(3),o=n(5),d=(n(21),n(2));var p=function(){return Object(d.jsx)("div",{className:"preview",children:Object(d.jsx)("div",{id:"ts-embed"})})};n(22);function u(){var e=window.location.search;"/"===e.charAt(0)&&(e=e.substring(1)),"/"===e.charAt(e.length-1)&&(e=e.substring(0,e.length-1));var _=e.split("&"),n={};return _.forEach((function(e){var _=e.split("="),t=Object(i.a)(_,2),r=t[0],a=t[1];n[r]=a})),n}var b=function(){var e=Object(t.useState)(window.location.hash.substring(1)||"search"),_=Object(i.a)(e,2),n=_[0],r=_[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("header",{className:"App-header",children:["ThoughtSpot Everywhere Test Bed",Object(d.jsxs)("nav",{children:[Object(d.jsx)("label",{htmlFor:"id-show-menu",className:"show-menu",children:Object(d.jsx)("div",{className:"nav-icon",children:"\u2630"})}),Object(d.jsx)("input",{type:"checkbox",id:"id-show-menu",className:"checkbox-menu",role:"button"}),Object(d.jsx)("div",{className:"menu-block",children:Object(d.jsxs)("ul",{className:"navUL",children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",onClick:function(){return r(o.a.Search)},children:"Search"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",onClick:function(){return r(o.a.Viz)},children:"Viz"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",onClick:function(){return r(o.a.App)},children:"App"})})]})})]})]}),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(o.b,{pageId:n,params:u()}),Object(d.jsx)(p,{})]})]})},l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(_){var n=_.getCLS,t=_.getFID,r=_.getFCP,a=_.getLCP,s=_.getTTFB;n(e),t(e),r(e),a(e),s(e)}))};n(23);window.TsEmbedSdk=c,s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(b,{})}),document.getElementById("root")),l()}],[[24,1,2]]]);
//# sourceMappingURL=main.edcd721a.chunk.js.map