
 /**********************************************************************************************************
  * Universidad Nacional Arturo Jauretche 2021                                                             *
  * Cloud Media Selector                                                                                   *
  * Autor: Rosatto Daniel                                                                                  *
  * Prueba para Proyecto Animaciones                                                                       *
  * Laboraorio 215                                                                                         *
  * Archivo main.js                                                                                        *
  **********************************************************************************************************/
  $(document).ready(function(){
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

      bot=new ShowBot("#mediaShowBot");
      bot.init();
    }
  );
