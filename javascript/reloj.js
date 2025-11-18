   const countries = [
            { 
                code: 'USA', 
                name: 'Estados Unidos', 
                timezone: 'America/New_York', 
                flag: 'https://cdn-icons-png.flaticon.com/128/197/197484.png'
            },
            { 
                code: 'CHN', 
                name: 'China', 
                timezone: 'Asia/Shanghai', 
                flag: 'https://cdn-icons-png.flaticon.com/128/197/197375.png'
            },
            { 
                code: 'FRA', 
                name: 'Francia', 
                timezone: 'Europe/Paris', 
                flag: 'https://cdn-icons-png.flaticon.com/128/197/197560.png'
            },
            { 
                code: 'ESP', 
                name: 'España', 
                timezone: 'Europe/Madrid', 
                flag: 'https://cdn-icons-png.flaticon.com/128/197/197593.png'
            },
            { 
                code: 'JPN', 
                name: 'Japón', 
                timezone: 'Asia/Tokyo', 
                flag: 'https://cdn-icons-png.flaticon.com/128/197/197604.png'
            }
        ];

        let currentCountryIndex = 0;
        let countriesOrder = [];

        // Función para crear orden aleatorio
        function shuffleCountries() {
            countriesOrder = [...countries];
            // Algoritmo Fisher-Yates para mezclar aleatoriamente
            for (let i = countriesOrder.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [countriesOrder[i], countriesOrder[j]] = [countriesOrder[j], countriesOrder[i]];
            }
            currentCountryIndex = 0;
        }

        // Función para formatear hora
        function getFormattedTime(timezone) {
            const now = new Date();
            const timeOptions = {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false,
                timeZone: timezone
            };
            return new Intl.DateTimeFormat('es-ES', timeOptions).format(now);
        }

        // Función para actualizar hora de México
        function updateMexicoTime() {
            const mexicoTime = getFormattedTime('America/Mexico_City');
            document.getElementById('mexico-time').innerHTML = `
                <img src="https://cdn-icons-png.flaticon.com/128/16022/16022432.png" alt="México" class="flag-icon">
                MEX: ${mexicoTime}
            `;
        }

        // Función para actualizar hora del país rotativo
        function updateCountryTime() {
            const country = countriesOrder[currentCountryIndex];
            const countryTime = getFormattedTime(country.timezone);
            const countryElement = document.getElementById('country-time');
            
            countryElement.innerHTML = `
                <img src="${country.flag}" alt="${country.name}" class="flag-icon">
                ${country.code}: ${countryTime}
            `;
        }

        // Función para cambiar de país con efecto fade
        function rotateCountry() {
            const countryElement = document.getElementById('country-time');
            
            // Fade out
            countryElement.classList.add('fade-out');
            
            setTimeout(() => {
                // Cambiar al siguiente país
                currentCountryIndex = (currentCountryIndex + 1) % countriesOrder.length;
                
                // Si completamos el ciclo, reorganizar aleatoriamente
                if (currentCountryIndex === 0) {
                    shuffleCountries();
                }
                
                // Actualizar contenido
                updateCountryTime();
                
                // Fade in
                countryElement.classList.remove('fade-out');
            }, 500); // Duración del fade out
        }

        // Actualizar relojes cada segundo
        function updateClocks() {
            updateMexicoTime();
            updateCountryTime();
        }

        // Inicializar
        shuffleCountries();
        updateClocks();

        // Actualizar cada segundo
        setInterval(updateClocks, 1000);

        // Rotar país cada 30 segundos
        setInterval(rotateCountry, 30000);