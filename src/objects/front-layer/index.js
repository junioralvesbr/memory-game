const frontLayer = (function () {
    const module = {};

    module._style = () => {
        const $head = document.querySelector('head');
        const $style = document.createElement('style');

        $style.textContent = `
            .front-layer.-active {
                display: block;
                height: 100%;
                width: 100%;
                position: absolute;
                top: 0;
                background-color: #3a4042;
                opacity: 0.8;
            }

            .front-layer {
                display: none;
            }

        `;

        $head.insertBefore($style, null);
    }


    module.render = () => {
        module._style();
        return `
            <div class="front-layer -active"></div>
        `
    }

    return {
        render: module.render
    }

})();