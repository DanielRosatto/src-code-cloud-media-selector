/**********************************************************************************************************
 * Universidad Nacional Arturo Jauretche 2021                                                             *
 * Cloud Media Selector                                                                                   *
 * Autor: Rosatto Daniel                                                                                  *
 * Prueba para Proyecto Animaciones                                                                       *
 * Laboraorio 215                                                                                         *
 * Archivo click_btn_assigner.js                                                                                     *
 **********************************************************************************************************/
class ClickBtnAssigner{
    constructor(elem1,elemm2,elemm3,elem4){
        this.btn1=elem1;
        this.btn2=elem2;
        this.btn3=elem3;
        this.btn4=elem4;
    }

    onClickBtn1(code){
        $(this.btn1).click(code);
    }

    onClickBtn2(code){
        $(this.btn2).click(code);
    }
    onClickBtn3(code){
        $(this.btn3).click(code);
    }

    onClickBtn4(code){
        $(this.btn4).click(code);
    }
}
