function linkCopy() {
	const linkCopies = document.querySelectorAll('.js-linkCopy');

	for (const linkCopy of linkCopies) {
		const button = linkCopy.querySelector('.js-copyLink');
		const href = linkCopy.querySelector('.js-linkToCopy').getAttribute('href');

		button.addEventListener('click', () => {
			navigator.clipboard.writeText(href);
		});
	}
}

export default linkCopy;
