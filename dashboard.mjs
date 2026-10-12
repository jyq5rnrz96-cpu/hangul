// HANGUL_DASHBOARD_V20
export function categorySummaries(words,history){
 const latest=new Map();for(const h of history){const old=latest.get(h.wordId);if(!old||h.time>=old.time)latest.set(h.wordId,h);}
 const groups=new Map();for(const w of words){if(!groups.has(w.category))groups.set(w.category,{name:w.category,total:0,known:0,learning:0,unseen:0});const group=groups.get(w.category),last=latest.get(w.id);group.total++;if(!last)group.unseen++;else if(last.correct)group.known++;else group.learning++;}
 return [...groups.values()].sort((a,b)=>a.name.localeCompare(b.name,'de'));
}
export function categoryAppearance(name){
 const value=name.toLowerCase();let hash=0;for(const char of name)hash=(hash*31+char.codePointAt(0))>>>0;
 const colors=['#b5a6f3','#8ec8dd','#efbd91','#a4c9a8','#d9a4c3'];
 return{color:colors[hash%colors.length],icon:/midterm|prüfung|test/.test(value)?'◈':/quiz/.test(value)?'✎':/essen|food|alltag/.test(value)?'☕':/ort|place/.test(value)?'⌂':'▤'};
}
