function colorCopy() {
	const colorCopies = document.querySelectorAll('.js-colorCopy');

	for (const colorCopy of colorCopies) {
		const buttonCopyHex = colorCopy.querySelector('.js-copyHex');
		const buttonCopyVar = colorCopy.querySelector('.js-copyVar');
		const buttonCopyHexData = buttonCopyHex.dataset.colorHex;
		const buttonCopyVarData = buttonCopyVar.dataset.colorVar;

		buttonCopyHex.addEventListener('click', () => {
			navigator.clipboard.writeText(buttonCopyHexData);
		});

		buttonCopyVar.addEventListener('click', () => {
			navigator.clipboard.writeText(buttonCopyVarData);
		});
	}
}

export default colorCopy;
