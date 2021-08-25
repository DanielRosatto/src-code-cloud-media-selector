
 /**********************************************************************************************************
  * Universidad Nacional Arturo Jauretche 2021                                                             *
  * Cloud Media Selector                                                                                   *
  * Autor: Rosatto Daniel                                                                                  *
  * Prueba para Proyecto Animaciones                                                                       *
  * Laboraorio 215                                                                                         *
  * Archivo main.js                                                                                        *
  **********************************************************************************************************/
$(document).ready(function main(){
      refresher = new DivRefresher(
        "html body section#cont1.col-9 div.resultado"
        );
      asigner = new ClickBtnAssigner('.btn-video1','.btn-video2','.btn-video3','.btn-video4');

      refresher.changeFor("../templates/Video4.html");
      asigner.onClickBtn1(refresher.changeFor("../templates/Video1.html")));
      asigner.onClickBtn2(refresher.changeFor("../templates/Video2.html")));
      asigner.onClickBtn3(refresher.changeFor("../templates/Video3.html")));
      asigner.onClickBtn4(refresher.changeFor("../templates/Video4.html")));
    }
  );
