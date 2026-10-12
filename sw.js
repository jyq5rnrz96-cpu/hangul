const CACHE='hangul-v18-flip1';
const FILES=['./','./index.html','./style.css','./app.js','./core.mjs','./learning.mjs','./swipe.mjs','./statistics.mjs','./emojis.mjs','./reactions.mjs','./feedback.mjs','./mnemonics.mjs','./manifest.webmanifest','./icon.svg','./icon-192.png','./icon-512.png'];
async function freshFiles(){
 const responses=await Promise.all(FILES.map(async file=>{const url=new URL(file,self.location.href);url.searchParams.set('__hangul_fresh',CACHE);const response=await fetch(url,{cache:'no-store'});if(!response.ok)throw Error('App-Datei fehlt: '+file);return[file,response];}));
 if(!(await responses.find(([f])=>f==='./app.js')[1].clone().text()).includes('HANGUL_FLIP_V18'))throw Error('App-Version ist noch nicht vollständig veröffentlicht.');
 if(!(await responses.find(([f])=>f==='./feedback.mjs')[1].clone().text()).includes('flashAnswerHtml'))throw Error('Auswertungsdatei ist noch nicht aktuell.');
 const cache=await caches.open(CACHE);await Promise.all(responses.map(([file,response])=>cache.put(new URL(file,self.location.href).href,response)));
}
self.addEventListener('install',e=>e.waitUntil(freshFiles().then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('hangul-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{const url=new URL(e.request.url);if(e.request.method!=='GET'||url.origin!==self.location.origin)return;if(url.searchParams.has('__hangul_fresh')||url.pathname.endsWith('/update.html')||url.pathname.endsWith('/sw.js')){e.respondWith(fetch(e.request,{cache:'no-store'}));return;}e.respondWith(caches.open(CACHE).then(async cache=>{const hit=await cache.match(e.request);if(hit)return hit;try{return await fetch(e.request);}catch{if(e.request.mode==='navigate')return await cache.match(new URL('./index.html',self.location.href).href)||Response.error();return Response.error();}}));});
