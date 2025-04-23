// SCRIPT ESCONDER E APARECER MENU de Contatos (Institucional / Central de ajuda / Atendimento)
function showAndHideList() {
    const svgsArrow = document.querySelectorAll('.arrow_menu-contacts');

    svgsArrow.forEach(svg => {
        svg.addEventListener('click', (e) => {
            if (svg.parentElement.parentElement.offsetHeight != 70) {
                svg.style.transform = 'rotate(0deg)';
                svg.parentElement.parentElement.style.maxHeight = '70px';
            } else {
                svg.style.transform = 'rotate(180deg)';
                svg.parentElement.parentElement.style.maxHeight = '400px';
            }
        });

    });

}
showAndHideList();

// SCRIPT MENU MOBILE
function menuMobile() {
    document.addEventListener('DOMContentLoaded', function () {
        // Evita que o menu principal feche ao clicar em seus itens
        document.querySelectorAll('.main-dropdown').forEach(function (element) {
            element.addEventListener('click', function (e) {
                e.stopPropagation();
            });
        });

        // Inicializa todos os dropdowns com a opção de não fechar ao clicar dentro
        var dropdownElementList = document.querySelectorAll('.dropdown-toggle');
        dropdownElementList.forEach(function (dropdownToggleEl) {
            var dropdown = new bootstrap.Dropdown(dropdownToggleEl, {
                autoClose: false
            });

            // Opcional: Adiciona um evento para abrir os dropdowns no hover
            /*
            dropdownToggleEl.parentElement.addEventListener('mouseenter', function() {
              dropdown.show();
            });
            */
        });

        // Evita que os submenus fechem ao clicar em seus itens
        document.querySelectorAll('.dropend .dropdown-menu').forEach(function (element) {
            element.addEventListener('click', function (e) {
                e.stopPropagation();
            });
        });
    });
}
menuMobile();

//  SCRIPT do CARRSSEL
const imageSrc = "../assets/camiseta_vitrine.png";
function firstCarrossel() {
    const carousel = document.getElementById('carousel');
    const leftArrow = document.querySelector('.arrow-left');
    const rightArrow = document.querySelector('.arrow-right');
    const dotsContainer = document.getElementById('dots');

    const totalItems = 18;

    for (let i = 1; i <= totalItems; i++) {
        const card = document.createElement('div');
        card.className = 'product-card';

        // Badge
        const badge = document.createElement('div');
        badge.className = 'badge';
        badge.textContent = 'NOVO';
        card.appendChild(badge);

        // Imagem
        const img = document.createElement('img');
        img.src = imageSrc;
        card.appendChild(img);

        // Título
        const title = document.createElement('h3');
        title.textContent = 'Lorem ipsum dolor sit amet consectetuer adipiscing elit';
        card.appendChild(title);

        // Wrapper de preços
        const wrapperPricesCard = document.createElement('div');
        wrapperPricesCard.className = 'wrapper-prices-card';

        // Preço antigo
        const priceOld = document.createElement('div');
        priceOld.className = 'price-old';
        priceOld.textContent = 'R$ 100,00';
        wrapperPricesCard.appendChild(priceOld);

        // Wrapper interno de preços
        const wrapperPrices = document.createElement('div');
        wrapperPrices.className = 'wrapper-prices';

        // Preço novo
        const priceNew = document.createElement('span');
        priceNew.className = 'price-new';
        priceNew.textContent = 'R$ 79,90';
        wrapperPrices.appendChild(priceNew);

        // Desconto
        const discount = document.createElement('span');
        discount.className = 'discount';
        discount.textContent = '10% OFF';
        wrapperPrices.appendChild(discount);

        wrapperPricesCard.appendChild(wrapperPrices);

        // Crédito
        const credit = document.createElement('p');
        credit.className = 'credit';
        credit.innerHTML = 'Ou em até <strong>10x de R$ 7,90</strong>'; // Aqui usamos um pouco de HTML
        wrapperPricesCard.appendChild(credit);

        card.appendChild(wrapperPricesCard);

        // Botão
        const button = document.createElement('button');
        button.className = 'buy-button';
        button.textContent = 'Comprar';
        card.appendChild(button);

        carousel.appendChild(card);
    }

    const cardWidth = 288;
    let currentPage = 0;
    const visibleCards = Math.floor(carousel.offsetWidth / cardWidth);
    const totalPages = Math.ceil(totalItems / visibleCards);

    for (let i = 0; i < totalPages; i++) {
        const dot = document.createElement('span');
        dot.className = 'dot';
        if (i === 0) dot.classList.add('active');
        dotsContainer.appendChild(dot);
    }

    const dots = document.querySelectorAll('.dot');

    function updateDots() {
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentPage);
        });
    }

    function scrollToPage(page) {
        const scrollX = page * carousel.offsetWidth;
        carousel.scrollTo({ left: scrollX, behavior: 'smooth' });
    }

    rightArrow.addEventListener('click', () => {
        currentPage = (currentPage + 1) % totalPages;
        scrollToPage(currentPage);
        updateDots();
    });

    leftArrow.addEventListener('click', () => {
        currentPage = (currentPage - 1 + totalPages) % totalPages;
        scrollToPage(currentPage);
        updateDots();
    });

    carousel.addEventListener('scroll', () => {
        const page = Math.round(carousel.scrollLeft / carousel.offsetWidth);
        if (page !== currentPage) {
            currentPage = page;
            updateDots();
        }
    });
}
firstCarrossel();

