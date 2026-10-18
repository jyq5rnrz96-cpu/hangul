// HANGUL_COURTYARD_V30
// One coherent isometric drawing. Geometry, planting beds and buildings share
// the same ground plane, scale, light and materials; no positioned image layers.
const p=(u,v,z=0)=>[480+(u-v)*23,156+(u+v)*11.5-z];
const pts=a=>a.map(v=>v.join(',')).join(' ');
const polygon=(points,fill,extra='')=>`<polygon points="${pts(points)}" fill="${fill}" ${extra}/>`;
const path=(d,stroke,width=1,extra='')=>`<path d="${d}" fill="none" stroke="${stroke}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round" ${extra}/>`;
const line=(a,b,color,width=1)=>path(`M${a}L${b}`,color,width);
const tile=(u,v,w,d,z,fill,extra='')=>polygon([p(u,v,z),p(u+w,v,z),p(u+w,v+d,z),p(u,v+d,z)],fill,extra);
function block(u,v,w,d,z,h,top,front,side){return polygon([p(u,v+d,z),p(u+w,v+d,z),p(u+w,v+d,z+h),p(u,v+d,z+h)],front)+polygon([p(u+w,v,z),p(u+w,v+d,z),p(u+w,v+d,z+h),p(u+w,v,z+h)],side)+tile(u,v,w,d,z+h,top);}
const shadow=(u,v,w,d)=>tile(u+.2,v+.3,w,d,1,'#080c1a','opacity=".24" filter="url(#cy-soft)"');
const flower=(x,y,color,r=3)=>`<g fill="${color}">${Array.from({length:5},(_,i)=>{const a=i*Math.PI*2/5;return`<ellipse cx="${x+Math.sin(a)*r}" cy="${y+Math.cos(a)*r}" rx="${r*.8}" ry="${r*1.1}" transform="rotate(${-i*72} ${x+Math.sin(a)*r} ${y+Math.cos(a)*r})"/>`;}).join('')}<circle cx="${x}" cy="${y}" r="${r*.5}" fill="#f6cf87"/></g>`;
function stone(u,v,size=1){const[x,y]=p(u,v);return`<g>${polygon([[x-10*size,y],[x-6*size,y-12*size],[x+5*size,y-16*size],[x+13*size,y-5*size],[x+9*size,y+3*size]],'#697d79')}${polygon([[x-10*size,y],[x-6*size,y-12*size],[x+1*size,y-7*size],[x+9*size,y+3*size]],'#85978a')}${path(`M${x-5*size} ${y-9*size}l7 -3`,'#c4c3a2',1,'opacity=".5"')}</g>`;}
function pine(u,v,size=1){const[x,y]=p(u,v);return`<g class="courtyard-tree"><ellipse cx="${x+12}" cy="${y+5}" rx="${30*size}" ry="${9*size}" fill="#091b22" opacity=".2"/><g transform="translate(${x} ${y}) scale(${size})">${path('M0 0Q-9-46 5-88M-2-33l-25-20M0-52l30-19M2-68l-17-18','#67564d',7)}${[[-26,-59,24,12],[27,-77,28,13],[-11,-91,30,15],[9,-113,23,12]].map(([cx,cy,rx,ry])=>`<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="#335c58"/><path d="M${cx-rx+6} ${cy-2}q${rx} -13 ${rx*1.6} -3" stroke="#72947b" stroke-width="3" fill="none" opacity=".55"/>`).join('')}</g></g>`;}
function wall(u,v,w,d){let art=block(u,v,w,d,0,33,'#8a8a84','#657176','#485964');art+=tile(u-.13,v-.13,w+.26,d+.26,36,'#364c58');for(let i=1;i<(w>d?w:d);i++){const a=w>d?p(u+i,v+d,1):p(u+w,v+i,1),b=w>d?p(u+i,v+d,30):p(u+w,v+i,30);art+=line(a,b,'#a1aaa0',.7);}return art;}
function roof(u,v,w,d,z){const top=z+39,ridgeA=p(u-.25,v+d/2,top),ridgeB=p(u+w+.25,v+d/2,top),a=p(u-.6,v-.7,z+3),b=p(u+w+.6,v-.7,z+3),c=p(u+w+.6,v+d+.7,z+3),e=p(u-.6,v+d+.7,z+3);let art=polygon([a,b,ridgeB,ridgeA],'url(#cy-roof-back)')+polygon([ridgeA,ridgeB,c,e],'url(#cy-roof-front)');art+=polygon([ridgeB,b,c],'#233a49');for(let i=0;i<=w*4;i++){const uu=u-.45+i*(w+.9)/(w*4);art+=line(p(uu,v+d/2,top+.6),p(uu,v+d+.6,z+4),'#738c94',1.5);art+=line(p(uu,v+d/2,top+.6),p(uu,v-.6,z+4),'#425d6c',1);}art+=line(ridgeA,ridgeB,'#a8b4b2',4)+line(e,c,'#7f9b9d',4)+line(b,c,'#657c88',3);art+=line(p(u-.6,v+d+.7,z),p(u+w+.6,v+d+.7,z),'#1b313f',5);return art;}
function building(id,u,v,w,d,h=66){const pavilion=id==='pavilion',base=10,z=base+h;let art=shadow(u,v,w+.7,d+.6)+block(u-.25,v-.25,w+.5,d+.5,0,base,'#a0a29a','#707b7d','#596a72');art+=block(u,v,w,d,base,h,pavilion?'#655849':'#b4a893',pavilion?'#354a48':'#d0bca0',pavilion?'#2a3e41':'#ad9a83');
 if(!pavilion){for(let i=0;i<Math.floor(w);i++){const x=u+.22+i;art+=polygon([p(x,v+d,base+12),p(x+.65,v+d,base+12),p(x+.65,v+d,z-12),p(x,v+d,z-12)],'var(--cy-window)');for(let j=1;j<3;j++)art+=line(p(x+.65*j/3,v+d,base+12),p(x+.65*j/3,v+d,z-12),'#6b584d',1.2);for(let j=1;j<4;j++)art+=line(p(x,v+d,base+12+j*(h-24)/4),p(x+.65,v+d,base+12+j*(h-24)/4),'#6b584d',1.2);}
 for(let j=0;j<2;j++)art+=polygon([p(u+w,v+.3+j*1.4,base+15),p(u+w,v+1.25+j*1.4,base+15),p(u+w,v+1.25+j*1.4,z-15),p(u+w,v+.3+j*1.4,z-15)],'#b79164');
 }else art+=polygon([p(u+.3,v+d,base+10),p(u+w-.3,v+d,base+10),p(u+w-.3,v+d,z-10),p(u+.3,v+d,z-10)],'#213f43');
 for(const[x,y]of [[u,v+d],[u+w/2,v+d],[u+w,v+d],[u+w,v]])art+=line(p(x,y,base),p(x,y,z),'#755a4c',5);
 art+=line(p(u,v+d,z-2),p(u+w,v+d,z-2),'#89694f',6)+roof(u,v,w,d,z);
 art+=block(u+w*.27,v+d+.15,w*.46,.7,0,5,'#a4aaa4','#707b7d','#596a72');return`<g class="courtyard-building garden-${id}">${art}</g>`;}
