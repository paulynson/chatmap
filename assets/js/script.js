const bar = document.querySelector(".fa-ellipsis-v");
const popUp = document.querySelector(".pop");

const send = document.querySelector(".fa-send");
// const msg = document.querySelector(".message").textContent;
const input = document.querySelector(".input-msg");

bar.addEventListener("click", ()=>{
		if (popUp.classList.contains("active")) {
					popUp.classList.remove("active");			
								
		}else{
			popUp.classList.add("active");				
		}
			
})


// Send Section

send.addEventListener("click", ()=>{
	
	const msgContent = input.value;
	document.querySelector(".message").textContent = msgContent;
})



$(document).ready(function($) {
	$(document).on('button', '#submit-form', function(event) {
	  event.preventDefault();

	});
  });