const layerEnd = (function () {
    
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .layer-end {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                display: none;
            }

            .layer-end.-active {
                display: block;
            }
        `;

        $head.insertBefore($style, null);
    };

    module.render = () => {
        module._style();

        return `
            <img class="layer-end" src="img/tenor.jpg" alt=Troféu>
        `;
    };

    return {
        render: module.render
    };

})();