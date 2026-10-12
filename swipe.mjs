export function swipeThreshold(width){return Math.max(72,Math.min(120,width*.25));}
export function swipeChoice(dx,dy,width=320){return Math.abs(dx)>=swipeThreshold(width)&&Math.abs(dx)>Math.abs(dy)*1.4?dx>0:null;}
export function resetSwipe(card){card.style.transform='';card.style.opacity='';card.style.setProperty('--swipe-progress','0');card.classList.remove('swipe-known','swipe-unknown','swipe-moving');}
export function bindSwipeCard(card,{isRevealed,isBusy,onReveal,onRate}){
let start=null,suppressClick=false;
resetSwipe(card);
card.onpointerdown=e=>{if(isBusy()||e.isPrimary===false||e.button!=null&&e.button!==0||e.target?.closest?.('button,a,input,textarea,select,summary,details'))return;start={id:e.pointerId,x:e.clientX,y:e.clientY,dx:0,dy:0,vertical:false};suppressClick=false;try{card.setPointerCapture?.(e.pointerId);}catch{}};
card.onpointermove=e=>{if(!start||start.id!==e.pointerId||isBusy())return;start.dx=e.clientX-start.x;start.dy=e.clientY-start.y;if(Math.abs(start.dy)>10&&Math.abs(start.dy)>Math.abs(start.dx)*1.2)start.vertical=true;if(!isRevealed()||start.vertical||Math.abs(start.dx)<6)return;const width=card.getBoundingClientRect().width||320,progress=Math.min(1,Math.abs(start.dx)/swipeThreshold(width)),x=Math.max(-width,Math.min(width,start.dx));card.classList.add('swipe-moving');card.classList.toggle('swipe-known',x>0);card.classList.toggle('swipe-unknown',x<0);card.style.setProperty('--swipe-progress',String(progress));card.style.transform='translateX('+x+'px) rotate('+(x/28)+'deg)';};
card.onpointerup=async e=>{if(!start||start.id!==e.pointerId)return;const gesture=start;start=null;gesture.dx=e.clientX-gesture.x;gesture.dy=e.clientY-gesture.y;suppressClick=Math.hypot(gesture.dx,gesture.dy)>10;if(suppressClick)card.swipeIgnoreClickUntil=Date.now()+350;const choice=gesture.vertical?null:swipeChoice(gesture.dx,gesture.dy,card.getBoundingClientRect().width||320);if(choice!==null&&isRevealed()&&!isBusy())await onRate(choice);else resetSwipe(card);};
card.onpointercancel=()=>{start=null;suppressClick=true;resetSwipe(card);};
card.onclick=()=>{if(suppressClick||Date.now()<(card.swipeIgnoreClickUntil||0)){suppressClick=false;return;}if(!isRevealed()&&!isBusy())onReveal();};
card.onkeydown=e=>{if(isBusy())return;if((e.key==='Enter'||e.key===' ')&&!isRevealed()){e.preventDefault();onReveal();}else if(isRevealed()&&(e.key==='ArrowRight'||e.key==='ArrowLeft')){e.preventDefault();onRate(e.key==='ArrowRight');}};
}
