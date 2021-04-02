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

send.addEventListener("click", (event)=>{
<<<<<<< HEAD
	
	const msgContent = input.value;
	document.querySelector(".message").textContent = msgContent;
	event.preventDefault();
	input.value = "";
})


	  
=======
	
	
	const msgContent = input.value;
	document.querySelector(".message").textContent = msgContent; event.preventDefault(); input.value = "";
	
})



>>>>>>> 834010a393461b6ffad84ccf4f54979e0206d35a
