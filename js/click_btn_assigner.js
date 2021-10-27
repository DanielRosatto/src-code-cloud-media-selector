/**********************************************************************************************************
 * Universidad Nacional Arturo Jauretche 2021                                                             *
 * Cloud Media Selector                                                                                   *
 * Autor: Rosatto Daniel                                                                                  *
 * Prueba para Proyecto Animaciones                                                                       *
 * Laboraorio 215                                                                                         *
 * Archivo click_btn_assigner.js                                                                          *
 **********************************************************************************************************/
class ClickBtnAssigner{

  constructor(idin,classout,botId){
    this.idin=idin;
    this.classout=classout;
    this.all_assigned=0;
    this.botId = botId;
  }

  onClickBtn(mainObj,files){
    files.forEach(function eachFile(file, index){
      $.get("../templates/nav_item.html", function (data) {
          $(mainObj.asigner.idin).append(data);
          $(mainObj.asigner.classout).last().prop(
            'value',
            file.split('../templates/')[1].split('.html')[0]
          );
          mainObj.asigner.insertInNav(file, mainObj.asigner.classout,index);
          $(mainObj.asigner.classout).last().click(function(e){
            mainObj.refresher.changeFor(file,mainObj.asigner.botId);
          });
        });
      }
    );
    mainObj.asigner.all_assigned=files.length;
  }

  insertInNav(file, clss,index){
    $.get(file,function(testHTML){
      $(clss+':eq('+index+')').parent().find('.nav_li').text($(testHTML).filter('p').text().slice().split('\n')[1].split('\n')[0]);
    });
  }
}
