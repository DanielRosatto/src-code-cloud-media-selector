$(document).ready(function main(){

      function myFunction() {
        // Display the current position of the video in a p element with id="demo"
        $("#demo").empty();
        $("#demo").text(x.currentTime);
        console.log('en ontimeupdate: '+x.currentTime);
      }

      // Get the video element with id="myVideo"
      var x = $("#myVideo")[0];

      // Attach a timeupdate event to the video element, and execute a function if the current playback position has changed
      x.addEventListener("timeupdate", myFunction);
    }
  );