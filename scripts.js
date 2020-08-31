(function() {
  
  document.addEventListener(
    'DOMContentLoaded', 
    function() {
      onLoad();
    }
  );

  function onLoad() {
    setupParticles();

  }

  function setupParticles() {
    particleground(document.getElementById('particles-primary'), {
        dotColor: 'rgba(255, 255, 255, 0.7)',
        lineColor: 'rgba(255, 255, 255, 0.1)',
        minSpeedX: 0.3,
        maxSpeedX: 0.6,
        minSpeedY: 0.3,
        maxSpeedY: 0.6,
        density: 35000, // One particle every n pixels
        curvedLines: false,
        proximity: 100, // How close two dots need to be before they join
        parallaxMultiplier: 7, // Lower the number is more extreme parallax
        particleRadius: 6, // Dot size
    });

    particleground(document.getElementById('particles-secondary'), {
        dotColor: 'rgba(255, 255, 255, 0.3)',
        lineColor: 'rgba(255, 255, 255, 0.1)',
        minSpeedX: 0.075,
        maxSpeedX: 0.15,
        minSpeedY: 0.075,
        maxSpeedY: 0.15,
        density: 20000, // One particle every n pixels
        curvedLines: false,
        proximity: 20, // How close two dots need to be before they join
        parallaxMultiplier: 20, // Lower the number is more extreme parallax
        particleRadius: 4, // Dot size
    });
  }

})();