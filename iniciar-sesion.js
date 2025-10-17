// =================================================================
// CÓDIGO PARA EL TOGGLE DEL CONTENEDOR (Transición entre formularios)
// =================================================================

const container = document.querySelector('.container');
const btnSignIn = document.getElementById("btn-sign-in"); 
const btnSignUp = document.getElementById("btn-sign-up");
const btnSignInMobile = document.getElementById("btn-sign-in-mobile");
const btnSignUpMobile = document.getElementById("btn-sign-up-mobile");

// Botones del panel de bienvenida (desktop/tablet)
if (btnSignIn) {
    btnSignIn.addEventListener("click", () => {
        container.classList.remove("toggle");
    });
}

if (btnSignUp) {
    btnSignUp.addEventListener("click", () => {
        container.classList.add("toggle"); 
    });
}

// Botones para móviles (dentro de los formularios)
if (btnSignInMobile) {
    btnSignInMobile.addEventListener("click", () => {
        container.classList.remove("toggle");
    });
}

if (btnSignUpMobile) {
    btnSignUpMobile.addEventListener("click", () => {
        container.classList.add("toggle");
    });
}

// =================================================================
// CÓDIGO PARA INICIAR SESIÓN (Validación de campos y redirección)
// =================================================================

const inputsSignIn = document.querySelectorAll('.box-sign-in input');
const botonEntrarSignIn = document.getElementById('unclock-sign-in');

// Función para verificar si todos los campos de Iniciar Sesión están llenos
function verificarCamposSignIn() {
    let todosLlenos = true;
    inputsSignIn.forEach(input => {
        if (input.value.trim() === '') {
            todosLlenos = false;
        }
    });
    // 3. Habilita o deshabilita el botón
    botonEntrarSignIn.disabled = !todosLlenos;
}

// 4. Añade un escuchador de eventos 'input' a cada campo para verificar
inputsSignIn.forEach(input => {
    input.addEventListener('input', verificarCamposSignIn);
});

// 5. Agrega el evento de clic al botón para redirigir
if (botonEntrarSignIn) {
    botonEntrarSignIn.addEventListener('click', function() {
        // Solo redirige si el botón no está deshabilitado (es decir, los campos están llenos)
        if (!botonEntrarSignIn.disabled) {
            window.location.href = 'menu-empleador.html';//probicional hasta base de datos
        }
    });
}

// =================================================================
// CÓDIGO PARA REGISTRARSE (Validación de campos y redirección)
// =================================================================

const inputsSignUp = document.querySelectorAll('.box-sign-up input');
const botonEntrarSignUp = document.getElementById('unclock-sign-up');

// Función para verificar si todos los campos de Registrarse están llenos
function verificarCamposSignUp() {
    let todosLlenos = true;
    inputsSignUp.forEach(input => {
        if (input.value.trim() === '') {
            todosLlenos = false;
        }
    });
    // 3. Habilita o deshabilita el botón
    botonEntrarSignUp.disabled = !todosLlenos;
}

// 4. Añade un escuchador de eventos 'input' a cada campo para verificar
inputsSignUp.forEach(input => {
    input.addEventListener('input', verificarCamposSignUp);
});

// 5. Agrega el evento de clic al botón para redirigir
if (botonEntrarSignUp) {
    // ESTA ES LA CORRECCIÓN CLAVE: Referencia a botonEntrarSignUp en lugar de SignIn.
    botonEntrarSignUp.addEventListener('click', function() { 
        // Solo redirige si el botón no está deshabilitado
        if (!botonEntrarSignUp.disabled) {
            window.location.href = 'rol.html'; 
        }
    });
}