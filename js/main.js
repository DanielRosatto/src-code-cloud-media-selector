
 /**********************************************************************************************************
  * Universidad Nacional Arturo Jauretche 2021                                                             *
  * Cloud Media Selector                                                                                   *
  * Autor: Rosatto Daniel                                                                                  *
  * Prueba para Proyecto Animaciones                                                                       *
  * Laboraorio 215                                                                                         *
  * Archivo main.js                                                                                        *
  **********************************************************************************************************/
  $(document).ready(function main(){
    
    var playVideo = document.getElementById("founded-show-bot");

    console.log('después de document.ready '+playVideo.currentTime);

    // Assign an ontimeupdate event to the video element, and execute a function if the current playback position has changed
    playVideo.ontimeupdate = function() {myFunction()};

    function myFunction() {
      // Display the current position of the video in a p element with id="demo"
      $("#widget-show-bot").empty();
      $("#widget-show-bot").text(playVideo.currentTime);
      console.log('en ontimeupdate: '+playVideo.currentTime);
    }

    refresher = new DivRefresher(
        "html body section#cont1.col-9 div.resultado"
        );
      asigner = new ClickBtnAssigner($('.btn-video'));

      refresher.changeFor("../templates/Video4.html");
      asigner.onClickBtn(
        refresher,
        [
          "../templates/Video1.html",
          "../templates/Video2.html",
          "../templates/Video3.html",
          "../templates/Video4.html"
        ]
      );
    }
  );