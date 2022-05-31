function clearStats() {
	dead.textContent = 0;
	lost.textContent = 0;
};

function getHole(idx) {
	return document.getElementById(`hole${idx}`);
}
for (let i = 1; i < 10; i++) {
	getHole(i).onclick = () => {
		if (getHole(i).className == 'hole hole_has-mole') {
			dead.textContent++;
			if (dead.textContent > 9) {
				alert('Победа!');
				clearStats();
			};
		} else {
			lost.textContent++;
			if (lost.textContent > 4) {
				alert('Поражение!');
				clearStats();
			};
		};
	};
};
