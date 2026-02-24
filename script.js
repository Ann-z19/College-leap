/* == Hero Slider == */
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Auto slideshow
let autoIndex = 0;
function autoSlides() {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  autoIndex++;
  if (autoIndex > slides.length) { autoIndex = 1 }
  slides[autoIndex - 1].style.display = "block";
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[autoIndex - 1].className += " active";
  setTimeout(autoSlides, 5000); // 5-second interval
}
autoSlides();

/* === TESTIMONIAL SLIDER === */
(function() {
  let tSlides = document.getElementsByClassName("t-slide");
  let tDotsBox = document.querySelector(".t-dots");
  if (!tSlides.length || !tDotsBox) return;

  let tIndex = 0;

  for (let i = 0; i < tSlides.length; i++) {
    let dot = document.createElement("span");
    dot.setAttribute("data-id", i);
    dot.onclick = (function(idx) {
      return function() { showTestimonial(idx); };
    })(i);
    tDotsBox.appendChild(dot);
  }

  let tDots = tDotsBox.getElementsByTagName("span");

  function showTestimonial(n) {
    for (let i = 0; i < tSlides.length; i++) {
      tSlides[i].style.display = "none";
      tDots[i].classList.remove("active");
    }
    tSlides[n].style.display = "block";
    tDots[n].classList.add("active");
    tIndex = n;
  }

  function autoTestimonial() {
    tIndex++;
    if (tIndex >= tSlides.length) tIndex = 0;
    showTestimonial(tIndex);
    setTimeout(autoTestimonial, 6000);
  }

  showTestimonial(0);
  autoTestimonial();
})();

// ===== Our Chapters modal =====
(() => {
  const modal = document.getElementById('chaptersModal');
  const openBtn = document.getElementById('openChaptersModal');
  if (!modal || !openBtn) return;

  const open = () => {
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    open();
  });

  modal.addEventListener('click', (e) => {
    const shouldClose = e.target?.dataset?.close === 'true';
    if (shouldClose) close();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) close();
  });
})();

//====== Projects Modal ======
(() => {
  const modal = document.getElementById('projectModal');
  const openBtn = document.getElementById('openProjectModal');
  if (!modal || !openBtn) return;

  const open = () => {
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    open();
  });

  modal.addEventListener('click', (e) => {
    const shouldClose = e.target?.dataset?.close === 'true';
    if (shouldClose) close();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) close();
  });
})();

/* == Rules Slider == */
(function () {
  var slides = document.querySelectorAll('.nbpc-rule-slide');
  var dots   = document.querySelectorAll('.nbpc-rules-dot');
  if (!slides.length) return;

  var cur   = 0;
  var timer = null;
  var DELAY = 4000;

  function show(n) {
    slides[cur].classList.remove('active');
    dots[cur].classList.remove('active');
    cur = (n + slides.length) % slides.length;
    slides[cur].classList.add('active');
    dots[cur].classList.add('active');
  }

  function startAuto() {
    stopAuto();
    timer = setInterval(function () { show(cur + 1); }, DELAY);
  }

  function stopAuto() {
    if (timer) { clearInterval(timer); timer = null; }
  }

  window.rulesSlide = function (d) { show(cur + d); startAuto(); };
  window.rulesGoTo  = function (n) { show(n);       startAuto(); };

  var container = document.querySelector('.nbpc-rules-slideshow');
  if (container) {
    container.addEventListener('mouseenter', stopAuto);
    container.addEventListener('mouseleave', startAuto);
  }

  startAuto();
})();

/* == Flyer Slideshow == */
(function () {
  var slides = document.querySelectorAll('.nbpc-flyer-slide');
  if (!slides.length) return;

  var cur = 0;

  function show(n) {
    slides[cur].classList.remove('active');
    cur = (n + slides.length) % slides.length;
    slides[cur].classList.add('active');
  }

  window.flyerSlide = function (d) { show(cur + d); };
})();




































