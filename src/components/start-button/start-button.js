const startButton = (function () {
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .start-button {
                position: absolute;
                bottom: 75px;
                background-color: #126b12;
                border: 1px solid #126b12;
                border-radius: 1000px;
                box-shadow: 0 1px #000;
                font-family: "Open Sans", sans-serif;
                font-size: 24px;
                font-weight: bold;
                color: #FFF;
                padding: 8px 20px;
                cursor: pointer;
            }
        `

        $head.insertBefore($style, null);
    }

    module.create = () => {
        module._style();

        return `
            <button class="start-button">Iniciar</button>
        `
    }

    return {
        create: module.create,
    }

})();