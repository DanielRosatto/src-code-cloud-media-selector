/**********************************************************************************************************
 * Universidad Nacional Arturo Jauretche 2021                                                             *
 * Cloud Media Selector                                                                                   *
 * Autor: Rosatto Daniel                                                                                  *
 * Prueba para Proyecto Animaciones                                                                       *
 * Laboraorio 215                                                                                         *
 * Archivo div_refresher.js                                                                                     *
 **********************************************************************************************************/
class DivRefresher{
    constructor(elem){
        this.codeout=elem;
    }

    changeFor(code){
        $(this.codeout).empty();
        $(this.codeout).load(code);
    }
}
