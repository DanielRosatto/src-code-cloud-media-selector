/**********************************************************************************************************
 * Universidad Nacional Arturo Jauretche 2021                                                             *
 * Cloud Media Selector                                                                                   *
 * Autor: Rosatto Daniel                                                                                  *
 * Prueba para Proyecto Animaciones                                                                       *
 * Laboraorio 215                                                                                         *
 * Archivo click_btn_assigner.js                                                                          *
 **********************************************************************************************************/
class ClickBtnAssigner{

  constructor(elems,botId){
      this.buttons=elems;
      this.all_assigned=0;
      this.botId = botId;
    }

  onClickBtn(mainObj,files){
    let index=0;

    files.forEach(function eachFile(file){
        $(mainObj.asigner.buttons[index++]).click(
          function(e) {
            mainObj.refresher.changeFor(file,mainObj.asigner.botId);
          }
        );
      }
    );
    mainObj.asigner.all_assigned=index;
  }

}
