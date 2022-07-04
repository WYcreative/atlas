function sidebar() {
	const btnToggleSubMenu = document.querySelectorAll('.js-toggleSubMenu');

	for (const btn of btnToggleSubMenu) {
		btn.addEventListener('click', () => {
			const listItem = btn.closest('.sidebar__list-item');

			listItem.classList.toggle('sidebar__list-item--active');
		});
	}
}

export default sidebar;
