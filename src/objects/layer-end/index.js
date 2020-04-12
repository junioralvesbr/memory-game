const layerEnd = (function () {
    
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .layer-end {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                background-color: rgba(0,0,0,0.2);
                display: none;
            }

            .layer-end.-active {
                display: block;
            }
            
            .layer-end .img {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }

        `;

        $head.insertBefore($style, null);
    };

    
    module.render = () => {
        const $backButton = backButton.render("Restart", "game");
        module._style();

        return `
            <div class="layer-end">
                <img class="img" src="img/tenor.jpg" alt=Troféu>
                ${$backButton}
            </div>
        `;
    };

    return {
        render: module.render
    };

})();