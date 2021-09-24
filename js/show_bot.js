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
                    switch (true) {
                        case (
                            e.target.currentTime < passedInElement[0] &&
                            e.target.currentTime > passedInElement[1]):
                            if($(e.target).parent().parent().find("#elem_init").length < 1){
                                $(e.target).parent().parent().append("<div id='elem_init'></div>");
                                $(e.target).parent().parent().find("#elem_init").load("../templates/show_bot_widget.html");
                            }
                            break;
                        case (e.target.currentTime < passedInElement[0]):
                            /* console.debug("Antes del rango"); */
                            break;
                        case (e.target.currentTime > passedInElement[1]):
                            if($(e.target).parent().parent().find("#elem_init").length > 0 ){
                                $(e.target).parent().parent().find("#elem_init").remove();
                            }
                            break;
                        default:
                            console.debug("Error de parámetros: "+
                                $(e.target).parent().parent().find('#elem_init').html() );
                            break;
                    }
                }
            }) ([this.time_fadeout, this.start_time_show_suggest])
        );
    }

/*     init(){
        $(this.video_to_listen).on(
            "timeupdate", 
            (function(passedInElement) {
                return function(e) { 
                    switch (true) {
                        case (
                            e.target.currentTime < passedInElement[0] &&
                            e.target.currentTime > passedInElement[1]):
                            console.debug("Dentro del rango");
                            $(e.target).parent().parent().find('span').text(
                                "tiempo: " + 
                                e.target.currentTime +
                                "/" + 
                                e.target.duration +
                                ", fadeout: "+ passedInElement[0] +
                                ", time to suggest: "+passedInElement[1]
                            ); 
                            if($(e.target).parent().parent().find("#elem_init").length < 1){
                                $(e.target).parent().parent().append("<div id='elem_init'></div>");
                                $(e.target).parent().parent().find("#elem_init").load("../templates/show_bot_widget.html");
                            }
                            break;
                        case (e.target.currentTime < passedInElement[0]):
                            console.debug("Antes del rango");
                            break;
                        case (e.target.currentTime > passedInElement[1]):
                            console.debug("Después del rango"); 
                            if($(e.target).parent().parent().find("#elem_init").length > 0 ){
                                $(e.target).parent().parent().find("#elem_init").remove();
                            }
                            break;
                        default:
                            console.debug("Desde event: "+
                                $(e.target).parent().parent().find('span').html() );
                            break;
                    }
                }
            }) ([this.time_fadeout, this.start_time_show_suggest])
        );
    } */
}
