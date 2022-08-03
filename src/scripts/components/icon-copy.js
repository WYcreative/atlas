function iconCopy() {
	const iconCopies = document.querySelectorAll('.js-iconCopy');

	for (const iconCopy of iconCopies) {
		const buttonCopyName = iconCopy.querySelector('.js-copyName');
		const buttonCopyFile = iconCopy.querySelector('.js-copyFile');
		const buttonCopyNameData = buttonCopyName.dataset.iconName;
		const buttonCopyFileData = buttonCopyFile.dataset.iconFile;

		buttonCopyName.addEventListener('click', () => {
			navigator.clipboard.writeText(buttonCopyNameData);
			labelCall();
		});

		buttonCopyFile.addEventListener('click', () => {
			navigator.clipboard.writeText(buttonCopyFileData);
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

export default iconCopy;
