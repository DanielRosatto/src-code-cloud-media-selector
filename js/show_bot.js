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
        this.codeout=elem_out;
        this.video_to_listen=elem_video_show;
        this.timefadeout=timefadeout;
        this.changer = new DivRefresher(
            "html body section#cont1.col-9 div.widget-show-bot"
            );
        this.asigner = new ClickBtnAssigner($('.btn-show-bot'));
    }

    showSuggestAt(seconds,array_files){
        let context=this;
        let video1=$(context.video_to_listen);
        video1.ontimeupdate = function() {myFunction(video1)};
    }
}

function myFunction(vid) {
    // Display the current position of the video in a p element with id="demo"
    document.getElementByClass("widget-show-bot").innerHTML = vid.currentTime;
  }
  
