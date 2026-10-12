// HANGUL_TOUCH_V21
// Handle single-finger taps directly so iOS never treats fast study taps as zoom.
// Scrolling, horizontal swipes, inputs and multi-finger gestures keep their defaults.
export function bindLearningTaps(root){
 let tap=null;
 root.addEventListener('touchstart',event=>{
  tap=null;if(!root.classList.contains('learning')||event.touches.length!==1)return;
  const target=event.target.closest?.('button,#flashCard');if(!target||target.disabled)return;
  const touch=event.touches[0];tap={target,id:touch.identifier,x:touch.clientX,y:touch.clientY};
 },{passive:true});
 root.addEventListener('touchmove',event=>{
  if(!tap)return;const touch=[...event.touches].find(t=>t.identifier===tap.id);
  if(event.touches.length!==1||!touch||Math.hypot(touch.clientX-tap.x,touch.clientY-tap.y)>10)tap=null;
 },{passive:true});
 root.addEventListener('touchend',event=>{
  const saved=tap;tap=null;if(!saved||event.touches.length||event.changedTouches.length!==1||!event.cancelable)return;
  const touch=event.changedTouches[0];if(touch.identifier!==saved.id||Math.hypot(touch.clientX-saved.x,touch.clientY-saved.y)>10||saved.target.disabled||!saved.target.isConnected)return;
  event.preventDefault();saved.target.click();
 },{passive:false});
 root.addEventListener('touchcancel',()=>{tap=null;},{passive:true});
}
