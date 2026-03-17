let currentScroll = window.scrollY;
let targetScroll = currentScroll;

window.addEventListener('wheel', e => {
  e.preventDefault();
  targetScroll += e.deltaY;
  targetScroll = Math.max(0, Math.min(targetScroll, document.body.scrollHeight));

}, { passive: false });

function smoothScroll() {
  currentScroll += (targetScroll - currentScroll) * 0.08;
  window.scrollTo(0, currentScroll);
  requestAnimationFrame(smoothScroll);
}

smoothScroll()
