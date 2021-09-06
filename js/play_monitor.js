$(document).ready(function main(){

      function myFunction() {
        // Display the current position of the video in a p element with id="demo"
        $("#demo").empty();
        $("#demo").text(vid.currentTime);
        console.log('en ontimeupdate: '+vid.currentTime);
      }

      // Get the video element with id="myVideo"
      var x = document.getElementById("myVideo");

      // Attach a timeupdate event to the video element, and execute a function if the current playback position has changed
      x.addEventListener("timeupdate", myFunction);
    }
  );