const transparentLayer = (function () {
    const module = {};

    module._style = () => {
        const $head = document.querySelector('head');
        const $style = document.createElement('style');

        $style.textContent = `
            .transparent-layer {
                position: absolute;
                height: 100vh;
                width: 100vw;
                top: 0;
                background-color: rgba(58, 64, 66, 0.5);
            }

            .transparent-layer.-inactive {
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
            <div class="transparent-layer"></div>
        `;
    };

    return {
        render: module.render
    }

})();