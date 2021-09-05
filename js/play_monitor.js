
console.log('antes de document.ready');
   
$(document).ready(function() {

  $(document).ready(function() {
      console.log('dentro de un segundo document.ready');
  });

  console.log('dentro de document.ready');
});

console.log('después de document.ready');