document.addEventListener('DOMContentLoaded', function() {
    rainPapers();
});

function rainPapers() {
    for (let i = 0; i < 500; i++) {
        let paper = document.createElement("div");
        paper.classList.add("paper");

        paper.style.backgroundColor = getRandomColor();
        paper.style.width = `${Math.random() * 7 + 2}px`;
        paper.style.height = `${Math.random() * 7 + 2}px`;

        paper.style.left = `${Math.random() * 100}vw`;
        paper.style.top = `-20px`;
        paper.style.animationDelay = `${Math.random() * 2}s`;
        paper.style.animationDuration = `${Math.random() * 3 + 2}s`;

        // Ajout du mouvement latéral aléatoire
        paper.style.transform = `translateX(${Math.random() * 100 - 50}vw)`;

        document.body.append(paper);

        setTimeout(() => {
            paper.remove();
        }, 4000);
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function startWhatsApp() {
    const confirmMessage = "Ouvrez WhatsApp pour passer votre commande en toute sécurité.";
    if (confirm(confirmMessage)) {
        window.open("https://wa.me/18099929258?text=Bonjour,%0AVia%20le%20site%20WilBeauty,%20je%20souhaite%20passer%20une%20commande.", "_blank");
    }
}

function startCall() {
    const confirmMessage = "Appelez pour passer votre commande en toute sécurité.";
    if (confirm(confirmMessage)) {
        window.open("tel:+18099929258", "_self");
    }
}
