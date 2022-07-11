function linkCopy() {
	const linkCopies = document.querySelectorAll('.js-linkCopy');

	for (const linkCopy of linkCopies) {
		const button = linkCopy.querySelector('.js-copyLink');
		const href = linkCopy.querySelector('.js-linkToCopy').getAttribute('href');

		button.addEventListener('click', () => {
			navigator.clipboard.writeText(href);
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

export default linkCopy;
