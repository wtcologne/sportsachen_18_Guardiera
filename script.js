(() => {
  'use strict';
  const audio = document.getElementById('podcast-audio');
  const playButton = document.getElementById('player-play');
  const heroPlay = document.getElementById('hero-play');
  const heroPlayLabel = document.querySelector('.hero-play-label');
  const progress = document.getElementById('progress');
  const currentTime = document.getElementById('current-time');
  const durationTime = document.getElementById('duration');
  const search = document.getElementById('transcript-search');
  const resultCount = document.getElementById('search-count');
  const autoFollow = document.getElementById('follow-toggle');
  const turns = Array.from(document.querySelectorAll('.turn'));
  const chapterLinks = Array.from(document.querySelectorAll('[data-chapter-index]'));
  const sidebarLinks = Array.from(document.querySelectorAll('.chapter-link'));
  const starts = turns.map(turn => Number(turn.dataset.start));
  const chapters = sidebarLinks.map(link => ({ at:Number(link.dataset.seek), title:link.querySelector('.chapter-name').textContent }));
  const chapterLabel = document.getElementById('mobile-current-chapter');
  const chapterNumber = document.getElementById('mobile-chapter-number');
  const readingStatus = document.getElementById('reading-status');
  const jumpCurrent = document.getElementById('jump-current');
  const overlay = document.getElementById('chapters-overlay');
  const sheet = overlay.querySelector('.chapter-sheet');
  const openChapters = document.getElementById('open-chapters');
  const closeChapters = document.getElementById('close-chapters');
  let lastFocus = null;
  let activeTurn = -1;
  let activeChapter = -1;
  let lastFollowed = -1;
  let followSuspendedUntil = 0;
  let dragging = false;

  const isMobile = () => matchMedia('(max-width:790px)').matches;
  const secondsFormat = seconds => {
    const whole = Math.max(0,Math.floor(Number(seconds) || 0));
    return `${String(Math.floor(whole/60)).padStart(2,'0')}:${String(whole%60).padStart(2,'0')}`;
  };
  const duration = () => Number.isFinite(audio.duration) ? audio.duration : 2539.92;
  const lowerBound = (list, time) => {
    let lo = 0, hi = list.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (list[mid] <= time + 0.2) lo = mid + 1;
      else hi = mid;
    }
    return Math.max(0,lo - 1);
  };
  const seek = (seconds, startPlayback=true) => {
    const desired=Math.max(0,Math.min(duration(),seconds));
    audio.currentTime=desired;
    sync();
    if (startPlayback) audio.play().catch(() => {});
  };
  const playPause = () => audio.paused ? audio.play().catch(()=>{}) : audio.pause();
  const showCurrentTurn = (behavior='smooth') => {
    if (search.value.trim()) {
      search.value='';
      filterTranscript();
    }
    if (activeTurn >= 0) turns[activeTurn].scrollIntoView({behavior,block:'start'});
    lastFollowed = activeTurn;
  };
  const closeSheet = () => {
    if (overlay.hidden) return;
    overlay.hidden = true;
    document.body.classList.remove('sheet-open');
    if (lastFocus?.isConnected) lastFocus.focus();
  };
  const openSheet = () => {
    lastFocus = document.activeElement;
    overlay.hidden = false;
    document.body.classList.add('sheet-open');
    sheet.focus();
    const selected = overlay.querySelector('.sheet-chapter.active');
    if (selected) selected.scrollIntoView({block:'nearest'});
  };

  function markChapter(index) {
    if (index === activeChapter) return;
    activeChapter=index;
    chapterLinks.forEach(link => {
      const active=Number(link.dataset.chapterIndex)===index;
      link.classList.toggle('active',active);
      if (active) link.setAttribute('aria-current','true');
      else link.removeAttribute('aria-current');
    });
    chapterLabel.textContent=chapters[index].title;
    chapterNumber.textContent=`${String(index+1).padStart(2,'0')} / ${String(chapters.length).padStart(2,'0')}`;
    if (!isMobile()) {
      const selected=sidebarLinks[index];
      if (selected) {
        const list=selected.parentElement;
        const rect=selected.getBoundingClientRect();
        const viewport=list.getBoundingClientRect();
        if (rect.top < viewport.top) list.scrollTop -= viewport.top-rect.top;
        else if (rect.bottom > viewport.bottom) list.scrollTop += rect.bottom-viewport.bottom;
      }
    }
  }

  function sync() {
    const t=audio.currentTime || 0;
    if (!dragging) progress.value=t;
    currentTime.textContent=secondsFormat(t);
    durationTime.textContent=secondsFormat(Math.ceil(duration()));
    let ix=lowerBound(starts,t);
    if (ix!==activeTurn) {
      if (activeTurn>=0) {
        turns[activeTurn].classList.remove('is-active');
        turns[activeTurn].removeAttribute('aria-current');
      }
      activeTurn=ix;
      turns[ix].classList.add('is-active');
      turns[ix].setAttribute('aria-current','true');
      readingStatus.textContent=`Jetzt: ${turns[ix].dataset.speaker} · ${secondsFormat(starts[ix])}`;
    }
    markChapter(lowerBound(chapters.map(ch=>ch.at),t));
    if (autoFollow.checked && !audio.paused && !search.value.trim() && !document.hidden && Date.now()>followSuspendedUntil && activeTurn!==lastFollowed) {
      const reader=document.getElementById('transkript').getBoundingClientRect();
      if (reader.top < innerHeight * 0.55 && reader.bottom > 160) showCurrentTurn();
    }
  }

  function updateControls() {
    const playing=!audio.paused;
    playButton.textContent=playing?'Ⅱ':'▶';
    playButton.style.paddingLeft=playing?'0':'4px';
    playButton.setAttribute('aria-label',playing?'Wiedergabe pausieren':'Wiedergabe starten');
    heroPlay.querySelector('.play-glyph').textContent=playing?'Ⅱ':'▶';
    heroPlayLabel.textContent=playing?'Pause':'Folge anhören';
  }

  function normalize(text) {
    return (text || '').toLocaleLowerCase('de-DE').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ß/g,'ss');
  }
  function filterTranscript() {
    const q=normalize(search.value.trim());
    let n=0;
    turns.forEach(turn=>{
      const match=!q||normalize(turn.textContent).includes(q);
      turn.classList.toggle('is-hidden',!match);
      if (match) n++;
    });
    document.querySelectorAll('.chapter-divider').forEach(marker=>marker.hidden=!!q);
    resultCount.textContent=q?`${n} Treffer`:'';
    document.getElementById('empty-state').hidden=n!==0;
    followSuspendedUntil=Date.now()+7000;
  }

  heroPlay.addEventListener('click',playPause);
  playButton.addEventListener('click',playPause);
  document.getElementById('back-15').addEventListener('click',()=>seek(audio.currentTime-15,!audio.paused));
  document.getElementById('forward-15').addEventListener('click',()=>seek(audio.currentTime+15,!audio.paused));
  document.getElementById('speed').addEventListener('change',event=>{audio.playbackRate=Number(event.target.value)});
  audio.addEventListener('play',()=>{updateControls();sync()});
  audio.addEventListener('pause',updateControls);
  audio.addEventListener('ended',updateControls);
  audio.addEventListener('loadedmetadata',()=>{progress.max=String(duration());sync()});
  audio.addEventListener('timeupdate',sync);
  progress.addEventListener('input',()=>{dragging=true;currentTime.textContent=secondsFormat(progress.value)});
  progress.addEventListener('change',()=>{dragging=false;seek(Number(progress.value),!audio.paused)});
  search.addEventListener('input',filterTranscript);
  jumpCurrent.addEventListener('click',()=>{followSuspendedUntil=0;showCurrentTurn('instant')});
  autoFollow.addEventListener('change',()=>{if(autoFollow.checked){followSuspendedUntil=0;lastFollowed=-1;sync()}});
  openChapters.addEventListener('click',openSheet);
  closeChapters.addEventListener('click',closeSheet);
  overlay.querySelector('[data-close-chapters]').addEventListener('click',closeSheet);

  document.addEventListener('click',event=>{
    const button=event.target.closest('button[data-seek]');
    if (!button) return;
    const time=Number(button.dataset.seek);
    if (button.matches('[data-chapter-index]')) {
      if (!overlay.hidden) closeSheet();
      seek(time,true);
      followSuspendedUntil=Date.now()+3000;
      const at=lowerBound(starts,time);
      turns[at].scrollIntoView({behavior:'instant',block:'start'});
      lastFollowed=at;
    } else {
      seek(time,true);
      followSuspendedUntil=Date.now()+3500;
    }
  });
  document.addEventListener('keydown',event=>{
    if (!overlay.hidden) {
      if (event.key==='Escape'){event.preventDefault();closeSheet()}
      else if (event.key==='Tab') {
        const focusable=[...overlay.querySelectorAll('button:not([disabled])')];
        const first=focusable[0],last=focusable[focusable.length-1];
        if (event.shiftKey && document.activeElement===first){event.preventDefault();last.focus()}
        else if (!event.shiftKey && document.activeElement===last){event.preventDefault();first.focus()}
      }
      return;
    }
    const target=event.target;
    if (target.closest('input,select,textarea,button,a,[contenteditable]')||event.altKey||event.metaKey||event.ctrlKey)return;
    if (event.code==='Space'){event.preventDefault();playPause()}
    if (event.code==='ArrowRight')seek(audio.currentTime+5,!audio.paused);
    if (event.code==='ArrowLeft')seek(audio.currentTime-5,!audio.paused);
  });
  ['wheel','touchstart'].forEach(name=>document.addEventListener(name,event=>{
    if (event.target.closest('.reader-main')) followSuspendedUntil=Date.now()+8500;
  },{passive:true}));

  updateControls();
  sync();
})();
