
var position = $(window).scrollTop(); 

var user = {
	state:0, // the user has first arrived. 1 = scrolled. 
	pos:1,
	view:1, // in the default view
} // user

var log = function (msg, value) {
	value != undefined ? console.log(msg+value) : console.log(msg);
}

// $('html, body').css({
//     overflow: 'hidden',
//     height: '100%'
// });

// func: resize all windows when window loads
$(document).ready(function() {
    // log("@Document ready");

	resizeWindows();
});

// func: when window size changes
$(window).resize(function() {
	// log("window size changed!");
	resizeWindows();
	
	// if(user.state==0) {
	
	// } else if(user.state==1) {

	// } else if(user.state==2) {
		
	// }
});

// func: adjust all interior elements to proper size. 
function resizeWindows() {
    // log("@resizeWindows");
    

    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    
    // resize all containers: 
    $(".cont").height(); 

    // for trailer cont
    var headingHeight = $("#trailer .heading").outerHeight(); // get height from first heading. 
    var bodyHeight = windowHeight;
    var contentHeight = windowHeight-headingHeight;
    
    // log("headingHeight=", headingHeight);
    // log("bodyHeight=", bodyHeight);
    // log("contHeight=", contHeight);
    
    // adjust body and main height
    // NOTE: only heading height doesn't change. 

    // $("#body").height(bodyHeight); 
    $(".content").height(contentHeight);

    // special case for trailer window
    if(contentHeight>windowWidth) {
    	$("#iframe1").width(windowWidth);
    } 

} // resizeWindows()

$(window).scroll(function() {
	// NOTE: 2 scroll states, moving, or stopped. 
    var scroll = $(window).scrollTop();
    var $about = $("#about"); 
    
    var userScrollTop = $(window).scrollTop();
    var contScrollTop = $(".cont[pos='"+user.view+"']").offset().top;
    log("user= "+userScrollTop);
    log("cont= "+contScrollTop);
	var $curCont = $(".cont[pos='"+user.view+"']");
    
    if(scroll > position) { // scrollDown
        // NOTE: trigger if in the stopped state, where current position equals the top position of current view. 
        
    	var $nextCont = $(".cont[pos='"+(user.view+1)+"']");
        // NOTE: only scroll down if we are at the top position, or when userPos is equal to the top of element position
        if(userScrollTop-1==contScrollTop && $nextCont!==undefined) { 
	        var targetOffset = $nextCont.offset().top;
			$('html').animate({scrollTop: targetOffset}, 1000, function (){
				user.view++;
			});
        }

    } else { // scroll up
    	var $prevCont = $(".cont[pos='"+(user.view-1)+"']");
		console.log("$prevCont=", $prevCont);
    	if(userScrollTop+2==contScrollTop && $prevCont !== undefined) {
    		// console.log("first scroll up")
			var targetOffset = $prevCont.offset().top;
			$('html').animate({scrollTop: targetOffset}, 1000, function (){
				user.view--;
			});

    	}

    }
    position = scroll;
});

