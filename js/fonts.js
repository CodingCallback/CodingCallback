$(function() {
    var fontDropdown = $(".dropdown-menu");
    var fontList = $("#fx").attr("href");
    fontList = fontList.replace("https://fonts.googleapis.com/css?family=","");
    fontList = fontList.replace(":300,300i,400,700,900","");
    var fontItems = fontList.split("|");

    var theFonts = $('.theFonts');
    var tab1 = $('.theFonts .tab1');

    for(var i=0;i<fontItems.length;i++){
        tab1.append('<input type="radio" name="font" value="'+fontItems[i]+'"> <span>'+fontItems[i]+'</span>');
    }

    fontList = $("#fx2").attr("href");
    fontList = fontList.replace("https://fonts.googleapis.com/css?family=","");
    fontList = fontList.replace(":300,300i,400,700,900","");
    fontItems = fontList.split("|");

    var tab2 = $('.theFonts .tab2');

    for(var i=0;i<fontItems.length;i++){
        tab2.append('<input type="radio" name="font" value="'+fontItems[i]+'"> <span>'+fontItems[i]+'</span>');
    }

    fontList = $("#fx3").attr("href");
    fontList = fontList.replace("https://fonts.googleapis.com/css?family=","");
    fontList = fontList.replace(":300,300i,400,400i,700,700i","");
    fontItems = fontList.split("|");

    var tab3 = $('.theFonts .tab3');

    for(var i=0;i<fontItems.length;i++){
        tab3.append('<input type="radio" name="font" value="'+fontItems[i]+'"> <span>'+fontItems[i]+'</span>');
    }

    
    
    $(".theFonts input").click(function(){
        var font = $(this).val();
        font = font.replace(/\+/g," ");
        $("body").attr("style",'font-family:"'+font+'"')
        $(".theFonts input").removeClass('active');
        $(this).addClass("active");
    });

    $('.tab-top span').click(function(){
        $('.tab-top span').removeClass("active");
        $(this).addClass('active');
        var cls = $(this).attr('data-tab');
        $('.theFonts .tab').addClass('hidden');
        $("#"+cls).removeClass('hidden');
    });

    $('.tab-top div').click(function(){
        $('.font-container').addClass('closed');
        $('.floating-open').removeClass('hidden');
    })
    $('.floating-open').click(function(){
        $('.font-container').removeClass('closed');
        $('.floating-open').addClass('hidden');
    })
});