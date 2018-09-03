$(function() {

    var names = [
        "Coding|Callback",
        "Callback|Code",
        "Code|Const",
        "Constant|Coding",
        "Vertical|Coding"
    ];
    var titles = [];
    for(var i=0;i<names.length;i++){
        var title = names[i].replace(/\|/g," ");
        titles.push(title);
    }

   var currentItem = 0;
  

    $(".navbar-brand").click(function(ev){
        ev.preventDefault();
        currentItem = (currentItem < (names.length-1)) ? currentItem + 1 : 0;
        $("title").text(titles[currentItem]);
        var bits = names[currentItem].split("|");
        $('.navbar-brand .brand').text(bits[0]);
        $('.navbar-brand .brand2').text(bits[1]);      
    })


});