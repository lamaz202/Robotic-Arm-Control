const message = document.getElementById("message");
console.log("hi");
document.getElementById("up").addEventListener("click", () => {
	message.textContent = "Moving arm up...";
	x = "up";
  // Send the text to the PHP script
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'lama.php', true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log('Text saved successfully');
    }
  };
  xhr.send(`w=${encodeURIComponent(x)}`);
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
