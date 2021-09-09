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
    }

    init(){
        let vid=this.video_to_listen;
        let out=this.codeout;
        $(vid).on(
            "timeupdate", 
            function(event,vid,out){
                $(out).text(
                        "tiempo: " + 
                        $(vid).currentTime +
                        "/" + 
                        $(vid).duration
                    );
            }

        );
    }

}
