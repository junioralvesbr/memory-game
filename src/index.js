const $root = document.querySelector('#root');                  // Pega a div principal do index
const $memoryCard = document.createElement('article');          // Cria o elemento article
const $icon = `
    <img
        src='img/icon-collabcode.png'
        alt='Gueio mascote da CollabCode'
        class='icon'
    />`;                                                // Cria a variavel com o icone


$memoryCard.classList.add('memory-card');               // inseriu na tag article a classe memory-card para pegar as configs do css.


$root.insertBefore($memoryCard, null);                  // Inserir o elemento article dentro da <div> antes de outro elemento. Neste caso null (nenhum)
$memoryCard.insertAdjacentHTML('afterbegin', $icon);    // Insere dentro do <article> o icone collabcode