function lantern(u,v,size=1){const[x,y]=p(u,v);return`<g transform="translate(${x} ${y}) scale(${size})"><ellipse cy="4" rx="19" ry="7" fill="#0b1721" opacity=".25"/><path d="M-16 0h32l-5-7h-22Z" fill="#718a89"/><path d="M-5-7h10v-28H-5Z" fill="#8d9e92"/><path d="M-11-28h22v-21h-22Z" fill="#84958c"/><path d="M-6-33h12v-11H-6Z" fill="#ffd797"/><path d="m-19-49 19-15 19 15Z" fill="#405c65" stroke="#9da99a" stroke-width="1.5"/><circle cy="-39" r="35" fill="url(#cy-light)"/><path d="M0-64v-5" stroke="#a5ae9b" stroke-width="3"/></g>`;}
function pumpkin(u,v,s=1){const[x,y]=p(u,v);return`<g class="courtyard-halloween" transform="translate(${x} ${y}) scale(${s})"><ellipse cy="3" rx="18" ry="5" fill="#171e29" opacity=".4"/><path d="m0-20 3-7 4-1" stroke="#7b9471" stroke-width="3"/><ellipse cy="-10" rx="17" ry="14" fill="#cc753f"/><ellipse cy="-10" rx="10" ry="14" fill="#e89a53"/><path d="m-12-11 6-5 2 6Zm16 1 2-6 6 5ZM-9-3q9 7 18 0L5 3H-5Z" fill="#ffe3a8"/></g>`;}
function planting(u,v,w,d,stage,plant,full=false){let art=shadow(u,v,w,d)+block(u,v,w,d,0,8,'#8e8b75','#64756d','#4a625e')+tile(u+.18,v+.18,w-.36,d-.36,8.3,'#465850');
 for(let row=0;row<3;row++)for(let col=0;col<4;col++){const[x,y]=p(u+.45+col*(w-.9)/3,v+.45+row*(d-.9)/2,9),h=full?30:stage===0?3:7+stage*6;art+=`<ellipse cx="${x+2}" cy="${y+2}" rx="7" ry="3" fill="#1f3932" opacity=".4"/>`;
 if(plant.kind==='pine'){art+=line([x,y],[x,y-h],'#91705c',1.8);for(let j=0;j<(stage+1);j++){const yy=y-h+j*6;art+=polygon([[x,yy-4],[x-5-j*1.1,yy+7],[x+5+j*1.1,yy+7]],j%2?'#588d76':'#759b7b');}}
 else{art+=path(`M${x} ${y}q-3 -${h/2} 0 -${h}`,'#8aa27a',1.6);if(stage>0||full)art+=`<ellipse cx="${x-4}" cy="${y-h*.45}" rx="5" ry="2" fill="#759770" transform="rotate(30 ${x-4} ${y-h*.45})"/><ellipse cx="${x+4}" cy="${y-h*.7}" rx="5" ry="2" fill="#8aa67e" transform="rotate(-30 ${x+4} ${y-h*.7})"/>`;if(stage>=4||full)art+=flower(x,y-h,plant.color,2.6);else if(stage===3)art+=`<ellipse cx="${x}" cy="${y-h}" rx="2.5" ry="4" fill="${plant.color}"/>`;}
 }return`<g class="courtyard-bed">${art}</g>`;}
