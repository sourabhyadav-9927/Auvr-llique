/**
 * 3D Tilt Effect Utility for interactive cards and components
 * Uses perspective, rotateX, rotateY, and translateZ based on mouse position.
 */

function initTiltElements() {
  const tiltCards = document.querySelectorAll('.tilt-card');

  tiltCards.forEach(card => {
    let bounds;

    function updateBounds() {
      bounds = card.getBoundingClientRect();
    }

    function onMouseMove(e) {
      // If card is currently flipped (quiz back face visible), let CSS transform rotateY(180deg) rule
      if (card.classList.contains('flipped')) {
        return;
      }

      if (!bounds) updateBounds();
      const mouseX = e.clientX - bounds.left;
      const mouseY = e.clientY - bounds.top;

      const halfWidth = bounds.width / 2;
      const halfHeight = bounds.height / 2;

      // Calculate tilt angles (-10 to 10 degrees max)
      const tiltX = -((mouseY - halfHeight) / halfHeight) * 10;
      const tiltY = ((mouseX - halfWidth) / halfWidth) * 10;

      card.style.transform = `perspective(1000px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) translateZ(10px)`;
    }

    function onMouseLeave() {
      if (card.classList.contains('flipped')) {
        card.style.transform = '';
        bounds = null;
        return;
      }
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)`;
      bounds = null;
    }

    card.addEventListener('mouseenter', updateBounds);
    card.addEventListener('mousemove', onMouseMove);
    card.addEventListener('mouseleave', onMouseLeave);
  });
}

document.addEventListener('DOMContentLoaded', initTiltElements);
