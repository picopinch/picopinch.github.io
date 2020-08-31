(function() {

  var lastScrollYPosition = 0

  var navigationBarEl;
  var particlePrimaryEl;
  var particleSecondaryEl;
  var greetingEl;

  document.addEventListener('DOMContentLoaded', function() { onLoad(); });

  window.addEventListener('scroll', function(event) {
    lastScrollYPosition = window.scrollY;
    onScroll()
  });

  function onLoad() {
    navigationBarEl = document.getElementById('navigation-bar');
    particlePrimaryEl = document.getElementById('particles-primary');
    particleSecondaryEl = document.getElementById('particles-secondary');
    greetingEl = document.getElementById('greeting');

    setupParticles();
    setupTypewriter();
  };

  function onScroll() {
    var navigationBarOpacity = 1.5 - (lastScrollYPosition * 0.003)
    navigationBarEl.style.opacity = navigationBarOpacity
    navigationBarEl.style.visibility = (navigationBarOpacity <= 0) ? 'hidden' : 'visible';

    particlePrimaryEl.style.top = (lastScrollYPosition * 1) + "px"
    particleSecondaryEl.style.top = (lastScrollYPosition * 1) + "px"

    var greetingsOpacity = 2 - (lastScrollYPosition * 0.003)
    greetingEl.style.top = (lastScrollYPosition * 0.4) + "px"
    greetingEl.style.opacity = greetingsOpacity
  }

  function setupParticles() {
    particleground(document.getElementById('particles-primary'), {
      dotColor: 'rgba(255, 255, 255, 0.8)',
      lineColor: 'rgba(255, 255, 255, 0.7)',
      minSpeedX: 0.3,
      maxSpeedX: 0.6,
      minSpeedY: 0.3,
      maxSpeedY: 0.6,
      density: 35000, // One particle every n pixels
      curvedLines: false,
      proximity: 100, // How close two dots need to be before they join
      parallaxMultiplier: 6, // Lower the number is more extreme parallax
      particleRadius: 8, // Dot size
    });

    particleground(document.getElementById('particles-secondary'), {
      dotColor: 'rgba(255, 255, 255, 0.5)',
      lineColor: 'rgba(255, 255, 255, 0.4)',
      minSpeedX: 0.075,
      maxSpeedX: 0.15,
      minSpeedY: 0.075,
      maxSpeedY: 0.15,
      density: 20000, // One particle every n pixels
      curvedLines: false,
      proximity: 20, // How close two dots need to be before they join
      parallaxMultiplier: 20, // Lower the number is more extreme parallax
      particleRadius: 5, // Dot size
    });
  };

  function setupTypewriter() {
    var elements = document.getElementsByClassName('typewriter');
    typewriter(elements[0], ['WELCOME!', 'HELLO THERE!'], 2000);
  };

})();