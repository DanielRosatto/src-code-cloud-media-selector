
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
      if(this.urlParameters('param1') != null){
        this.refresher.changeFor("../templates/"+this.urlParameters('param1')+".html",this.asigner.botId);
      }
     }

    urlParameters(name){
      var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
      if (results==null) {
         return null;
      }
      return decodeURI(results[1]) || 0;
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
                          "../templates/Video4.html",
                          "../templates/Video_5.html"
                        ]
                      );
      bot=new ShowBot(
        /*id del video*/"#mediaShowBot",
        [/*Lista del contenido relacionado: Intervalo, link, indicación corta, descripción*/
          /**/[5,10,"https://www.buenosaires.gob.ar", "Bs.As. Web oficial", "Ejemplo de contenido relacionado externo"],
          /**/[26,30,"https://cloud-media-selector.herokuapp.com/?param1=Video_5", "Ir a Video 5", "Ejemplo de contenido relacionado de la misma webapp"],
          /**/[36,44,"https://fi.uba.ar", "Uba, web oficial", "Otro ejemplo de contenido relacionado externo"],
          /**/[13,18,"https://cloud-media-selector.herokuapp.com/?param1=Video1", "Super Agente 86", "Lo mejor del agente 13.."]
        ]
      );
     //bot.debug();
    }
  );
