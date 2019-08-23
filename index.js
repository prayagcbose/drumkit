// code for playing drum kit sounds with key press and mouse click

// adding event-listener to each button on mouse-click

for(var i= 0; i<document.querySelectorAll(".drum").length; i++)
{

	document.querySelectorAll(".drum")[i].addEventListener("click",function()
	{
		var keyPressed= this.innerText;
		playSound(keyPressed); 
		buttonAnimation(keyPressed);

	})
}

// event-listener for keybord keypress
document.addEventListener("keydown",function(event){
	var keyPressed= event.key;
	playSound(keyPressed);
	buttonAnimation(keyPressed);
})

// function to play sound
function playSound(keyPressed){
		switch (keyPressed){
			case "w" : var tom1= new Audio("sounds/tom-1.mp3");
					tom1.play();
					break;
			case "a" : var tom2= new Audio("sounds/tom-2.mp3");
					tom2.play();
					break;
			case "s" : var tom3= new Audio("sounds/tom-3.mp3");
					tom3.play();
					break;
			case "d" : var tom4= new Audio("sounds/tom-4.mp3");
					tom4.play();
					break;
			case "j" : var crash= new Audio("sounds/crash.mp3");
					crash.play();
					break;
			case "k" : var kickbass= new Audio("sounds/kick-bass.mp3");
					kickbass.play();
					break;
			case "l" : var snare= new Audio("sounds/snare.mp3");
					snare.play();
					break;
			default : console.log("wrong key");
		}	
}

// function for animations
function buttonAnimation(keyPressed){
	document.querySelector("."+keyPressed).classList.add("pressed");
	setInterval(function(){
		document.querySelector("."+keyPressed).classList.remove("pressed");
	},100);
	
}