// Script para el menú hamburguesa
document.addEventListener('DOMContentLoaded', function() {
	var menuToggle = document.getElementById('menu-toggle');
	var headerRight = document.getElementById('header-right');
	
	// Toggle del menú principal
	menuToggle.addEventListener('click', function(e) {
		e.preventDefault();
		this.classList.toggle('active');
		headerRight.classList.toggle('active');
	});

	// Script para expandir/colapsar submenús en móvil
	var submenuToggles = document.querySelectorAll('.submenu-toggle');
	
	submenuToggles.forEach(function(toggle) {
		toggle.addEventListener('click', function(e) {
			// Solo prevenir en móviles
			if (window.innerWidth <= 1300) { 
				e.preventDefault();
				var parentLi = this.parentElement;
				
				// Cerrar otros submenús
				var allSubmenus = document.querySelectorAll('.has-submenu');
				allSubmenus.forEach(function(item) {
					if (item !== parentLi) {
						item.classList.remove('active');
					}
				});
				
				// Toggle del submenú actual
				parentLi.classList.toggle('active');
			}
		});
	});
});