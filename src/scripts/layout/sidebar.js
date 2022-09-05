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
		const listItem = btn.closest('.sidebar__list-item');
		const {id} = btn.dataset;
		const storage = JSON.parse(localStorage.getItem('sidebarSubMenuToggles') || '{}');

		if (storage[id]) {
			listItem.classList.add('sidebar__list-item--active');
		}

		btn.addEventListener('click', () => {
			const status = listItem.classList.toggle('sidebar__list-item--active');
			const storage = JSON.parse(localStorage.getItem('sidebarSubMenuToggles') || '{}');

			if (status) {
				storage[id] = true;
			} else {
				delete storage[id];
			}

			localStorage.setItem('sidebarSubMenuToggles', JSON.stringify(storage));
		});
	}
	// ---------------
}

export default sidebar;
