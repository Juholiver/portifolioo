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
});

const nome = document.getElementById('nome').value;
const mensagem = document.getElementById('mensagem').value;

const telefone = "5515998985880";

const texto = `Olá, meu nome é ${nome}, ${mensagem}`;
const mensagemFormatada = encodeURIComponent(texto);

function enviarMensagem() {
    const url = `https://api.whatsapp.com/send?phone=${telefone}&text=${mensagemFormatada}`;
    window.open(url, '_blank');
}