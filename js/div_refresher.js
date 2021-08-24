class DivRefresher{
    constructor(elem){
        this.codeout=elem;
        /* $(this.codeout).replaceWith("<div id='resultado'><h1>Hello, World!</h1></div>"); */
    }

    changeFor(code){
        $(this.codeout).load(code);
    }
}