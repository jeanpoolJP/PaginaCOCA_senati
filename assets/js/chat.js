
document.addEventListener('DOMContentLoaded', function() {
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    
    // Respuestas predefinidas del chatbot
    const botResponses = [
        "¡Claro! Puedo ayudarte con eso. Nuestros planes comienzan desde $29.99 al mes.",
        "Nuestros chatbots utilizan tecnología de IA avanzada para proporcionar respuestas contextualmente relevantes.",
        "La implementación generalmente toma entre 2 y 5 días, dependiendo de la complejidad de tus necesidades.",
        "¡Por supuesto! Ofrecemos un período de prueba gratuito de 14 días para que pruebes todas las funcionalidades.",
        "Puedo conectarte con un representante de ventas si necesitas información más específica sobre tu caso.",
        "Nuestro chatbot puede ser integrado con WhatsApp, Facebook Messenger, Instagram y tu sitio web."
    ];
    
    // Función para añadir mensajes al chat
    function addMessage(text, isUser) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.classList.add(isUser ? 'user-message' : 'bot-message');
        messageDiv.textContent = text;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Función para mostrar indicador de escritura
    function showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.classList.add('message', 'bot-message', 'typing-indicator');
        typingDiv.id = 'typing-indicator';
        
        for (let i = 0; i < 3; i++) {
            const dot = document.createElement('div');
            dot.classList.add('typing-dot');
            typingDiv.appendChild(dot);
        }
        
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Función para quitar indicador de escritura
    function removeTypingIndicator() {
        const indicator = document.getElementById('typing-indicator');
        if (indicator) {
            indicator.remove();
        }
    }
    
    // Función para simular respuesta del bot
    function botReply() {
        showTypingIndicator();
        
        setTimeout(() => {
            removeTypingIndicator();
            const randomIndex = Math.floor(Math.random() * botResponses.length);
            addMessage(botResponses[randomIndex], false);
        }, 1500);
    }
    
    // Evento para enviar mensaje
    function sendMessage() {
        const message = userInput.value.trim();
        if (message) {
            addMessage(message, true);
            userInput.value = '';
            botReply();
        }
    }
    
    sendButton.addEventListener('click', sendMessage);
    
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Mensajes predefinidos para demostración
    const demoMessages = [
        { text: "Hola, me gustaría saber más sobre sus precios", isUser: true },
        { text: "¡Claro! Puedo ayudarte con eso. Nuestros planes comienzan desde $29.99 al mes con funcionalidades básicas. ¿Te gustaría más detalles sobre lo que incluye cada plan?", isUser: false },
    ];
    
    // Mostrar mensajes de demostración después de cargar la página
    setTimeout(() => {
        addMessage(demoMessages[0].text, demoMessages[0].isUser);
        
        setTimeout(() => {
            showTypingIndicator();
            
            setTimeout(() => {
                removeTypingIndicator();
                addMessage(demoMessages[1].text, demoMessages[1].isUser);
            }, 1500);
        }, 1000);
    }, 1000);
});
