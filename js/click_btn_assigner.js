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
        this.all_assigned=0;
    }

    onClickBtn(refresher,files){
      let index=0;
      let context=this;
      files.forEach(function eachFile(file){
        $(context.btns[index++]).click(
          function(e) {
            refresher.changeFor(file);
          }
        );
      }
      );
      this.all_assigned=index;
    }


}
