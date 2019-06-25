const $root = document.querySelector('#root');

const $cardsWrapper = createCardsWrapper();
// const $memoryCard = createMemoryCard;
// const $memoryCardFront = createMemoryCardFront();


$cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard());
$cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard());
$cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard());
$cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard());
$cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard());
$cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard());
$cardsWrapper.insertAdjacentHTML('beforeend', createMemoryCardFront());
$cardsWrapper.insertAdjacentHTML('beforeend', createMemoryCardFront());
// $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
// $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
// $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
// $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
// $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
// $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);
// $cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCardFront());

$root.insertAdjacentElement("beforeend", $cardsWrapper);