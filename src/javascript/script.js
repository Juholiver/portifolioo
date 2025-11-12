document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.hero, .section, footer');

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

    const frontEndSpan = document.getElementById('front-end');
    const backEndSpan = document.getElementById('back-end');
    const fullStackSpan = document.getElementById('full-stack');

    const spans = [frontEndSpan, backEndSpan, fullStackSpan];
    let currentSpanIndex = 0;

    function switchSpans() {
        const currentSpan = spans[currentSpanIndex];
        const nextSpan = spans[(currentSpanIndex + 1) % spans.length];

        currentSpan.style.display = 'none';
        nextSpan.style.display = 'inline';

        currentSpan.classList.remove('text-animation');
        nextSpan.classList.add('text-animation');

        currentSpanIndex = (currentSpanIndex + 1) % spans.length;
    }

    setInterval(switchSpans, 5000);
    spans[0].classList.add('text-animation');
});



function enviarMensagem(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;

    console.log(nome);
    console.log(mensagem);

    const telefone = "5515991915880";

    const texto = `Olá, meu nome é ${nome}, ${mensagem}`;
    const mensagemFormatada = encodeURIComponent(texto);

    const url = `https://api.whatsapp.com/send?phone=${telefone}&text=${mensagemFormatada}`;
    window.open(url, '_blank');
}