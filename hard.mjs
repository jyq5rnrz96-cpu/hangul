// HANGUL_HARD_V28
export const HARD_CATEGORY='__hangul_hard_collection__';
export const categoryLabel=value=>value===HARD_CATEGORY?'Schwer':value||'Alle Kategorien';
export const inCategory=(word,value)=>value===HARD_CATEGORY?word.hard===true:!value||word.category===value;
export function hardSummary(words,history){const hard=words.filter(w=>w.hard===true),latest=new Map();for(const h of history){const old=latest.get(h.wordId);if(!old||h.time>=old.time)latest.set(h.wordId,h);}let known=0,learning=0,unseen=0;for(const w of hard){const last=latest.get(w.id);if(!last)unseen++;else if(last.correct)known++;else learning++;}return{name:'Schwer',value:HARD_CATEGORY,total:hard.length,known,learning,unseen,special:true};}
export function hardButtonHtml(word){return'<button type="button" id="hardToggle" class="hard-toggle '+(word.hard?'is-hard':'')+'" aria-pressed="'+String(word.hard===true)+'">'+(word.hard?'✓ Aus Schwer freigeben':'★ Für Schwer vormerken')+'</button>';}
function abort(tx,message){tx.farmError=Error(message);tx.abort();}
export function markHardTransaction(tx,id,value){const store=tx.objectStore('words'),request=store.get(id);request.onsuccess=()=>{if(!request.result){abort(tx,'Diese Vokabel wurde inzwischen gelöscht.');return;}store.put({...request.result,hard:value});};}
// Only change the schedule: a rating or its undo must not overwrite the collection flag.
export function writeScheduleTransaction(tx,word){const store=tx.objectStore('words'),request=store.get(word.id);request.onsuccess=()=>{if(!request.result){abort(tx,'Diese Vokabel wurde inzwischen gelöscht.');return;}store.put({...request.result,srs:structuredClone(word.srs)});};}
