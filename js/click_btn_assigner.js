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
      // var links = [];
      // var title=''; 
      // $.get(file,function(str){
      //   //console.debug(str);
      //   $.parseHTML(str).forEach( function eachItem(item){
      //     if(item.innerHTML != undefined ){
      //       try {
      //         //console.debug(item.innerHTML);
      //         Array.prototype.push.apply(links, JSON.parse(item.innerHTML));
      //         title = $.parseHTML(str)[1].innerText.slice().split('\n')[1].split('\n')[0];
      //       } catch(e) {
      //         console.debug(/* item.innerHTML+ */"no parseable...");
      //         //console.debug(e);
      //       }
      //     }
      //   });
      // });
      // console.debug(title);
      // console.debug(links);
      $.get("../templates/nav_item.html", function (data) {
          $(mainObj.asigner.idin).append(data);
          $(mainObj.asigner.classout).last().prop(
            'value',
            file.split('../templates/')[1].split('.html')[0]
          );
          readTitle(file, mainObj.asigner.classout,index);
          // $(mainObj.asigner.classout).last().parent().find('.nav_li').text(
          //     txt
          //   );
          $(mainObj.asigner.classout).last().click(function(e){
            mainObj.refresher.changeFor(file,mainObj.asigner.botId);
          });
        });
      }
    );
    mainObj.asigner.all_assigned=files.length;
  }
}

function readTitle(file, clss,index){
  $.get(file,function(testHTML){
    txt = $(testHTML).filter('p').text().slice().split('\n')[1].split('\n')[0];
    $(clss+':eq('+index+')').parent().find('.nav_li').text(txt);
    console.debug("[readFile]: "+txt);
    });
}