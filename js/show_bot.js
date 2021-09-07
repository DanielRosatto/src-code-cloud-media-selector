/**********************************************************************************************************
 * Universidad Nacional Arturo Jauretche 2021                                                             *
 * Cloud Media Selector                                                                                   *
 * Autor: Rosatto Daniel                                                                                  *
 * Prueba para Proyecto Animaciones                                                                       *
 * Laboraorio 215                                                                                         *
 * Archivo show_bot.js                                                                                    *
 **********************************************************************************************************/
class Show{
    constructor(elem_out){
        this.codeout=elem_out;
    }

    onTrackedVideoFrame(currentTime, duration){
        $(this.codeout).text(
            "tiempo: " + currentTime +"/" + duration
        );
    }

}

class ShowBot extends Show{
    constructor(elem_video_show, elem_out, timefadeout){
        super(elem_out);
        this.video_to_listen=elem_video_show;
        $(this.video_to_listen).on(
            "timeupdate", 
            function(event){
                super.onTrackedVideoFrame(
                    $(this.video_to_listen).currentTime,
                    $(this.video_to_listen).duration
                    );
            });
        this.timefadeout=timefadeout;
    }

}