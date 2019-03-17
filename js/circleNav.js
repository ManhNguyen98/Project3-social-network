(function(){

	var button = document.getElementById('cn-button'),
    wrapper = document.getElementById('cn-wrapper'),
    overlay = document.getElementById('cn-overlay');

	//open and close menu when the button is clicked
	var open = false;
	button.addEventListener('click', handler, false);
	wrapper.addEventListener('click', cnhandle, false);

	function cnhandle(e){
		e.stopPropagation();
	}

	function handler(e){
		if (!e) var e = window.event;
	 	e.stopPropagation();//so that it doesn't trigger click event on document

	  	if(!open){
	    	openNav();
	  	}
	 	else{
	    	closeNav();
	  	}
	}
	function openNav(){
		open = true;
		button.innerHTML = "-";
		$('#cn-button').css("background-color", "#fff");
		$('#cn-button').css("color", "#1796d1");
		$('#cn-overlay').addClass('on-overlay');
		$('#cn-wrapper').addClass('opened-nav');
	}
	function closeNav(){
		open = false;
		button.innerHTML = "+";
		$('#cn-overlay').removeClass('on-overlay');
		$('#cn-wrapper').removeClass('opened-nav');
		$('#cn-button').css("background-color", "#1796d1");
		$('#cn-button').css("color", "#fff");
	}
	document.addEventListener('click', closeNav);

})();

