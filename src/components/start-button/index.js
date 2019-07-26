const gameButton = (function () {
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .game-button.-active {
                display: block;
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
            }

            .game-button {
                display: none;
            }
        `

        $head.insertBefore($style, null);
    }

    module.render = () => {
        module._style();

        return `
            <button class="game-button -active" onclick="gameButton.handleClick()">Start</button>
        `
    }

    module.handleClick = () => {
        const $startButton = document.querySelector('.game-button.-active');
        const $frontLayer = document.querySelector('.front-layer.-active');
        $startButton.classList.remove('-active');
        $frontLayer.classList.remove('-active');
    }

    return {
        render: module.render,
        handleClick: module.handleClick
    }

})();