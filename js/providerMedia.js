class ProviderMedia{
    constructor(){
        this.media_content="\
            <video\
                width= '600' \
                height= '480' >\
                <source src='https://drive.google.com/file/d/1b4A0x3maDQ46Dv3MQO1fGz2NBokK9Apw/preview' type='video/mkv'>\
            </video>\
        ";
    }

    getMediaContent(){
        return this.media_content;
    }
}