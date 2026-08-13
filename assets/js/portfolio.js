(function () {
  'use strict';

  var image = document.querySelector('.profile-photo-frame img');
  if (image) {
    image.src = 'assets/perfil-rafa.jpg?v=20260813';
    image.alt = 'Retrato em preto e branco';
  }

  var css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = 'assets/css/book-promo.css?v=20260813';
  document.head.appendChild(css);

  var directory = document.querySelector('.social-directory');
  if (directory) {
    var promo = document.createElement('section');
    promo.className = 'book-promo';
    promo.innerHTML = '<span class="book-promo-kicker">Livro · 366 dias · 2020</span><h2>Um ano sabático no fim do mundo.</h2><p>Em 2020, parei parte da vida para escrever todos os dias. O mundo parou junto. 366 dias depois, havia 366 textos.</p><div class="book-promo-meta">Escrito em 2020 · <strong>Integralmente humano.</strong></div><a href="https://www.amazon.com.br/dp/B0HF57WX1Y">Ver o livro na Amazon ↗</a>';
    directory.insertBefore(promo, directory.firstChild);
  }

  var base = document.createElement('script');
  base.src = 'assets/js/portfolio-base.js?v=20260813';
  document.body.appendChild(base);
}());
