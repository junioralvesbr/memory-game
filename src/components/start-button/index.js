const gameButton = (function () {
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .game-button {
                width: 100px;
                height: 100px;
                border-radius: 50%;
                position: absolute;
                bottom: 20px;
                left: 50%;
                transform: translateX(-50%);
                background-color: #2ed573;
                border: 3px solid #fffecc;
                color: #fffecc;
                font-weight: bold;
                text-transform: uppercase;
                font-size: 1.05em;
                box-shadow: 0px 4px 8px #3a4042;
                cursor: pointer;
                opacity: 1;
            }

            .game-button.-inactive {
                opacity: 0;
                pointer-events: none;
                transition: opacity 1s 1s linear;
            }
        `

        $head.insertBefore($style, null);
    }

    module.render = () => {
        module._style();

        return `
            <button class="game-button" onclick="gameButton.handleClick()">Start</button>
        `
    }

    module.handleClick = () => {
        const $startButton = document.querySelector('.game-button');
        const $frontLayer = document.querySelector('.front-layer');
        $startButton.classList.add('-inactive');
        $frontLayer.classList.add('-inactive');
    }

    return {
        render: module.render,
        handleClick: module.handleClick
    }

})();