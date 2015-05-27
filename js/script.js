$(document).ready(function(){
jQuery('ul.nav li.dropdown').hover(function() {
  jQuery(this).find('.dropdown-ab').stop(true, true).delay(100).slideDown();
  jQuery(this).find('.dropdown-ab-chotta').stop(true, true).delay(100).slideDown();
}, function() {
  jQuery(this).find('.dropdown-ab').stop(true, true).delay(100).slideUp();
  jQuery(this).find('.dropdown-ab-chotta').stop(true, true).delay(100).slideUp();
});

$('.dropdown-toggle').on('click',function(){
	$('.dropdown-toggle').css('background-color','#ffdea6');
});

$('.nav-circle').on('click','span',function(){
	var selected=$(this);
	container1=$('#slider');
	container2=$('.text-slide');
	selected
		.siblings().removeClass('selected')
		.end()
		.addClass('selected');
		next=selected.data('slide-to');
	container1.animate({
			'margin-top': -1*next*100
	});
	container2.animate({
			'margin-top': -1*next*100
	});


});
$(function () {
    $(window).resize(function () { //put your code in window.resize so that it runs when ever window is resized
        if ($(window).innerWidth() < 750) {
            $(".dropdown-menu").removeClass('dropdown-ab');
            $(".dropdown-menu").addClass('dropdown-ab-chotta');
        }
        if ($(window).innerWidth() > 750) {
            $(".dropdown-menu").addClass('dropdown-ab');
            $(".dropdown-menu").removeClass('dropdown-ab-chotta');
        }
    }).resize(); //call resize function 
});

});