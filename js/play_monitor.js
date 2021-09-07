$(document).ready(function(){
  $("#myVideo").on(
      "timeupdate", 
      function(event){
    onTrackedVideoFrame(this.currentTime, this.duration);
  });
});
      
function onTrackedVideoFrame(currentTime, duration){
  $("#demo").text("tiempo: " + currentTime +"/" + duration); //Change #current to currentTime
}
