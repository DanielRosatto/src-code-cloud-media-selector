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
            "timeupdate", (function(__this__) {
                if(typeof(__this__.related_arr) != undefined  && __this__.related_arr != null){
                    return function(e) {
                        // console.debug("Antes de if:  ... ");
                        if(__this__.into_range(e.target.currentTime, __this__.related_arr)[0] == 1 && 
                            $(e.target).parent().parent().find("#elem_init").html() == ''){
                            // console.debug("Si se cumple:... "+getIndexMatch(e.target.currentTime, __this__));
                            $(e.target).parent().parent().find("#elem_init").load(
                                "../templates/show_bot_widget.html",
                                function() { 
                                    $("#widget_show_bot").load(
                                        "../templates/show_bot_widget_content.html",
                                        function() {
                                            __this__.replaceValue ('.btn-show-bot',__this__.related_arr[
                                                __this__.into_range(e.target.currentTime, __this__.related_arr)[1]
                                            ][2]);
                                        }
                                    );
                                }
                            );
                        }
                        else if(__this__.into_range(e.target.currentTime, __this__.related_arr)[0] == 0 && 
                                $(e.target).parent().parent().find("#elem_init").html() != ''){
                            // console.debug("Si no cumple: ... ");
                            $(e.target).parent().parent().find("#elem_init").empty();
                        }      
                }}}) (this)
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
            this.related_arr.sort((this.compareRelatedArr));
        }
    }

    debug(){
        if(true){
            $("<div id='deb1'><p>Inicio Debug:</p></div>").appendTo("#resultado");
        }
    }

    into_range(current, arr){
        // let curr=Math.round(current,0);
        let rtn = [0,0];
        arr.forEach(function eachIndex(related,index){
            // console.debug(
            // "[get index]: [0]="+related[0]+
            // " [1]="+related[1]+
            // " Curr= "+curr +
            // " igualdad="+(related[0]<=curr && curr<=related[1])+
            // " index= "+ index);
            if (related[0]<=current && current<=related[1]){
                rtn = [1,index];
            }
         });
        // console.debug("[get index]: out "+index+", curr: "+current+", i: "+i);
        return rtn;
    }
    
    replaceValue(a,b) {
        // console.debug("A:"+ a +" B: " + b + $("#elem_init").html());
        $(a).prop('value', b);
    }

    compareRelatedArr(a, b) {
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
}
