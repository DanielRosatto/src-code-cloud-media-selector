/**********************************************************************************************************
 * Universidad Nacional Arturo Jauretche 2021                                                             *
 * Cloud Media Selector                                                                                   *
 * Autor: Rosatto Daniel                                                                                  *
 * Prueba para Proyecto Animaciones                                                                       *
 * Laboraorio 215                                                                                         *
 * Archivo show_bot.js                                                                                    *
 **********************************************************************************************************/
 class ShowBot{
    constructor(elem_video_show, timefadeout){
        this.video_to_listen=elem_video_show;
        this.timefadeout=timefadeout;
    }

    init(){
        $(this.video_to_listen).on(
            "timeupdate", 
            function(event){
                $(event.target).parent().parent().find('span').text(
                        "tiempo: " + 
                        event.target.currentTime +
                        "/" + 
                        event.target.duration
                    );
                console.debug("Desde event: "+$(event.target).parent().parent().find('span').html() );
            }

        );
        $(this.video_to_listen).get(0).load();
    }

}
