// HANGUL_PACKS_BETA_0_3_5
const PACKS=[
 {id:'chapter-4-6',title:'Chapter 4-6',count:88,file:'Chapter-4-6.json'},
 {id:'chapter-7-10',title:'Chapter 7-10',count:96,file:'Chapter-7-10.json'}
];
export function packsHtml(){return `<section aria-labelledby="packsTitle"><h2 id="packsTitle">Vokabelpakete</h2><p>Neue Wörter für deine nächste Lernrunde. Mit Englisch/Deutsch, Umschrift, Aussprachehinweisen und Eselsbrücken.</p>${PACKS.map(p=>`<div class="card"><div class="eyebrow">${p.count} KARTEN</div><h3>${p.title}</h3><button class="full" data-pack="${p.id}">${p.title} herunterladen</button></div>`).join('')}<p class="hint">Datei speichern und darunter bei „Backup importieren“ auswählen. Die Karten kommen in die gleichnamige Kategorie. Nach „Offline bereit“ sind auch die Pakete offline verfügbar.</p><p class="hint" id="packStatus" role="status" aria-live="polite"></p></section>`;}
export function bindPacks(root,download){
 for(const button of root.querySelectorAll('[data-pack]'))button.onclick=async()=>{
  const pack=PACKS.find(p=>p.id===button.dataset.pack),status=root.querySelector('#packStatus');
  button.disabled=true;status.textContent=`${pack.title} wird vorbereitet …`;
  try{
   const response=await fetch(new URL(`./packs/${pack.file}`,import.meta.url));
   if(!response.ok)throw Error('Die Paketdatei ist noch nicht verfügbar.');
   const content=await response.text(),data=JSON.parse(content);
   if(data.format!=='hangul-backup'||data.kind!=='vocabulary-pack'||data.words?.length!==pack.count)throw Error('Die Paketdatei ist unvollständig.');
   download(content,'application/json',pack.file);
   status.textContent=`${pack.title}: Download gestartet. Speichere die Datei und wähle sie unter „Backup importieren“ aus.`;
  }catch{status.textContent='Download fehlgeschlagen. Bitte App aktualisieren und erneut versuchen.';}
  finally{button.disabled=false;}
 } 
}
