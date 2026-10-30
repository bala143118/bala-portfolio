/**
 * CINEMATIC DETECTIVE EVIDENCE BOARD
 * Case File: #2026-BALA
 * Operator: Balamurugan S // Cyber Security & CTF Competitor
 */
(function () {
  'use strict';

  const $ = (s) => document.querySelector(s);
  const $$ = (s) => [...document.querySelectorAll(s)];
  const esc = (s) => String(s).replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));

  /* ==========================================================================
     1. AUTHENTIC EVIDENCE DOSSIER REPOSITORY
     ========================================================================== */
  const EVIDENCE_DATA = [
    {
      id: 'EVIDENCE-001',
      num: '001',
      category: 'ctf',
      pinType: 'gold',
      isFeatured: true,
      stamp: '1ST PRIZE',
      stampClass: '',
      title: "Cyber.l@gne'26 2.0 — AURA CTF",
      shortOrg: 'Mahendra Engineering College, Namakkal',
      result: '1ST PRIZE // STATE CHAMPION',
      resultClass: '',
      image: 'assets/evidence/cert_aura_ctf.jpg',
      isImage: true,
      date: '07/10/2026',
      summary: 'Won first place out of competing engineering colleges across the state in a rigorous 8-hour live Capture The Flag (CTF) tournament at a national-level technical symposium.',
      highlightsTitle: '// CHALLENGES EXPLOITED & SOLVED',
      highlights: [
        '<b>Web Exploitation:</b> Infiltrated backend databases via Union-based and Blind SQL Injection; bypassed broken access control to exfiltrate secret flags.',
        '<b>Network Forensics:</b> Performed deep packet inspection on corrupted PCAP network captures to extract hidden payloads and credentials.',
        '<b>Cryptography:</b> Decrypted multi-layered ciphertexts involving RSA weak-key vulnerabilities, AES modes, and custom XOR scramblers.',
        '<b>Reverse Engineering:</b> Disassembled stripped x86-64 binary executables to bypass password authentication routines.',
        '<b>Flag Captured:</b> <code>AURA_CTF{1st_Place_Cyberlagne_2026}</code>.'
      ],
      chips: ['1st Prize Trophy', 'AURA CTF', 'Burp Suite', 'Wireshark', 'Nmap', 'Python Scripting', 'Cryptography', 'Reverse Engineering'],
      proofUrl: 'resume.pdf',
      proofLabel: './inspect_resume_evidence &nearr;',
      connectedTo: [1, 3]
    },
    {
      id: 'EVIDENCE-002',
      num: '002',
      category: 'ctf',
      pinType: 'red',
      isFeatured: false,
      stamp: '2ND PRIZE',
      stampClass: 'second',
      title: "HACKNEXT'26 — Series 1.0",
      shortOrg: 'SNS College of Technology, Coimbatore',
      result: '2ND PRIZE (II PRIZE)',
      resultClass: 'second',
      image: 'assets/evidence/cert_hacknext26.jpg',
      isImage: true,
      date: '21/08/2026',
      summary: 'Team Kernel secured 2nd Prize at HACKNEXT’26 – Series 1.0, an AI-powered 8-hour hackathon organized by the Final Year Computer Science Stream at SNS AI Campus.',
      highlightsTitle: '// HACKATHON BRIEFING & INTEL',
      highlights: [
        '<b>Knowledge Domain:</b> Cyber Security & Artificial Intelligence.',
        '<b>Sprint Duration:</b> 8 Hours non-stop rapid engineering sprint.',
        '<b>Team Kernel:</b> Balamurugan S, Mathesh, Sivaraj, Jeevithkumar.',
        '<b>Execution:</b> Rapid architecture, continuous problem-solving, and delivering an offensive-defense prototype under high tournament pressure.'
      ],
      chips: ['Team Kernel', '2nd Prize', 'Cyber Security', 'AI & Security', '8-Hour Sprint', 'SNS College of Technology'],
      proofUrl: 'https://lnkd.in/p/gfE7sYPx',
      proofLabel: './verify_on_linkedin &nearr;',
      connectedTo: [0, 2]
    },
    {
      id: 'EVIDENCE-003',
      num: '003',
      category: 'ctf',
      pinType: 'red',
      isFeatured: false,
      stamp: '2ND PRIZE',
      stampClass: 'second',
      title: 'SUSTAINVERSE 2K26 (1st Runner-Up)',
      shortOrg: 'DMI College of Engineering, Chennai',
      result: '2ND PRIZE // 1ST RUNNER-UP',
      resultClass: 'second',
      image: 'assets/evidence/cert_sustainverse.png',
      isImage: true,
      date: '15/09/2026 – 16/09/2026',
      summary: 'Team Kernel secured 2nd Prize (1st Runner-Up) in the 24-Hour SUSTAINVERSE 2K26 Hackathon organized by DMI College of Engineering under the motto "Innovate. Collaborate. Conquer."',
      highlightsTitle: '// 24-HOUR SPRINT DOSSIER',
      highlights: [
        '<b>Event Venue:</b> DMI College of Engineering, Palanchur, Chennai (Autonomous, NBA accredited).',
        '<b>Sprint Conditions:</b> 24 Hours continuous non-stop building, testing, and shipping.',
        '<b>Team Members (TEAM KERNEL):</b> Balamurugan S, Karan S, Varun D.',
        '<b>Focus Track:</b> Sustainable Development Goals with applied security & software reliability.'
      ],
      chips: ['TEAM KERNEL', '24-Hour Hackathon', '1st Runner-Up (2nd Prize)', 'DMI Chennai', 'Problem Solving'],
      proofUrl: 'https://lnkd.in/p/gFbQrwrg',
      proofLabel: './verify_on_linkedin &nearr;',
      connectedTo: [1]
    },
    {
      id: 'EVIDENCE-004',
      num: '004',
      category: 'ctf',
      pinType: 'cyan',
      isFeatured: false,
      stamp: 'TOP 1.5%',
      stampClass: 'classified',
      title: 'Lun4R CTF 2026 Qualifiers',
      shortOrg: 'ROOT RIET · Rajadhani Inst of Eng & Tech',
      result: '29TH PLACE NATIONWIDE (OF 2,000+ TEAMS)',
      resultClass: '',
      image: 'assets/evidence/cert_lunar_ctf.jpg',
      isImage: true,
      date: '20/09/2026',
      summary: 'TEAM KERNEL competed in Lun4R CTF 2026, a national-level cybersecurity Capture The Flag competition organized by ROOT RIET, securing the 29th position among 2,000+ participants nationwide.',
      highlightsTitle: '// NATIONAL CTF PERFORMANCE',
      highlights: [
        '<b>National Standing:</b> 29th Position out of 2,000+ competing engineering teams nationwide.',
        '<b>Organized by:</b> ROOT RIET — Cybersecurity community of RIET, Thiruvananthapuram, Kerala.',
        '<b>Team Members (TEAM KERNEL):</b> Balamurugan S, Dheena, Jashwanth.',
        '<b>Focus Tracks:</b> Multi-domain cybersecurity knowledge, hands-on exploitation, and rapid problem-solving.'
      ],
      chips: ['TEAM KERNEL', '29th of 2,000+', 'Top 1.5% Nationwide', 'ROOT RIET', 'Capture The Flag'],
      proofUrl: 'https://lnkd.in/p/g2uQWxHj',
      proofLabel: './verify_on_linkedin &nearr;',
      connectedTo: [0, 4]
    },
    {
      id: 'EVIDENCE-005',
      num: '005',
      category: 'ctf',
      pinType: 'cyan',
      isFeatured: false,
      stamp: '57TH GLOBAL',
      stampClass: 'classified',
      title: 'NULL ORIGIN CTF 2026',
      shortOrg: 'Presented by CyberXOX (OffSec Partner)',
      result: '57TH PLACE GLOBALLY (INTERNATIONAL CTF)',
      resultClass: '',
      image: 'assets/evidence/cert_nullorigin_ctf.jpg',
      isImage: true,
      date: '19/09/2026',
      summary: 'Competed in NULL ORIGIN CTF 2026, a 24-hour International Capture The Flag (CTF) tournament presented by CyberXOX on 19 September 2026. Secured 57th position globally in live exploitation and security analysis.',
      highlightsTitle: '// GLOBAL TOURNAMENT METRICS',
      highlights: [
        '<b>Global Placement:</b> 57th Position globally (International CTF).',
        '<b>Certificate Verification ID:</b> NO-2026-CB81CE · Verify at creds.cyberhx.com.',
        '<b>Event Partners:</b> Supported by OffSec, Unstop, INE, Altered Security, and Render.',
        '<b>Core Competencies:</b> Real-world attack surface mapping, vulnerability identification, and ethical hacking.'
      ],
      chips: ['57th Place Globally', 'International CTF', 'OffSec Partner', 'CyberXOX', 'Certificate NO-2026-CB81CE'],
      proofUrl: 'https://lnkd.in/p/g9CzvbF5',
      proofLabel: './verify_on_linkedin &nearr;',
      connectedTo: [3]
    },
  /*
   * ===========================================================================
   * TEMPLATE: TO ADD NEW EVIDENCE ITEMS, APPEND OBJECTS BELOW:
   * ===========================================================================
   * {
   *   id: 'EVIDENCE-NEW',
   *   num: '006',
   *   category: 'project', // 'ctf' | 'project' | 'academics'
   *   pinType: 'cyan',     // 'cyan' | 'gold' | 'red'
   *   isFeatured: false,
   *   stamp: 'CLASSIFIED',
   *   stampClass: '',
   *   title: 'Your Evidence Title',
   *   shortOrg: 'Organization or Project Subtitle',
   *   result: 'OUTCOME OR STATUS',
   *   resultClass: '',
   *   image: 'assets/evidence/your_image.jpg',
   *   isImage: true,
   *   date: '2026',
   *   summary: 'Description of the achievement, project, or evidence...',
   *   highlightsTitle: '// TECHNICAL SPECIFICATIONS',
   *   highlights: [
   *     '<b>Highlight 1:</b> Details here...',
   *     '<b>Highlight 2:</b> Details here...'
   *   ],
   *   chips: ['Tag 1', 'Tag 2', 'Tooling'],
   *   proofUrl: 'https://...',
   *   proofLabel: './inspect_evidence &nearr;',
   *   connectedTo: []
   * }
   */
  ];

  /* ==========================================================================
     2. PROCEDURAL SOUND SYNTHESIZER (WEB AUDIO API)
     ========================================================================== */
  class DetectiveAudio {
    constructor() {
      this.ctx = null;
      this.enabled = true;
    }

    init() {
      if (!this.ctx && typeof window.AudioContext !== 'undefined') {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioCtx();
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    toggle() {
      this.enabled = !this.enabled;
      return this.enabled;
    }

    playPaperRustle() {
      if (!this.enabled) return;
      try {
        this.init();
        if (!this.ctx) return;
        const bufferSize = this.ctx.sampleRate * 0.07;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.25));
        }
        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(1400, this.ctx.currentTime);
        filter.Q.setValueAtTime(2.2, this.ctx.currentTime);

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.07);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);
        noise.start();
      } catch (e) {}
    }

    playClick() {
      if (!this.enabled) return;
      try {
        this.init();
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(950, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.05);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.05);
      } catch (e) {}
    }

    playScanChime() {
      if (!this.enabled) return;
      try {
        this.init();
        if (!this.ctx) return;
        const notes = [587.33, 739.99, 880, 1174.66];
        notes.forEach((freq, i) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, this.ctx.currentTime + i * 0.055);
          gain.gain.setValueAtTime(0.04, this.ctx.currentTime + i * 0.055);
          gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + i * 0.055 + 0.22);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(this.ctx.currentTime + i * 0.055);
          osc.stop(this.ctx.currentTime + i * 0.055 + 0.22);
        });
      } catch (e) {}
    }
  }

  const sfx = new DetectiveAudio();

  /* ==========================================================================
     3. AMBIENT DUST & SPOTLIGHT PARALLAX SIMULATION
     ========================================================================== */
  function initDustAndLighting() {
    const canvas = $('#ambientDustCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    // Seed 40 soft dust motes
    const motes = Array.from({ length: 40 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.25,
      vy: Math.random() * 0.35 + 0.1,
      alpha: Math.random() * 0.5 + 0.2
    }));

    function loop() {
      ctx.clearRect(0, 0, width, height);

      motes.forEach((m) => {
        m.x += m.vx;
        m.y += m.vy;
        if (m.x < 0) m.x = width;
        if (m.x > width) m.x = 0;
        if (m.y > height) m.y = 0;

        ctx.fillStyle = `rgba(0, 229, 255, ${m.alpha * 0.4})`;
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);

    // Mouse Spotlight & Subtle 3D Parallax Tilt
    let mouseX = width / 2;
    let mouseY = height * 0.35;
    let curX = mouseX;
    let curY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function updateParallax() {
      curX += (mouseX - curX) * 0.08;
      curY += (mouseY - curY) * 0.08;

      const normX = (curX / width - 0.5) * 2;
      const normY = (curY / height - 0.5) * 2;

      document.documentElement.style.setProperty('--mouse-x', `${curX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${curY}px`);

      // Gentle 3D perspective tilt
      const tiltX = (normX * 1.8).toFixed(2);
      const tiltY = (-normY * 1.8).toFixed(2);
      document.documentElement.style.setProperty('--tilt-x', `${tiltX}deg`);
      document.documentElement.style.setProperty('--tilt-y', `${tiltY}deg`);

      requestAnimationFrame(updateParallax);
    }
    requestAnimationFrame(updateParallax);
  }

  /* ==========================================================================
     3B. CYBERPUNK MATRIX DIGITAL RAIN SIMULATION
     ========================================================================== */
  function initMatrixRain() {
    const cv = $('#matrix');
    if (!cv) return;
    const cx = cv.getContext('2d');
    let cols, drops;

    function rs() {
      cv.width = window.innerWidth;
      cv.height = window.innerHeight;
      cols = Math.floor(cv.width / 16);
      drops = Array(cols).fill(0).map(() => Math.random() * -50);
    }
    rs();
    window.addEventListener('resize', rs);

    const glyphs = '01アイウエオカキクケコ{}[]<>/\\$#%ABCDEF';
    setInterval(() => {
      cx.fillStyle = 'rgba(5, 8, 10, 0.12)';
      cx.fillRect(0, 0, cv.width, cv.height);
      cx.fillStyle = '#39ff14';
      cx.font = '14px JetBrains Mono, monospace';
      drops.forEach((y, i) => {
        cx.fillText(glyphs[Math.floor(Math.random() * glyphs.length)], i * 16, y * 16);
        drops[i] = (y * 16 > cv.height && Math.random() > 0.975) ? 0 : y + 1;
      });
    }, 55);
  }

  /* ==========================================================================
     4. RENDER EVIDENCE CARDS ON THE WALL & SELECTION LOGIC
     ========================================================================== */
  let currentFilter = 'all';
  let activeIndex = 0;

  function flashKeyCap(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.add('active-cap');
    setTimeout(() => el.classList.remove('active-cap'), 180);
  }

  function setSelectedCard(index, shouldScroll = false) {
    const cards = $$('.evidence-item');
    if (cards.length === 0) return;
    if (index < 0) index = cards.length - 1;
    if (index >= cards.length) index = 0;
    activeIndex = index;

    cards.forEach((c, idx) => {
      if (idx === activeIndex) {
        c.classList.add('is-selected');
        if (shouldScroll) {
          c.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      } else {
        c.classList.remove('is-selected');
      }
    });

    highlightConnectedThreads(activeIndex);
  }

  function navigateCards(step) {
    sfx.playClick();
    setSelectedCard(activeIndex + step, true);
  }

  function renderEvidenceCards() {
    const grid = $('#evidenceGrid');
    if (!grid) return;
    grid.innerHTML = '';
    const counterEl = $('#evidenceCounterHud');
    if (counterEl) counterEl.innerHTML = `LOGGED: <b>${EVIDENCE_DATA.length} ITEMS</b>`;

    EVIDENCE_DATA.forEach((item, index) => {
      const card = document.createElement('article');
      card.className = `evidence-item ${item.isFeatured ? 'featured-item' : ''}`;
      card.dataset.index = index;
      card.dataset.category = item.category;

      const pinClass = item.pinType === 'gold' ? 'gold' : (item.pinType === 'cyan' ? 'cyan' : '');

      let visualHtml = '';
      if (item.isImage) {
        visualHtml = `
          <div class="evidence-photo-frame">
            <span class="photo-corner pc-tl"></span>
            <span class="photo-corner pc-tr"></span>
            <span class="photo-corner pc-bl"></span>
            <span class="photo-corner pc-br"></span>
            <img src="${esc(item.image)}" alt="${esc(item.title)}" class="evidence-photo" decoding="async">
            <div class="click-inspect-hint">
              <span class="hint-icon">🔍</span>
              <span>CLICK TO INSPECT</span>
            </div>
          </div>
        `;
      } else {
        visualHtml = `
          <div class="evidence-photo-frame">
            <span class="photo-corner pc-tl"></span>
            <span class="photo-corner pc-tr"></span>
            <span class="photo-corner pc-bl"></span>
            <span class="photo-corner pc-br"></span>
            <div class="evidence-doc-placeholder">
              <span style="color:var(--amber);font-size:11px;letter-spacing:1px">// PRODUCTION SYSTEM</span>
              <h4 style="margin-top:4px">${esc(item.title)}</h4>
              <p>${esc(item.shortOrg)}</p>
              <div style="margin-top:10px;color:var(--green);font-size:11px;font-family:var(--ui);letter-spacing:1px">
                STATUS: DEPLOYED // PID 0x01
              </div>
            </div>
            <div class="click-inspect-hint">
              <span class="hint-icon">🔍</span>
              <span>INSPECT DOSSIER</span>
            </div>
          </div>
        `;
      }

      card.innerHTML = `
        <span class="tape-strip tape-left"></span>
        <span class="tape-strip tape-right"></span>
        <div class="pin-anchor">
          <div class="pushpin ${pinClass}"></div>
        </div>
        <div class="evidence-card-header">
          <span class="evidence-id-tag">${esc(item.id)}</span>
          <span class="evidence-type-badge">${esc(item.category)}</span>
        </div>
        ${visualHtml}
        <div class="evidence-caption-box">
          <h3 class="evidence-title">${esc(item.title)}</h3>
          <div class="evidence-institution">${esc(item.shortOrg)}</div>
          <div class="evidence-stamp-row">
            <span style="color:var(--text-dim)">DATE: ${esc(item.date)}</span>
            <span class="rubber-stamp ${item.stampClass}">${esc(item.stamp)}</span>
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        setSelectedCard(index);
        sfx.playPaperRustle();
        setTimeout(() => {
          openInspectionModal(index);
        }, 120);
      });

      card.addEventListener('mouseenter', () => {
        setSelectedCard(index, false);
        sfx.playPaperRustle();
      });

      card.addEventListener('mouseleave', () => {
        clearThreadHighlights();
      });

      grid.appendChild(card);
    });

    setSelectedCard(0);
    setTimeout(drawConnectingThreads, 150);
  }

  /* ==========================================================================
     5. CONNECTING RED EVIDENCE STRINGS (SVG DYNAMIC LAYER)
     ========================================================================== */
  function drawConnectingThreads() {
    const svg = $('#threadsSvg');
    const stage = $('#boardStage') || $('#boardWrapper');
    if (!svg || !stage) return;

    const cards = $$('.evidence-item');
    if (cards.length === 0) return;

    // Synchronize SVG canvas height to stage scrollHeight
    const stageRect = stage.getBoundingClientRect();
    const stageHeight = Math.max(stage.scrollHeight, stageRect.height);
    svg.style.height = `${stageHeight}px`;

    svg.innerHTML = '';
    const svgRect = svg.getBoundingClientRect();

    function getPinCoords(cardEl) {
      const pin = cardEl.querySelector('.pushpin');
      if (!pin) return null;
      const rect = pin.getBoundingClientRect();
      return {
        x: rect.left + rect.width / 2 - svgRect.left,
        y: rect.top + rect.height / 2 - svgRect.top
      };
    }

    const connections = [
      [0, 1], [1, 2],
      [0, 3], [3, 4]
    ];

    connections.forEach(([i1, i2]) => {
      const c1 = cards[i1];
      const c2 = cards[i2];
      if (!c1 || !c2) return;
      if (c1.style.display === 'none' || c2.style.display === 'none') return;

      const p1 = getPinCoords(c1);
      const p2 = getPinCoords(c2);
      if (!p1 || !p2) return;

      const midX = (p1.x + p2.x) / 2;
      const midY = (p1.y + p2.y) / 2 + 18;

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', `M ${p1.x} ${p1.y} Q ${midX} ${midY} ${p2.x} ${p2.y}`);
      path.setAttribute('class', 'thread-line');
      path.dataset.nodes = `${i1}-${i2}`;
      svg.appendChild(path);

      [p1, p2].forEach((pt) => {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', pt.x);
        circle.setAttribute('cy', pt.y);
        circle.setAttribute('r', '3.5');
        circle.setAttribute('class', 'thread-knot');
        svg.appendChild(circle);
      });
    });
  }

  function highlightConnectedThreads(index) {
    const lines = $$('.thread-line');
    lines.forEach((line) => {
      const nodes = line.dataset.nodes ? line.dataset.nodes.split('-').map(Number) : [];
      if (nodes.includes(index)) {
        line.classList.add('active-thread');
      } else {
        line.classList.remove('active-thread');
      }
    });
  }

  function clearThreadHighlights() {
    $$('.thread-line').forEach((l) => l.classList.remove('active-thread'));
  }

  window.addEventListener('resize', drawConnectingThreads);
  window.addEventListener('load', drawConnectingThreads);
  if (document.fonts) {
    document.fonts.ready.then(() => {
      setTimeout(drawConnectingThreads, 50);
    });
  }

  /* ==========================================================================
     6. CINEMATIC CERTIFICATE INSPECTION (MODAL, ZOOM & PAN)
     ========================================================================== */
  let isZoomed = false;

  function openInspectionModal(index) {
    const item = EVIDENCE_DATA[index];
    if (!item) return;

    activeIndex = index;
    sfx.playScanChime();

    const modal = $('#inspectionModal');
    const fullImg = $('#modalFullImage');
    const docPlaceholder = $('#modalDocPlaceholder');
    const certWrap = $('#certImageWrap');
    if (!modal) return;

    // Reset zoom state
    resetZoom();

    // Populate Modal Content
    const evId = $('#modalEvidenceId');
    if (evId) evId.textContent = item.id;

    const evType = $('#modalEvidenceType');
    if (evType) evType.textContent = item.category.toUpperCase() + ' // ' + item.stamp;

    const evTitle = $('#modalEventName');
    if (evTitle) evTitle.textContent = item.title;

    const evInst = $('#modalInstitution');
    if (evInst) evInst.textContent = item.shortOrg;

    const evDesc = $('#modalDescription');
    if (evDesc) evDesc.textContent = item.summary;

    // Prize Banner
    const banner = $('#modalPrizeBanner');
    const prizeText = $('#modalPrizeText');
    const prizeIcon = $('#modalPrizeIcon');
    if (prizeText) prizeText.textContent = item.result;
    if (banner) {
      if (item.resultClass === 'second') {
        banner.className = 'dossier-prize-banner second';
        if (prizeIcon) prizeIcon.textContent = '🥈';
      } else {
        banner.className = 'dossier-prize-banner';
        if (prizeIcon) prizeIcon.textContent = '🏆';
      }
    }

    // Highlights
    const hlTitle = $('#modalHighlightsTitle');
    if (hlTitle) hlTitle.textContent = item.highlightsTitle;
    const hlList = $('#modalHighlightsList');
    if (hlList) hlList.innerHTML = item.highlights.map((h) => `<li>${h}</li>`).join('');

    // Chips
    const chipsWrap = $('#modalChipsWrap');
    if (chipsWrap) chipsWrap.innerHTML = item.chips.map((c) => `<span class="dossier-chip">${esc(c)}</span>`).join('');

    // Proof link
    const proofBtn = $('#modalProofBtn');
    if (proofBtn) {
      proofBtn.href = item.proofUrl;
      proofBtn.innerHTML = `${item.proofLabel}`;
    }

    // Counter
    const counterInd = $('#modalCounterIndicator');
    if (counterInd) counterInd.textContent = `${index + 1} / ${EVIDENCE_DATA.length}`;

    // Handle Image vs Text placeholder
    if (item.isImage && fullImg) {
      fullImg.src = item.image;
      fullImg.alt = item.title;
      fullImg.style.display = 'block';
      if (docPlaceholder) docPlaceholder.style.display = 'none';
      if (certWrap) certWrap.style.display = 'flex';
      const zoomBtn = $('#modalZoomBtn');
      if (zoomBtn) zoomBtn.style.display = 'inline-flex';
    } else {
      if (fullImg) fullImg.style.display = 'none';
      if (certWrap) certWrap.style.display = 'none';
      const zoomBtn = $('#modalZoomBtn');
      if (zoomBtn) zoomBtn.style.display = 'none';
      if (docPlaceholder) {
        docPlaceholder.style.display = 'flex';
        const docTitle = $('#modalDocTitle');
        if (docTitle) docTitle.textContent = item.title;
        const docBody = $('#modalDocBody');
        if (docBody) {
          docBody.innerHTML = `
            <div style="margin-bottom:12px;color:var(--amber)"><b>CLASSIFICATION:</b> DEPLOYED ENTERPRISE SYSTEM</div>
            <p style="margin-bottom:12px">${esc(item.summary)}</p>
            <div style="background:#05090c;padding:12px;border:1px solid var(--panel-border)">
              <div style="color:var(--green)">$ git status // production repository verified</div>
              <div style="color:var(--text-dim);font-size:11px;margin-top:4px">Full-stack platform with JWT, PostgreSQL, YOLOv8 CCTV AI &amp; Telegram Bot.</div>
            </div>
          `;
        }
      }
    }

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeInspectionModal() {
    const modal = $('#inspectionModal');
    if (!modal || !modal.classList.contains('open')) return;
    sfx.playClick();
    resetZoom();
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function toggleZoom() {
    const certWrap = $('#certImageWrap');
    const zoomPill = $('#zoomHintPill');
    const zoomBtn = $('#modalZoomBtn');
    if (!certWrap) return;

    isZoomed = !isZoomed;
    sfx.playClick();

    if (isZoomed) {
      certWrap.classList.add('is-zoomed');
      if (zoomPill) zoomPill.textContent = 'CLICK TO RESET ZOOM';
      if (zoomBtn) zoomBtn.innerHTML = '<span>🔍</span> RESET VIEW [Z]';
    } else {
      certWrap.classList.remove('is-zoomed');
      certWrap.style.transformOrigin = 'center center';
      if (zoomPill) zoomPill.textContent = 'CLICK TO ZOOM IN';
      if (zoomBtn) zoomBtn.innerHTML = '<span>🔍</span> ZOOM VIEW [Z]';
    }
  }

  function resetZoom() {
    isZoomed = false;
    const certWrap = $('#certImageWrap');
    const zoomPill = $('#zoomHintPill');
    const zoomBtn = $('#modalZoomBtn');
    if (certWrap) {
      certWrap.classList.remove('is-zoomed');
      certWrap.style.transformOrigin = 'center center';
    }
    if (zoomPill) zoomPill.textContent = 'CLICK TO ZOOM IN';
    if (zoomBtn) zoomBtn.innerHTML = '<span>🔍</span> ZOOM VIEW [Z]';
  }

  // Smooth Pan on Mousemove when Zoomed
  function handleZoomPan(e) {
    if (!isZoomed) return;
    const certWrap = $('#certImageWrap');
    if (!certWrap) return;
    const rect = certWrap.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    certWrap.style.transformOrigin = `${x}% ${y}%`;
  }

  function navigateEvidence(step) {
    let nextIndex = activeIndex + step;
    if (nextIndex < 0) nextIndex = EVIDENCE_DATA.length - 1;
    if (nextIndex >= EVIDENCE_DATA.length) nextIndex = 0;
    openInspectionModal(nextIndex);
  }

  function returnToPortfolio() {
    window.location.href = 'index.html';
  }

  /* ==========================================================================
     7. INITIALIZATION & BINDINGS
     ========================================================================== */
  function init() {
    initMatrixRain();
    initDustAndLighting();
    renderEvidenceCards();

    const grid = $('#evidenceGrid');
    if (grid && typeof ResizeObserver !== 'undefined') {
      const ro = new ResizeObserver(() => {
        drawConnectingThreads();
      });
      ro.observe(grid);
    }

    // Modal navigation buttons
    const prevBtn = $('#modalPrevBtn');
    if (prevBtn) prevBtn.addEventListener('click', () => navigateEvidence(-1));

    const nextBtn = $('#modalNextBtn');
    if (nextBtn) nextBtn.addEventListener('click', () => navigateEvidence(1));

    const closeBtn = $('#modalCloseBtn');
    if (closeBtn) closeBtn.addEventListener('click', closeInspectionModal);

    const zoomBtn = $('#modalZoomBtn');
    if (zoomBtn) zoomBtn.addEventListener('click', toggleZoom);

    const certWrap = $('#certImageWrap');
    if (certWrap) {
      certWrap.addEventListener('click', toggleZoom);
      certWrap.addEventListener('mousemove', handleZoomPan);
    }

    const modalEl = $('#inspectionModal');
    if (modalEl) {
      modalEl.addEventListener('click', (e) => {
        if (e.target === modalEl) closeInspectionModal();
      });
    }

    // Interactive HUD Keycap Buttons
    const btnPrev = $('#keyBtnPrev');
    if (btnPrev) {
      btnPrev.addEventListener('click', (e) => {
        e.preventDefault();
        flashKeyCap('keyBtnPrev');
        const m = $('#inspectionModal');
        if (m && m.classList.contains('open')) {
          navigateEvidence(-1);
        } else {
          navigateCards(-1);
        }
      });
    }

    const btnNext = $('#keyBtnNext');
    if (btnNext) {
      btnNext.addEventListener('click', (e) => {
        e.preventDefault();
        flashKeyCap('keyBtnNext');
        const m = $('#inspectionModal');
        if (m && m.classList.contains('open')) {
          navigateEvidence(1);
        } else {
          navigateCards(1);
        }
      });
    }

    const btnZoom = $('#keyBtnZoom');
    if (btnZoom) {
      btnZoom.addEventListener('click', (e) => {
        e.preventDefault();
        flashKeyCap('keyBtnZoom');
        const m = $('#inspectionModal');
        if (m && m.classList.contains('open')) {
          toggleZoom();
        } else {
          openInspectionModal(activeIndex);
        }
      });
    }

    const btnEsc = $('#keyBtnEsc');
    if (btnEsc) {
      btnEsc.addEventListener('click', (e) => {
        e.preventDefault();
        flashKeyCap('keyBtnEsc');
        const m = $('#inspectionModal');
        if (m && m.classList.contains('open')) {
          closeInspectionModal();
        } else {
          returnToPortfolio();
        }
      });
    }

    // Category Filter Buttons
    $$('#filterTabs .filter-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        $$('#filterTabs .filter-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        sfx.playClick();

        let visibleCount = 0;
        let firstVisibleIdx = -1;
        $$('.evidence-item').forEach((card, idx) => {
          const cat = card.dataset.category;
          if (currentFilter === 'all' || cat === currentFilter) {
            card.style.display = 'block';
            if (firstVisibleIdx === -1) firstVisibleIdx = idx;
            visibleCount++;
          } else {
            card.style.display = 'none';
          }
        });

        const grid = $('#evidenceGrid');
        const emptyNoticeId = 'emptyDossierNotice';
        const prevNotice = document.getElementById(emptyNoticeId);
        if (prevNotice) prevNotice.remove();

        if (visibleCount === 0 && grid) {
          const notice = document.createElement('div');
          notice.id = emptyNoticeId;
          notice.style.cssText = 'grid-column:1/-1;text-align:center;padding:50px 20px;border:1px dashed var(--line);background:rgba(12,20,24,0.6);border-radius:4px;color:var(--dim);margin:30px auto;max-width:540px;';
          notice.innerHTML = '<span style="color:var(--amber);font-size:18px;display:block;margin-bottom:8px">⚡ // DOSSIER CATEGORY EMPTY</span><p style="font-size:13px;color:var(--text);margin-bottom:6px">No evidence records are filed in this category yet.</p><p style="font-size:11px;color:var(--dim);letter-spacing:1px">[ READY FOR INCOMING EVIDENCE ]</p>';
          grid.appendChild(notice);
        } else if (firstVisibleIdx !== -1) {
          setSelectedCard(firstVisibleIdx);
        }

        const counterEl = $('#evidenceCounterHud');
        if (counterEl) counterEl.innerHTML = `LOGGED: <b>${visibleCount} ITEMS</b>`;
        setTimeout(drawConnectingThreads, 100);
      });
    });

    const sfxBtn = $('#sfxToggleBtn');
    if (sfxBtn) {
      sfxBtn.addEventListener('click', () => {
        const isEnabled = sfx.toggle();
        const icon = $('#sfxIcon');
        if (icon) icon.textContent = isEnabled ? '🔊' : '🔇';
      });
    }

    const returnBtn = $('#btnReturn');
    if (returnBtn) {
      returnBtn.addEventListener('click', (e) => {
        e.preventDefault();
        returnToPortfolio();
      });
    }

    // Global Key Listener: operates whether modal is open or browsing the board
    window.addEventListener('keydown', (e) => {
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;

      const m = $('#inspectionModal');
      const isModalOpen = m && m.classList.contains('open');

      if (e.key === 'Escape') {
        flashKeyCap('keyBtnEsc');
        if (isModalOpen) {
          closeInspectionModal();
        } else {
          returnToPortfolio();
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        flashKeyCap('keyBtnPrev');
        if (isModalOpen) {
          navigateEvidence(-1);
        } else {
          navigateCards(-1);
        }
      } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        flashKeyCap('keyBtnNext');
        if (isModalOpen) {
          navigateEvidence(1);
        } else {
          navigateCards(1);
        }
      } else if (e.key === 'z' || e.key === 'Z') {
        flashKeyCap('keyBtnZoom');
        if (isModalOpen) {
          toggleZoom();
        } else {
          openInspectionModal(activeIndex);
        }
      } else if (e.key === 'Enter' || e.key === ' ') {
        if (!isModalOpen) {
          flashKeyCap('keyBtnZoom');
          e.preventDefault();
          openInspectionModal(activeIndex);
        }
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
