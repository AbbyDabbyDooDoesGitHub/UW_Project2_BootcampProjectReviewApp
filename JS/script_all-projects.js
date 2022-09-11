// alert('JS File is connected');



// $(img).css("height", $(text).outerHeight());
resizeCardText("0");

function resizeCardText(groupNum) {
    var img     = "#project-img_group" + groupNum;
    var textDiv = "#card-content-div_group" + groupNum;

    imgH = $(img).css("height");
    
    $(textDiv).css("height",imgH);
};

window.onresize = function() {
    $(img).css("height", $(text).maxHeight());
};



// setScrollHeight("0");

// function setScrollHeight(groupNum) {
//     var card = "#project-card_group" + groupNum;
//     var text = "#card-content_group" + groupNum;

//     $(card).find('img').css("height", $(text).outerHeight());

//     var $img = $(card).find('img');

//     $img.on('load', function() {
//         $(card).find('img').css("height", $(text).outerHeight());
//     });

//     window.onresize = function() {
//         $(card).find('img').css("height", $(text).outerHeight());
//     }

// }
