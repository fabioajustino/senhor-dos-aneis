const accordions = document.querySelectorAll('.lord__filme__item');

accordions.forEach(item => {
    const imgButton = item.querySelector('.lord__filme__img');
    const content = item.querySelector('.lord__filme__descricao');
    const closeButton = item.querySelector('#botaoFechar');

    imgButton.addEventListener('click', (e) => {
        e.stopPropagation();
        content.classList.add('active');

        // Desativa os outros
        accordions.forEach(other => {
            if (other !== item) {
                other.classList.add('desativado');
            }
        });
    });

    closeButton.addEventListener('click', (e) => {
        e.stopPropagation();
        content.classList.remove('active');

        // Reativa todos
        accordions.forEach(other => {
            other.classList.remove('desativado');
        });
    });
});

