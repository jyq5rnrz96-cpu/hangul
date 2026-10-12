import{wordEmoji}from'./emojis.mjs';
import{wordMnemonic}from'./mnemonics.mjs';
const escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const first=s=>String(s||'').split(';').map(v=>v.trim()).find(Boolean)||'';
export function questionHtml(word){
const en=first(word.en),de=first(word.de),primary=en||de,lang=en?'en':'de',label=en?'Englisch':'Deutsch';
return '<span class="prompt-language">'+label+'</span><span class="prompt-value" lang="'+lang+'">'+escape(primary)+'</span>'+(en&&de?'<span class="prompt-secondary"><span class="prompt-language">Deutsch</span><span class="prompt-translation" lang="de">'+escape(de)+'</span></span>':'');
}
export function flashAnswerHtml(word,direction){
const origin=direction==='ko-en'?word.ko:first(word.en)||first(word.de);
const solution=direction==='ko-en'?questionHtml(word):'<span class="prompt-language">Koreanisch</span><span class="prompt-value" lang="ko">'+escape(word.ko)+'</span>';
return '<div id="flashAnswerTitle">'+solution+'</div>'+(word.roman?'<p class="flash-roman">'+escape(word.roman)+'</p>':'')+'<p class="flash-origin">'+escape(origin)+'</p>';
}
export function feedbackHtml(word,direction,correct,interval,options={}){
const translations=direction==='ko-en'?[['en','EN',word.en],['de','DE',word.de]]:[['ko','KO',word.ko]];
const visible=translations.filter(([, ,value])=>value&&value.trim());
const rows=visible.map(([lang,label,value])=>'<div class="solution-row"><span class="solution-language">'+label+'</span><strong class="solution-value" lang="'+lang+'">'+escape(first(value))+'</strong></div>').join('');
const alternatives=visible.filter(([, ,value])=>value.split(';').filter(v=>v.trim()).length>1).map(([lang,label,value])=>'<p lang="'+lang+'"><b>'+label+' – weitere gültige Antworten:</b> '+escape(value.split(';').slice(1).join(';').trim())+'</p>').join('');
const pronunciation=word.roman?'<p class="solution-pronunciation"><span>Aussprache · Umschrift</span><strong>'+escape(word.roman)+'</strong></p>':'';
const details=alternatives+(word.pronunciation?'<p><b>Aussprachehinweis:</b> '+escape(word.pronunciation)+'</p>':'')+(word.example?'<p>'+escape(word.example)+'</p>':'')+(options.revealed?'<p>Jetzt selbst einschätzen: Hast du die Antwort gewusst?</p>':options.mode==='cram'?'<p>Paukmodus: Du kannst sofort weiterüben. Dein Wiederholungsplan bleibt erhalten.</p>':'<p>Nächste Wiederholung: '+(correct?interval+' Tag(e)':'in 10 Minuten')+'.</p>');
const hint=correct?null:wordMnemonic(word);
const mnemonic=hint?'<details class="mnemonic"><summary>💡 Eselsbrücke anzeigen</summary><div class="mnemonic-body"><p class="mnemonic-word"><span lang="ko">'+escape(word.ko)+'</span> · '+escape(hint.roman)+'</p><p>'+escape(hint.scene)+'</p><p class="mnemonic-note">'+escape(hint.note)+'</p><small>Klangbilder sind Merkhilfen, keine genaue Ausspracheanleitung.</small></div></details>':'';
return '<div class="feedback '+(options.revealed?'revealed':correct?'':'wrong')+'"><div class="feedback-heading"><strong>'+(options.revealed?'Aufgedeckt':correct?'Richtig!':'Noch nicht ganz.')+'</strong>'+(correct&&wordEmoji(word)?'<span class="answer-emoji" aria-hidden="true">'+escape(wordEmoji(word))+'</span>':'')+'</div><div class="answer-solution"><div class="solution-label">'+(correct?'DEINE LÖSUNG':'RICHTIGE ANTWORT')+'</div>'+rows+pronunciation+'</div>'+mnemonic+'<details class="answer-details"><summary>Details</summary>'+details+'</details></div>';
}
