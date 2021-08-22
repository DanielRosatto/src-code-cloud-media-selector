
 /**********************************************************************************************************
  * Universidad Nacional Arturo Jauretche 2021                                                             *
  * Cloud Media Selector                                                                                   *
  * Autor: Rosatto Daniel                                                                                  *
  * Prueba para Proyecto Animaciones                                                                       *
  * Laboraorio 215                                                                                         *
  * Archivo main.js                                                                                     *
  **********************************************************************************************************/
$(document).ready(function main(){
      refresher=new DivRefresher("div#resultado");
      var vid=new ProviderMedia();
      refresher.changeFor(vid.getMediaContent());
    }
  );
