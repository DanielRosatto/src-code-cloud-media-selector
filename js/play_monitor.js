$(document).ready(function main(){
    console.log('antes de document.ready '+vid.currentTime);
      
    $(document).ready(function() {

      $(document).ready(function() {
          console.log('dentro de un segundo document.ready '+vid.currentTime);
      });

      console.log('dentro de document.ready '+vid.currentTime);
    });

    console.log('después de document.ready '+vid.currentTime);
    
  }
);