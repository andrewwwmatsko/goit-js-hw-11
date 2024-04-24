import{S as l,i as u}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=a(t);fetch(t.href,e)}})();const m="/goit-js-hw-11/assets/error-icon-e5a6cca4.svg",n=document.querySelector("#images");function h(i){n.innerHTML="";const r=i.hits.map(s=>`<li class="images-image" >
                        <div class="gallery">
         <a href="${s.largeImageURL}"><img class="img" src="${s.webformatURL}" alt="${s.tags}" title="${s.tags}"/></a>
                            </div>
                    <ul class="image-details-container">
                        <li>
                            <h2 class="image-heading">Likes</h2>
                            <p class="image-description">${s.likes}</p>
                        </li>
                        <li>
                            <h2 class="image-heading">Views</h2>
                            <p class="image-description">${s.views}</p>
                        </li>
                        <li>
                            <h2 class="image-heading">Comments</h2>
                            <p class="image-description">${s.comments}</p>
                        </li>
                        <li>
                            <h2 class="image-heading">Downloads</h2>
                            <p class="image-description">${s.downloads}</p>
                        </li>
                    </ul>
            </li>`).join("");n.insertAdjacentHTML("beforeend",r);var a=new l(".gallery a",{captionsData:"title",captionDelay:350});a.refresh()}function d(i){const r="43558017-e13ccc47d2aef7f917b5afe22",s=`https://pixabay.com/api?${new URLSearchParams({key:r,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(s,{headers:{Accept:"text/html"}}).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{if(e.total===0){const o=document.querySelector("#images");o.innerHTML="",u.show({class:"search-404",message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",iconUrl:m,backgroundColor:"#EF4040",transitionIn:"bounceInDown",transitionOut:"fadeOutUp",theme:"dark",closeOnClick:!0});return}h(e)}).catch(e=>console.log(e))}const c=document.querySelector(".form");c.addEventListener("submit",i=>{i.preventDefault();const r=i.currentTarget.elements.search;r.value&&(d(r.value),c.reset())});
//# sourceMappingURL=commonHelpers.js.map
