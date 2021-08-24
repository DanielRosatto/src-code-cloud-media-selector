
 /**********************************************************************************************************
  * Universidad Nacional Arturo Jauretche 2021                                                             *
  * Cloud Media Selector                                                                                   *
  * Autor: Rosatto Daniel                                                                                  *
  * Prueba para Proyecto Animaciones                                                                       *
  * Laboraorio 215                                                                                         *
  * Archivo main.js                                                                                     *
  **********************************************************************************************************/
$(document).ready(function main(){
      refresher=new DivRefresher(
        "html body section#cont1.col-9 div#resultado",
        "<div id='resultado'></div>");
      refresher.changeFor("../templates/Video2.html");
    }
  );
