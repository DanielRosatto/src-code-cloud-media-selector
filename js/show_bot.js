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
        $(this.video_to_listen).on(
            "timeupdate", 
            function(event){
                $("#demo").text(
                        "tiempo: " + 
                        event.target.currentTime +
                        "/" + 
                        event.target.duration
                    );
                console.debug("Desde event: "+event.target.parent().querySelector('span').innerHTML);
            }

        );
    }

}
