function employee() {
	const images = document.querySelectorAll('.employee__img img');

	for (const image of images) {
		const fallbackSrc = `https://wycreative.com/wycreative-assinaturas/team/random-${Math.ceil(Math.random() * 4)}.jpg`;

		if (image.complete === false) {
			image.addEventListener('error', () => {
				image.src = fallbackSrc;
			}, {
				once: true,
			});
		} else if (image.naturalWidth === 0) {
			image.src = fallbackSrc;
		}
	}
}

export default employee;
