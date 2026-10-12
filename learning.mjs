// Zufällige Runden und transparente Trainingsnoten, ohne Netzwerk.
export function shuffle(items,random=Math.random){
 const result=[...items];
 for(let i=result.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[result[i],result[j]]=[result[j],result[i]];}
 return result;
}
export function dueDirections(word,now=Date.now()){
 return ['ko-en','en-ko'].filter(dir=>!word.srs?.[dir]||word.srs[dir].due<=now);
}
export function chooseDirection(word,selection,mode='cram',now=Date.now(),random=Math.random){
 if(selection!=='mixed')return selection;
 const eligible=mode==='cram'?['ko-en','en-ko']:dueDirections(word,now);
 return eligible.length?eligible[Math.floor(random()*eligible.length)]:null;
}
export const GRADE_SCALE=[{min:90,grade:1,label:'Sehr gut'},{min:80,grade:2,label:'Gut'},{min:65,grade:3,label:'Befriedigend'},{min:50,grade:4,label:'Ausreichend'},{min:30,grade:5,label:'Mangelhaft'},{min:0,grade:6,label:'Ungenügend'}];
export function roundScore(correct,answered){
 if(!Number.isInteger(correct)||!Number.isInteger(answered)||correct<0||answered<0||correct>answered)throw Error('Ungültiges Rundenergebnis.');
 if(!answered)return{percent:0,grade:null,label:'Noch keine Antworten'};
 const percent=correct/answered*100;
 const rating=GRADE_SCALE.find(r=>correct*100>=answered*r.min);
 return{percent,grade:rating.grade,label:rating.label};
}
