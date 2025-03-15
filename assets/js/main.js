const langButtons = document.querySelectorAll("[data-language]");
const textsToChange = document.querySelectorAll("[data-section]");

// Almacenar el texto original antes de traducirlo
textsToChange.forEach(el => {
    el.setAttribute("data-original", el.innerHTML);
});

// Función para cambiar el idioma
function changeLanguage(language) {
    if (language === "en") {
        // Restaurar el texto original
        textsToChange.forEach(el => {
            el.innerHTML = el.getAttribute("data-original");
        });
    } else {
        // Cargar la traducción desde el archivo JSON
        fetch(`assets/languages/${language}.json`)
            .then(res => res.json())
            .then(data => {
                textsToChange.forEach(el => {
                    const section = el.dataset.section;
                    const value = el.dataset.value;

                    if (data[section] && data[section][value]) {
                        el.innerHTML = data[section][value];
                    }
                });
            })
            .catch(error => console.error("Error cargando el archivo de idioma:", error));
    }

    // Guardar el idioma seleccionado en localStorage
    localStorage.setItem("selectedLanguage", language);
}

// Asignar evento de clic a los botones
langButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const language = button.dataset.language;
        changeLanguage(language);
    });
});

// Comprobar si hay un idioma guardado en localStorage y aplicarlo
document.addEventListener("DOMContentLoaded", () => {
    const savedLanguage = localStorage.getItem("selectedLanguage") || "en"; // Inglés por defecto
    changeLanguage(savedLanguage);
});
