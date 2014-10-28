// JavaScript Document
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
 (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
 m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
 })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-54229318-1', 'auto');
ga('send', 'pageview');

//this function will make all of the class selection divs disappear
function hideContent() {
	document.getElementById('content1').style.visibility='hidden';
	document.getElementById('content2').style.visibility='hidden';
	document.getElementById('content3').style.visibility='hidden';
	document.getElementById('n1').className='tab';
	document.getElementById('n2').className='tab';
	document.getElementById('n3').className='tab';
	document.getElementById('schedule').className='schedule full';
}

//this function will show content1 and hide the others
//content1 tab will be set to active
function showContentOne() {
	document.getElementById('content1').style.visibility='visible';
	document.getElementById('content2').style.visibility='hidden';
	document.getElementById('content3').style.visibility='hidden';
	document.getElementById('n1').className='tab current bounceInUp';
	document.getElementById('n2').className='tab';
	document.getElementById('n3').className='tab';
	document.getElementById('schedule').className='schedule';
}

//this function will show content2 and hide the others
//content2 tab will be set to active
function showContentTwo() {
	document.getElementById('content1').style.visibility='hidden';
	document.getElementById('content2').style.visibility='visible';
	document.getElementById('content3').style.visibility='hidden';
	document.getElementById('n1').className='tab';
	document.getElementById('n2').className='tab current bounceInUp';
	document.getElementById('n3').className='tab';
	document.getElementById('schedule').className='schedule';
}

//this function will show content2 and hide the others
//content2 tab will be set to active
function showContentThree() {
	document.getElementById('content1').style.visibility='hidden';
	document.getElementById('content2').style.visibility='hidden';
	document.getElementById('content3').style.visibility='visible';
	document.getElementById('n1').className='tab';
	document.getElementById('n2').className='tab';
	document.getElementById('n3').className='tab current bounceInUp';
	document.getElementById('schedule').className='schedule';
}

//this function will change the schedule from one to the other
function changeMajor() {

}

//this function calls the print
function print() {
	
}