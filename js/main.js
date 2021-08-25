
 /**********************************************************************************************************
  * Universidad Nacional Arturo Jauretche 2021                                                             *
  * Cloud Media Selector                                                                                   *
  * Autor: Rosatto Daniel                                                                                  *
  * Prueba para Proyecto Animaciones                                                                       *
  * Laboraorio 215                                                                                         *
  * Archivo main.js                                                                                        *
  **********************************************************************************************************/
$(document).ready(function main(){
      refresher=new DivRefresher(
        "html body section#cont1.col-9 div.resultado"
        );

      refresher.changeFor("../templates/Video4.html");
      $('.btn-video4').click(refresher.changeFor(refresher.changeFor("../templates/Video4.html")));
      $('.btn-video3').click(refresher.changeFor(refresher.changeFor("../templates/Video3.html")));
      $('.btn-video2').click(refresher.changeFor(refresher.changeFor("../templates/Video2.html")));
      $('.btn-video1').click(refresher.changeFor(refresher.changeFor("../templates/Video1.html")));
    }
  );
