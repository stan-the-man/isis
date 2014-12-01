/*
	Written by Jason Dougherty and Ashley Sehatti
	The functions below deal with showing and hiding of the tabs on the main page
		content1 = AP tests
		content2 = Tranfer credits
		content3 = Prevous programming experience and Calculus readiness exam
		
	They are on click handlers. 
*/



// JavaScript Document
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
 (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
 m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
 })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-54229318-1', 'auto');
ga('send', 'pageview');

//this function will make all of the class selection divs disappear
function hideContent() {
	$('#content1, #content2, #content3').slideUp();
	$('#n1, #n2, #n3').removeClass('current');
}

//this function will show content1 and hide the others
//content1 tab will be set to active
function showContentOne() {
	if(!$("#content1, #content2, #content3").is(":visible")) {
		$("#content1").slideDown();
		document.getElementById('n1').className='tab current';
	} else if($("#content1").is(":visible")) {
		$("#content1").slideUp(function() {
			$("#n1").removeClass('current');
		});
	} else {
		$("#content2, #content3").hide();
		document.getElementById('n1').className='tab current';
		$("#content1").show();
	}


	document.getElementById('n2').className='tab';
	document.getElementById('n3').className='tab';
	document.getElementById('schedule').className='schedule';
}

//this function will show content2 and hide the others
//content2 tab will be set to active
function showContentTwo() {
	if(!$("#content1, #content2, #content3").is(":visible")) {
		$("#content2").slideDown();
		document.getElementById('n2').className='tab current';
	} else if ($('#content2').is(':visible')) {
		$("#content2").slideUp(function() {
			$("#n2").removeClass('current');
		});
	} else {
		$("#content1, #content3").hide();
		document.getElementById('n2').className='tab current';
		$("#content2").show();
	}

	document.getElementById('n1').className='tab';
	document.getElementById('n3').className='tab';
	document.getElementById('schedule').className='schedule';
}

//this function will show content3 and hide the others
//content3 tab will be set to active
function showContentThree() {
	if(!$("#content1, #content2, #content3").is(":visible")) {
		$("#content3").slideDown();
		document.getElementById('n3').className='tab current';
	} else if($("#content3").is(":visible")) {
		$("#content3").slideUp(function() {
			$("#n3").removeClass('current');
		});
	} else {
		$("#content1, #content2").hide();
		$("#content3").show();
		document.getElementById('n3').className='tab current';
	}

	document.getElementById('n1').className='tab';
	document.getElementById('n2').className='tab';
	document.getElementById('schedule').className='schedule';
}
