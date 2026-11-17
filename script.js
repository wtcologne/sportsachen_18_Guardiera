(() => {
  'use strict';
  const audio=document.getElementById('podcast-audio');
  const mainPlay=document.getElementById('player-play');
  const heroPlay=document.getElementById('hero-play');
  const progress=document.getElementById('progress');
  const currentLabel=document.getElementById('current-time');
  const durationLabel=document.getElementById('duration');
  const followToggle=document.getElementById('follow-toggle');
  const search=document.getElementById('transcript-search');
  const count=document.getElementById('search-count');
  const empty=document.getElementById('empty-state');
  const turns=[...document.querySelectorAll('.turn')];
  const starts=turns.map(x=>Number(x.dataset.start));
  const chapters=[...document.querySelectorAll('.chapter-link')];
  let activeIndex=-1;
  let seeking=false;
  let followSuspendedUntil=0;
  let lastFollowedIndex=-1;
  const format=(time)=>{const s=Math.max(0,Math.floor(Number(time)||0));return String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0')};
  const duration=()=>Number.isFinite(audio.duration)?audio.duration:2539.92;
  const seekTo=(second,play=true)=>{audio.currentTime=Math.max(0,Math.min(duration(),second));update();if(play)audio.play().catch(()=>{});};
  const togglePlay=()=>{if(audio.paused)audio.play().catch(()=>{});else audio.pause()};
  function paintPlayer(){const running=!audio.paused;mainPlay.textContent=running?'❚❚':'▶';mainPlay.setAttribute('aria-label',running?'Wiedergabe pausieren':'Wiedergabe starten');heroPlay.querySelector('.listen-icon').textContent=running?'❚❚':'▶';heroPlay.lastChild.textContent=running?' Pause':' Folge anhören'}
  function update(){if(!seeking){progress.value=audio.currentTime||0}progress.style.setProperty('--percent',`${(audio.currentTime/duration()*100)||0}%`);currentLabel.textContent=format(audio.currentTime);durationLabel.textContent=format(Math.ceil(duration()));let lo=0,hi=starts.length-1,ix=0;while(lo<=hi){const mid=(lo+hi)>>1;if(starts[mid] <= audio.currentTime+0.25){ix=mid;lo=mid+1}else hi=mid-1}if(ix!==activeIndex){if(activeIndex>=0)turns[activeIndex].classList.remove('is-active');activeIndex=ix;turns[ix].classList.add('is-active');turns[ix].setAttribute('aria-current','true');turns.forEach((t,i)=>{if(i!==ix)t.removeAttribute('aria-current')})}let ch=0;for(let i=0;i<chapters.length;i++)if(Number(chapters[i].dataset.seek)<=audio.currentTime+0.5)ch=i;chapters.forEach((c,i)=>{c.classList.toggle('active',i===ch);if(i===ch)c.setAttribute('aria-current','true');else c.removeAttribute('aria-current')});if(followToggle.checked && !search.value.trim() && !document.hidden && Date.now()>followSuspendedUntil && activeIndex!==lastFollowedIndex && (audio.currentTime>0.5)){const pane=document.getElementById('transkript').getBoundingClientRect();if(pane.top<innerHeight && pane.bottom>150){turns[activeIndex].scrollIntoView({behavior:'smooth',block:'center'});lastFollowedIndex=activeIndex;}}}
  heroPlay.addEventListener('click',togglePlay);mainPlay.addEventListener('click',togglePlay);audio.addEventListener('play',paintPlayer);audio.addEventListener('pause',paintPlayer);audio.addEventListener('ended',paintPlayer);audio.addEventListener('timeupdate',update);audio.addEventListener('loadedmetadata',()=>{progress.max=String(duration());update()});
  document.getElementById('back-15').addEventListener('click',()=>seekTo(audio.currentTime-15));document.getElementById('forward-15').addEventListener('click',()=>seekTo(audio.currentTime+15));document.getElementById('speed').addEventListener('change',ev=>audio.playbackRate=Number(ev.target.value));
  progress.addEventListener('input',()=>{seeking=true;currentLabel.textContent=format(progress.value)});progress.addEventListener('change',()=>{seeking=false;seekTo(Number(progress.value),!audio.paused)});
  document.addEventListener('click',e=>{const target=e.target.closest('[data-seek]');if(!target)return;seekTo(Number(target.dataset.seek));if(target.classList.contains('chapter-link') && window.innerWidth < 820){document.getElementById('transkript-list-placeholder')?.scrollIntoView();document.getElementById('transcript-list').scrollIntoView({behavior:'smooth',block:'start'});}else if(target.classList.contains('turn-time')){followSuspendedUntil=Date.now()+1200;}});
  // User's own navigation should not be overridden by auto-follow.
  ['touchstart','wheel'].forEach(name=>document.addEventListener(name,e=>{if(e.target.closest('.transcript-section,.data-section'))followSuspendedUntil=Date.now()+7500},{passive:true}));
  for(const a of document.querySelectorAll('a[href="#datenblatt"]'))a.addEventListener('click',()=>followSuspendedUntil=Date.now()+3600000);
  for(const a of document.querySelectorAll('a[href="#transkript"]'))a.addEventListener('click',()=>followSuspendedUntil=Date.now()+1500);
  const normalize=s=>s.toLocaleLowerCase('de-DE').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ß/g,'ss');
  search.addEventListener('input',()=>{const query=normalize(search.value.trim());let visible=0;turns.forEach(t=>{const matched=!query||normalize(t.dataset.search).includes(query);t.classList.toggle('is-hidden',!matched);if(matched)visible++});count.textContent=query?`${visible} Treffer`:'';empty.hidden=visible!==0;followSuspendedUntil=Date.now()+8000});
  document.addEventListener('keydown',e=>{if(['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName)||e.ctrlKey||e.metaKey||e.altKey)return;if(e.code==='Space'){e.preventDefault();togglePlay()}else if(e.code==='ArrowRight'){seekTo(audio.currentTime+5)}else if(e.code==='ArrowLeft'){seekTo(audio.currentTime-5)}});
  paintPlayer();update();
})();
