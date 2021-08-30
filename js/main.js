
 /**********************************************************************************************************
  * Universidad Nacional Arturo Jauretche 2021                                                             *
  * Cloud Media Selector                                                                                   *
  * Autor: Rosatto Daniel                                                                                  *
  * Prueba para Proyecto Animaciones                                                                       *
  * Laboraorio 215                                                                                         *
  * Archivo main.js                                                                                        *
  **********************************************************************************************************/
  $(document).ready(function main(document){
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
      
      $("html body section#cont1.col-9 div.resultado video#founded-show-bot.col-9").on('play', function() {
        //Actions when video play selected
        console.log("Reproduciendo..");
      });

      $("html body section#cont1.col-9 div.resultado video#founded-show-bot.col-9").on('pause', function() {
        //Actions when video play selected
        console.log("En pausa..");
      });

      var vid = getVideo();

      while (vid.paused) {
        console.log('video pausado...');
      }

    }
  );

  function getVideo(){
    return document._video;
  }