// SCRIPT ESCONDER E APARECER MENU de Contatos (Institucional / Central de ajuda / Atendimento)
const svgsArrow = document.querySelectorAll('.arrow_menu-contacts');

svgsArrow.forEach(svg => {
    svg.addEventListener('click', (e) => {
        if (svg.parentElement.parentElement.offsetHeight != 70) {
            svg.parentElement.parentElement.style.maxHeight = '70px';
        } else {
            svg.parentElement.parentElement.style.maxHeight = '400px';
        }
    });

});


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
        card.innerHTML = `
    <div class="badge">NOVO</div>
    <img src="${imageSrc}" />
    <h3><h3> Lorem ipsum dolor sit amet consectetuer adipiscing elit </h3> </h3>
   <div class="wrapper-prices-card">
     <div class="price-old">R$ 100,00</div>
    <div class="wrapper-prices">
      <span class="price-new">R$ 79,90</span>
      <span class="discount">10% OFF</span>
    </div>
    <p class="credit">Ou em até <strong>10x de R$ 7,90</strong></p>
   </div>
    <button class="buy-button">Comprar</button>
  `;
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
// secondCarrossel();