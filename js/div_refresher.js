class DivRefresher{
    constructor(elem){
        this.codeout=elem;
        $(this.codeout).replaceWith("<div id='resultado'></div><h1>Hello, World!</h1>");
    }

    changeFor(code){
        $(this.codeout).replaceWith(code);
    }
}