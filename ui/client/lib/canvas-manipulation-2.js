(function(){var previousInit=CanvasManipulation.prototype.init;CanvasManipulation.prototype.init=function(){previousInit.call(this,arguments);this.initMouseListeners()};
CanvasManipulation.prototype.initMouseListeners=function(){var a=this,c=this.getCanvas();c.addEventListener("mousedown",function(b){a.dragStart(a.mouseCoord(b))},!1);c.addEventListener("mousemove",function(b){a.drag(a.mouseCoord(b))},!1);c.addEventListener("mouseup",function(b){a.dragEnd(b)},!1);var d=function(b){var c=b.wheelDelta?b.wheelDelta/40:b.detail?-b.detail:0;c&&a.zoom(a.mouseCoord(b),c);return b.preventDefault()&&!1};c.addEventListener("DOMMouseScroll",d,!1);c.addEventListener("mousewheel",
d,!1)};CanvasManipulation.prototype.mouseCoord=function(a){var c=a.offsetX||a.pageX-this.getCanvas().offsetLeft;a=a.offsetY||a.pageY-this.getCanvas().offsetTop;return{x:c,y:a}};}).call(this);
