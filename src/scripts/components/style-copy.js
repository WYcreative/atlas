function styleCopy() {
	const btnStyleCopy = document.querySelectorAll('.js-styleCopy');

	for (const btn of btnStyleCopy) {
		const buttonDataStyle = btn.dataset.style;

		console.log('btn', btn);

		btn.addEventListener('click', () => {
			navigator.clipboard.writeText(buttonDataStyle);
			labelCall();
		});
	}

	function labelCall() {
		const body = document.querySelector('body');
		const labelElement = document.createElement('div');

		labelElement.innerHTML = 'Copied!';
		labelElement.classList.add('copied-label');
		body.append(labelElement);

		setTimeout(() => {
			labelElement.remove();
		}, 1500);
	}
}

export default styleCopy;
