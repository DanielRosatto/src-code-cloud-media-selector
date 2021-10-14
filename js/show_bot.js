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
                        // console.debug("Antes de if:  ... ");
                        if(into_range(e.target.currentTime, passedInElement)[0] == 1 && 
                            $(e.target).parent().parent().find("#elem_init").html() == ''){
                            // console.debug("Si se cumple:... "+getIndexMatch(e.target.currentTime, passedInElement));
                            $(e.target).parent().parent().find("#elem_init").load(
                                "../templates/show_bot_widget.html",
                                function() { 
                                    replaceValue ('#btn-show-bot1',passedInElement[
                                        into_range(e.target.currentTime, passedInElement)[1]
                                    ][2]);
                                }
                            );
                        }
                        else if(into_range(e.target.currentTime, passedInElement)[0] == 0 && 
                                $(e.target).parent().parent().find("#elem_init").html() != ''){
                            // console.debug("Si no cumple: ... ");
                            $(e.target).parent().parent().find("#elem_init").empty();
                        }      
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
    // let curr=Math.round(current,0);
    let rtn = [0,0];
    arr.forEach(function eachIndex(related,index){
        // console.debug(
        // "[get index]: [0]="+related[0]+
        // " [1]="+related[1]+
        // " Curr= "+curr +
        // " igualdad="+(related[0]<=curr && curr<=related[1])+
        // " index= "+ index);
        if ((related[0]<=current && current<=related[1])==true){
            rtn = [1,index];
        }
     });
    // console.debug("[get index]: out "+index+", curr: "+current+", i: "+i);
    return rtn;
}

function replaceValue(a,b) {
    // console.debug("A:"+ a +" B: " + b + $("#elem_init").html());
    $(a).prop('value', b);
}
