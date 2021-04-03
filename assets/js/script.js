const bar = document.querySelector(".fa-ellipsis-v");
const popUp = document.querySelector(".pop");

const send = document.querySelector(".fa-send");

const input = document.querySelector(".input-msg");

bar.addEventListener("click", ()=>{
		if (popUp.classList.contains("active")) {
			popUp.classList.remove("active");			
			}
			else{
			popUp.classList.add("active");				
		}
			
})


// Send Section

send.addEventListener("click", (event)=>{
	const msg = document.querySelector(".message");
	msg.textContent = input.value;
	input.value = "";
		const li = document.createElement("LI");
		li.innerHTML = mms;
		const nod = document.createTextNode(input);
		msg.appendChild(li);
	
	event.preventDefault();
	
})



