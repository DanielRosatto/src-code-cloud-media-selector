/**********************************************************************************************************
 * Universidad Nacional Arturo Jauretche 2021                                                             *
 * Cloud Media Selector                                                                                   *
 * Autor: Rosatto Daniel                                                                                  *
 * Prueba para Proyecto Animaciones                                                                       *
 * Laboraorio 215                                                                                         *
 * Archivo click_btn_assigner.js                                                                          *
 **********************************************************************************************************/
class ClickBtnAssigner{

    constructor(elems){
        this.btns=elems;
    }

    onClickBtn(refresher,index,file){
        $(this.btns[index]).click(function(e) {
            refresher.changeFor(file);
        });
    }
}
