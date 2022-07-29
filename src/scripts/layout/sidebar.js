function sidebar() {
	// Burguer Menu
	const sidebar = document.querySelector('.js-slidebar');
	const btnBurger = document.querySelector('.js-btnBurger');

	btnBurger.addEventListener('click', event => {
		const element = event.currentTarget;

		sidebar.classList.toggle('sidebar--open');
		element.classList.toggle('sidebar__hamburger--active');
	});
	// ---------------

	// Toggle Sub Menu
	const btnToggleSubMenu = document.querySelectorAll('.js-toggleSubMenu');

	for (const btn of btnToggleSubMenu) {
		btn.addEventListener('click', () => {
			const listItem = btn.closest('.sidebar__list-item');

			listItem.classList.toggle('sidebar__list-item--active');
		});
	}
	// ---------------
}

export default sidebar;
