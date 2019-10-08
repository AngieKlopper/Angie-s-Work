function createImage(name){
    return new Image(name);
}

//Using My Factory Pattern

var image = createImage(photo.jpeg);
//insert name of item in parenthesis

//Create a more complex factory

function createImage2(name){
    if(name.match(/\.jpeg$/)){
        return new JpegImage(name);
    }
    else if(name.match(/\.gif$/)){
        return new GifImage(name);
    }
    else if(name.match(/\.png$/)){
        return new PngImage(name);
    }
    else{
        throw new Exception("Unupported format");
    }
}

