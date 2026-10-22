// HANGUL_GHOST_HARD_BETA_0_3_2
// HANGUL_HARD_V28
import{isHalloween}from'./season.mjs';
export const HARD_CATEGORY='__hangul_hard_collection__';
export function hardCopy(){return isHalloween()?{name:'Gruselkabinett',icon:'👻',mark:'👻 Ins Gruselkabinett',release:'✨ Spuk beenden',marked:'👻 Im Gruselkabinett vorgemerkt.',released:'✨ Spuk beendet. Die ursprüngliche Kategorie bleibt erhalten.',empty:'Noch keine Wörter im Gruselkabinett. Merke sie nach dem Aufdecken vor.'}:{name:'Schwer',icon:'★',mark:'★ Für Schwer vormerken',release:'✓ Aus Schwer freigeben',marked:'In Schwer vorgemerkt.',released:'Aus Schwer freigegeben. Die ursprüngliche Kategorie bleibt erhalten.',empty:'Noch keine Wörter in Schwer. Merke sie nach dem Aufdecken vor.'};}
export const hardButtonLabel=marked=>marked?hardCopy().release:hardCopy().mark;
export const categoryLabel=value=>value===HARD_CATEGORY?hardCopy().name:value||'Alle Kategorien';
export const inCategory=(word,value)=>value===HARD_CATEGORY?word.hard===true:!value||word.category===value;
export function hardSummary(words,history){const hard=words.filter(w=>w.hard===true),latest=new Map();for(const h of history){const old=latest.get(h.wordId);if(!old||h.time>=old.time)latest.set(h.wordId,h);}let known=0,learning=0,unseen=0;for(const w of hard){const last=latest.get(w.id);if(!last)unseen++;else if(last.correct)known++;else learning++;}return{name:hardCopy().name,value:HARD_CATEGORY,total:hard.length,known,learning,unseen,special:true};}
export function hardButtonHtml(word){return'<button type="button" id="hardToggle" class="hard-toggle '+(word.hard?'is-hard':'')+'" aria-pressed="'+String(word.hard===true)+'">'+hardButtonLabel(word.hard)+'</button>';}
function abort(tx,message){tx.farmError=Error(message);tx.abort();}
export function markHardTransaction(tx,id,value){const store=tx.objectStore('words'),request=store.get(id);request.onsuccess=()=>{if(!request.result){abort(tx,'Diese Vokabel wurde inzwischen gelöscht.');return;}store.put({...request.result,hard:value});};}
// Only change the schedule: a rating or its undo must not overwrite the collection flag.
export function writeScheduleTransaction(tx,word){const store=tx.objectStore('words'),request=store.get(word.id);request.onsuccess=()=>{if(!request.result){abort(tx,'Diese Vokabel wurde inzwischen gelöscht.');return;}store.put({...request.result,srs:structuredClone(word.srs)});};}
