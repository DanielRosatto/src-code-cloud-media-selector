/**********************************************************************************************************
 * Universidad Nacional Arturo Jauretche 2021                                                             *
 * Cloud Media Selector                                                                                   *
 * Autor: Rosatto Daniel                                                                                  *
 * Prueba para Proyecto Animaciones                                                                       *
 * Laboraorio 215                                                                                         *
 * Archivo show_bot.js                                                                                     *
 **********************************************************************************************************/
 class ShowBot{
    constructor(video_show, elem_out, timefadeout){
        this.codeout=elem_out;
        this.video_to_listen=video_show;
        this.timefadeout=timefadeout;
        this.changer = new DivRefresher(
            "html body section#cont1.col-9 div.widget-show-bot"
            );
        this.asigner = new ClickBtnAssigner('.btn1-show-bot','.btn2-show-bot','.btn3-show-bot','.btn4-show-bot');
    }

    showSuggestAt(seconds){
        $(this.video_to_listen).addEventListener(
                "timeupdate",
                function(ev){
                    var repr=$(this.video_to_listen).currentTime.getTime()/1000;
                    if ( seconds < repr && repr < (seconds+this.timefadeout) ) {
                        if ($(this.codeout).is(':empty')){
                            this.changer.changeFor("../templates/show_bot_widget.html");
                            this.asigner;
                        }

                    }
                    else $(this.codeout).empty();
                },
           true
        );
    }
}
