$(document).ready(function main(document){
    console.log('antes de document.ready');
      
    $(document).ready(function() {

      $(document).ready(function() {
          console.log('dentro de un segundo document.ready');
      });

      console.log('dentro de document.ready');
    });

    console.log('después de document.ready');
    
    // Get the video element with id="myVideo"
    var vid = $("#myVideo");

    // Assign an ontimeupdate event to the video element, and execute a function if the current playback position has changed
    vid.ontimeupdate = function() {myFunction()};
    
    function myFunction() {
      // Display the current position of the video in a p element with id="demo"
      $("#demo").innerHTML = vid.currentTime;
    }
    
  }
);