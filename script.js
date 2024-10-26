// Abrir e fechar o menu ao clicar no ícone
const menuIcon = document.getElementById("menu-icon");
const menuOverlay = document.getElementById("menu-overlay");

menuIcon.addEventListener("click", () => {
    if (menuOverlay.style.display === "block") {
        menuOverlay.style.display = "none";
    } else {
        menuOverlay.style.display = "block";
    }
});

// Fechar o menu ao clicar fora dele
menuOverlay.addEventListener("click", (event) => {
    if (event.target === menuOverlay) {
        menuOverlay.style.display = "none";
    }
});

// Fechar o menu ao clicar em um item de navegação
const menuItems = document.querySelectorAll(".menu-content h3 a");
menuItems.forEach(item => {
    item.addEventListener("click", () => {
        menuOverlay.style.display = "none";
    });
});
