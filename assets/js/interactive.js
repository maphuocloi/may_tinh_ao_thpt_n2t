// interactive.js (REPLACE existing file with this)
// Handles hotspots, speech, start button, quiz popup with TTS reading questions/options.
function getViVoice() { const voices = speechSynthesis.getVoices ? speechSynthesis.getVoices() : []; const prefer = ['hoaimy','hoai','vn','vietnam','vi-VN']; for (const v of voices) { const name = (v.name||'').toLowerCase(); const lang = (v.lang||'').toLowerCase(); if (lang.startsWith('vi')) return v; for (const p of prefer) if(name.includes(p) || lang.includes(p)) return v; } for (const v of voices) if(v.lang && v.lang.toLowerCase().startsWith('vi')) return v; return voices[0] || null; }
function speak(text, opts = {}) { if (!('speechSynthesis' in window)) return; if (opts.cancel !== false) speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(text); u.lang = 'vi-VN'; const v = getViVoice(); if (v) u.voice = v; u.rate = (opts.rate !== undefined) ? opts.rate : 1.0; u.pitch = (opts.pitch !== undefined) ? opts.pitch : 1.1; u.volume = (opts.volume !== undefined) ? opts.volume : 1.0; speechSynthesis.speak(u); }
function stopSpeak() { if ('speechSynthesis' in window) speechSynthesis.cancel(); }
/* Quiz side-panel: dynamic quiz UI */
(function(){
  // Sample questions (thay nội dung thực tế vào đây)
  const QUESTIONS = [
    {q:"CPU là gì?", opts:["Bộ nhớ","Bộ xử lý trung tâm","Ổ cứng","Nguồn"], a:1},
    {q:"RAM dùng để làm gì?", opts:["Lưu tạm thời","Lưu vĩnh viễn","In ấn","Kết nối mạng"], a:0},
    {q:"Cổng USB type A thường kết nối với?", opts:["Màn hình","Máy in","Ổ cứng di động","CPU"], a:2},
    {q:"Thiết bị nào không phải thiết bị mạng?", opts:["Router","Switch","Bàn phím","Modem"], a:2},
    {q:"SSD so với HDD thì:", opts:["Chậm hơn","Nhanh hơn","Cùng tốc độ","Không dùng để lưu"], a:1},
    {q:"PSU là gì?", opts:["Bộ nguồn","Bộ xử lý","Bộ nhớ","Thiết bị vào"], a:0},
    {q:"Access Point (AP) dùng để:", opts:["In ấn","Phát wifi","Lưu trữ","Giám sát"], a:1},
    {q:"VGA thường dùng để kết nối:", opts:["Chuột","Màn hình","Loa","Bàn phím"], a:1},
    {q:"Hub khác Switch ở chỗ:", opts:["Đắt hơn","Gộp tín hiệu không thông minh","Nhanh hơn","Lưu trữ dữ liệu"], a:1},
    {q:"Mainboard làm nhiệm vụ:", opts:["Lưu trữ file","Kết nối các linh kiện","In tài liệu","Cung cấp wifi"], a:1}
  ];

  // state
  let answers = Array(QUESTIONS.length).fill(null);
  let current = 0;

  // DOM refs
  const panel = document.getElementById('quizPanel');
  const nav = document.getElementById('quizNav');
  const content = document.getElementById('quizContent');
  const progress = document.getElementById('quizProgress');

  function renderNav(){
    nav.innerHTML = "";
    QUESTIONS.forEach((_,i)=>{
      const btn = document.createElement('button');
      btn.className = 'qnum' + (i===current ? ' active' : '');
      btn.textContent = (i+1);
      btn.addEventListener('click', ()=>{ goTo(i); });
      nav.appendChild(btn);
    });
  }

  function renderQuestion(idx){
    current = idx;
    renderNav();
    const data = QUESTIONS[idx];
    progress.textContent = `Câu ${idx+1} / ${QUESTIONS.length}`;
    content.innerHTML = "";
    const h = document.createElement('h4'); h.textContent = (idx+1)+'. ' + data.q; content.appendChild(h);
    const opts = document.createElement('div'); opts.className = 'options';
    data.opts.forEach((opt,j)=>{
      const lbl = document.createElement('label');
      lbl.innerHTML = `<input type="radio" name="q${idx}" value="${j}"> ${String.fromCharCode(65+j)}. ${opt}`;
      // pre-select if answer exists
      const input = lbl.querySelector('input');
      if (answers[idx] !== null && answers[idx] == j) input.checked = true;
      input.addEventListener('change', ()=>{ answers[idx] = j; renderNav(); });
      opts.appendChild(lbl);
    });
    content.appendChild(opts);
  }

  function goTo(i){
    if (i < 0) i = 0;
    if (i >= QUESTIONS.length) i = QUESTIONS.length - 1;
    renderQuestion(i);
  }

  function openPanel(){
    // reset if first time
    if (!panel) return;
    panel.style.display = 'block';
    setTimeout(()=> panel.classList.add('open'), 20);
    renderNav();
    goTo(0);
  }

  function closePanel(){
    if (!panel) return;
    panel.classList.remove('open');
    setTimeout(()=> panel.style.display = 'none', 300);
  }

  function submitQuiz(){
    let score = 0;
    QUESTIONS.forEach((q,i)=>{
      if (answers[i] !== null && answers[i] == q.a) score++;
    });
    // show result in chat area (if exists) and as alert
    if (typeof appendChat === 'function') {
      appendChat(`Bạn đúng ${score} / ${QUESTIONS.length}`, 'bot');
    } else {
      // fallback
      alert(`Bạn đúng ${score} / ${QUESTIONS.length}`);
    }
    closePanel();
  }

  // attach buttons (exist in markup)
  document.addEventListener('DOMContentLoaded', function(){
    const openBtn = document.getElementById('openQuiz');
    const closeBtn = document.getElementById('closeQuizPanel') || document.getElementById('closeQuiz');
    const submitBtn = document.getElementById('submitQuiz');
    const prevBtn = document.getElementById('prevQ');
    const nextBtn = document.getElementById('nextQ');

    if (openBtn) openBtn.addEventListener('click', openPanel);
    if (closeBtn) closeBtn.addEventListener('click', closePanel);
    if (submitBtn) submitBtn.addEventListener('click', submitQuiz);
    if (prevBtn) prevBtn.addEventListener('click', ()=> goTo(current-1));
    if (nextBtn) nextBtn.addEventListener('click', ()=> goTo(current+1));
  });

})();

