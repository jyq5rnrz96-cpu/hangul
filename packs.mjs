// HANGUL_PACKS_BETA_0_3_6
const PACKS=[
 {id:'chapter-4-6',title:'Chapter 4-6',count:88,file:'Chapter-4-6.json'},
 {id:'chapter-7-10',title:'Chapter 7-10',count:96,file:'Chapter-7-10.json'}
];
export function packsHtml(){return `<section aria-labelledby="packsTitle"><h2 id="packsTitle">Vokabelpakete</h2><p>Neue Wörter für deine nächste Lernrunde. Mit Englisch/Deutsch, Umschrift, Aussprachehinweisen und Eselsbrücken.</p>${PACKS.map(p=>`<div class="card"><div class="eyebrow">${p.count} KARTEN</div><h3>${p.title}</h3><button class="full" data-pack="${p.id}">${p.title} hinzufügen</button></div>`).join('')}<p class="hint">Einmal tippen: Die Karten erscheinen direkt in der gleichnamigen Kategorie. Vorhandene Karten und Lernstände bleiben erhalten. Nach „Offline bereit“ geht das auch ohne Internet.</p><p class="hint" id="packStatus" role="status" aria-live="polite"></p></section>`;}
export function bindPacks(root,addPack){
 for(const button of root.querySelectorAll('[data-pack]'))button.onclick=async()=>{
  const pack=PACKS.find(p=>p.id===button.dataset.pack),status=root.querySelector('#packStatus');
  if(button.disabled)return;
  button.disabled=true;status.textContent=`${pack.title} wird hinzugefügt …`;
  try{
   const response=await fetch(new URL(`./packs/${pack.file}`,import.meta.url));
   if(!response.ok)throw Error('Die Paketdatei ist noch nicht verfügbar.');
   const data=await response.json();
   if(data.format!=='hangul-backup'||data.kind!=='vocabulary-pack'||data.words?.length!==pack.count)throw Error('Die Paketdatei ist unvollständig.');
   const added=await addPack(data);
   button.textContent=`${pack.title} hinzugefügt ✓`;
   status.textContent=added?`${added} Karten zu „${pack.title}“ hinzugefügt. Du kannst die Kategorie jetzt unter „Lernen“ auswählen.`:`„${pack.title}“ ist bereits vollständig vorhanden. Deine Lernstände bleiben erhalten.`;
  }catch{status.textContent='Hinzufügen fehlgeschlagen. Bitte erneut versuchen; falls nötig die App aktualisieren.';}
  finally{button.disabled=false;}
 } 
}
