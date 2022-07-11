function colorCopy() {
	const colorCopies = document.querySelectorAll('.js-colorCopy');

	for (const colorCopy of colorCopies) {
		const buttonCopyHex = colorCopy.querySelector('.js-copyHex');
		const buttonCopyVar = colorCopy.querySelector('.js-copyVar');
		const buttonCopyHexData = buttonCopyHex.dataset.colorHex;
		const buttonCopyVarData = buttonCopyVar.dataset.colorVar;

		buttonCopyHex.addEventListener('click', () => {
			navigator.clipboard.writeText(buttonCopyHexData);
			labelCall();
		});

		buttonCopyVar.addEventListener('click', () => {
			navigator.clipboard.writeText(buttonCopyVarData);
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

export default colorCopy;
