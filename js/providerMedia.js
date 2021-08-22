class ProviderMedia{
    constructor(){
        this.media_content="\
            <video>\
                <source src='https://drive.google.com/uc?export=download&id=1ENjHRO4Eu-xH5Fjy3LfXLEfHweCz-yBR' type='video/mp4'>\
            </video>\
        ";
    }

    getMediaContent(){
        return this.media_content;
    }
}