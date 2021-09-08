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
        $(this.video_to_listen).on(
            "timeupdate", 
            function(event){
                onTrackedVideoFrame(
                    $(this.video_to_listen).currentTime,
                    $(this.video_to_listen).duration,
                    this.codeout
                    );
            });
    }

}

function onTrackedVideoFrame(currentTime, duration,id){
        $(id).text(
            "tiempo: " + currentTime +"/" + duration
        );
    }
