(()=>{"use strict";const n="https://rickandmortyapi.com/api/character/",a=async a=>{const t=a?`${n}${a}`:n;try{const n=await fetch(t);return await n.json()}catch(n){console.error("Error de Fetch",n)}},t=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/",e=()=>'\n        <div class="Error404">\n            <h2>Error 404</h2>\n        </div>\n    ',s={"/":async()=>`\n        <div class="Characters">\n        ${(await a()).results.map((n=>`\n            <article class="Character-Item">\n                <a href="#/${n.id}/">\n                <img src="${n.image}" alt="${n.name}"/>\n                <h2>${n.name}</h2>\n                <h2 class="status">${n.status}</h2>\n                </a>\n            </article>\n        `)).join("")}            \n        </div>\n    `,"/:id":async()=>{const n=t(),e=await a(n);return`\n        <div class="Character-inner">\n            <article class="Characters-card">\n                <img src="${e.image}" alt="${e.name}">\n                <h2>${e.name}</h2>\n            </article>\n            <article class="Characters-card">\n                <h3>Episodes: <span>${e.episode.length}</span></h3>\n                <h3>Status: <span>${e.status}</span></h3>\n                <h3>Species: <span>${e.species}</span></h3>\n                <h3>Gender: <span>${e.gender}</span></h3>\n                <h3>Origin: <span>${e.origin.name}</span></h3>\n                <h3>Last Location: <span>${e.location.name}</span></h3>\n            </article>\n        </div>\n    `},"/Contact":"Contact"},r=async()=>{const n=document.getElementById("header"),a=document.getElementById("content");n.innerHTML=await'\n        <div class="Header-main">\n            <div class="Header-logo">\n                <h1>\n                    <a href="https://johangdh.github.io/100tifi.co/">\n                        <img src="https://partner.redbubble.com/partnership-portal/client/eab637076b22c782edf0015a0ec3c686.png">\n                    </a>\n                </h1>\n            </div>\n            <div class="Header-nav">\n                <a href="https://rickandmortyapi.com/about" target="_blank">\n                    About\n                </a>\n            </div>\n        </div>\n    ';let r=t(),i=await(n=>n.length<=3?"/"===n?n:"/:id":`/${n}`)(r),c=s[i]?s[i]:e;a.innerHTML=await c()};window.addEventListener("load",r),window.addEventListener("hashchange",r)})();