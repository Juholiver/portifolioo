document.addEventListener('DOMContentLoaded', () => {
    // ==========================
    // Fade-in das seções e cards
    // ==========================
    const animatedElements = document.querySelectorAll('.hero, .section, footer, .project-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-element');
                entry.target.classList.remove('hidden');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(element => {
        element.classList.add('hidden');
        observer.observe(element);
    });

    // ==========================
    // Alternância de spans na hero
    // ==========================
    const frontEndSpan = document.getElementById('front-end');
    const backEndSpan = document.getElementById('back-end');
    const fullStackSpan = document.getElementById('full-stack');

    const spans = [frontEndSpan, backEndSpan, fullStackSpan];
    let currentSpanIndex = 0;

    function switchSpans() {
        const currentSpan = spans[currentSpanIndex];
        const nextSpan = spans[(currentSpanIndex + 1) % spans.length];

        // Fade out current
        currentSpan.style.transition = "opacity 0.5s";
        currentSpan.style.opacity = 0;

        setTimeout(() => {
            currentSpan.style.display = 'none';

            // Fade in next
            nextSpan.style.display = 'inline';
            nextSpan.style.opacity = 0;
            nextSpan.style.transition = "opacity 0.5s";
            nextSpan.style.opacity = 1;

            nextSpan.classList.add('text-animation');

        }, 500);

        currentSpan.classList.remove('text-animation');

        currentSpanIndex = (currentSpanIndex + 1) % spans.length;
    }

    setInterval(switchSpans, 5000);
    spans[0].classList.add('text-animation');

    // ==========================
    // Formulário de contato WhatsApp
    // ==========================
    window.enviarMensagem = function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        if(nome === "" || mensagem === ""){
            alert("Por favor, preencha todos os campos!");
            return;
        }

        const telefone = "5515991915880";
        const texto = `Olá, meu nome é ${nome}, ${mensagem}`;
        const mensagemFormatada = encodeURIComponent(texto);

        const url = `https://api.whatsapp.com/send?phone=${telefone}&text=${mensagemFormatada}`;
        window.open(url, '_blank');
    };
});