var imageX, imageY, imageWidth, imageHeight, jcrop_api, currentImage, boundx, boundy;

function cropImage(objName, realwidth, realheight, curImg){
    currentImage = curImg;
    $('#imgOptions' + currentImage).hide();
    $('#imgCropCancel' + currentImage).show();
    // $('#cropPop').modal();
    $('#'+objName).animate({
        width: realwidth,
        height: realheight,
    }, 300, function() {
        jcrop_api = $.Jcrop('#' + objName);
        jcrop_api.setOptions({
            onChange: setCoords,
            onSelect: setCoords,
            // minSize: [100, 100], 
            // maxSize: [100, 100], 
            aspectRatio: 1, //square
        });
    });
}

function setCoords(c)
{
    $('#imgCropOption' + currentImage).show();
    // variables can be accessed here as
    // c.x, c.y, c.x2, c.y2, c.w, c.h
    imageX = c.x;
    imageY = c.y;
    imageWidth = c.w;
    imageHeight = c.h;

    $('#imgW' + currentImage).text(c.w);
    $('#imgH' + currentImage).text(c.h);
};

function saveCrop(module, src, objName){
    $.post( "/admin/" + module + "/imageedit/", { action: "crop", src: src, x: imageX, y: imageY, w: imageWidth, h: imageHeight })
        .done(function( data ) {
            var size = JSON.parse(data);

            jcrop_api.destroy();

            $("#cropLink" + currentImage).attr('href', 'javascript:  cropImage(\'mainImg\', ' + size[0] + ', ' + size[1] + ')');

            d = new Date();
            $("#"+objName).attr("src", src+'?'+d.getTime());
            $('#'+objName).css('height', '150');
            $('#'+objName).css('width', 'auto');
            $('#imgCropOption' + currentImage).hide();
            $('#imgCropCancel' + currentImage).hide();
            $('#imgOptions' + currentImage).show();
        });
}

function cancelCrop(objName){
    $('#'+objName).css('height', '150');
    $('#'+objName).css('width', 'auto');
    jcrop_api.destroy();
    $('#imgCropOption' + currentImage).hide();
    $('#imgCropCancel' + currentImage).hide();
    $('#imgOptions' + currentImage).show();
}