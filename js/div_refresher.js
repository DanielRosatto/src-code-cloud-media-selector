class DivRefresher{
    constructor(elem,initcode){
        this.codeout=elem;
        this.initcode=initcode;
        /* $(this.codeout).replaceWith("<div id='resultado'><h1>Hello, World!</h1></div>"); */
    }

    changeFor(code){
        $(this.codeout).empty();
        $(this.codeout).load(code);
    }
}