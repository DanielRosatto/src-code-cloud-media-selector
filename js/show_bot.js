/**********************************************************************************************************
 * Universidad Nacional Arturo Jauretche 2021                                                             *
 * Cloud Media Selector                                                                                   *
 * Autor: Rosatto Daniel                                                                                  *
 * Prueba para Proyecto Animaciones                                                                       *
 * Laboraorio 215                                                                                         *
 * Archivo show_bot.js                                                                                    *
 **********************************************************************************************************/
 class ShowBot{
    constructor(elem_video_show, elem_out, timefadeout){
        this.codeout=elem_out;
        this.video_to_listen=elem_video_show;
        this.timefadeout=timefadeout;
        this.changer = new DivRefresher(
            "html body section#cont1.col-9 div.widget-show-bot"
            );
        this.asigner = new ClickBtnAssigner(['.btn1-show-bot','.btn2-show-bot','.btn3-show-bot','.btn4-show-bot']);
    }

    showSuggestAt(seconds,array_files){
        $(this.video_to_listen).addEventListener(
                "timeupdate",
                function(ev){
                  let i=0;
                  var repr=$(this.video_to_listen).currentTime.getTime()/1000;
                  if ( seconds < repr && repr < (seconds+this.timefadeout) ) {
                      if ($(this.codeout).is(':empty')){
                            this.changer.changeFor("../templates/show_bot_widget.html");
                            array_files.forEach(function eachFile(item){
                              this.asigner.onClickBtn(this.changer,i++,item)
                          })
                      }

                  }
                  else $(this.codeout).empty();
                },
           true
        );
    }
}
