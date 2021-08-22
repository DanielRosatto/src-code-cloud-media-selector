class DivRefresher{
    constructor(elem){
        this.codeout=elem;
        $(this.codeout).replaceWith("<h1>Hello, World!</h1>");
    }

    changeFor(code){
        $(this.codeout).replaceWith(code);
    }
}