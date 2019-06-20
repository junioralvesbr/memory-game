const $root = document.querySelector('#root');                  // Pega a div principal do index
const $memoryCardFront = document.createElement('article');

const $iconC = `
    <img
        src='img/icon-c.png'
        alt='Icone da linguagem C++'
        class='icon'
    />;`

createMemoryCard();
createMemoryCard();

$memoryCardFront.classList.add('memory-card');
$memoryCardFront.classList.add('-front');
$root.insertBefore($memoryCardFront,null);

$memoryCardFront.insertAdjacentHTML('afterbegin', $iconC);