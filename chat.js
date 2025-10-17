document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('chat-form');
    const input = document.getElementById('message-input');
    const display = document.getElementById('chat-display');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita que la página se recargue

        const messageText = input.value.trim();

        if (messageText !== '') {
            // Crea un nuevo elemento para el mensaje
            const messageElement = document.createElement('div');
            messageElement.classList.add('message', 'sent');
            messageElement.textContent = messageText;

            // Agrega el mensaje al contenedor
            messageElement.classList.add("mensaje-personalizado");
            display.appendChild(messageElement);
            // Limpia el campo de entrada
            input.value = '';

            // Desplaza la ventana del chat al final para ver el nuevo mensaje
            display.scrollTop = display.scrollHeight;
        }
    });
});