
 /**********************************************************************************************************
  * Universidad Nacional Arturo Jauretche 2021                                                             *
  * Cloud Media Selector                                                                                   *
  * Autor: Rosatto Daniel                                                                                  *
  * Prueba para Proyecto Animaciones                                                                       *
  * Laboraorio 215                                                                                         *
  * Archivo main.js                                                                                        *
  **********************************************************************************************************/
  class MainObj{
    constructor(botId, refrClass, btnClass){
      this.refresher= new DivRefresher(refrClass);
      this.asigner=new ClickBtnAssigner($(btnClass),botId);
    }

    initMain(elems){
      this.asigner.onClickBtn(
        this,
        elems
      );
    }
  }
 
 $(document).ready(function(){
      var mainObj = new MainObj("#mediaShowBot",".resultado",'.btn-video');
      mainObj.initMain(
        [
          "../templates/Video1.html",
          "../templates/Video2.html",
          "../templates/Video3.html",
          "../templates/Video4.html"
        ]
      );
      
    }
  );
