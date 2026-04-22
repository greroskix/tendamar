document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector(".caixa-mensagem");
    const lines = document.querySelectorAll(".reveal-line");

    if (!card) return;

    requestAnimationFrame(() => {
        card.classList.add("show");
        lines.forEach((line, i) => {
            setTimeout(() => line.classList.add("visible"), 500 + i * 350);
        });
    });
});