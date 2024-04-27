import{S as m,i as d}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const h="/goit-js-hw-11/assets/error-icon-e5a6cca4.svg",c=document.querySelector("#images");function p(a){c.innerHTML="";const r=a.hits.map(t=>`<li class="images-image" >
                        <div class="gallery">
         <a href="${t.largeImageURL}">
          <img class="img" src="${t.webformatURL}" alt="${t.tags}" title="${t.tags}"/>
         </a>
                          </div>
                    <ul class="image-details-container">
                        <li>
                            <h2 class="image-heading">Likes</h2>
                            <p class="image-description">${t.likes}</p>
                        </li>
                        <li>
                            <h2 class="image-heading">Views</h2>
                            <p class="image-description">${t.views}</p>
                        </li>
                        <li>
                            <h2 class="image-heading">Comments</h2>
                            <p class="image-description">${t.comments}</p>
                        </li>
                        <li>
                            <h2 class="image-heading">Downloads</h2>
                            <p class="image-description">${t.downloads}</p>
                        </li>
                    </ul>
            </li>`).join("");c.insertAdjacentHTML("beforeend",r);var o=new m(".gallery a",{captionsData:"title",captionDelay:350});o.refresh()}function f(a){const r=document.querySelector("#images");r.innerHTML="";const o=document.querySelector(".loader");o.style.display="block";const t="43558017-e13ccc47d2aef7f917b5afe22",s=`https://pixabay.com/api/?${new URLSearchParams({key:t,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(s,{headers:{Accept:"text/html"}}).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()}).then(i=>{if(i.total===0){const u=document.querySelector("#images");u.innerHTML="",d.show({class:"search-404",message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",iconUrl:h,backgroundColor:"#EF4040",transitionIn:"bounceInDown",transitionOut:"fadeOutUp",theme:"dark",closeOnClick:!0}),o.style.display="none";return}p(i),o.style.display="none"}).catch(i=>{o.style.display="none",console.log(i.message)})}const l=document.querySelector(".form");l.addEventListener("submit",a=>{a.preventDefault();const r=a.currentTarget.elements.search.value.trim();r&&(f(r),l.reset())});
//# sourceMappingURL=commonHelpers.js.map
