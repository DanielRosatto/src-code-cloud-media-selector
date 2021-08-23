class ProviderMedia{
    constructor(){
        this.media_content="\
            <video class='col-9' height='75%' controls autoplay >\
                <source src='https://drive.google.com/uc?export=view&id=1ENjHRO4Eu-xH5Fjy3LfXLEfHweCz-yBR'\
                type='video/mp4'>\
            </video>\
        ";
    }

    getMediaContent(){
        return this.media_content;
    }
}