//! SEGUNDO CARROSSEL (IMPROVISADO - FUTURAMENTE REFATORAR - Pegar os carroseis com o querySelectorAll ou Utilizar a mesma função para ambos.)
function secondCarrossel() {
    const carousel2 = document.getElementById('carrossel2');
    const dotsContainer2 = document.getElementById('dots2');

    const totalItems2 = 18;

    for (let i = 1; i <= totalItems2; i++) {
        const card = document.createElement('div');
        card.className = 'product-card';

        // Badge
        const badge = document.createElement('div');
        badge.className = 'badge';
        badge.textContent = 'NOVO';
        card.appendChild(badge);

        // Imagem
        const img = document.createElement('img');
        img.src = imageSrc;
        card.appendChild(img);

        // Título
        const title = document.createElement('h3');
        title.textContent = 'Lorem ipsum dolor sit amet consectetuer adipiscing elit';
        card.appendChild(title);

        // Wrapper de preços
        const wrapperPricesCard = document.createElement('div');
        wrapperPricesCard.className = 'wrapper-prices-card';

        // Preço antigo
        const priceOld = document.createElement('div');
        priceOld.className = 'price-old';
        priceOld.textContent = 'R$ 100,00';
        wrapperPricesCard.appendChild(priceOld);

        // Wrapper interno de preços
        const wrapperPrices = document.createElement('div');
        wrapperPrices.className = 'wrapper-prices';

        // Preço novo
        const priceNew = document.createElement('span');
        priceNew.className = 'price-new';
        priceNew.textContent = 'R$ 79,90';
        wrapperPrices.appendChild(priceNew);

        // Desconto
        const discount = document.createElement('span');
        discount.className = 'discount';
        discount.textContent = '10% OFF';
        wrapperPrices.appendChild(discount);

        wrapperPricesCard.appendChild(wrapperPrices);

        // Crédito
        const credit = document.createElement('p');
        credit.className = 'credit';
        credit.innerHTML = 'Ou em até <strong>10x de R$ 7,90</strong>'; // Aqui usamos um pouco de HTML
        wrapperPricesCard.appendChild(credit);

        card.appendChild(wrapperPricesCard);

        // Botão
        const button = document.createElement('button');
        button.className = 'buy-button';
        button.textContent = 'Comprar';
        card.appendChild(button);

        carousel2.appendChild(card);
    }

    const cardWidth2 = 288;
    let currentPage2 = 0;
    const visibleCards2 = Math.floor(carousel2.offsetWidth / cardWidth2);
    const totalPages2 = Math.ceil(totalItems2 / visibleCards2);

    for (let i = 0; i < totalPages2; i++) {
        const dot = document.createElement('span');
        dot.className = 'dot';
        if (i === 0) dot.classList.add('active');
        dotsContainer2.appendChild(dot);
    }

    const dots2 = dotsContainer2.querySelectorAll('.dot');

    function updateDots() {
        dots2.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentPage2);
        });
    }

    function scrollToPage(page) {
        const scrollX = page * carousel2.offsetWidth;
        carousel2.scrollTo({ left: scrollX, behavior: 'smooth' });
    }

    const leftArrow2 = document.querySelector('.arrow-left2');
    const rightArrow2 = document.querySelector('.arrow-right2');

    rightArrow2.addEventListener('click', () => {
        currentPage2 = (currentPage2 + 1) % totalPages2;
        scrollToPage(currentPage2);
        updateDots();
    });

    leftArrow2.addEventListener('click', () => {
        currentPage2 = (currentPage2 - 1 + totalPages2) % totalPages2;
        scrollToPage(currentPage2);
        updateDots();
    });

    carousel2.addEventListener('scroll', () => {
        const page = Math.round(carousel2.scrollLeft / carousel2.offsetWidth);
        if (page !== currentPage2) {
            currentPage2 = page;
            updateDots();
        }
    });

}
if (window.innerWidth > 1024) {
    secondCarrossel();
} else {
    let resizeTimeout;

    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            if (window.innerWidth > 1024) {
                secondCarrossel();
            }
        }, 200); // espera 200ms após o último resize
    });
}

