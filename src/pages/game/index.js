(function () {
    const $root = document.querySelector('#root');

    const $pointBar = pointBar.create();

    const $cardsWrapper = createCardsWrapper();

    const createMemoryCard = memoryCard.create();

    const $memoryCardC = createMemoryCard({
        src: "img/icon-c.png",
        alt: "Livro de programação C++"
    });
    const $memoryCardJS = createMemoryCard({
        src: "img/icon-js.png",
        alt: "Livro de programação JavaScript"
    });
    const $memoryCardPHP = createMemoryCard({
        src: "img/icon-php.png",
        alt: "livro de programação PHP"
    });
    const $memoryCardJava = createMemoryCard({
        src: "img/icon-java.png",
        alt: "livro de programação JAVA"
    });

    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPHP);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPHP);

    $root.insertAdjacentElement("beforeend", $cardsWrapper);
    $root.insertAdjacentHTML("afterbegin", $pointBar);

})();
