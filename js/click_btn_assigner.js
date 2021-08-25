/**********************************************************************************************************
 * Universidad Nacional Arturo Jauretche 2021                                                             *
 * Cloud Media Selector                                                                                   *
 * Autor: Rosatto Daniel                                                                                  *
 * Prueba para Proyecto Animaciones                                                                       *
 * Laboraorio 215                                                                                         *
 * Archivo click_btn_assigner.js                                                                                     *
 **********************************************************************************************************/
class ClickBtnAssigner{

    constructor(elem1,elem2,elem3,elem4){
        this.btn1=elem1;
        this.btn2=elem2;
        this.btn3=elem3;
        this.btn4=elem4;
    }

    onClickBtn1(refresher){
        $(this.btn1).click(function(e) {
            refresher.changeFor("../templates/Video1.html");
        });
    }

    onClickBtn2(refresher){
        $(this.btn2).click(function(e) {
            refresher.changeFor("../templates/Video2.html");
        });
    }

    onClickBtn3(refresher){
        $(this.btn3).click(function(e) {
            refresher.changeFor("../templates/Video3.html");
        });
    }

    onClickBtn4(refresher){
        $(this.btn4).click(function(e) {
            refresher.changeFor("../templates/Video4.html");
        });
    }

}
