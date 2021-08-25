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
        /*this.initcode=initcode;
         $(this.codeout).replaceWith("<div class='resultado'><h1>Hello, World!</h1></div>"); */
    }

    changeFor(code){
        $(this.codeout).empty();
        $(this.codeout).load(code);
    }
}
