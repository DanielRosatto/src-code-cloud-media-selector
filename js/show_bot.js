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
        if (typeof ShowBot.instance === 'Object'){
            ShowBot.instance.related_arr=related_arr;
            ShowBot.instance.elem_video_show=elem_video_show;
            ShowBot.instance.validate_timming();
            ShowBot.instance.init();
            return ShowBot.instance;
        }
        else{
            this.video_to_listen=elem_video_show;
            this.related_arr=related_arr;
            this.validate_timming();
            this.init();
        }
    }

    init(){
        $(this.video_to_listen).on(
            "timeupdate", (function(passedInElement) {
                if(typeof(passedInElement) != undefined  && passedInElement != null){
                    return function(e) {
                        //passedInElement.forEach(function eachRelated(related){
                        let curr = Math.round(e.target.currentTime,0);
                        // console.debug("Antes de if:  ... ");
                        if(into_range(curr, passedInElement) == 1 && 
                            $(e.target).parent().parent().find("#elem_init").html() == ''){
                            console.debug("Si se cumple:... "+
                                $("#elem_init").html()
                                );
                            $(e.target).parent().parent().append("<div id='elem_init'></div>");
                            $(e.target).parent().parent().find("#elem_init").load(
                                "../templates/show_bot_widget.html",
                                function() {
                                    // $(document).ready(
                                        replaceValue (
                                            'btn-show-bot1',
                                            passedInElement[getIndexMatch(curr, passedInElement)][2]
                                        // )
                                    );
                                }
                            );
                        }
                        else if(into_range(curr, passedInElement) == 0 && 
                                $(e.target).parent().parent().find("#elem_init").length > 0 ){
                            // console.debug("Si no cumple: ... ");
                            $(e.target).parent().parent().find("#elem_init").empty();
                        }      
                        /* if (curr <= related[1] && curr >= related[0]){ 
                        switch (true) {
                            case (
                                curr <= related[1] && curr > related[0]
                                // && $(e.target).parent().parent().find("#elem_init").length == 0
                                ):
                                    $(e.target).parent().parent().append("<div id='elem_init'></div>");
                                    $(e.target).parent().parent().find("#elem_init").load(
                                        "../templates/show_bot_widget.html", 
                                        (function(a,b) {
                                            console.debug("Rango y elem_init.length < 1:" + $("#elem_init").html());
                                            $("#elem_init").find(a).prop('value', b);
                                        }) ('.btn-show-bot',related[2])
                                    );
                                break;
                            case (curr < related[0]):
                                // console.debug("Antes del rango: "+related+" ... ");
                                break;
                            case (curr == related[1] && $(e.target).parent().parent().find("#elem_init").length >= 1 ):
                                $(e.target).parent().parent().find("#elem_init").remove();
                                console.debug("Justo después del rango: "+related+" ... ");
                                break;
                            case (curr > related[1] && $(e.target).parent().parent().find("#elem_init").length == 0 ):
                                console.debug("Después del rango: "+related+" ... ");
                                break;
                            default:
                                console.debug(
                                        "Error de parámetros: "+
                                        $(e.target).parent().parent().find('#elem_init').html()+
                                        " PassedIn: "+related
                                    );
                                break;
                            } 
                        }*/
                    //});
                }}}) (this.related_arr)
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
  
function into_range(current, arr){
    let rtn = 0;
    arr.forEach(function eachInArr(related){
        if (related[0]<=current && current<=related[1]){
            rtn = 1;
        }
    });
    if(rtn==0)console.debug("[Into Range]: out: "+rtn+" ... curr: "+current);
    return rtn;
}

function getIndexMatch(current, arr){
    let i=0;
    arr.forEach(function eachIndex(related){
        if (related[0]<=current && current<=related[1]){
            return i;
        }
        i=i+1;
    });
    console.debug("[get index]: out "+i+", curr: "+current+", i: "+i);
    return i;
}

function replaceValue(a,b) {
    console.debug("A:"+ a +" B: " + b + $("#elem_init").html());
    document.getElementById(a).setAttribute('value', b);
}
