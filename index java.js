/* -------------------------
     Smooth Scroll
-------------------------- */
// Désactiver le smooth scroll sur mobile (largeur < 900px)
if (window.innerWidth < 900) {
  console.log("Smooth scroll désactivé sur mobile");
} else {

  // Respect reduced motion preference
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {

    let currentScroll = window.scrollY;
    let targetScroll = currentScroll;

    const ease = 0.1;
    const wheelMultiplier = 0.6;

    window.addEventListener(
      'wheel',
      (e) => {
        e.preventDefault();

        targetScroll += e.deltaY * wheelMultiplier;

        const maxScroll =
          document.documentElement.scrollHeight - window.innerHeight;

        targetScroll = Math.max(0, Math.min(targetScroll, maxScroll));
      },
      { passive: false }
    );

    function smoothScroll() {
      currentScroll += (targetScroll - currentScroll) * ease;
      window.scrollTo(0, currentScroll);
      requestAnimationFrame(smoothScroll);
    }

    smoothScroll();
  }
}


/* -------------------------
     Orientation Lock
-------------------------- */
function updateOrientationLock() {
  const isPortrait = window.matchMedia("(orientation: portrait)").matches;
  const lock = document.getElementById("orientation-lock");

  lock.style.display = isPortrait ? "flex" : "none";
}

updateOrientationLock();
window.addEventListener("resize", updateOrientationLock);
window.addEventListener("orientationchange", updateOrientationLock);
