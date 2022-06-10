const modalMain = document.getElementById('modal_main');
const modalClose = document.getElementsByClassName('modal__close');
const modalSuccess = document.querySelector('#modal_success');
modalMain.classList.add('modal_active');
const close = () => {
	for (let i = 0; i < modalClose.length; i++) {
		modalClose.item(i).onclick = () => {
			modalMain.classList.remove('modal_active');
			modalSuccess.classList.remove('modal_active');
		};
	};
}

close();

const showSuccess = document.getElementsByClassName('show-success').item(0);
showSuccess.onclick = () => {
	modalMain.classList.remove('modal_active');
	modalSuccess.classList.add('modal_active');
};