$(document).ready(function main(){
      var vid = document.getElementById("myVideo");
      console.log('después de document.ready '+vid.currentTime);

      // Assign an ontimeupdate event to the video element, and execute a function if the current playback position has changed
      vid.ontimeupdate = function() {myFunction()};

      function myFunction() {
        // Display the current position of the video in a p element with id="demo"
        $("#demo").empty();
        $("#demo").text(vid.currentTime);
        console.log('en ontimeupdate: '+vid.currentTime);
      }
    }
  );