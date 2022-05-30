let firstСlick = 0;
const clickerCounter = document.getElementById("clicker__counter");
const image = document.getElementById("cookie");
const clickSpeed = document.getElementById("click_speed");

image.onclick = () => {
	image.width = 150;
	clickerCounter.textContent++;
	setTimeout(() => {
		image.width = 200;
	}, 60);

	let newClick = new Date().getTime(),
		discrepancy = newClick - firstСlick;
	clickSpeed.textContent = (1000 / discrepancy).toFixed(2);
	firstСlick = new Date().getTime();
};
