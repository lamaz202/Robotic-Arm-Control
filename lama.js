const message = document.getElementById("message");

document.getElementById("up").addEventListener("click", () => {
	message.textContent = "Moving arm up...";
});

document.getElementById("down").addEventListener("click", () => {
	message.textContent = "Moving arm down...";
});

document.getElementById("left").addEventListener("click", () => {
	message.textContent = "Moving arm left...";
});

document.getElementById("right").addEventListener("click", () => {
	message.textContent = "Moving arm right...";
});

document.getElementById("grab").addEventListener("click", () => {
	message.textContent = "Grabbing object...";
});

document.getElementById("release").addEventListener("click", () => {
	message.textContent = "Releasing object...";
});