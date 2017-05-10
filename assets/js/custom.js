/**
 * Created by mamau on 18.03.16.
 */





//Изменение размера основной картинки в блоке события
function eventsImgSize(){

    var full_height = 0;
    $('.event-item').each(function(){
        full_height += $(this).height();
    });

    if(full_height != 0){
        $(".main-event-wrapper > img").height(full_height);
    }
}

$( window ).resize(function() {
    eventsImgSize();
});
$(document).ready(function(){
    eventsImgSize();
});
