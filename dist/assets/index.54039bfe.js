import{t as e,r,i as o,c as t,a as n}from"./vendor.8b5da6db.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?r.credentials="include":"anonymous"===e.crossorigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();var i="_App_9g4xh_1",s="_header_9g4xh_11";const l=e("<div><header></header></div>"),c=new r({en:{hello:"Hello world!"}});c.locale("en"),n((function(){return(()=>{const e=l.cloneNode(!0),r=e.firstChild;return o(r,(()=>c.t("hello"))),t((o=>{const t=i,n=s;return t!==o._v$&&(e.className=o._v$=t),n!==o._v$2&&(r.className=o._v$2=n),o}),{_v$:void 0,_v$2:void 0}),e})()}),document.getElementById("root"));