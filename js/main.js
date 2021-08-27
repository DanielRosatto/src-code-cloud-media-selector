
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
      asigner = new ClickBtnAssigner(['.btn-video1','.btn-video2','.btn-video3','.btn-video4']);

      refresher.changeFor("../templates/Video4.html");
      asigner.onClickBtn(refresher,1,"../templates/Video1.html");
      asigner.onClickBtn(refresher,2,"../templates/Video2.html");
      asigner.onClickBtn(refresher,3,"../templates/Video3.html");
      asigner.onClickBtn(refresher,4,"../templates/Video4.html");
    }
  );
