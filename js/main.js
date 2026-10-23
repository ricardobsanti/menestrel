/* A Balada do Menestrel — interações da página (sem bibliotecas). */
(() => {
  const cfg = window.MENESTREL_CONFIG || { downloads: [] };
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const calmo = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const toque = matchMedia('(hover: none)').matches;

  window.addEventListener('load', () => setTimeout(() => document.body.classList.add('carregado'), 250));
  // se alguma imagem demorar, não prende ninguém na tela de carregamento
  setTimeout(() => document.body.classList.add('carregado'), 3500);

  // ------------------------------------------------------------ topo e menu
  const topo = $('#topo');
  const onScroll = () => topo.classList.toggle('rolou', scrollY > 30);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const ham = $('#hamburguer');
  ham.addEventListener('click', () => {
    const aberto = document.body.classList.toggle('menu-aberto');
    ham.setAttribute('aria-expanded', String(aberto));
  });
  $$('#menu a').forEach((a) => a.addEventListener('click', () => {
    document.body.classList.remove('menu-aberto');
    ham.setAttribute('aria-expanded', 'false');
  }));

  // item do menu da seção visível
  const links = new Map($$('#menu a').map((a) => [a.getAttribute('href').slice(1), a]));
  const secoes = [...links.keys()].map((id) => document.getElementById(id)).filter(Boolean);
  const marcaMenu = () => {
    const meio = innerHeight / 2;
    const s = secoes.find((el) => { const r = el.getBoundingClientRect(); return r.top <= meio && r.bottom > meio; });
    links.forEach((a, id) => a.classList.toggle('ativo', !!s && s.id === id));
  };
  addEventListener('scroll', marcaMenu, { passive: true });
  marcaMenu();

  // ------------------------------------------------------------ revelar ao rolar
  const revObs = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('visto');
      revObs.unobserve(e.target);
    }
  }), { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  $$('.revela, .revela-img').forEach((el) => revObs.observe(el));

  // ------------------------------------------------------------ parallax
  const camadas = $$('[data-prof]');
  let rolando = false;
  const parallax = () => {
    rolando = false;
    const y = scrollY;
    for (const el of camadas) {
      const k = parseFloat(el.dataset.prof);
      if (el.closest('.hero')) el.style.transform = `translate3d(0, ${y * k}px, 0)`;
      else {
        const r = el.getBoundingClientRect();
        const c = r.top + r.height / 2 - innerHeight / 2;
        el.style.translate = `0 ${c * k}px`;
      }
    }
  };
  if (!calmo) {
    addEventListener('scroll', () => { if (!rolando) { rolando = true; requestAnimationFrame(parallax); } }, { passive: true });
    parallax();
  }

  // a imagem do herói segue o mouse de leve
  const heroi = $('.c-heroi img');
  if (!calmo && !toque && heroi) {
    addEventListener('mousemove', (e) => {
      const x = (e.clientX / innerWidth - 0.5) * 18;
      const y = (e.clientY / innerHeight - 0.5) * 12;
      heroi.style.translate = `${-x}px ${-y}px`;
    });
  }

  // ------------------------------------------------------------ brasas subindo no topo
  const cv = $('#brasas');
  if (cv && !calmo) {
    const g = cv.getContext('2d');
    let W = 0;
    let H = 0;
    const dpr = Math.min(devicePixelRatio || 1, 2);
    const resize = () => {
      W = cv.clientWidth;
      H = cv.clientHeight;
      cv.width = W * dpr;
      cv.height = H * dpr;
      g.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    addEventListener('resize', resize);
    const N = innerWidth < 700 ? 45 : 90;
    const nova = (inicio) => ({
      x: Math.random() * W,
      y: inicio ? Math.random() * H : H + 10,
      r: 0.6 + Math.random() * 2.2,
      vy: 0.3 + Math.random() * 1.1,
      fase: Math.random() * 6.28,
      osc: 0.4 + Math.random() * 1.2,
      vida: 0.5 + Math.random() * 0.5,
      cor: Math.random() < 0.8 ? [255, 120 + Math.random() * 80, 40] : [255, 220, 150],
    });
    const brasas = Array.from({ length: N }, () => nova(true));
    let visivel = true;
    new IntersectionObserver(([e]) => (visivel = e.isIntersecting)).observe(cv);
    const passo = (t) => {
      requestAnimationFrame(passo);
      if (!visivel || document.hidden) return;
      g.clearRect(0, 0, W, H);
      g.globalCompositeOperation = 'lighter';
      for (let i = 0; i < brasas.length; i++) {
        const b = brasas[i];
        b.y -= b.vy;
        b.x += Math.sin(t / 900 * b.osc + b.fase) * 0.5;
        const k = b.y / H;
        if (b.y < -10) brasas[i] = nova(false);
        const a = Math.max(0, Math.min(1, k * 1.3)) * b.vida * (0.6 + Math.sin(t / 120 + b.fase) * 0.4);
        const grad = g.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r * 4);
        grad.addColorStop(0, `rgba(${b.cor[0]},${b.cor[1] | 0},${b.cor[2]},${a})`);
        grad.addColorStop(1, `rgba(${b.cor[0]},${b.cor[1] | 0},${b.cor[2]},0)`);
        g.fillStyle = grad;
        g.beginPath();
        g.arc(b.x, b.y, b.r * 4, 0, 6.29);
        g.fill();
      }
    };
    requestAnimationFrame(passo);
  }

  // ------------------------------------------------------------ cartões: brilho e inclinação
  if (!toque) {
    $$('.cartao').forEach((c) => c.addEventListener('pointermove', (e) => {
      const r = c.getBoundingClientRect();
      c.style.setProperty('--mx', `${e.clientX - r.left}px`);
      c.style.setProperty('--my', `${e.clientY - r.top}px`);
    }));
    $$('.inclina').forEach((m) => {
      m.addEventListener('pointermove', (e) => {
        const r = m.getBoundingClientRect();
        m.style.setProperty('--ry', `${((e.clientX - r.left) / r.width - 0.5) * 10}deg`);
        m.style.setProperty('--rx', `${-((e.clientY - r.top) / r.height - 0.5) * 8}deg`);
      });
      m.addEventListener('pointerleave', () => { m.style.setProperty('--ry', '0deg'); m.style.setProperty('--rx', '0deg'); });
    });
    // botões principais "puxados" pelo cursor
    $$('.magnetico').forEach((b) => {
      b.addEventListener('pointermove', (e) => {
        const r = b.getBoundingClientRect();
        b.style.setProperty('--bx', `${(e.clientX - r.left - r.width / 2) * 0.18}px`);
        b.style.setProperty('--by', `${(e.clientY - r.top - r.height / 2) * 0.3}px`);
      });
      b.addEventListener('pointerleave', () => { b.style.setProperty('--bx', '0px'); b.style.setProperty('--by', '0px'); });
    });
  }

  // ------------------------------------------------------------ números contando
  const contObs = new IntersectionObserver((es) => es.forEach((e) => {
    if (!e.isIntersecting) return;
    contObs.unobserve(e.target);
    const el = e.target;
    const fim = +el.dataset.conta;
    const mais = el.hasAttribute('data-mais') ? '+' : '';
    const t0 = performance.now();
    const dur = calmo ? 1 : 1600;
    const anda = (t) => {
      const k = Math.min(1, (t - t0) / dur);
      el.textContent = Math.round(fim * (1 - (1 - k) ** 3)) + (k === 1 ? mais : '');
      if (k < 1) requestAnimationFrame(anda);
    };
    requestAnimationFrame(anda);
  }), { threshold: 0.6 });
  $$('[data-conta]').forEach((el) => contObs.observe(el));

  // ------------------------------------------------------------ itens em órbita
  $$('.anel').forEach((anel) => {
    const imgs = $$('img', anel);
    imgs.forEach((img, i) => img.style.setProperty('--a', `${(360 / imgs.length) * i}deg`));
  });

  // ------------------------------------------------------------ galeria
  const fotos = $$('#mosaico .foto');
  const cl = $('#caixaLuz');
  const clImg = $('img', cl);
  const clCap = $('figcaption', cl);
  let atual = 0;
  const mostra = (i) => {
    atual = (i + fotos.length) % fotos.length;
    const img = $('img', fotos[atual]);
    clImg.src = img.dataset.full;
    clImg.alt = img.alt;
    clCap.textContent = $('span', fotos[atual]).textContent;
    // reinicia a animação de entrada
    clImg.style.animation = 'none';
    void clImg.offsetWidth;
    clImg.style.animation = '';
  };
  const abre = (i) => { mostra(i); cl.hidden = false; document.body.style.overflow = 'hidden'; $('.cl-fechar', cl).focus(); };
  const fecha = () => { cl.hidden = true; document.body.style.overflow = ''; fotos[atual].focus(); };
  fotos.forEach((f, i) => f.addEventListener('click', () => abre(i)));
  $('.cl-fechar', cl).addEventListener('click', fecha);
  $('.cl-ant', cl).addEventListener('click', () => mostra(atual - 1));
  $('.cl-prox', cl).addEventListener('click', () => mostra(atual + 1));
  cl.addEventListener('click', (e) => { if (e.target === cl || e.target.tagName === 'FIGURE') fecha(); });
  addEventListener('keydown', (e) => {
    if (cl.hidden) return;
    if (e.key === 'Escape') fecha();
    if (e.key === 'ArrowLeft') mostra(atual - 1);
    if (e.key === 'ArrowRight') mostra(atual + 1);
  });
  let x0 = null;
  cl.addEventListener('touchstart', (e) => (x0 = e.touches[0].clientX), { passive: true });
  cl.addEventListener('touchend', (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 50) mostra(atual + (dx < 0 ? 1 : -1));
    x0 = null;
  });

  // ------------------------------------------------------------ downloads
  const ua = navigator.userAgent;
  const meuSo = /android/i.test(ua) ? 'android' : /windows/i.test(ua) ? 'windows' : /linux|x11/i.test(ua) ? 'linux' : null;
  $$('[data-versao]').forEach((el) => (el.textContent = cfg.versao || ''));
  $$('[data-data]').forEach((el) => (el.textContent = cfg.data || ''));

  const aviso = $('#aviso');
  let avisoT = 0;
  const avisa = (msg) => {
    aviso.textContent = msg;
    aviso.classList.add('mostra');
    clearTimeout(avisoT);
    avisoT = setTimeout(() => aviso.classList.remove('mostra'), 2600);
  };

  const icBaixar = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m0 0l-5-5m5 5l5-5M4 21h16"/></svg>';
  for (const d of cfg.downloads) {
    const alvo = $(`[data-arquivos="${d.so}"]`);
    if (!alvo) continue;
    const el = document.createElement('div');
    el.className = 'arquivo';
    el.innerHTML = `
      <h4>${d.rotulo}${d.principal ? '<span class="tag">Recomendado</span>' : ''}</h4>
      <p>${d.detalhe}</p>
      <a class="btn ${d.principal ? 'btn-ouro' : 'btn-vidro'}" href="${d.arquivo}" download>${icBaixar} Baixar ${d.so === 'android' ? 'APK' : d.so === 'linux' ? '.tar.gz' : '.exe'}</a>
      <div class="meta">
        <span>📦 ${d.tamanho}</span>
        <span>💻 ${d.requisitos}</span>
        <span>🔒 SHA-256: <button class="hash" type="button" title="Copiar o código completo">${d.sha256.slice(0, 12)}…</button></span>
      </div>`;
    $('.hash', el).addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(d.sha256);
        avisa('Código SHA-256 copiado');
      } catch {
        prompt('SHA-256', d.sha256);
      }
    });
    $('a.btn', el).addEventListener('click', () => avisa('Download iniciado — boa caçada!'));
    alvo.append(el);
  }
  if (meuSo) {
    const card = $(`.sistema[data-so="${meuSo}"]`);
    card?.classList.add('seu');
    // no celular, o Android vem primeiro
    if (meuSo === 'android' && card) card.parentElement.prepend(card);
  }
})();
