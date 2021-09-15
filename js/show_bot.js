/**********************************************************************************************************
 * Universidad Nacional Arturo Jauretche 2021                                                             *
 * Cloud Media Selector                                                                                   *
 * Autor: Rosatto Daniel                                                                                  *
 * Prueba para Proyecto Animaciones                                                                       *
 * Laboraorio 215                                                                                         *
 * Archivo show_bot.js                                                                                    *
 **********************************************************************************************************/
 class ShowBot{
    constructor(elem_video_show, start_time_show_suggest, timefadeout){
        this.video_to_listen=elem_video_show;
        this.time_fadeout=timefadeout;
        this.start_time_show_suggest=start_time_show_suggest;
        this.init();
        $(elem_video_show).parent().parent().find('span').text("Show bot init..");
    }

    init(){
        $(this.video_to_listen).on(
            "timeupdate", 
            (function(passedInElement) {
                return function(e) { 
                    $(e.target).parent().parent().find('span').text(
                        "tiempo: " + 
                        e.target.currentTime +
                        "/" + 
                        e.target.duration +
                        ", fadeout: "+ passedInElement[0] +
                        ", time to suggest: "+passedInElement[1]
                    );
                }
            }) ([this.time_fadeout, this.start_time_show_suggest])
        );
        /* console.debug("Desde event: "+$(event.target).parent().parent().find('span').html() ); */
    }
}
