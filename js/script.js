console.log("andrea crew");

// target elements with the "draggable" class
interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    restrict: {
      restriction: "parent",
      endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
    // enable autoScroll
    autoScroll: true,

    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    onend: function (event) {
      var textEl = event.target.querySelector('p');

      textEl && (textEl.textContent =
        'moved a distance of '
        + (Math.sqrt(event.dx * event.dx +
                     event.dy * event.dy)|0) + 'px');
    }
  });

  function dragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

  // this is used later in the resizing and gesture demos
  window.dragMoveListener = dragMoveListener;


//positionning draggable bloc
$(function ()
{
	$('.draggable').each(function()
	{
		var top = Math.ceil(Math.random()*1000);		
		var left = Math.ceil(Math.random()*1000);
	
		console.log('top :'+top + ' left '+left);
		
		$(this).css('top', Math.ceil(Math.random()*1000));		
		$(this).css('left', Math.ceil(Math.random()*1000));		
	});

	// TODO
	//- draggable click = zindex 999 on this and 9 on the other
	//-interactive-content resize 
	//-responsive
	//-cross browser
	//-underline avoid	
	//-orthographe nom propres





});