function pond(u,v){const center=p(u+1.8,v+1.4);let art=tile(u-.2,v-.1,4.6,3.8,2,'#889181','rx="5"')+tile(u+.15,v+.2,3.9,3.1,3,'#244e5b');for(let i=0;i<4;i++)art+=path(`M${center[0]-27+i*5} ${center[1]-10+i*7}q20 -5 36 0`,'#6eaaa7',1,'opacity=".45"');art+=`<ellipse cx="${center[0]+12}" cy="${center[1]+4}" rx="8" ry="4" fill="#6b9279"/>`;return`<g class="garden-pond">${art}</g>`;}
function bird(u,v){const[x,y]=p(u,v);return`<g transform="translate(${x} ${y})"><path d="M0 0v-53m-20 0h40" stroke="#6c6d69" stroke-width="4" stroke-linecap="round"/><g transform="translate(0 -54)"><g class="courtyard-bird"><path d="m5-9 13 10-16-2" fill="#244453"/><ellipse cy="-16" rx="12" ry="16" fill="#29485d"/><ellipse cy="-10" rx="7" ry="8" fill="#d6ded5"/><ellipse cx="-4" cy="-23" rx="4" ry="6" fill="#efe6c5"/><ellipse cx="5" cy="-23" rx="4" ry="6" fill="#efe6c5"/><circle cx="-3" cy="-23" r="2" fill="#1b2b3a"/><circle cx="4" cy="-23" r="2" fill="#1b2b3a"/><path d="m-2-17 5-3 3 3-4 3Z" fill="#d6a366"/><path d="m-8-34 2-13h14l3 13" fill="#263946" stroke="#a6aaa0"/><ellipse cy="-34" rx="20" ry="3" fill="#263946" stroke="#a6aaa0"/><path d="m-5-1-2 2m12-2 2 2" stroke="#c3a87d" stroke-width="2"/></g></g></g>`;}
function pots(u,v){let art='';for(let i=0;i<3;i++){const[x,y]=p(u+i*.65,v+i*.05);art+=`<g><ellipse cx="${x}" cy="${y+1}" rx="9" ry="3" fill="#1c3032" opacity=".3"/><path d="M${x-7} ${y-13}h14l-2 13h-10Z" fill="#ae8065"/><ellipse cx="${x}" cy="${y-13}" rx="8" ry="3" fill="#d0a17a"/>${line([x,y-14],[x,y-30],'#7f9c73',2)}${flower(x,y-31,i%2?'#e6d9c7':'#d6a4b8',3)}</g>`;}return art;}
function tiger(u,v){const[x,y]=p(u,v);return`<g class="garden-tiger" transform="translate(${x} ${y})"><ellipse cy="3" rx="22" ry="6" fill="#142c32" opacity=".25"/><ellipse cy="-6" rx="20" ry="9" fill="#c59865"/><circle cx="-12" cy="-16" r="11" fill="#d7ac75"/><circle cx="-21" cy="-24" r="4" fill="#aa7f58"/><circle cx="-4" cy="-25" r="4" fill="#aa7f58"/><path d="M-17-15h3m5 0h3m-7-11v5m13 10 4 5m3-7 4 5m6 3q13 2 10-9" stroke="#5e5a49" stroke-width="2" stroke-linecap="round"/><ellipse cx="-12" cy="-10" rx="6" ry="4" fill="#e4c899"/></g>`;}
export function courtyardHtml(state){
 const owns=new Set(state.unlocks.map(i=>i.id));
 const objects=[{depth:2,html:pine(.6,.7,.9)},{depth:11,html:pine(.3,11,1.15)},{depth:17,html:pine(16.5,.5,1.1)},
 {depth:20.6,html:bird(15.8,4.8)},{depth:22,html:planting(8.2,10,3.4,3,state.stage,state.plant)},
 {depth:23,html:state.completed?planting(3,13,3.4,2.3,4,state.previousPlant||{kind:'flower',color:'#d8a7bd'},true):stone(3.3,13.5,1.1)},
 {depth:27,html:pumpkin(10.9,15.3,.9)+pumpkin(11.7,15.9,.65)},{depth:10,html:pumpkin(7.5,2.5,.65)}];
 if(owns.has('hanok'))objects.push({depth:14.5,html:building('hanok',7.8,2.4,5.5,3.5,64)});
 if(owns.has('guesthouse'))objects.push({depth:16.5,html:building('guesthouse',1.8,7.8,3.4,2.6,48)});
 if(owns.has('pavilion'))objects.push({depth:23,html:building('pavilion',13.1,7,3,2.8,48)});
 if(owns.has('pond'))objects.push({depth:29,html:pond(12,13.5)});
 if(owns.has('lantern'))objects.push({depth:17,html:lantern(6.6,9.8,.9)});
 if(owns.has('pots'))objects.push({depth:20,html:pots(11.8,7.8)});
 if(owns.has('tiger'))objects.push({depth:27,html:tiger(6.8,15.5)});
 let paving='';for(let i=2;i<16;i++)paving+=tile(i,7.2,1.0,1.5,2,'var(--cy-paving)',`opacity="${.52+(i%3)*.12}"`);for(let j=8.8;j<17;j+=1.3)paving+=tile(7.1,j,1.45,1.05,2,'var(--cy-paving)','opacity=".7"');
 let earth='';for(let i=0;i<34;i++){const u=1+(i*7.13)%16,v=1+(i*3.79)%16;if((v>6.8&&v<9)||(u>6.7&&u<9))continue;const[x,y]=p(u,v);earth+=`<ellipse cx="${x}" cy="${y}" rx="${4+i%4}" ry="${2+i%2}" fill="${i%2?'#a9af8b':'#56746b'}" opacity=".2"/>`;}
 return'<div class="garden-scene" data-courtyard="v30" role="img" aria-label="Isometrischer koreanischer Garten mit '+state.unlocks.length+' gekauften Bauten und Dekorationen, '+state.completed+' Ernten und deiner aktuellen Pflanze"><svg class="courtyard-art" viewBox="0 0 960 730" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'+`
 <defs>
 <linearGradient id="cy-sky" x2="0" y2="1"><stop stop-color="var(--cy-sky-top)"/><stop offset="1" stop-color="var(--cy-sky-bottom)"/></linearGradient>
 <linearGradient id="cy-land" x2=".5" y2="1"><stop stop-color="var(--cy-grass-light)"/><stop offset="1" stop-color="var(--cy-grass-dark)"/></linearGradient>
 <linearGradient id="cy-roof-front" x2="0" y2="1"><stop stop-color="#4f6976"/><stop offset="1" stop-color="#243f51"/></linearGradient>
 <linearGradient id="cy-roof-back" x2="0" y2="1"><stop stop-color="#69818a"/><stop offset="1" stop-color="#354d61"/></linearGradient>
 <radialGradient id="cy-light"><stop stop-color="#ffd18b" stop-opacity=".2"/><stop offset="1" stop-color="#ffd18b" stop-opacity="0"/></radialGradient>
 <radialGradient id="cy-halo"><stop stop-color="#d1b9e8" stop-opacity=".13"/><stop offset="1" stop-color="#d1b9e8" stop-opacity="0"/></radialGradient>
 <filter id="cy-soft" x="-30%" y="-80%" width="160%" height="260%"><feGaussianBlur stdDeviation="4"/></filter>
 </defs>
 <path fill="url(#cy-sky)" d="M0 0h960v730H0z"/>
 <ellipse cx="510" cy="326" rx="450" ry="310" fill="url(#cy-halo)"/>
 <g class="courtyard-stars" fill="#d8d8dc" opacity=".6">${[[120,122],[240,70],[364,111],[647,67],[813,118],[862,226],[91,263],[735,191]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="1.5"/>`).join('')}</g>
 <circle cx="760" cy="101" r="28" fill="var(--cy-moon)"/><circle cx="750" cy="93" r="30" fill="var(--cy-sky-top)"/>
 <ellipse cx="490" cy="637" rx="340" ry="33" fill="#040c1b" opacity=".3" filter="url(#cy-soft)"/>
 ${polygon([p(0,18),p(18,18),p(18,18,-30),p(0,18,-30)],'#3b5357')}
 ${polygon([p(18,0),p(18,18),p(18,18,-30),p(18,0,-30)],'#293e4c')}
 ${tile(0,0,18,18,0,'url(#cy-land)')}
 ${tile(.3,.3,17.4,17.4,.4,'none','stroke="#acb294" stroke-opacity=".22" stroke-width="2"')}
 ${earth}${paving}
 ${tile(7.1,2.1,7,4.6,1,'#7d8c80','opacity=".3"')}
 ${wall(0,0,18,.3)}${wall(0,.3,.3,17.7)}
 ${stone(16,11,.8)}${stone(2,16,.9)}${stone(16,4,1.2)}
 ${objects.sort((a,b)=>a.depth-b.depth).map(o=>o.html).join('')}
 <g class="courtyard-fireflies" fill="#f3d8a5" opacity=".65"><circle cx="321" cy="393" r="2"/><circle cx="680" cy="431" r="1.6"/><circle cx="510" cy="554" r="1.7"/></g>
 </svg><div class="courtyard-caption"><span class="courtyard-caption-dot"></span>Dein Rückzugsort<span>Mit jedem Lerntag wächst etwas.</span></div></div>`;
}
