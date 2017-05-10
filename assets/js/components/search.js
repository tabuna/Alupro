$(function () {


    $(".target-search").click(function () {
        if ($("#" + $(this).data('toggle')).hasClass('hide-search')) {


            var obj = $("#" + $(this).data('toggle'));


            $("#" + $(this).data('toggle')).show('slide',{direction:'right',easing:"linear"},700,function(){
                $("body").addClass('body-no-scroll');
                obj.removeClass('hide-search');
            });
        }
        else {
            $("body").removeClass('body-no-scroll');
            var obj = $("#" + $(this).data('toggle'));
            $("#" + $(this).data('toggle')).hide('slide',{direction:'right', easing:"linear"},500,function(){
                obj.addClass('hide-search');
            });

        }

    });


});