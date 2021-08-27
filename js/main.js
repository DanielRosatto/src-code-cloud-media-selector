
 /**********************************************************************************************************
  * Universidad Nacional Arturo Jauretche 2021                                                             *
  * Cloud Media Selector                                                                                   *
  * Autor: Rosatto Daniel                                                                                  *
  * Prueba para Proyecto Animaciones                                                                       *
  * Laboraorio 215                                                                                         *
  * Archivo main.js                                                                                        *
  **********************************************************************************************************/
  $(document).ready(function main(){

      $("#founded-show-bot").on('play', function() {
        //Actions when video play selected
        console.log("Reproduciendo..")
      });

      $("#founded-show-bot").on('pause', function() {
        //Actions when video play selected
        console.log("En pausa..")
      });

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

      bot=new ShowBot(
        "#founded-show-bot",
        "html body section#cont1.col-9 div.widget-show-bot",
        7
      );
      bot.showSuggestAt(5,['../templates/show_bot_widget.html']);

    }
  );
