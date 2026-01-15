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
let tIndex = 0;
let tSlides = document.getElementsByClassName("t-slide");
let tDotsBox = document.querySelector(".t-dots");

// Create dots dynamically (matches slide count)
for (let i = 0; i < tSlides.length; i++) {
  let dot = document.createElement("span");
  dot.setAttribute("data-id", i);
  dot.onclick = function() {
    showTestimonial(i);
  };
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

// autoplay
function autoTestimonial() {
  tIndex++;
  if (tIndex >= tSlides.length) tIndex = 0;
  showTestimonial(tIndex);
  setTimeout(autoTestimonial, 6000); // 6 seconds
}

showTestimonial(0);
autoTestimonial();

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
