(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const l=document.querySelector(".nav__wrapper"),a=document.querySelector(".burger");function n(){l.style.top==="90px"?l.style.top="-900px":l.style.top="90px"}a.addEventListener("click",n);window.onload=function(){d()};const d=()=>{document.querySelector(".strategies__tags").addEventListener("click",s=>{if(s.target.classList.contains("tag")){let t=s.target;u(),g(t),t.innerText==="All"?f():p(t.innerText)}})},u=()=>{document.querySelectorAll(".strategies__tags> .tag").forEach(t=>{t.classList.remove("tag__selected"),t.classList.add("tag__bordered")})},g=s=>{s.classList.add("tag__selected"),s.classList.remove("tag__bordered")},f=()=>{document.querySelectorAll(".strategy-wrapper .strategy").forEach(t=>{t.classList.remove("strategy_hidden")})},p=s=>{document.querySelectorAll(".strategy-wrapper .strategy").forEach(o=>{o.classList.add("strategy_hidden"),o.querySelectorAll(".tag").forEach(c=>{c.innerText===s&&o.classList.remove("strategy_hidden")})})};