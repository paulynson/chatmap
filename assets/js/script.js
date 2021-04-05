const bar = document.querySelector(".fa-ellipsis-v");
const popUp = document.querySelector(".pop");
const send = document.querySelector(".fa-send");

// Send Button

send.addEventListener("click", (event)=>{
	const input = document.querySelector("#input").value;
	const li = document.createElement("LI");
	document.querySelector(".todos").appendChild(li).innerHTML = input;
	document.querySelector("#input").value = "";
	event.preventDefault();
	
});



// Popup

bar.addEventListener("click", ()=>{
		if (popUp.classList.contains("active")) {
			popUp.classList.remove("active");			
			}
			else{
			popUp.classList.add("active");				
		}
			
})




