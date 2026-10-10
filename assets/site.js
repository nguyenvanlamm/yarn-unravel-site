(function () {
  document.documentElement.classList.add('js');

  document.addEventListener('DOMContentLoaded', function () {
    var y = document.querySelectorAll('[data-year]');
    for (var i = 0; i < y.length; i++) y[i].textContent = new Date().getFullYear();

    var items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      for (var j = 0; j < items.length; j++) items[j].classList.add('in');
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -40px 0px' });
    for (var k = 0; k < items.length; k++) io.observe(items[k]);
  });
})();
