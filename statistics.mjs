// Tagesgrenzen richten sich nach der lokalen Zeitzone des Geräts.
export function dayKey(time=Date.now()){
 const d=new Date(time);return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
}
export function dayDate(key){
 if(!/^\d{4}-\d{2}-\d{2}$/.test(key))return null;
 const[y,m,d]=key.split('-').map(Number),date=new Date(y,m-1,d,12);return dayKey(date)===key?date:null;
}
export function moveDay(key,delta){const d=dayDate(key);if(!d)throw Error('Ungültiges Datum.');d.setDate(d.getDate()+delta);return dayKey(d);}
export function dailyStatistics(history,words=[]){
 const categories=new Map(words.map(w=>[w.id,w.category])),groups=new Map();
 for(const h of history){
  if(!Number.isFinite(h.time)||typeof h.correct!=='boolean')continue;
  const key=dayKey(h.time);if(!dayDate(key))continue;
  if(!groups.has(key))groups.set(key,{key,total:0,correct:0,wordIds:new Set(),directions:{'ko-en':{total:0,correct:0},'en-ko':{total:0,correct:0}},categories:new Map()});
  const day=groups.get(key),category=categories.get(h.wordId)||'Ohne Kategorie';day.total++;day.correct+=Number(h.correct);day.wordIds.add(h.wordId);
  if(Object.hasOwn(day.directions,h.direction)){day.directions[h.direction].total++;day.directions[h.direction].correct+=Number(h.correct);}
  if(!day.categories.has(category))day.categories.set(category,{name:category,total:0,correct:0});
  const c=day.categories.get(category);c.total++;c.correct+=Number(h.correct);
 }
 return [...groups.values()].map(d=>({key:d.key,total:d.total,correct:d.correct,wrong:d.total-d.correct,unique:d.wordIds.size,percent:d.correct/d.total*100,directions:d.directions,categories:[...d.categories.values()].sort((a,b)=>b.total-a.total||a.name.localeCompare(b.name,'de'))})).sort((a,b)=>b.key.localeCompare(a.key));
}
export function emptyDay(key){return{key,total:0,correct:0,wrong:0,unique:0,percent:0,directions:{'ko-en':{total:0,correct:0},'en-ko':{total:0,correct:0}},categories:[]};}
export function learningStreak(days,today=dayKey()){
 const keys=new Set(days.map(d=>d.key));let cursor=keys.has(today)?today:moveDay(today,-1),streak=0;
 while(keys.has(cursor)){streak++;cursor=moveDay(cursor,-1);}return streak;
}
