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
	} else {
		$("#content2, #content3").hide();
		$("#content1").show();
	}

	document.getElementById('n1').className='tab current';
	document.getElementById('n2').className='tab';
	document.getElementById('n3').className='tab';
	document.getElementById('schedule').className='schedule';
}

//this function will show content2 and hide the others
//content2 tab will be set to active
function showContentTwo() {
	if(!$("#content1, #content2, #content3").is(":visible")) {
		$("#content2").slideDown();
	} else {
		$("#content1, #content3").hide();
		$("#content2").show();
	}

	document.getElementById('n1').className='tab';
	document.getElementById('n2').className='tab current';
	document.getElementById('n3').className='tab';
	document.getElementById('schedule').className='schedule';
}

//this function will show content2 and hide the others
//content2 tab will be set to active
function showContentThree() {
	if(!$("#content1, #content2, #content3").is(":visible")) {
		$("#content3").slideDown();
	} else {
		$("#content1, #content2").hide();
		$("#content3").show();
	}

	document.getElementById('n1').className='tab';
	document.getElementById('n2').className='tab';
	document.getElementById('n3').className='tab current';
	document.getElementById('schedule').className='schedule';
}

//this function will change the schedule from one to the other
function changeMajor() {

}

//this function calls the print
function print() {
	
}