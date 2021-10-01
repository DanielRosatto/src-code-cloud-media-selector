/**********************************************************************************************************
 * Universidad Nacional Arturo Jauretche 2021                                                             *
 * Cloud Media Selector                                                                                   *
 * Autor: Rosatto Daniel                                                                                  *
 * Prueba para Proyecto Animaciones                                                                       *
 * Laboraorio 215                                                                                         *
 * Archivo show_bot.js                                                                                    *
 **********************************************************************************************************/
 class ShowBot{
    constructor(elem_video_show,related_arr){
        this.video_to_listen=elem_video_show;
        this.related_arr=related_arr;
        this.validate_timming();
        this.init();
   }

    init(){
        $(this.video_to_listen).on(
            "timeupdate", (function(passedInElement) {
                if(typeof(passedInElement) != undefined  && passedInElement != null){
                    return function(e) {
                        //this.related_arr.forEach(function eacRelated(related){
                        passedInElement.forEach(function eachRelated(related){
                        switch (true) {
                                case (
                                    e.target.currentTime < related[1] &&
                                    e.target.currentTime > related[0] ):
                                    if($(e.target).parent().parent().find("#elem_init").length < 1){
                                        $(e.target).parent().parent().append("<div id='elem_init'></div>");
                                        $(e.target).parent().parent().find("#elem_init").load(
                                            "../templates/show_bot_widget.html");
                                    }
                                    //console.debug("En el rango 00:"+passedInElement[0][0]+" 01: "+passedInElement[0][1]);
                                    break;
                                case (e.target.currentTime < related[0]):
                                    //console.debug("Antes del rango00:"+passedInElement[0][0]+" 01: "+passedInElement[0][1]);
                                    break;
                                case (e.target.currentTime > related[1]):
                                    if($(e.target).parent().parent().find("#elem_init").length > 0 ){
                                        $(e.target).parent().parent().find("#elem_init").remove();
                                    }
                                    break;
                                default:
                                    console.debug(
                                            "Error de parámetros: "+
                                            $(e.target).parent().parent().find('#elem_init').html()+
                                            " PassedIn: "+related
                                        );
                                    break;
                            }
                        });
                    }
                }}) (this.related_arr)
        );
    }

    validate_timming(){
        let duration = $(this.video_to_listen).duration;
        if (typeof(this.related_arr) != undefined  && this.related_arr != null){
            this.related_arr.forEach(function eacRelated(related){
                if (related[0]>related[1]||related[1]>duration||
                    related[2]==undefined){
                    this.related_arr=undefined;
                    return;
                }
            });
            this.related_arr.sort(compareRelatedArr);
        }
    }

    debug(){
        if(true){
            $("<div id='deb1'><p>Inicio Debug:</p></div>").appendTo("#resultado");
        }
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


function compareRelatedArr(a, b) {
    if ((a[0]<b[0])&&(a[1]<b[1])&&(a[0]<a[1])&&(b[0]<b[1])) {
        return -1;
    }
    if ((a[0]>b[0])&&(a[1]>b[1])&&(a[0]<a[1])&&(b[0]<b[1])) {
        return 1;
    }
    if ((a[0]==b[0])&&(a[1]==b[1])&&(a[0]<a[1])&&(b[0]<b[1])) {
        return 0;
    }
    // salida si los tiempos no son lógicos
    return undefined;
}
  
