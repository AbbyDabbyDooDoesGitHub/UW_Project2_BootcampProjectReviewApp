// alert('JS File is connected');



// RESIZE CARD TEXT HEIGHT STUFF
resizeCardText("0");

function resizeCardText(groupNum) {
    var img     = "#project-img_group" + groupNum;
    var textDiv = "#card-content-div_group" + groupNum;

    imgH = $(img).css("height");
    
    $(textDiv).css("height",imgH);
};

window.onresize = function() {
    resizeCardText("0");
};
