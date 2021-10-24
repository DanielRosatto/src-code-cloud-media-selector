
 /**********************************************************************************************************
  * Universidad Nacional Arturo Jauretche 2021                                                             *
  * Cloud Media Selector                                                                                   *
  * Autor: Rosatto Daniel                                                                                  *
  * Prueba para Proyecto Animaciones                                                                       *
  * Laboraorio 215                                                                                         *
  * Archivo main.js                                                                                        *
  **********************************************************************************************************/
  class MainObj{
    constructor(menuId, botId, refrClass, btnClass){
      this.refresher= new DivRefresher(
        /*Elemendo dom que muestra el contenido que incluya el video.*/refrClass);
      this.asigner=new ClickBtnAssigner(
        /* El id del menu */menuId,
        /* clase a la que se asigna onclick */btnClass,
        /* Video de entrada al bot de sugerencias */botId);
    }

    initMain(elems){
      this.asigner.onClickBtn(
        this, /* Objeto principal */ 
        elems /* Archivos html que contienen links de videos */
      );
    }
  }
 
 $(document).ready(function(){
      var mainObj = new MainObj(
                          /* El id del menu */"#btn-assigner-element",
                          "#mediaShowBot",
                          "#resultado",
                          '.btn-video'
                          );
      mainObj.initMain(
                        [
                          "../templates/Video1.html",
                          "../templates/Video2.html",
                          "../templates/Video3.html",
                          "../templates/Video4.html"
                        ]
                      );
      bot=new ShowBot(
        /*id del video*/"#mediaShowBot",
        [/*Lista del contenido relacionado: Intervalo, link, indicación corta, descripción*/
          /**/[5,10,"link1", "Indicación 1", "Una descripción para el elemento 1."],
          /**/[26,30,"link A", "Indicación A", "Una descripción para el elemento A."],
          /**/[36,44,"link b", "Indicación b", "Una descripción para el elemento b."],
          /**/[13,18,"link3", "Indicación 3", "Una descripción para el elemento 3."]
        ]
      );
      //bot.debug();
    }
  );
