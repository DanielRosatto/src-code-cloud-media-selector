
 /**********************************************************************************************************
  * Universidad Nacional Arturo Jauretche 2021                                                             *
  * Cloud Media Selector                                                                                   *
  * Autor: Rosatto Daniel                                                                                  *
  * Prueba para Proyecto Animaciones                                                                       *
  * Laboraorio 215                                                                                         *
  * Archivo ttextVaalider.js                                                                                     *
  **********************************************************************************************************/
class TextValider{
  constructor(url,domOut){
      if ($(url).attr("id")!=null){
          this.url=url;
          var context=this;
      }else return undefined;
  }
    /**
     * Devuelve el valor del parámetro $expression si no está vacío.
     * Si lo está entonces devuelve el resultado del prompt.
     * @param {*}  expression
     */
    validNotBlanc(expression) {
        var rtrn=expression;
        while((expression==undefined)||(expression=="")||(expression==null)){
            rtrn=prompt("Ingrese datos ...");
            expression=rtrn;
        }
        return rtrn;
    }

    /**
     * Devuelve el valor del parámetro $expression si no está vacío.
     * Si lo está entonces devuelve el resultado del prompt.
     * @param {*}  expression
     */
    validNotBlancMobile(expression) {
        var rtrn=expression;
        while((expression==undefined)||(expression=="")||(expression==null)){
            rtrn="Ingrese datos ...";
            expression=rtrn;
        }
        return rtrn;
    }


    /**
     * Devuelve el valor de la expresión si es alfanumérico y comienza con
     * mayúsculas
     * @param {*}  expression
     */
    validNames(expression){
        var lowers=expression.match(/[a-z]/g);
        var highers=expression.match(/[A-Z]/g);
        var  rtrn=expression;
        var undefiniedLowers=lowers==null||lowers==undefined;
        var undefinedHighers=highers==null||highers==undefined;
        var lo0;
            if (!undefiniedLowers)lo0=lowers[0]==""||lowers.length<=2;
            else lo0=false;
        var hi0;
            if (!undefinedHighers) hi0=highers.length !=1; else hi0=false;
        var firstHi;
            if (!undefinedHighers)firstHi=$expression.charAt(0)!=highers[0];
        else firstHi=false;
        if  ((undefiniedLowers)||(undefinedHighers)||(lo0) || (hi0) || (firstHi)){
            return prompt("Ingrese alfanuméricos con primer letra mayúscula o cancele...");
        }
        else return rtrn;
    }

    /**
     * Devuelve el valor de la expresión si es alfanumérico y comienza con
     * mayúsculas
     * @param {*}  expression
     */
    validText(expression){
        var alphNr=expression.match(/[A-Z]/gi);
        var  rtrn=expression;
        var undefiniedAlphNr=alphNr==null||alphNr==undefined;
        var bool;
            if (!undefiniedAlphNr)bool=alphNr[0]==""||alphNr.length<=2;
            else bool=false;
        if  ((undefiniedAlphNr)||(bool)){
            return prompt("Ingrese alfanuméricos o cancele...");
        }
        else return rtrn;
    }

    /**
     * Devuelve el valor de la expresión si es alfanumérico y comienza con
     * mayúsculas
     * @param {*}  expression
     */
    validTextMobile(expression){
        var alphNr=expression.match(/[A-Z]/gi);
        var  rtrn=expression;
        var undefiniedAlphNr=alphNr==null||alphNr==undefined;
        var bool;
            if (!undefiniedAlphNr)bool=alphNr[0]==""||alphNr.length<=2;
            else bool=false;
        if  ((undefiniedAlphNr)||(bool)){
            return "Ingrese alfanuméricos ...";
        }
        else return rtrn;
    }

    /**
     * Devuelve el valor de la expresión si es alfanumérico y contiene @
     * @param {*}  expression
     */
    validEmail(expression){
        var eml=expression.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/g);
        var  rtrn=expression;
        var undefiniedEml=eml==null||eml==undefined;
        if ((!undefiniedEml)&&(eml[0]==expression))return rtrn;
        else return "email@example.share";
    }

    yearValid(year){/* usando jQuery */
        var context=this;
        var valYear=$(year).val();
        var isSelectedYear;
        if (valYear!=undefined && valYear!=null){
            var dateFormatToSelect=new Date(valYear);
            if (dateFormatToSelect==undefined||dateFormatToSelect==null||dateFormatToSelect=="Invalid Date")return false;
            else return (new Date(Date.now()).getFullYear()-dateFormatToSelect.getFullYear())< 90;
        }
    }

}
