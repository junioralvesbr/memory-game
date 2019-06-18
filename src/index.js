const $root = document.querySelector('#root');                  // Pega a div principal do index
const $memoryCard = document.createElement('article');          // Cria o elemento article
const $memoryCardFront = document.createElement('article');

const $iconCollab = `
    <img
        src='img/icon-collabcode.png'
        alt='Gueio mascote da CollabCode'
        class='icon'
    />`;                                                // Cria a variavel com o icone

const $iconC = `
    <img
        src='img/icon-c.png'
        alt='Icone da linguagem C++'
        class='icon'
    />;`



$memoryCard.classList.add('memory-card');               // inseriu na tag article a classe memory-card para pegar as configs do css.
$root.insertBefore($memoryCard, null);                  // Inserir o elemento article dentro da <div> antes de outro elemento. Neste caso null (nenhum)

$memoryCardFront.classList.add('memory-card');
$memoryCardFront.classList.add('-front');
$root.insertBefore($memoryCardFront,null);

$memoryCard.insertAdjacentHTML('afterbegin', $iconCollab);    // Insere dentro do <article> o icone collabcode
$memoryCardFront.insertAdjacentHTML('afterbegin', $iconC);