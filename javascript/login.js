// Espera a que el contenido de la página esté cargado
document.addEventListener('DOMContentLoaded', () => {

    // 1. Busca los botones por su ID (del HTML)
    const btnIrARegistrar = document.getElementById('btn-ir-a-registrar');
    const btnIrALogin = document.getElementById('btn-ir-a-login');
    
    // 2. Busca el contenedor principal
    const container = document.querySelector('.container');

    // 3. Añade el evento para el botón "Registrarse"
    btnIrARegistrar.addEventListener('click', () => {
        container.classList.add('active');
    });

    // 4. Añade el evento para el botón "Iniciar Sesión" (del overlay)
    btnIrALogin.addEventListener('click', () => {
        container.classList.remove('active');
    });

});