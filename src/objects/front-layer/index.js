const frontLayer = (function () {
    const module = {};

    module._style = () => {
        const $head = document.querySelector('head');
        const $style = document.createElement('style');

        $style.textContent = `
            .front-layer {
                height: 100%;
                width: 100%;
                position: absolute;
                top: 0;
                background-color: #3a4042;
                opacity: 0.8;
            }

            .front-layer.-inactive {
                opacity: 0;
                pointer-events: none;
                transition: opacity 1.5s linear;
            }

        `;

        $head.insertBefore($style, null);
    }


    module.render = () => {
        module._style();
        return `
            <div class="front-layer"></div>
        `
    }

    return {
        render: module.render
    }

})();