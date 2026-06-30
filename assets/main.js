/* Veridian demo — interactions: reveal, count-up, sticky header, mobile nav */
(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* sticky header shadow */
  var header = document.querySelector('[data-header]');
  if (header) {
    var onScroll = function () { header.classList.toggle('is-stuck', window.scrollY > 8); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* mobile nav */
  var toggle = document.querySelector('[data-nav-toggle]');
  var nav = document.querySelector('[data-nav]');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) { nav.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); }
    });
  }

  /* scroll reveal */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));
  if (reduce || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* count-up */
  var counters = Array.prototype.slice.call(document.querySelectorAll('[data-count]'));
  var runCount = function (el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var dec = (target % 1 !== 0) ? 1 : 0;
    var start = null, dur = 1100;
    var step = function (t) {
      if (start === null) start = t;
      var p = Math.min((t - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = (target * eased).toFixed(dec);
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target.toFixed(dec);
    };
    requestAnimationFrame(step);
  };
  if (reduce || !('IntersectionObserver' in window)) {
    counters.forEach(function (el) { el.textContent = el.getAttribute('data-count'); });
  } else {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { runCount(e.target); cio.unobserve(e.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { cio.observe(el); });
  }

  /* contact form → Web3Forms */
  var form = document.querySelector('[data-contact-form]');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = form.querySelector('[data-form-ok]');
      var btn = form.querySelector('button[type=submit]');
      var hp = form.querySelector('.hp');
      if (hp && hp.value) { return; }
      var original = btn ? btn.innerHTML : '';
      if (btn) { btn.disabled = true; btn.textContent = 'Invio in corso…'; }
      function show(msg, good) {
        if (btn) { btn.disabled = false; btn.innerHTML = original; }
        if (!ok) { return; }
        ok.hidden = false;
        ok.textContent = msg;
        ok.style.color = good ? 'var(--emerald)' : '#c0563f';
      }
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      }).then(function (r) { return r.json(); }).then(function (res) {
        if (res && res.success) {
          form.reset();
          show('Grazie. La tua richiesta è stata inviata correttamente. Ti risponderemo nel più breve tempo possibile.', true);
        } else {
          show('Spiacenti, si è verificato un problema. Scrivici a contatti@quasar-consulting.com.', false);
        }
      }).catch(function () {
        show('Spiacenti, si è verificato un problema. Scrivici a contatti@quasar-consulting.com.', false);
      });
    });
  }
})();
