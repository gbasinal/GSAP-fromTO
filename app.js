$(document).ready(function(){
	TweenMax.fromTo(".mountain", 1.5, {x:-9999}, {x:0, onComplete:sunRise});
	
	$("#play1").click(function(){
		TweenMax.to(".sun", .1, {opacity:0});
		TweenMax.fromTo(".mountain", 1.5, {x:-9999}, {x:0, onComplete:sunRise});
	})
	TweenMax.fromTo(".cat-img", 1, {x:-9}, {x:300});
	TweenMax.to(".chat-img", 2, {opacity:1,delay:1});
	TweenMax.to(".hello-img", 2, {opacity:1,delay:2});
	TweenMax.to(".hello-img", 2, {x:150});

	$("#play2").click(function(){
		TweenMax.fromTo(".cat-img", 1, {x:-9}, {x:300});
		TweenMax.fromTo(".chat-img", 2, {opacity:0,delay:1},{opacity:1,delay:1});
		TweenMax.fromTo(".hello-img", 2, {opacity:0},{opacity:1,delay:2});
			
		
	})	
	
})


function sunRise(){
	TweenMax.fromTo(".sun", 3, {opacity:0 ,y:0}, {opacity:1, y:-100});
}