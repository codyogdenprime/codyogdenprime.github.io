

/*
 * 
 * Checks to see if the element is in
 * the view port. Just two arguments
 * 
 * percent (float) - percent from top
 *   optional        as decimal where
 *                   the element hits
 *                   before returning
 *                   true.
 * callback (func) - function to run
 *                   when returning
 *                   true
 * 
 */

$.fn.inVP = function( percent, callback ){
    
    var x = 1;
    var y = 1;

    if( typeof percent === 'function' ) {
        callback = percent;
        percent = 1;
    }

    var win = $(window);
    
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };

    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height() * percent;
    
    var height = this.outerHeight();
    var width = this.outerWidth();
 
    if(!width || !height){
        return false;
    }
    
    var bounds = this.offset();
    bounds.right = bounds.left + width;
    bounds.bottom = bounds.top + height;
    
    var visible = (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    
    if(!visible){
        return false;   
    }
    
    var deltas = {
        top : Math.min( 1, ( bounds.bottom - viewport.top ) / height),
        bottom : Math.min(1, ( viewport.bottom - bounds.top ) / height),
        left : Math.min(1, ( bounds.right - viewport.left ) / width),
        right : Math.min(1, ( viewport.right - bounds.left ) / width)
    };
    
    var result = (deltas.left * deltas.right) >= x && (deltas.top * deltas.bottom) >= y;

    if( result && typeof callback === 'function') {
        callback.call(this);
    } else {
        return result;
    }
    
};