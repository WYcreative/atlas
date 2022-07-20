function employee() {
	const images = document.querySelectorAll('.employee__img img');

	for (const image of images) {
		image.addEventListener('error', () => {
			image.src = `https://wycreative.com/wycreative-assinaturas/team/random-${Math.ceil(Math.random() * 4)}.jpg`;
		});
	}
}

export default employee;
