"use strict";(self.webpackChunktarant_page=self.webpackChunktarant_page||[]).push([[9097],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=n.createContext({}),p=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=p(t.components);return n.createElement(l.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:e},c),{},{components:r})):n.createElement(f,i({ref:e},c))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[d]="string"==typeof t?t:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5346:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2},i="Tarant DB Persist",s={unversionedId:"modules/tarant-db-persist",id:"modules/tarant-db-persist",title:"Tarant DB Persist",description:"Motivation",source:"@site/docs/modules/tarant-db-persist.md",sourceDirName:"modules",slug:"/modules/tarant-db-persist",permalink:"/docs/modules/tarant-db-persist",draft:!1,editUrl:"https://github.com/tarantx/tarant-page/tree/main/docs/modules/tarant-db-persist.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Tarant",permalink:"/docs/modules/tarant"},next:{title:"Tarant Local Storage",permalink:"/docs/modules/tarant-local-storage"}},l={},p=[{value:"Motivation",id:"motivation",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:'Created my free logo at <a href="http://logomakr.com" title="Logo Makr">LogoMakr.com</a>',id:"created-my-free-logo-at-logomakrcom",level:5}],c={toc:p},d="wrapper";function u(t){let{components:e,...r}=t;return(0,a.kt)(d,(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tarant-db-persist"},"Tarant DB Persist"),(0,a.kt)("h2",{id:"motivation"},"Motivation"),(0,a.kt)("p",null,"Provide the capabilities to actors on the backend to be persisted using waterline adapters."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"add it to your project using ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install tarant-db-persist --save")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn add tarant-db-persist")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Initialize the sync client with the waterline adapter from the persist storage you will be interested on"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { ActorSystem, ActorSystemConfigurationBuilder } from 'tarant';\nimport * as diskAdapter from 'sails-disk';\nimport { PersistResolverMaterializer } from 'tarant-db-persist';\nimport AppActor from '../AppActor';\n\nconst config = {\n    adapter: diskAdapter,\n    actorTypes: { AppActor }\n  };\n\nconst persister = await PersistMaterializer.create(config)\n\nconst system : any = ActorSystem.for(ActorSystemConfigurationBuilder.define()\n    .withMaterializers([persister])\n    .withResolvers([persister])\n    .done())  \n\n")),(0,a.kt)("p",null,"your actors will require to implement IUpdatable (UpdateFrom) and IExportable (toJson)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { Actor } from "tarant";\nimport { IUpdatable, IExportable } from "tarant-db-persist"\n\nexport default class AppActor extends Actor implements IUpdatable, IExportable {\n\n  constructor(name: string) {\n      super(name)\n  }\n\n  addOne() {\n      this.counter++\n  }\n\n  toJson(){\n        return {\n            id: this.id,\n            type:"AppActor",\n            counter: this.counter\n        }\n    }\n\n    updateFrom({ counter }: any): void {\n        this.counter = counter\n    }\n\n    private counter = 1; \n}\n\n')),(0,a.kt)("h5",{id:"created-my-free-logo-at-logomakrcom"},"Created my free ",(0,a.kt)("a",{parentName:"h5",href:"https://logomakr.com/8lSyYS"},"logo")," at ",(0,a.kt)("a",{href:"http://logomakr.com",title:"Logo Makr"},"LogoMakr.com")))}u.isMDXComponent=!0}}]);