// INPUTS e SUBMIT
let universalValueInput = '';

const desktopInput = document.querySelector("input");
const glassInput = document.querySelector('.container-glass svg');
const btnRemoveResultSearch = document.querySelector('.btn-input-searched');

desktopInput.addEventListener("keydown", e => {
    if (e.key == 'Enter') {
        handleCaptureValueOfInput(e, desktopInput);
        createAResultSearch(universalValueInput);
    }
});

function handleCaptureValueOfInput(event, input) {
    universalValueInput = input.value;
    input.value = '';
}

function createAResultSearch(value, isAMobileMenu = false) {
    const resultOfSearch = document.querySelector(isAMobileMenu ? '.search-result-mobile' : '.search-result');
    resultOfSearch.style.visibility = 'visible';
    resultOfSearch.style.opacity = '1';

    const paragraphOfResultOfSearch = document.querySelector(isAMobileMenu ? '.search-result-mobile p' : '.search-result p');
    paragraphOfResultOfSearch.innerText = `Você buscou por: ${value}`;
}

btnRemoveResultSearch.addEventListener('click', (e) => {
    const father = e.currentTarget.parentElement;
    father.style.visibility = 'invisible';
    father.style.opacity = '0';
    universalValueInput = '';
});

glassInput.addEventListener('click', (e) => {
    const input = document.getElementById('inputDesktop');
    universalValueInput = input.value;
    input.value = '';
    createAResultSearch(universalValueInput);
});

// MOBILE INPUT
const inputMobile = document.querySelector('#inputMobile');
const glassMobile = document.querySelector('#glassMobile');

inputMobile.addEventListener("keydown", e => {
    if (e.key == 'Enter') {
        const valueMobileInput = e.currentTarget.value;
        universalValueInput = valueMobileInput;
        createAResultSearch(universalValueInput, true);
        inputMobile.value = '';
    }
});

glassMobile.addEventListener("click", e => {
    const valueMobileInput = inputMobile.value;
    universalValueInput = valueMobileInput;
    createAResultSearch(universalValueInput, true);
    inputMobile.value = '';
});