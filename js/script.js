
    const burger = document.querySelector('.burger');
    const closeBtn = document.querySelector('.close-menu-btn');
    const menu = document.querySelector('.mobile-menu');
    const body = document.body;

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('lock');
    });
    closeBtn.addEventListener('click', () => {
        burger.classList.remove('active');
        menu.classList.remove('active');
        body.classList.remove('lock');
    });

