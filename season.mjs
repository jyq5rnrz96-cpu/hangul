// HANGUL_CHRISTMAS_SEASON_BETA_0_3_8
// HANGUL_GHOST_SEASON_BETA_0_3_2
// HANGUL_LOGO_SEASON_V31
// HANGUL_SEASON_V29
// Design only. Ignore past Halloween preferences; preserve all learning data.
const KEY='hangul-winter-design-v1';
let season='christmas',flightTimer;
try{const saved=localStorage.getItem(KEY);if(['normal','christmas'].includes(saved))season=saved;}catch{}
export const isHalloween=()=>false;
export const isChristmas=()=>season==='christmas';
export function seasonPanelHtml(){return '<section class="season-panel" aria-label="Design wählen"><div><span class="eyebrow">DEINE STIMMUNG</span><b>Winter in Seoul</b><small>Lichter an. Ein Wort nach dem anderen.</small></div><button type="button" data-season-toggle aria-pressed="'+String(isChristmas())+'">'+(isChristmas()?'🎄 Weihnachten an':'☾ Klassisch')+'</button><span class="season-status sr-only" role="status"></span></section>';}
export function seasonSceneHtml(){return '<div class="season-scenery" aria-hidden="true"><img class="season-bird" src="./winter-bird.svg" alt="" width="180" height="180"></div>';}
function apply(){document.documentElement.dataset.season=season;const logo=document.querySelector('.brand-bird');if(logo){logo.src=isChristmas()?'./winter-bird.svg':'./gat-bird.svg';logo.alt=isChristmas()?'Elster mit Schal und Gat neben einem Schneemann im Schneefall':'Elster mit koreanischem Gat';}document.querySelectorAll('[data-season-toggle]').forEach(button=>{button.setAttribute('aria-pressed',String(isChristmas()));button.textContent=isChristmas()?'🎄 Weihnachten an':'☾ Klassisch';});}
export function initSeason(){const brand=document.querySelector('.brand');if(brand){brand.innerHTML='<img class="brand-bird" src="./winter-bird.svg" alt="Elster mit Schal und Gat" width="54" height="54"><span>hangul<small>DEIN KOREANISCH. JEDEN TAG.</small></span>';brand.setAttribute('aria-label','Hangul · zur Lernstartseite');}apply();}
export function bindSeasonControls(root){root.querySelectorAll('[data-season-toggle]').forEach(button=>{button.onclick=()=>{season=isChristmas()?'normal':'christmas';try{localStorage.setItem(KEY,season);}catch{}apply();root.querySelectorAll('.season-status').forEach(status=>status.textContent=isChristmas()?'Weihnachtsdesign aktiviert.':'Klassisches Design aktiviert.');};});}
export function celebrateHarvest(){clearTimeout(flightTimer);document.body.classList.remove('bird-celebrating');void document.body.offsetWidth;document.body.classList.add('bird-celebrating');flightTimer=setTimeout(()=>document.body.classList.remove('bird-celebrating'),1400);}
