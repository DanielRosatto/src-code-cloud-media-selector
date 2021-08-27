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
        this.video_to_listen=elem_video_show;
        this.codeout=elem_out;
        this.timefadeout=timefadeout;
        this.changer = new DivRefresher(
            "html body section#cont1.col-9 div.widget-show-bot"
            );
        this.asigner = new ClickBtnAssigner($('.btn-show-bot'));
    }

    showSuggestAt(seconds,array_files){
        var context=this;
        var video1=$(context.video_to_listen);
        console.log("Prueba de showSuggestAt");
        video1.bind('timeupdate', context.setTime(video1));
        video1.ontimeupdate = function() {
            console.log("Prueba de bot");
            console.log(video1.currentTime);
            context.codeout.innerHTML=video1.currentTime;
        };  
    }

    setTime(vid){
        console.log("Prueba de setTime()"+vid.currentTime);
    }
}