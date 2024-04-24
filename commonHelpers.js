import{S as l,i as u}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(t){if(t.ep)return;t.ep=!0;const e=r(t);fetch(t.href,e)}})();const m="/goit-js-hw-11/assets/error-icon-e5a6cca4.svg",a=document.querySelector("#images");function d(o){a.innerHTML="";const s=o.hits.map(r=>`<li class="images-image" >
                        <div class="gallery">
         <a href="${r.largeImageURL}"><img class="img" src="${r.webformatURL}" alt="${r.tags}" title="${r.tags}"/></a>
                            </div>
                    <ul class="image-details-container">
                        <li>
                            <h2 class="image-heading">Likes</h2>
                            <p class="image-description">${r.likes}</p>
                        </li>
                        <li>
                            <h2 class="image-heading">Views</h2>
                            <p class="image-description">${r.views}</p>
                        </li>
                        <li>
                            <h2 class="image-heading">Comments</h2>
                            <p class="image-description">${r.comments}</p>
                        </li>
                        <li>
                            <h2 class="image-heading">Downloads</h2>
                            <p class="image-description">${r.downloads}</p>
                        </li>
                    </ul>
            </li>`).join("");a.insertAdjacentHTML("beforeend",s),document.querySelector("gallery"),new l(".gallery a",{}),a.refresh()}function h(o){const s="43558017-e13ccc47d2aef7f917b5afe22",n=`https://pixabay.com/api?${new URLSearchParams({key:s,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(n,{headers:{Accept:"text/html"}}).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{if(e.total===0){const i=document.querySelector("#images");i.innerHTML="",u.show({class:"search-404",message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",iconUrl:m,backgroundColor:"#EF4040",transitionIn:"bounceInDown",transitionOut:"fadeOutUp",theme:"dark",closeOnClick:!0});return}d(e)}).catch(e=>console.log(e))}const c=document.querySelector(".form");c.addEventListener("submit",o=>{o.preventDefault();const s=o.currentTarget.elements.search;s.value&&(h(s.value),c.reset())});
//# sourceMappingURL=commonHelpers.js.map
