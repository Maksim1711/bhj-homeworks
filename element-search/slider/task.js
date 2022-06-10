const sliderItems = Array.from(document.querySelectorAll('.slider__item'));
const sliderDots = Array.from(document.querySelectorAll('.slider__dot'));
const sliderDotsButton = document.querySelector('.slider__dots');
const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');

let slideNumber = 0;

showSliders(slideNumber);

function showSliders(n) {
	if (n >= sliderItems.length) {
		slideNumber = 0;
	} else if (n < 0) {
		slideNumber = sliderItems.length - 1;
	}
	let i = sliderItems.findIndex(item => item.classList.contains('slider__item_active'));
	sliderItems[i].classList.remove('slider__item_active');
	sliderDots[i].classList.remove('slider__dot_active');

	sliderItems[slideNumber].classList.add('slider__item_active');
	sliderDots[slideNumber].classList.add('slider__dot_active');
};

function plusSlides(n) {
	let i = slideNumber += n;
	showSliders(i);
};

function itemDot(n) {
	let i = slideNumber = n;
	showSliders(i);
};

arrowNext.onclick = () => {
	plusSlides(1);
};

arrowPrev.onclick = () => {
	plusSlides(-1);
};

sliderDotsButton.onclick = (n) => {
	for (let i = 0; i < sliderDots.length; i++) {
		if (n.target.classList.contains('slider__dot') && n.target === sliderDots[i]) {
			itemDot(i);
		};
	};
};