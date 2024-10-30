//your JS code here. If required.
document.getElementById("btn").addEventListener("click",async() => {
	const text = document.getElementById("text").value;
	const delay = parseInt(document.getElementById("delay").value);
	if (isNaN(delay) || delay < 0){
		document.getElementById("output").textContent = "Please enter a valid delay.";
		return ;
	}
	await displayMessageAfterDelay(text,delay);
});

async function displayMessageAfterDelay(text, delay) {
  await new Promise((resolve) => setTimeout(resolve, delay));
  document.getElementById("output").textContent = text;
}