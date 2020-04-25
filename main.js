
var position = $(window).scrollTop(); 

// var user = {
// 	state:0, // the user has first arrived. 1 = scrolled. 
// 	pos:1,
// 	view:1, // in the default view
// } // user

var log = function (msg, value) {
	value != undefined ? console.log(msg+value) : console.log(msg);
}

// func: resize all windows when window loads
$(document).ready(function() {
	$(document).bind("scrollstop", function() {
		log("scrolling started");
	});
	
	$(document).bind("scrollstart", function() {
		log("scrolling stopped");
	});

	resizeContainers();

});

// func: when window size changes
$(window).resize(function() {
	resizeContainers();
});

// func: adjust all interior elements to proper size. 
function resizeContainers() {
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    
    // resize all containers: 
    $(".cont").height(); 

    // for trailer cont
    var headingHeight = $("#trailer .heading").outerHeight(); // get height from first heading. 
    var bodyHeight = windowHeight;
    var contentHeight = windowHeight-headingHeight;
    
    // log("headingHeight=", headingHeight);

    // adjust body and main height
    // NOTE: only heading height doesn't change. 
    $(".content").height(contentHeight);

    // special case for trailer window
    if(contentHeight>windowWidth) {
    	$("#iframe1").width(windowWidth);
    } 

} // resizeContainers()

// note: deactivated.
// var timer;
// $(window).bind('scroll',function () {
//     clearTimeout(timer);
//     timer = setTimeout( snapToPos , 200 );
// });

var snapToPos = function () { 
    // scroll to the closest top. 
    var curScrollTop = $(window).scrollTop();

    // Find the distance of every position. 
    var arrayOfPosDiff = $.map($(".cont"), function(n, i){
		return Math.abs($(n).offset().top-curScrollTop);
    });

    // find pos of closest position
    var targetPosId = arrayOfPosDiff.indexOf(Math.min.apply(null, arrayOfPosDiff));
    var targetPos = $(".cont[pos='"+targetPosId+"']").offset().top;

    $('html').animate({scrollTop: targetPos}, 125);
};



