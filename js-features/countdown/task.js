const countdown = () => {
	const timer = document.getElementById("timer");
	timer.textContent--;
	if (timer.textContent == 0) {
		alert('Вы победили в конкурсе');
		clearInterval(end);
	}
};
let end = setInterval(countdown, 1000);