// alert('JS File is connected');



// RESIZE CARD TEXT HEIGHT STUFF
resizeCardText("0");
resizeCardText("1");
// resizeNavLinkWidth("0");
// resizeNavLinkWidth("1");

window.onresize = function() {
    resizeCardText("0");
    resizeCardText("1");
};

function resizeCardText(groupNum) {
    var img     = "#project-img_group" + groupNum;
    var textDiv = "#card-content-div_group" + groupNum;

    imgH = $(img).css("height");
    
    $(textDiv).css("height",imgH);
};

function resizeNavLinkWidth(groupNum) {
    var linkDiv = "#navigation-links-div";
    var link    = "#nav-link_group" + groupNum;

    divW   = $(linkDiv).css("width");
    linkW  = $(link).css("width");
    newPad = divW - linkW;

    
    $(link).css("padding-right", linkW);
};

