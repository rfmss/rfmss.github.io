(function () {
  'use strict';

  var root = document.documentElement;
  var input = document.getElementById('sample');
  var button = document.getElementById('analyze');
  var feedback = document.getElementById('feedback');
  var trace = document.getElementById('trace');
  var year = document.getElementById('currentYear');

  addCalculatorCard();

  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      root.classList.add('page-ready');
    });
  });

  if (year) year.textContent = String(new Date().getFullYear());

  if (input && button && feedback && trace) {
    button.addEventListener('click', function () {
      var match = input.value.match(/\bfazem\s+((?:um|uma|dois|duas|tr[eê]s|dez|\d+)\s+(?:dias?|meses?|anos?))/i);
      if (match) {
        feedback.textContent = 'Sugestão: “Faz ' + match[1] + '…”. Ao indicar tempo decorrido, o verbo fazer é impessoal.';
        trace.textContent = 'regra acionada // fazer + duração → singular';
      } else {
        feedback.textContent = 'Nenhuma ocorrência desta regra foi encontrada. Esta miniatura procura apenas “fazem” seguido de uma duração.';
        trace.textContent = 'regra inspecionada // fazer + duração → singular';
      }
    });
  }

  var reveals = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduced || !('IntersectionObserver' in window)) {
    reveals.forEach(function (element) { element.classList.add('in'); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });

    reveals.forEach(function (element, index) {
      element.style.transitionDelay = Math.min(index % 4, 3) * 70 + 'ms';
      observer.observe(element);
    });
  }

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('/sw.js').catch(function () {});
    });
  }

  function addCalculatorCard() {
    var grid = document.querySelector('.archive-grid');
    if (!grid || grid.querySelector('[data-project="calculadora"]')) return;

    var article = document.createElement('article');
    article.className = 'archive-card reveal';
    article.setAttribute('data-project', 'calculadora');

    var copy = document.createElement('div');
    var code = document.createElement('span');
    code.className = 'project-code';
    code.textContent = 'FERRAMENTA 08 · PWA · MIT';

    var heading = document.createElement('h3');
    var link = document.createElement('a');
    link.href = '/calculadora/';
    link.textContent = 'Calculadora';
    heading.appendChild(link);

    var description = document.createElement('p');
    description.textContent = 'Calculadora básica e científica, com porcentagem contextual, DEG/RAD, teclado físico e funcionamento offline.';
    copy.append(code, heading, description);

    var image = document.createElement('img');
    image.src = 'assets/calculadora-preview.svg';
    image.alt = 'Prévia da Calculadora Blueprint com visor 96 e teclado cyan';
    image.loading = 'lazy';
    image.width = 512;
    image.height = 512;

    article.append(copy, image);
    grid.appendChild(article);
  }
}());
