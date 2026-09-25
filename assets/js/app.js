
(function(){
'use strict';
const KEY='malik_ai_swe_progress_v2';
const data=window.ROADMAP_DATA; const criteria=window.PHASE_CRITERIA||{};
const totalWeeks=data.phases.reduce((n,p)=>n+p.weeks.length,0);
const weekMap={}; data.phases.forEach(p=>p.weeks.forEach(w=>weekMap[w[0]]={phase:p,week:w}));
function blank(){return {weeks:{},checks:{},current:'01'}}
function load(){try{const x=JSON.parse(localStorage.getItem(KEY));return x&&x.weeks&&x.checks?x:blank()}catch(e){return blank()}}
function save(s){localStorage.setItem(KEY,JSON.stringify(s))}
function doneCount(){const s=load();return Object.keys(s.weeks).filter(k=>s.weeks[k]).length}
function overall(){return Math.round(doneCount()/totalWeeks*100)}
function phasePct(p){const s=load();return Math.round(p.weeks.filter(w=>s.weeks[w[0]]).length/p.weeks.length*100)}
function setCurrent(w){const s=load();s.current=String(w).padStart(2,'0');save(s);render();toast('Current week set to Week '+String(w).padStart(2,'0'))}
function toggleWeek(w){const s=load();if(s.weeks[w])delete s.weeks[w];else s.weeks[w]=true;save(s);render()}
function toggleCheck(pid,i){const s=load();const k=pid+'-'+i;s.checks[k]=!s.checks[k];save(s);render()}
function reset(){localStorage.removeItem(KEY);render();toast('Progress reset on this device.')}
function pctStyle(el,p){el.style.setProperty('--p',p+'%')}
function render(){const s=load(),op=overall();document.querySelectorAll('[data-overall]').forEach(e=>e.textContent=op+'%');document.querySelectorAll('[data-weeks-done]').forEach(e=>e.textContent=doneCount()+' / '+totalWeeks);document.querySelectorAll('[data-current-week]').forEach(e=>{const x=weekMap[s.current]||weekMap['01'];e.textContent='Week '+s.current+' · '+x.week[1]});document.querySelectorAll('[data-overall-donut]').forEach(e=>pctStyle(e,op));document.querySelectorAll('[data-mini-donut]').forEach(e=>pctStyle(e,op));
 document.querySelectorAll('[data-phase-pct]').forEach(e=>{const p=data.phases.find(x=>x.id===Number(e.dataset.phasePct));if(p)e.textContent=phasePct(p)+'%'});
 document.querySelectorAll('[data-phase-fill]').forEach(e=>{const p=data.phases.find(x=>x.id===Number(e.dataset.phaseFill));if(p)e.style.width=phasePct(p)+'%'});
 document.querySelectorAll('[data-week-check]').forEach(e=>{e.checked=!!s.weeks[e.dataset.weekCheck]; const c=e.closest('.week-card');if(c)c.classList.toggle('shipped',!!s.weeks[e.dataset.weekCheck])});
 document.querySelectorAll('[data-current-marker]').forEach(e=>e.classList.toggle('current',String(e.dataset.currentMarker).padStart(2,'0')===s.current));
 document.querySelectorAll('[data-week-jump]').forEach(e=>{const w=e.dataset.weekJump;e.classList.toggle('done',!!s.weeks[w]);e.classList.toggle('current',w===s.current)});
 document.querySelectorAll('[data-phase-check]').forEach(e=>e.checked=!!s.checks[e.dataset.phaseCheck]);
 document.querySelectorAll('[data-phase-done-count]').forEach(e=>{const pid=e.dataset.phaseDoneCount;const a=criteria[pid]||[];const n=a.filter((_,i)=>s.checks[pid+'-'+i]).length;e.textContent=n+' / '+a.length});
}
function toast(msg){let t=document.querySelector('.toast');if(!t){t=document.createElement('div');t.className='toast';document.body.appendChild(t)}t.textContent=msg;t.classList.add('show');clearTimeout(window.__toast);window.__toast=setTimeout(()=>t.classList.remove('show'),2200)}
function openSearch(){document.querySelector('.search-overlay')?.classList.add('open');document.body.classList.add('modal-open');setTimeout(()=>document.querySelector('.search-input')?.focus(),30)}
function closeSearch(){document.querySelector('.search-overlay')?.classList.remove('open');document.body.classList.remove('modal-open')}
function doSearch(q){const out=document.querySelector('.search-results');if(!out)return;const term=q.trim().toLowerCase();if(!term){out.innerHTML='<div class="search-empty">Search phases, weeks, topics or projects.</div>';return}const results=[];data.phases.forEach(p=>p.weeks.forEach(w=>{const hay=(p.title+' '+p.short+' '+w[1]+' '+w[2].join(' ')).toLowerCase();if(hay.includes(term))results.push({title:'Week '+w[0]+' · '+w[1],meta:p.title+' · '+w[2].slice(0,2).join(' · '),href:'phase-'+p.id+'.html#week-'+w[0]});}));data.phases.forEach(p=>{if((p.title+' '+p.short+' '+p.goal).toLowerCase().includes(term))results.push({title:'Phase '+String(p.id).padStart(2,'0')+' · '+p.title,meta:p.short,href:'phase-'+p.id+'.html'})});if(!results.length){out.innerHTML='<div class="search-empty">No matches. Try “RAG”, “FastAPI”, “DSA”, “AWS”, or a week number.</div>';return}out.innerHTML=results.slice(0,30).map(r=>`<a class="search-result" href="${r.href}"><strong>${esc(r.title)}</strong><small>${esc(r.meta)}</small></a>`).join('')}
function renderPhaseResources(){
 const host=document.querySelector('[data-phase-resources]');
 if(!host||!window.PHASE_RESOURCES)return;
 const m=location.pathname.match(/phase-(\d+)\.html$/);
 if(!m)return;
 const pid=Number(m[1]); const items=window.PHASE_RESOURCES[pid]||[];
 host.innerHTML=`<div class="section-heading"><div><h2><span class="accent-bar"></span>Resources for this phase</h2><p>Curated primary paths, practice material and references. Open these when the week calls for them — not all at once.</p></div><span class="resource-count">${items.length} CURATED RESOURCES</span></div><div class="resource-grid">${items.map(r=>`<article class="resource-card"><div class="resource-top"><span class="resource-weeks">${esc(r.weeks)}</span><span class="resource-type">${esc(r.type)}</span></div><h3>${esc(r.title)}</h3><p>${esc(r.why)}</p><a href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">Open resource ↗</a></article>`).join('')}</div><div class="resource-note"><strong>How to use this list:</strong> start with PRIMARY, practice the week's output, and use REFERENCE/DEEPER material only when the primary path leaves a gap. The roadmap is designed around capability, not resource collection.</div>`;
}
function esc(x){return String(x).replace(/[&<>'"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[m]))}
window.MalikProgress={load,save,render,setCurrent,toggleWeek,toggleCheck,reset,overall,phasePct,totalWeeks,doneCount,data,criteria};
document.addEventListener('change',e=>{const w=e.target.closest('[data-week-check]');if(w){toggleWeek(w.dataset.weekCheck);return}const c=e.target.closest('[data-phase-check]');if(c)toggleCheck(c.dataset.phaseCheck.split('-')[0],Number(c.dataset.phaseCheck.split('-')[1]))});
document.addEventListener('click',e=>{const b=e.target.closest('[data-set-current]');if(b){e.preventDefault();setCurrent(b.dataset.setCurrent)}const r=e.target.closest('[data-reset-progress]');if(r&&confirm('Reset all roadmap progress saved on this device?'))reset();const ex=e.target.closest('[data-export]');if(ex){const blob=new Blob([JSON.stringify(load(),null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='malik-roadmap-progress.json';a.click();URL.revokeObjectURL(a.href);toast('Progress backup exported.')}const imp=e.target.closest('[data-import-trigger]');if(imp)document.querySelector('[data-import-input]')?.click();const menu=e.target.closest('[data-mobile-menu]');if(menu)document.body.classList.toggle('sidebar-open');const sb=e.target.closest('.sidebar a');if(sb&&window.innerWidth<821)document.body.classList.remove('sidebar-open');const sr=e.target.closest('[data-search-open]');if(sr)openSearch();const sc=e.target.closest('[data-search-close]');if(sc)closeSearch()});
document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();openSearch()}if(e.key==='Escape')closeSearch()});document.addEventListener('input',e=>{if(e.target.matches('.search-input'))doSearch(e.target.value)});
document.addEventListener('change',e=>{if(e.target.matches('[data-import-input]')){const f=e.target.files[0];if(!f)return;const rd=new FileReader();rd.onload=()=>{try{const x=JSON.parse(rd.result);if(!x.weeks||!x.checks)throw 0;save(x);render();toast('Progress backup imported.')}catch(_){toast('That backup file is not valid.')}};rd.readAsText(f)}});
window.addEventListener('storage',render);window.addEventListener('DOMContentLoaded',()=>{render();renderPhaseResources()});
})();
