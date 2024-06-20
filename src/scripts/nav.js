document.addEventListener("DOMContentLoaded", function() {
    let activeItemIndicator = CSSRulePlugin.getRule(".menu-item p#active::after");
    const toggleButton = document.querySelector(".burger");
    const overlay = document.querySelector(".overlay");
    let isOpen = false;

    // Inicialmente, esconda os itens do menu
    gsap.set(".menu-item p", { y: 225 });
    gsap.set(overlay, { display: "none" });

    // Animation Timeline
    const timeline = gsap.timeline({ paused: true });

    // Adicione a animação do overlay à linha do tempo
    timeline
        .to(overlay, {
            display: "block",
            duration: 0
        })
        .to(".menu-item p", {
            y: 0,
            duration: 0.3,
            stagger: 0.05,
            ease: "power2.inOut"
        });

    // Adicione a animação para o indicador do item ativo
    gsap.to(activeItemIndicator, {
        duration: 1.5,
        delay: 0.5,
        cssRule: { scaleY: 1 }
    });

    // Adicione um evento de clique ao botão de alternância
    toggleButton.addEventListener("click", function() {
        isOpen = !isOpen;

        if (isOpen) {
            timeline.play();
        } else {
            timeline.reverse();
        }
    });
});