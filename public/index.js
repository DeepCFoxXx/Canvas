window.addEventListener('load', function() {
  var canvas = document.getElementById('main');
  var context = canvas.getContext('2d');

  var doAction = function(action) {
    context.beginPath();
    context.moveTo(position.x, position.y);
    position[action]();
    context.lineTo(position.x, position.y);
    context.stroke();
  };

  function keyDownHandler(event) {
    switch (event.keyCode) {
      case 38:
        doAction('moveUp');
        break;
      case 40:
        doAction('moveDown');
        break;
      case 37:
        doAction('moveLeft');
        break;
      case 39:
        doAction('moveRight');
        break;
    }
  }

  document.addEventListener('keydown', keyDownHandler, true);
});
