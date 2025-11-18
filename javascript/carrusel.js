document.addEventListener('DOMContentLoaded', function() {
			const slides = document.querySelectorAll('.slide');
			const indicators = document.querySelectorAll('.indicator');
			let currentSlide = 0;
			const slideInterval = 6000; // Cambio cada 5 segundos
			
			// Función para mostrar una diapositiva específica
			function showSlide(n) {
				// Ocultar todas las diapositivas
				slides.forEach(slide => {
					slide.classList.remove('active');
				});
				
				// Quitar clase active de todos los indicadores
				indicators.forEach(indicator => {
					indicator.classList.remove('active');
				});
				
				// Mostrar la diapositiva actual
				slides[n].classList.add('active');
				indicators[n].classList.add('active');
				currentSlide = n;
			}
			
			// Función para avanzar a la siguiente diapositiva
			function nextSlide() {
				currentSlide = (currentSlide + 1) % slides.length;
				showSlide(currentSlide);
			}
			
			// Agregar eventos a los indicadores
			indicators.forEach(indicator => {
				indicator.addEventListener('click', function() {
					const slideIndex = parseInt(this.getAttribute('data-slide'));
					showSlide(slideIndex);
					// Reiniciar el temporizador cuando se hace clic manualmente
					clearInterval(intervalId);
					intervalId = setInterval(nextSlide, slideInterval);
				});
			});
			
			// Iniciar el carrusel automático
			let intervalId = setInterval(nextSlide, slideInterval);
			
			// Pausar el carrusel cuando el mouse está sobre él
			const carousel = document.querySelector('.carousel');
			carousel.addEventListener('mouseenter', function() {
				clearInterval(intervalId);
			});
			
			// Reanudar el carrusel cuando el mouse sale
			carousel.addEventListener('mouseleave', function() {
				intervalId = setInterval(nextSlide, slideInterval);
			});
		});