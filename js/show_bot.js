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
        this.asigner = new ClickBtnAssigner($('.btn-show-bot'));
    }

    showSuggestAt(seconds,array_files){
        let context=this;
        let video1=$(context.video_to_listen);
        video1.addEventListener(
                'timeupdate',
                function(ev){
                  let i=0;
                  var repr=$(context.video_to_listen).currentTime.getTime()/1000;
                  if ( seconds < repr && repr < (seconds+context.timefadeout) ) {
                      if ($(context.codeout).is(':empty')){
                            context.changer.changeFor("../templates/show_bot_widget.html");
                            array_files.forEach(function eachFile(item){
                                context.asigner.onClickBtn(context.changer,i++,item)
                          })
                      }

                  }
                  else $(context.codeout).empty();
                },
           true
        );
    }
}
