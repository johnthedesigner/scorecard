'use strict';

// UI Scripts
function checkScroll(e){
    var elem = $(e.currentTarget);
    if (elem[0].scrollHeight - elem.scrollTop() === elem.outerHeight()) 
    {
        console.log("bottom");
        $('.shadow-bottom').fadeIn('fast');
        $('.shadow-top').fadeIn('fast');
    }
    console.log(elem.scrollTop());
}        
$(document).ready(function(){
    $('.scorecard-grid-wrapper').bind('scroll',checkScroll);
    $('.scorecard-grid-header').scroll(function(){
        console.log('checkScroll');
    });
});
