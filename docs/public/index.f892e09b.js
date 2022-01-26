import{c as s,s as f,t as a,r as u,T as p,i as g,a as m}from"./vendor.aaf94955.js";const y=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function l(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=l(t);fetch(t.href,r)}};y();const h=f("div")`
  margin-left: auto;
  margin-right: auto;
  width: ${e=>e.type==="full"?"100%":"80%"};
  display: ${e=>e.flex?"flex":"block"};
  flex-direction: ${e=>e.flexDirection?e.flexDirection:"row"};
  justify-content: ${e=>e.justifyContent};
  align-items: ${e=>e.alignItems};
	gap: ${e=>e.gap};
	flex-wrap: ${e=>e.flexWrap};
	padding: ${e=>e.padding};
`,F=({type:e,flex:n,flexDirection:l,alignItems:i="stretch",justifyContent:t="flex-start",gap:r="0px",flexWrap:o="no-wrap",padding:c="8px 0",children:d})=>s(h,{alignItems:i,justifyContent:t,type:e,flex:n,flexDirection:l,gap:r,flexWrap:o,padding:c,children:d});var x="/branding.60e013ad.svg";const $={colors:{accent:"#0880AE",warning:"#F2AC57",success:"#14A38B",error:"#FF7171",primary:"#2C2738",secondary:"#756F86",muted:"#7C9CBF",bright:"#FFFFFF",shade:"#DBE2EA",tint:"#EBF4F8"}},v=a('<img alt="RevkitUI" width="100%">'),C=a("<div></div>"),b=()=>(()=>{const e=C.cloneNode(!0);return e.style.setProperty("height","80%"),g(e,s(F,{type:"full",padding:"0",get children(){const n=v.cloneNode(!0);return m(n,"src",x),n}})),e})();u(()=>s(p,{theme:$,get children(){return s(b,{})}}),document.getElementById("root"));
