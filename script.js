document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector(".caixa-mensagem");
    if (card) requestAnimationFrame(() => card.classList.add("show"));
});