function buildQuizForPage(key) {
  const qlist = QUESTIONS[key] || [];
  const qform = document.getElementById('quizForm');
  if(!qform) return;
  qform.innerHTML = '';
  qlist.forEach((item, idx) => {
    const fs = document.createElement('fieldset');
    fs.dataset.ans = item.a;
    const legend = document.createElement('legend');
    legend.textContent = (idx+1)+'. '+item.q;
    fs.appendChild(legend);
    item.opts.forEach((opt, j)=> {
      const id = `q${idx}_opt${j}`;
      const lbl = document.createElement('label');
      lbl.style.display='block';
      lbl.innerHTML = `<input type="radio" name="q${idx}" value="${j}" id="${id}"> ${String.fromCharCode(65+j)}. ${opt}`;
      fs.appendChild(lbl);
    });
    qform.appendChild(fs);
  });
  let readBtn = document.getElementById('quizReadToggle');
  if(!readBtn){
    readBtn = document.createElement('button');
    readBtn.id = 'quizReadToggle';
    readBtn.className = 'small';
    readBtn.style.marginRight='8px';
    readBtn.textContent = 'Tắt đọc';
    readBtn.dataset.reading = '1';
    const btnRow = document.querySelector('#quizPopup .controls');
    if(btnRow){
      btnRow.insertBefore(readBtn, btnRow.firstChild);
    } else {
      const footer = document.createElement('div');
      footer.style.textAlign='left';
      footer.style.marginTop='8px';
      footer.appendChild(readBtn);
      document.getElementById('quizPopup').appendChild(footer);
    }
    readBtn.addEventListener('click', ()=> {
      if(readBtn.dataset.reading === '1'){ readBtn.dataset.reading='0'; readBtn.textContent='Bật đọc'; stopSpeak(); }
      else { readBtn.dataset.reading='1'; readBtn.textContent='Tắt đọc'; }
    });
  }
}
function readQuizSequentially(key) {
  return new Promise((resolve)=> {
    if(!('speechSynthesis' in window)) { resolve(); return; }
    const qlist = QUESTIONS[key] || [];
    let i = 0;
    const readBtn = document.getElementById('quizReadToggle');
    if(readBtn && readBtn.dataset.reading === '0') { resolve(); return; }
    function readOne() {
      if(i >= qlist.length){ resolve(); return; }
      const item = qlist[i];
      let text = `Câu ${i+1}: ${item.q}. `;
      item.opts.forEach((opt,j)=> {
        text += `Phương án ${String.fromCharCode(65+j)}: ${opt}. `;
      });
      speak(text, {rate:1.0, pitch:1.05});
      const onEnd = ()=> {
        speechSynthesis.removeEventListener('end', onEnd);
        if(readBtn && readBtn.dataset.reading === '0'){ resolve(); return; }
        i++; setTimeout(readOne, 300);
      };
      speechSynthesis.addEventListener('end', onEnd);
    }
    setTimeout(readOne, 350);
  });
}
document.addEventListener('DOMContentLoaded', function(){
  const startBtn = document.getElementById('startBtn');
  const hotspots = Array.from(document.querySelectorAll('.hotspot'));
  startBtn?.addEventListener('click', function(){ startBtn.style.display='none'; const audio = new Audio('assets/sounds/ting.wav'); audio.play().catch(()=>{}); hotspots.forEach((el, i) => { setTimeout(()=>{ el.style.opacity = 1; el.style.transform='scale(1) translateY(0)'; }, i * 300); }); });
  document.querySelectorAll('.hotspot').forEach(h=>{
    h.addEventListener('click', ()=>{
      const id = h.dataset.part;
      const title = h.dataset.title || id;
      const desc = h.dataset.desc || '';
      const modal = document.getElementById('infoModal');
      document.getElementById('infoTitle').textContent = title;
      document.getElementById('infoBody').textContent = desc;
      modal.style.display = 'block';
      const mp = document.getElementById('audio-'+id);
      if(mp && mp.src){
        mp.currentTime = 0;
        mp.play().catch(()=>{ speak(desc); });
      } else {
        speak(desc);
      }
    });
  });
  document.getElementById('infoClose')?.addEventListener('click', ()=>{ document.getElementById('infoModal').style.display='none'; });
  const path = window.location.pathname.split('/').pop();
  let pageKey = 'may_tinh';
  if(path && path.includes('ngoai_vi')) pageKey = 'ngoai_vi';
  else if(path && path.includes('mang')) pageKey = 'mang';
  buildQuizForPage(pageKey);
  document.getElementById('openQuiz')?.addEventListener('click', async ()=>{
    document.getElementById('quizPopup').classList.add('active');
    const rb = document.getElementById('quizReadToggle');
    if(rb) { rb.dataset.reading = rb.dataset.reading || '1'; rb.textContent = (rb.dataset.reading==='1') ? 'Tắt đọc' : 'Bật đọc'; }
    speak('Bắt đầu bài kiểm tra. Tôi sẽ đọc từng câu hỏi và các phương án. Bạn có thể tắt chức năng đọc nếu muốn.');
    setTimeout(()=> {
      if(!rb || rb.dataset.reading === '1') {
        readQuizSequentially(pageKey).then(()=>{});
      }
    }, 900);
  });
  document.getElementById('closeQuiz')?.addEventListener('click', ()=>{ document.getElementById('quizPopup').classList.remove('active'); stopSpeak(); });
  document.getElementById('submitQuiz')?.addEventListener('click', ()=>{
    const f = document.getElementById('quizForm');
    const fs = Array.from(f.querySelectorAll('fieldset'));
    let score = 0;
    fs.forEach((field, idx) => {
      const sel = field.querySelector('input[type=radio]:checked');
      if(sel && sel.value == field.dataset.ans) score++;
    });
    const txt = `Bạn đúng ${score} trên ${fs.length} câu.`;
    alert(txt);
    speak(txt);
    document.getElementById('quizPopup').classList.remove('active');
  });
  const chatSend = document.getElementById('chatSend');
  chatSend?.addEventListener('click', ()=>{
    const input = document.getElementById('chatInput');
    const q = (input && input.value) ? input.value.trim() : '';
    if(!q) return;
    appendChat('Bạn: '+q, 'user');
    input.value = '';
    const a = botReply(q);
    appendChat('Trợ lý: '+a, 'bot');
    speak(a);
  });
  document.getElementById('chatBubble')?.addEventListener('click', ()=>{
    const w = document.getElementById('chatWindow');
    if(!w) return;
    w.style.display = (w.style.display==='flex') ? 'none' : 'flex';
  });
});
function appendChat(text, cls) { const body = document.getElementById('chatBody'); if(!body) return; const p = document.createElement('div'); p.className = 'chatLine '+cls; p.textContent = text; body.appendChild(p); body.scrollTop = body.scrollHeight; }
function botReply(q){ const t = (q||'').toLowerCase(); const rules = [ {k:['cpu','bộ xử lý'], r:'CPU là bộ xử lý trung tâm, thực hiện các phép toán và điều khiển.'}, {k:['ram','bộ nhớ'], r:'RAM lưu trữ tạm thời dữ liệu khi chương trình đang chạy.'}, {k:['hdd','ssd','ổ cứng'], r:'HDD và SSD là thiết bị lưu trữ; SSD nhanh hơn vì không có phần cơ học.'}, {k:['mainboard','bo mạch'], r:'Mainboard kết nối các linh kiện chính: CPU, RAM, ổ đĩa và card.'}, {k:['router','modem'], r:'Modem kết nối đến ISP, Router định tuyến và chia sẻ mạng nội bộ.'}, {k:['in','máy in'], r:'Máy in để xuất nội dung ra giấy.'}, {k:['lưu','lưu trữ'], r:'Dữ liệu có thể lưu trên HDD hoặc SSD; RAM là nhất thời.'}, {k:['cổng','usb','vga','hdmi'], r:'Các cổng như USB, VGA, HDMI dùng để kết nối thiết bị ngoại vi.'} ]; for(const rule of rules){ for(const kw of rule.k) if(t.includes(kw)) return rule.r; } return 'Mình chưa hiểu rõ, bạn thử hỏi về CPU, RAM, ổ cứng hoặc thiết bị mạng nhé.'; }