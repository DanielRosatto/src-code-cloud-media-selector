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
    files.forEach(function eachFile(file, index){
      $.get("../templates/nav_item.html", function (data) {
        $("#btn-assigner-element").append(data);
        $('.btn-video').last().prop('value','Video'+index);
        // $('.btn-video').last().parent().text('Contenido: '+index+1);
        $('.btn-video').last().click(function(e){
          mainObj.refresher.changeFor(file,mainObj.asigner.botId);
        });
      });
      }
    );
    // files.forEach(function eachFile(file,index){
    //   $(mainObj.asigner.buttons[index]).click(
    //       function(e) {
    //         mainObj.refresher.changeFor(file,mainObj.asigner.botId);
    //       }
    //     );
    //   }
    // );
    mainObj.asigner.all_assigned=files.length;
  }

}
